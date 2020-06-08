const express = require('express')
const next = require('next')
require('dotenv').config()

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

const rp     = require('request-promise');
const helmet = require('helmet');
const path = require('path');

const robotsOptions = {
  root: path.join(__dirname, "./public"),
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8'
  }
}

const siteMapOptions = {
  root: path.join(__dirname, "./public"),
  headers: {
    'Content-Type': 'application/xml'
  }
}


const compression = require('compression');

app.prepare().then(() => {
  const server = express();

  server.use(compression());
  server.use(helmet());

  server.get('/robots.txt', (req, res) => {
    return res.status(200).sendFile('robots.txt', robotsOptions);
  });

  server.get('/sitemap.xml', (req, res) => {
    return res.status(200).sendFile('sitemap.xml', siteMapOptions);
  });

  server.get('*', async (req, res) => {

      if(req.path.indexOf('/sites/default/files') > -1){

      const uri = `https://indigo-cms.indigo-consulting.co.in${req.path}`;
      const filename = uri.replace(/^.*[\\\/]/, '')
      let headerVal = 'image/jpeg';

      if(filename.indexOf('.pdf') !== -1){
        headerVal = 'application/pdf';
      }else if(filename.indexOf('.gif') !== -1){
        headerVal = 'image/gif';
      }else if(filename.indexOf('.png') !== -1){
        headerVal = 'image/png';
      }else if(filename.indexOf('.svg') !== -1){
        headerVal = 'image/svg+xml';
      }

     await rp({
        method: 'GET',
        uri,
        encoding: null,
        headers: {
          "Content-type": headerVal,
        }
          }).then(resObj => {

                 res.setHeader('Content-Type', headerVal);
                 res.setHeader('Content-Disposition', 'inline; filename="'+ filename +'"');

                 res.send(Buffer.from(resObj, 'base64'));

          }).catch(e => {
            next(e);
          });
        }

        req.url = req.url.replace(/\/$/, "");
        if (req.url == "") {
        req.url = "/";
        }
        return handle(req, res);
  })

  server.use(handle).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
