import React, { Component } from 'react';
import Head from 'next/head';

import BaseLayout from '../components/Layout/BaseLayout';


import HomeBanner from '../components/HomeComponent/HomeBanner';
import HomeDrivingTrans from '../components/HomeComponent/HomeDrivingTrans';
import HomeDigitalExpert from '../components/HomeComponent/HomeDigitalExpert';
import HomeSuccessStories from '../components/HomeComponent/HomeSuccessStories';
import HomeThinkingForward from '../components/HomeComponent/HomeForwardThinking';
import HomeCareers from '../components/HomeComponent/HomeCareers';
import HomePartnerAward from '../components/HomeComponent/HomePartnerAward';


//action

import {getHomePageData, getSuccessStoriesNavigation, getHeaderNavigation, getFooterNavigation, locationApi} from '../action/drupal-api-handler';



class Index extends Component {

  constructor(props){
    super(props);

    const {homepagedata, successNav, headerNav, footerNav, locationData}  = props;

    

    this.state = {
      homepagedata: homepagedata,
      headerNav: headerNav,
      footerNav: footerNav,
      successNav: successNav,
      locationData: locationData,
      field_banner_component:[],
      field_driving_component:[],
      field_expertise_component:[],
      field_stories_content_reference:[],
      field_forward_thinking_component: [],
      field_career_component:[],
      field_partners_awards_component:[],
      field_paragraph_for_seo_can:[],
      field_paragraph_for_seo_itemprop:[],
      field_paragraph_for_seo_opengrap:[],
      field_paragraph_for_seo_twitter:[],
      field_title_expertise:"",
      field_title_success:"",
      field_title_thinking:""
    }
  }


  componentDidMount(){
    if(this.state.homepagedata && this.state.homepagedata.content && this.state.homepagedata.content.field_component_type && this.state.homepagedata.content.field_component_type.length > 0){
      const homeData = this.state.homepagedata.content.field_component_type.map((hData, index) => {
        if(hData.field_expertise_component){
          hData.field_title_expertise = hData.field_title;
        }else if(hData.field_stories_content_reference){
          hData.field_title_success = hData.field_title;
        }else if(hData.field_forward_thinking_component){
          hData.field_title_thinking = hData.field_title;
        }
        return hData;
      })

      for(const key in homeData){
        for(const keyd in homeData[key]){
           this.state[keyd] = homeData[key][keyd];
        }
     }
     this.setState(this.state);     

     let seo_arr_arr = {};
     seo_arr_arr.field_paragraph_for_seo_can = this.state.field_paragraph_for_seo_can;
     seo_arr_arr.field_paragraph_for_seo_itemprop = this.state.field_paragraph_for_seo_itemprop;
     seo_arr_arr.field_paragraph_for_seo_opengrap = this.state.field_paragraph_for_seo_opengrap;
     seo_arr_arr.field_paragraph_for_seo_twitter = this.state.field_paragraph_for_seo_twitter;
     this.setState({seo_arr_arr:seo_arr_arr});
     
    }
  }

   render(){  
    return(
      <>
        <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preload/" as="style" href="/style_inner.css" rel="stylesheet" /> */}
        <script src="/vendor/jquery/jquery.min.js"></script>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" type="text/javascript"></script>
        <script src="/vendor/jquery.easing/jquery.easing.min.js" type="text/javascript"></script>
        <script src="/vendor/jquery-sticky/jquery.sticky.js" type="text/javascript"></script>
        <script src="/vendor/aos/aos.js" type="text/javascript"></script>
        <script src="/dist/js/wow.js" type="text/javascript"></script>
        <script src="/vendor/slick/slick.min.js" type="text/javascript"></script>
        <script src="/dist/js/curtains.js" type="text/javascript"></script>
        <script src="/dist/js/multiple.textures.setup.js" type="text/javascript"></script>
        <script src="/dist/js/yall.min.js" type="text/javascript"></script>
        <script src="/dist/js/owl.carousel.min.js" type="text/javascript"></script>
        <script src="/dist/js/main.js"></script>
        <script src="/dist/js/homepage.js"></script>
        </Head>
        <BaseLayout headerNav={this.state.headerNav} footerNav={this.state.footerNav} locationData={this.state.locationData} seo_arr={this.state.seo_arr_arr} title={this.state.homepagedata.content.title}>
           {this.state.field_banner_component && this.state.field_banner_component.length > 0 && <HomeBanner bannerData={this.state.field_banner_component} />} 
            <main id="main">
                {
                  this.state.field_driving_component && this.state.field_driving_component.length > 0  && <HomeDrivingTrans drivingTransformationData={this.state.field_driving_component}/>
                }  
                {
                  this.state.field_expertise_component && this.state.field_expertise_component.length > 0 &&  
                  <HomeDigitalExpert digitalExpertiseData={this.state.field_expertise_component}/>
                }
                { this.state.field_stories_content_reference && this.state.field_stories_content_reference.length > 0 &&  
                <HomeSuccessStories successStoriesData={this.state.field_stories_content_reference} successNav={this.state.successNav} successHeading={this.state.field_title_success}/>}
                {this.state.field_forward_thinking_component && this.state.field_forward_thinking_component.length > 0 && 
                <HomeThinkingForward thinkingForwardData={this.state.field_forward_thinking_component} thinkingHeading={this.state.field_title_thinking}  /> }
              {this.state.field_career_component && this.state.field_career_component.length > 0 && 
              <HomeCareers careersData={this.state.field_career_component}/> }
                {
                  this.state.field_partners_awards_component && this.state.field_partners_awards_component.length > 0 && 
                  <HomePartnerAward partnersAwardData={this.state.field_partners_awards_component} />
                }
            </main>
        </BaseLayout>
      </>
    )
  }
}



Index.getInitialProps = async () => {

  const homepagedata  = await getHomePageData();
  const successNav    = await getSuccessStoriesNavigation();
  const headerNav     = await getHeaderNavigation();
  const footerNav     = await getFooterNavigation();
  //location api
  const locationData = await locationApi();


  return {
      homepagedata,
      successNav,
      headerNav,
      footerNav,
      locationData
    }
}


export default Index;