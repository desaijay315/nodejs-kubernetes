const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } = require('next/constants')

  const Uglify = require('uglifyjs-webpack-plugin');
  const withPlugins = require("next-compose-plugins");
  const optimizedImages = require("next-optimized-images");
  
  // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
  module.exports = (phase) => {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isStaging =
      phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
  
    // console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
  
    const env = {
      DRUPAL_CMS_URL: (() => {
        if (isDev) return 'https://indigo-cms.indigo-consulting.co.in'
        if (isProd) {
          return 'https://indigo-cms.indigo-consulting.co.in'
        }
        if (isStaging) return 'http://localhost:11639'
        return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
      RESTURL_SESSIONS: (() => {
        if (isDev) return 'http://localhost:4000/sessions'
        if (isProd) return 'https://www.siliconvalley-codecamp.com/rest/sessions'
        if (isStaging) return 'http://localhost:11639'
        return 'RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
      DRUPAL_CMS_USERNAME: (() => {
        if (isDev) return 'admin'
        if (isProd) return 'admin'
        if (isStaging) return 'admin'
        return 'DRUPAL_CMS_USERNAME:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
      DRUPAL_CMS_PASSWORD: (() => {
        if (isDev) return 'admin'
        if (isProd) return 'admin'
        if (isStaging) return 'admin'
        return 'DRUPAL_CMS_USERNAME:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })(),
      webpack: function (c) {
        c.plugins = c.plugins.filter(
          (plugin) => (plugin.constructor.name !== 'UglifyJsPlugin')
        )
    
        c.plugins.push(
          new Uglify()
      );
      return c;
      }
    }

    withPlugins([
      [
        optimizedImages,
        {
          /* config for next-optimized-images */
        }
      ]
    
      // your other plugins here
    ])
    // next.config.js object
    return {
      env
    }
  }