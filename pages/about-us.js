import Head from 'next/head';
import { Component } from 'react';

import BaseLayout from '../components/Layout/BaseLayout';

import AboutBanner from '../components/AboutPage/AboutBanner';
import AboutTabs from '../components/AboutPage/AboutTabs';
import OurAssociation from '../components/AboutPage/OurAssociation';
import Leadership from '../components/AboutPage/Leadership';
import BusinessModal from '../components/AboutPage/BusinessModel';
import Accolades from '../components/AboutPage/Accolades';
import CsrSection from '../components/AboutPage/CsrSection';

//action
import { getHeaderNavigation, getFooterNavigation, locationApi, aboutUsApi } from '../action/drupal-api-handler';
import OurPurpose from '../components/AboutPage/OurPurpose';


class AboutUs extends Component {

    constructor(props){
        super(props);
        const { headerNav, footerNav, locationData,AboutUsData } = props;

        this.state = {
            headerNav: headerNav,
            footerNav: footerNav,
            locationData: locationData,
            AboutUsData: AboutUsData,
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
        if(this.state.AboutUsData){
          let cntData = this.state.AboutUsData.content.field_component_type && this.state.AboutUsData.content.field_component_type.length > 0 && this.state.AboutUsData.content.field_component_type.map((cData,index) => {
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
                    <script src="/vendor/jquery/jquery.min.js"></script>
                    <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="/vendor/jquery.easing/jquery.easing.min.js"></script>
                    <script src="/vendor/jquery-sticky/jquery.sticky.js"></script>
                    <script src="/vendor/aos/aos.js"></script>
                    <script src="/dist/js/wow.js"></script>
                    <script src="/vendor/slick/slick.min.js"></script>
                    <script src="/dist/js/curtains.js" type="text/javascript"></script>
                    {/* <script src="/dist/multiple.textures.setup.js" type="text/javascript"></script> */}
                    <script src="/dist/js/yall.min.js" type="text/javascript"></script>
                    <script src="/dist/js/main.js"></script>
                    <script src="/dist/js/aboutus.js"></script>
                    <script src="/dist/js/multiple.textures.setup_1.js" type="text/javascript"></script>
                </Head>
                <BaseLayout headerNav={this.state.headerNav} footerNav={this.state.footerNav} locationData={this.state.locationData} seo_arr={this.state.seo_arr} title={this.state.AboutUsData.content.title}>
                    {
                        this.state.field_banner_component &&  this.state.field_banner_component.length > 0 && 
                        <AboutBanner bannerData={this.state.field_banner_component} />
                    }
                    <main id="main" className="inner_pages about_page">
                        <OurPurpose/>
                        <AboutTabs />
                        <OurAssociation />
                        <Leadership />
                        <BusinessModal />
                        <Accolades />
                        <CsrSection />
                    </main>
                </BaseLayout>
            </>
        )
    }
}


AboutUs.getInitialProps = async () => {
    const headerNav = await getHeaderNavigation();
    const footerNav = await getFooterNavigation();
    
    //location api
    const locationData = await locationApi();
    
    //about us data
    const AboutUsData = await aboutUsApi();

    return {
        headerNav,
        footerNav,
        locationData,
        AboutUsData
    }
}




export default AboutUs;