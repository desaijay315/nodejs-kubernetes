import Head from 'next/head';

import SuccessStoryDetailBanner from "../../../components/SuccessStoryDetail/Banner"
import BaseLayout from '../../../components/Layout/BaseLayout';
import SuccessStoryDetail from '../../../components/SuccessStoryDetail/SuccessStoryDetails';


import {getSuccessStoriesPageData, getCategoryData, getSuccessStoriesNavigation, getFooterNavigation, getHeaderNavigation, getSuccessStoriesAllDataNavigation, locationApi} from '../../../action/drupal-api-handler';
import { Component } from 'react';

class SuccessStory extends Component{

  constructor(props){
    super(props);
    const {slugData,categoryData,successNav, footerNav, headerNav, locationData} = props;

    this.state = {
      slugData: slugData, 
      categoryData: categoryData, 
      successNav: successNav, 
      footerNav: footerNav, 
      headerNav: headerNav, 
      locationData: locationData,
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
    if(this.state.categoryData){
      let cntData = this.state.categoryData.content.field_component_type && this.state.categoryData.content.field_component_type.length > 0 && this.state.categoryData.content.field_component_type.map((cData,index) => {
        return (
           cData
        )
     });
     for(const key in cntData){
        for(const keyd in cntData[key]){
          if(keyd === 'field_paragraph_for_seo_can' || keyd === 'field_paragraph_for_seo_itemprop' || keyd === 'field_paragraph_for_seo_opengrap' || keyd === 'field_paragraph_for_seo_twitter'){
            this.state[keyd] = cntData[key][keyd];
          }
        }
     }
     this.setState(this.state);

     let seo_arr = this.state.seo_arr;
     seo_arr.field_paragraph_for_seo_can = this.state.field_paragraph_for_seo_can || [];
     seo_arr.field_paragraph_for_seo_itemprop = this.state.field_paragraph_for_seo_itemprop || [];
     seo_arr.field_paragraph_for_seo_opengrap = this.state.field_paragraph_for_seo_opengrap || [];
     seo_arr.field_paragraph_for_seo_twitter = this.state.field_paragraph_for_seo_twitter || [];
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
            <script src="/dist/js/success-stories-details.js"></script>
        </Head>
          <BaseLayout footerNav={this.state.footerNav} headerNav={this.state.headerNav} locationData={this.state.locationData} seo_arr={this.state.seo_arr} title={this.state.categoryData.content.title}>
              { this.state.categoryData && <SuccessStoryDetailBanner categoryData={this.state.categoryData}/> }
              <main id="main" className="inner_pages template_ss">
              <section className="page_section success_stories section_py p-0">
              { this.state.categoryData && <SuccessStoryDetail categoryData={this.state.categoryData} slugData={this.state.slugData} successNav={this.state.successNav}/> }
              </section>
            </main>
          </BaseLayout>
        </>
    )
  }
}


/*
export async function getStaticPaths() {
  // return [];

  const successDataLinks = await getSuccessStoriesPageData();

  const successnavlinks = await getSuccessStoriesAllDataNavigation();

  // console.log(successnavlinks);  
  

  const latest_links = successDataLinks.content.field_component_type[1].field_field_latest_success_story;

  let pusharr = new Set();

  let navnew_data = successnavlinks && successnavlinks.length > 0 && successnavlinks.map((navdata, index) => {
    Object.keys(navdata).filter((nData) => nData === 'content').map((sData, index) => {
      if(navdata[sData].field_unique_url !== undefined){
        let lData = navdata[sData].field_unique_url.substring(navdata[sData].field_unique_url.lastIndexOf('/') + 1);
        if(pusharr.has(lData)){
          return true;
        }else{
          pusharr.add(lData);
        }
      }
    })
  }) 


  //map the data to get all the latest_links to make it static for headless cms
  /*let categoryData = latest_links && latest_links.length > 0 && latest_links.map((successPathdata, index) => {
    let mapData = Object.keys(successPathdata).filter(sData => sData !== 'field_title').map((fData) => {
      const ltData = successPathdata[fData].content.field_unique_url.replace(/\\|\//g,'');
        if(pusharr.has(ltData)){
          return true;
        }else{
          pusharr.add(ltData);
        }
    })
  });

  // console.log(categoryData[0]);
  successDataLinks.content.field_component_type.map((disData,index) => {    
    return disData.field_discover_more && disData.field_discover_more.map((dicoveryURlData,index) => {
      return Object.keys(dicoveryURlData) && Object.keys(dicoveryURlData).filter(fData => fData !== 'field_title').map((discD,index) => {
        const data = dicoveryURlData[discD] && dicoveryURlData[discD].content.field_unique_url.replace(/\\|\//g,'');
        if(data !== undefined || data !== null){
          if(pusharr.has(data)){
            return true;
          }else{
            pusharr.add(data);
          }
        }
      })
    })
  })*/

//   let links_arr = Array.from(pusharr);
  
//     // headless cms links
//   let paths = links_arr.map((data) => ({
//       params: {slug:[data]}
//   }))

//   return { paths, fallback: false }
// }





// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   let slugData = slug[0];
//   const categoryData = await getCategoryData(slugData);
//   const successNav   = await getSuccessStoriesNavigation();
//   const footerNav    = await getFooterNavigation();
//   const headerNav    = await getHeaderNavigation();
// 	const props = {
// 		props: {
//       slugData,
//       categoryData,
//       successNav,
//       footerNav,
//       headerNav
// 		},
// 	};

// 	return props;
// }

SuccessStory.getInitialProps = async ({query}) => {

    const { slug } = query;
  let slugData = slug;
  
  const categoryData = await getCategoryData(slugData);
  const successNav   = await getSuccessStoriesNavigation();
  const footerNav    = await getFooterNavigation();
  const headerNav    = await getHeaderNavigation();
  //location api
  const locationData = await locationApi();
    

	return {
      slugData,
      categoryData,
      successNav,
      footerNav,
      headerNav,
      locationData
  };
}
 
  export default SuccessStory;