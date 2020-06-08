import Head from 'next/head';
import { Component } from 'react';

import BaseLayout from '../components/Layout/BaseLayout';

import Banner from '../components/CookiePage/Banner';

import {getHeaderNavigation, getFooterNavigation, locationApi, cookiePolicy} from '../action/drupal-api-handler';
import TermsDetails from '../components/CookiePage/CookieDetails';


class CookiePage extends Component {

    constructor(props){
        super(props);
        const {headerNav, footerNav, locationData, cookiePageData} = props;

        this.state = {
            headerNav: headerNav,
            footerNav: footerNav,
            locationData: locationData,
            cookiePageData: cookiePageData,
            field_banner_component: [],
            seo_arr:{
                "field_paragraph_for_seo_can":[],
                "field_paragraph_for_seo_itemprop":[],
                "field_paragraph_for_seo_opengrap":[],
                "field_paragraph_for_seo_twitter":[]
              },
            field_paragraph_for_seo_can:[],
            field_paragraph_for_seo_itemprop:[],
            field_paragraph_for_seo_opengrap:[],
            field_paragraph_for_seo_twitter:[]
        }
    }

    componentDidMount(){
        if(this.state.cookiePageData){
          let cntData = this.state.cookiePageData.content.field_component_type && this.state.cookiePageData.content.field_component_type.length > 0 && this.state.cookiePageData.content.field_component_type.map((cData,index) => {
            return (
               cData
            )
         });
         for(const key in cntData){
            for(const keyd in cntData[key]){
               this.state[keyd] = cntData[key][keyd];
            }
         }
         this.setState(this.state);
    
         let seo_arr = this.state.seo_arr;
         seo_arr.field_paragraph_for_seo_can = this.state.field_paragraph_for_seo_can;
         seo_arr.field_paragraph_for_seo_itemprop = this.state.field_paragraph_for_seo_itemprop;
         seo_arr.field_paragraph_for_seo_opengrap = this.state.field_paragraph_for_seo_opengrap;
         seo_arr.field_paragraph_for_seo_twitter = this.state.field_paragraph_for_seo_twitter;
         this.setState({seo_arr});
        }
        
    }

    render(){
        return (
            <>
                <Head>
                <script src="/vendor/jquery/jquery.min.js"></script>
                <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="/vendor/jquery.easing/jquery.easing.min.js"></script>
                <script src="/vendor/jquery-sticky/jquery.sticky.js"></script>
                <script src="/vendor/aos/aos.js"></script>
                <script src="/dist/js/wow.js"></script>
                <script src="/dist/js/main.js"></script>
                </Head>
                <BaseLayout headerNav={this.state.headerNav} footerNav={this.state.footerNav} locationData={this.state.locationData} seo_arr={this.state.seo_arr} title={this.state.cookiePageData.content.title ? this.state.cookiePageData.content.title: ""}>
                    <Banner />
                    <TermsDetails />
                </BaseLayout>
            </>
        )
    }
}



CookiePage.getInitialProps = async() => {
  
    const headerNav     = await getHeaderNavigation();
    const footerNav     = await getFooterNavigation();

     //location api
     const locationData = await locationApi();

     //cookie page data 
     const cookiePageData = await cookiePolicy();
  
  
    return {
        headerNav,
        footerNav,
        locationData,
        cookiePageData
    }
  }
  
  

export default CookiePage;