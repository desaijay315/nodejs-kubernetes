import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

import {seoTags} from '../../action/helpers';


const BaseLayout = (props) => {
    const { children, headerNav, footerNav, locationData, seo_arr, title } = props;

    const seoData = seo_arr && seo_arr ? seoTags(seo_arr): "";

    return(
        <>
        <Head>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
            <title>{title ? title: ""}</title>
            <meta name="description" content={seoData.canonical_description ? seoData.canonical_description: ""}/>
            <meta name="keywords" content={seoData.canonical_seo_keywords ? seoData.canonical_seo_keywords: ""} />
            <meta name="robots" content="index,follow"/>
            <meta property="og:title" content={seoData.field_og_title ? seoData.field_og_title: ""}/>
            <meta property="og:description" content={seoData.field_og_description ? seoData.field_og_description: ""}/>
            <meta property="og:image" content={seoData.field_og_image_url ? seoData.field_og_image_url: ""}/>
            <meta property="og:url" content={seoData.field_og_url ? seoData.field_og_url: ""}/>
            <meta property="og:site_name" content="Indigo Consulting"/>
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content={seoData.field_twitter_title ? seoData.field_twitter_title: ""}/>
            <meta name="twitter:description" content={seoData.field_twitter_description ? seoData.field_twitter_description: ""}/>
            <meta name="twitter:domain" content="Indigo Consulting"/>
            <meta name="twitter:image" content={seoData.field_twitter_image_url ? seoData.field_twitter_image_url: ""}/>
            <meta property="twitter:site" content="@indigoConsulting" />
            <meta itemProp="name" content={seoData.field_itemprop_name ? seoData.field_itemprop_name: ""} />
            <meta itemProp="description" content={seoData.field_itemprop_description ? seoData.field_itemprop_description: ""} />
            <meta itemProp="image" content={seoData.field_itemprop_image_url ? seoData.field_itemprop_image_url: ""}/>
            <meta property="fb:app_id" content="XXX"/>
            <meta name="author" content="Indigo Consulting"/>
            <meta name="apple-itunes-app" content="app-id=XXX"/>
            <meta name="google-play-app" content="app-id= XXX"/>
            <meta name="msApplication-ID" content="App"/>
            <meta name="msApplication-PackageFamilyName" content="XXX"/>
            <meta name="msapplication-TileImage" content="XXX"/>
            <meta name="HandheldFriendly" content="true"/>
            <meta httpEquiv="content-language" content="en-in"/>
            <meta name="geo.position" content="19.0705638;72.8556971" />
            <meta name="geo.placename" content="Mumbai" />
            <meta name="geo.region" content="IN-MH" />
            <link rel="alternate" hrefLang="en" href="https://www.indigo.co.in/"/>
            <link rel="canonical" href={seoData.canonical_url ? seoData.canonical_url: ""}/>
            <link rel="alternate" href="android-app:// XXX" />
        </Head>
            <Header headerNav={headerNav} locationData={locationData}/>
            {children}
            <Footer footerNav={footerNav}/>
        </>
    ) 
}



export default BaseLayout;