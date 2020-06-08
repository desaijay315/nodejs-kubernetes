


import Head from 'next/head';
import { Component } from 'react';

import BaseLayout from '../../../components/Layout/BaseLayout';
import NewsDetailBanner from '../../../components/NewsDetails/Banner';
import NewsDetails from '../../../components/NewsDetails/NewsDetail';
import NewsArticles from '../../../components/NewsDetails/NewsArticles';


//action
import {getHeaderNavigation, getFooterNavigation, getNewsDetailsPageData, locationApi} from '../../../action/drupal-api-handler';


class NewsDetailsPage extends Component {

  constructor(props){
    super(props);

    const { headerNav, footerNav, newsDetails, locationData} = props;

    this.state = {
      headerNav: headerNav,
      footerNav: footerNav,
      newsDetails: newsDetails,
      field_banner_component: [],
      field_more_article_component: [],
      field_heading_component: [],
      field_news_details_main: [],
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
      field_paragraph_for_seo_twitter:[],
      title:""
    }

  }

  componentDidMount(){

    if(this.state.newsDetails && this.state.newsDetails.content && this.state.newsDetails.content.field_component_type.length > 0){

      let cntData = this.state.newsDetails.content.field_component_type && this.state.newsDetails.content.field_component_type.length > 0 && this.state.newsDetails.content.field_component_type.map((cData,index) => {
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
            <script src="/dist/js/main.js"></script>
            <script src="/dist/js/isotope.pkgd.js"></script>
            <script src="/dist/js/news-details.js"></script>
            <script src="/dist/js/news-detail-1.js"></script>
        </Head>
          <BaseLayout headerNav={this.state.headerNav} footerNav={this.state.footerNav}locationData={this.state.locationData} seo_arr={this.state.seo_arr} title={this.state.newsDetails.content.title ? this.state.newsDetails.content.title: ""}>
              <NewsDetailBanner newsBannerData={this.state.field_banner_component}/>
              <main id="main" className="inner_pages news">
                <section className="page_section news_detail fadeInUp wow" data-wow-delay=".4s">
                  <NewsDetails headingData={this.state.field_heading_component} newsDetails={this.state.field_news_details_main}/>
                  <section className="section_sep">
                    <div className="container-fluid"><hr className="my-0" /></div>
                    </section>
                    <NewsArticles newsarticles={this.state.field_more_article_component}/>
                </section>
            </main>
          </BaseLayout>
        </>
    )
  } 
}



// export async function getStaticPaths() {

//   const newsDetails   = await getNewsDetailsPageData();

//   const { content } = newsDetails;

//   let linksArr = new Set();

//   Object.keys(content).filter((content) => content !== 'title' && content !=='body' && content !=='field_date' && content !== 'field_terms').map((articleData, index) => {
//     let field_unique_url = content['field_unique_url'].replace(/\\|\//g,'');;
//     if(linksArr.has(field_unique_url)){
//       return true;
//     }else{
//       linksArr.add(field_unique_url);
//     }
//   })

//   let pathsData = Array.from(linksArr);

//   // headless cms links
//   const paths = pathsData.map((data) => ({
//     params: {slug:[data]}
// }))
  
//   return { paths, fallback: false }
// }




// export async function getStaticProps({ params }) {
	
//   const { slug } = params;
 
//   const headerNav     = await getHeaderNavigation();
//   const footerNav     = await getFooterNavigation();
//   const newsDetails   = await getNewsDetailsPageData();

// 	const props = {
// 		props: {
//       slug,
//       headerNav,
//       footerNav,
//       newsDetails
// 		},
// 	};

// 	return props;
// }

NewsDetailsPage.getInitialProps = async ({query}) => {
    const { slug } = query;
 
  const headerNav     = await getHeaderNavigation();
  const footerNav     = await getFooterNavigation();
  const newsDetails   = await getNewsDetailsPageData(slug);

   //location api
const locationData = await locationApi();
	return {
      slug,
      headerNav,
      footerNav,
      newsDetails,
      locationData
  };
}
  
  export default NewsDetailsPage;