import React, {Fragment, Component} from 'react';
import Head from 'next/head';

import BaseLayout from '../components/Layout/BaseLayout';
import NewsBanner from '../components/NewsPage/NewsBanner';
import NewsDetails from '../components/NewsPage/NewsDetails';
import NewsThisWeek from '../components/NewsPage/NewsThisWeek';
import NewsArticle from '../components/NewsPage/NewsArticles';

import {getHeaderNavigation, getFooterNavigation, getNewsArticlesData, getNewsPageData, locationApi} from '../action/drupal-api-handler';



class News extends Component {

  constructor(props){
    super(props);
    const { headerNav, footerNav, articlesData, newsmainPageData, locationData} = props;

    this.state = {
      headerNav:headerNav,
      footerNav:footerNav,
      articlesData:articlesData,
      newsmainPageData:newsmainPageData,
      field_banner_component: [],
      field_heading_component: [],
      field_news_page_product_banner: [],
      field_this_week_component: [],
      field_more_article_component:[],
      field_title:"",
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
    if(this.state.newsmainPageData){
      let cntData = this.state.newsmainPageData.content.field_component_type && this.state.newsmainPageData.content.field_component_type.length > 0 && this.state.newsmainPageData.content.field_component_type.map((cData,index) => {
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
    return(
      <>
        <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preload/" as="style" href="/style_inner.css" rel="stylesheet" /> */}
        <script src="/vendor/jquery/jquery.min.js"></script>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/vendor/jquery.easing/jquery.easing.min.js"></script>
        <script src="/vendor/jquery-sticky/jquery.sticky.js"></script>
        <script src="/vendor/aos/aos.js"></script>
        <script src="/dist/js/wow.js"></script>
        <script src="/vendor/slick/slick.min.js"></script>
        <script src="/dist/js/yall.min.js" type="text/javascript"></script>
        <script src="/dist/js/main.js"></script>
        <script src="/dist/js/isotope.pkgd.js"></script>
        <script src="/dist/js/news.js"></script>
        
        </Head>
        <BaseLayout headerNav={this.state.headerNav} footerNav={this.state.footerNav} locationData={this.state.locationData} seo_arr={this.state.seo_arr} title={this.state.newsmainPageData.content.title}>
        {this.state.field_banner_component && this.state.field_banner_component.length > 0 && <NewsBanner bannerData={this.state.field_banner_component}/> }
            <main id="main" className="inner_pages news">
        {this.state.field_news_page_product_banner && this.state.field_news_page_product_banner.length > 0 && 
        <NewsDetails newsDetails={this.state.field_news_page_product_banner}/> }
        {
        this.state.field_heading_component && this.state.field_heading_component.length > 0 && 
        <NewsThisWeek headingComponent={this.state.field_heading_component} thisWeekData={this.state.field_this_week_component} thisweekTitle={this.state.field_title}/> 
        } 
        {
          this.state.articlesData && this.state.articlesData.length > 0 && 
          <NewsArticle articlesData={this.state.articlesData}/>
        }
            </main>
        </BaseLayout>
      </>
    )
  }
}


News.getInitialProps = async() => {
  const headerNav = await getHeaderNavigation();
  const footerNav = await getFooterNavigation();

  const articlesData  = await getNewsArticlesData();
  const newsmainPageData  = await getNewsPageData();

  //location api
  const locationData = await locationApi();

  return {
      headerNav,
      footerNav,
      articlesData,
      newsmainPageData,
      locationData
    }
}

export default News;