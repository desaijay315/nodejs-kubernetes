import React, {Fragment, Component} from 'react';
import Head from 'next/head';

import BaseLayout from '../components/Layout/BaseLayout';
import ContactSlider from '../components/ContactPage/ContactSlider';
import ContactMainDetails from '../components/ContactPage/ContactMainDetails';



//action
import { getContactUsPageData, getHeaderNavigation, getFooterNavigation, locationApi } from '../action/drupal-api-handler';

class ContactUs extends Component{

    constructor(props){
        super(props);
        const { contactData, headerNav, footerNav, locationData }  = props;

        this.state = {
            contactData: contactData,
            headerNav: headerNav,
            footerNav: footerNav,
            locationData: locationData,
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
        if(this.state.contactData){
          let cntData = this.state.contactData.content.field_component_type && this.state.contactData.content.field_component_type.length > 0 && this.state.contactData.content.field_component_type.map((cData,index) => {
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
                    <script src="/dist/js/yall.min.js" type="text/javascript"></script>
                    <script src="/dist/js/main.js"></script>
                    <script src="/dist/js/curtains.js" type="text/javascript"></script>
                    <script src="/dist/js/banner.js" type="text/javascript"></script>
                    <script src="/dist/js/contact.js" type="text/javascript"></script>
                </Head>
                <BaseLayout headerNav={this.state.headerNav} footerNav={this.state.footerNav} locationData={this.state.locationData} seo_arr={this.state.seo_arr} title={this.state.contactData.content.title}>
                    <ContactSlider contactData={this.state.contactData}/>
                    <main id="main" className="inner_pages news">
                        <ContactMainDetails contactData={this.state.contactData}/>
                    </main>
                </BaseLayout>
            </>
        )
    }
}



ContactUs.getInitialProps = async () => {
    const contactData  = await getContactUsPageData();
    const headerNav    = await getHeaderNavigation();
    const footerNav    = await getFooterNavigation();

     //location api
    const locationData = await locationApi();
  
    return {
        contactData,
        headerNav,
        footerNav,
        locationData
    }
}


export default ContactUs;