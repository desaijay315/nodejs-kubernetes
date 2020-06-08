
import App from 'next/app';
import Router from 'next/router';

import '../styles/fontAwesome.css';
import '../styles/vendor/bootstrap/css/bootstrap.min.css';
import '../styles/animate.css';
import '../styles/vendor/aos/aos.css';
import '../styles/vendor/slick/slick.css';
import '../styles/vendor/slick/slick-theme.css';
import '../styles/carousel.css';
import '../styles/style.css';
import '../styles/expertise.css';
import '../styles/style_inner.css';
import '../styles/contact.css';
import '../styles/homepage.css';
import '../styles/expertise_page.css';
import '../styles/responsive.css';
import '../styles/success-stories.css';
import '../styles/expertise_disruptors.css';
import '../styles/aboutus.css'; 

import * as gtag from '../lib/gtag';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));




export default class MyApp extends App {
    
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
    
        return { pageProps }
    }

    render () {
        const { Component, pageProps } = this.props
        return(
            <Component {...pageProps}/>
        )
    }
}

