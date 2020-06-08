import React, {Fragment, Component} from 'react';
import Head from 'next/head';

import BaseLayout from '../components/Layout/BaseLayout';
import CareerHeader from '../components/CareerPage/CareerHeader';

import Culture from '../components/CareerPage/Culture';
import Impact from '../components/CareerPage/Impact';
import ChooseUs from '../components/CareerPage/WhyChoose';
import Disruptors from '../components/CareerPage/MeetDisruptors';
import LiveLife from '../components/CareerPage/LiveLife';


import { getHeaderNavigation, getFooterNavigation, locationApi,careersApi} from '../action/drupal-api-handler';
import CareersTab from '../components/CareerPage/CareersTab';
import Modal from '../components/CareerPage/Modal';


class Careers extends Component {

    constructor(props){
        super(props);
        const {headerNav, footerNav, locationData,careersData} = props;

        this.state = {
            headerNav: headerNav,
            footerNav: footerNav,
            locationData: locationData,
            careersData: careersData,
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
        if(this.state.careersData){
          let cntData = this.state.careersData.content.field_component_type && this.state.careersData.content.field_component_type.length > 0 && this.state.careersData.content.field_component_type.map((cData,index) => {
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
                    <link rel="icon" href="/favicon.ico" />
                    {/* <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script> */}
                    <script src="/vendor/jquery/jquery.min.js"></script>
                    <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="/vendor/jquery.easing/jquery.easing.min.js"></script>
                    <script src="/vendor/jquery-sticky/jquery.sticky.js"></script>
                    <script src="/vendor/aos/aos.js"></script>
                    <script src="/dist/js/wow.js"></script>
                    <script src="/vendor/slick/slick.min.js"></script>
                    {/* <script src="/dist/js/curtains.js" type="text/javascript"></script> */}
                    {/* <script src="/dist/js/multiple.textures.setup.js" type="text/javascript"></script> */}
                    <script src="/dist/js/main.js"></script>
                    <script src="/dist/js/careers.js"></script>
                </Head>
                <BaseLayout headerNav={this.state.headerNav} footerNav={this.state.footerNav} locationData={this.state.locationData} seo_arr={this.state.seo_arr} title={this.state.careersData.content.title}>
                    <CareerHeader bannerData={this.state.field_banner_component}/>
                    <main id="main" className="inner_pages career_page">
                        <CareersTab/>
                        <Impact />
                        <Culture />
                        <ChooseUs />
                        <Disruptors />
                        <LiveLife />
                        {/* <BestLife /> */}
                        <Modal />
                    </main>
                </BaseLayout>
            </>
        )
    }
}



Careers.getInitialProps = async () => {
    const headerNav = await getHeaderNavigation();
    const footerNav = await getFooterNavigation();

    //location api
    const locationData = await locationApi();
    const careersData = await careersApi();
  
    return {
        headerNav,
        footerNav,
        locationData,
        careersData
    }
}


export default Careers;