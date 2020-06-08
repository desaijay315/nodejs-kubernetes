import Head from 'next/head';
import { Component } from 'react';

import BaseLayout from '../components/Layout/BaseLayout';
import ExpertiseBanner from '../components/ExpertisePage/ExpertiseBanner';
import ExpertiseTab from '../components/ExpertisePage/ExpertiseTab';
import IntroSection from '../components/ExpertisePage/IntroSection';
import Consulting from '../components/ExpertisePage/Consulting';
import Platform from '../components/ExpertisePage/Platform';
import Marketing from '../components/ExpertisePage/Marketing';
import Build from '../components/ExpertisePage/Build';
import Sustenance from '../components/ExpertisePage/Sustenance';
import Products from '../components/ExpertisePage/Products';

//action
import {getHeaderNavigation, getFooterNavigation, locationApi,expertiseApi} from '../action/drupal-api-handler';


class Expertise extends Component{

    constructor(props){
        super(props);
        const { headerNav, footerNav, locationData,expertiseData } = props;

        this.state = {
            headerNav: headerNav,
            footerNav: footerNav,
            locationData: locationData,
            expertiseData: expertiseData,
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
        if(this.state.expertiseData){
          let cntData = this.state.expertiseData.content.field_component_type && this.state.expertiseData.content.field_component_type.length > 0 && this.state.expertiseData.content.field_component_type.map((cData,index) => {
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
        
        console.log(this.state.field_banner_component);
      }

    render(){
        return (
            <>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <script src="/vendor/jquery/jquery.min.js"></script>
                    <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="/vendor/jquery.easing/jquery.easing.min.js"></script>
                    <script src="/vendor/jquery-sticky/jquery.sticky.js"></script>
                    <script src="/vendor/aos/aos.js"></script>
                    <script src="/dist/js/wow.js"></script>
                    <script src="/vendor/slick/slick.min.js"></script>
                    <script src="/dist/js/main.js"></script>
                    <script src="/dist/js/expertise_page.js"></script>
                    <script src="/dist/js/curtains.js" type="text/javascript"></script>
                    <script src="/dist/js/banner.js" type="text/javascript"></script>
                </Head>
                <BaseLayout headerNav={this.state.headerNav} footerNav={this.state.footerNav} locationData={this.state.locationData} seo_arr={this.state.seo_arr} title={this.state.expertiseData.content.title}>
               {
                  this.state.field_banner_component && this.state.field_banner_component.length > 0 && 
                  <ExpertiseBanner bannerData={this.state.field_banner_component}/>
               } 
                <main id="main" className="inner_pages expertise_page">
                    <ExpertiseTab />
                    <IntroSection />
                    <Consulting />
                    <Platform />
                    <Marketing />
                    <Build />
                    <Sustenance />
                    <Products />
                </main>
                </BaseLayout>
            </>
        )
    }
}


Expertise.getInitialProps = async() => {
    const headerNav = await getHeaderNavigation();
    const footerNav = await getFooterNavigation();

    //location api
    const locationData = await locationApi();

    //page api
    const expertiseData = await expertiseApi();
  
    return {
        headerNav,
        footerNav,
        locationData,
        expertiseData
    }
}




export default Expertise;