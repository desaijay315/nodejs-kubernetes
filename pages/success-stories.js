import Head from 'next/head';

import React, { Component } from 'react';

import BaseLayout from '../components/Layout/BaseLayout';

import SuccessBanner from '../components/SuccessStoriesPage/SuccessBanner';
import SuccessStoriesMainPage from '../components/SuccessStoriesPage/SuccessStoriesMainPage';


//action
import {getSuccessStoriesPageData, getCategoryData, getSuccessStoriesNavigation, getHeaderNavigation, getFooterNavigation, getBankingData, getFmcgData, getFinanceData, getTechnology, getManufacturing, getRetailData, getTelecomData, getMediaData,locationApi} from '../action/drupal-api-handler';


class SuccessStories extends Component{
    
    constructor(props){
        super(props);

        const {successpageData, successNav, headerNav, footerNav, bankingData, fmcgData, financeData, technologyData, manufacturingData, retailData, telecomData, mediaData, locationData} = props;

        this.state = {
            successpageData: successpageData,
            successNav: successNav,
            headerNav: headerNav,
            footerNav: footerNav,
            bankingData: bankingData,
            fmcgData: fmcgData,
            financeData: financeData,
            technologyData: technologyData,
            manufacturingData: manufacturingData,
            retailData: retailData,
            telecomData: telecomData,
            mediaData: mediaData,
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
        if(this.state.successpageData){
          let cntData = this.state.successpageData.content.field_component_type && this.state.successpageData.content.field_component_type.length > 0 && this.state.successpageData.content.field_component_type.map((cData,index) => {
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
                <script src="/dist/js/success_stories.js"></script>
                <script src="/dist/js/curtains.js" type="text/javascript"></script>
                <script src="/dist/js/banner.js" type="text/javascript"></script>
            </Head>
            <BaseLayout headerNav={this.state.headerNav} footerNav={this.state.footerNav} locationData={this.state.locationData} seo_arr={this.state.seo_arr} title={this.state.successpageData.content.title}>
            <SuccessBanner successpageData={this.state.successpageData}/>
            <SuccessStoriesMainPage successpageData={this.state.successpageData} successNav={this.state.successNav} bankingData={this.state.bankingData} fmcgData={this.state.fmcgData} financeData={this.state.financeData} technologyData={this.state.technologyData} manufacturingData={this.state.manufacturingData} retailData={this.state.retailData} telecomData={this.state.telecomData} mediaData={this.state.mediaData}/>
            </BaseLayout>
        </>
    )
   }
}


SuccessStories.getInitialProps = async () => {

const headerNav        = await getHeaderNavigation();
const footerNav        = await getFooterNavigation();
const successpageData  = await getSuccessStoriesPageData();
const successNav       = await getSuccessStoriesNavigation();

//banking data
const bankingData     = await getBankingData();
//fmcg data
const fmcgData        = await getFmcgData();
//financial services data
const financeData     = await getFinanceData();
//manufacturing
const manufacturingData = await getManufacturing();

// const manufacturingData     = [];

//technology
const technologyData = await getTechnology();

//retail
const retailData = await getRetailData();

//telecom data

const telecomData = await getTelecomData();

//media 

const mediaData = await getMediaData();


 //location api
const locationData = await locationApi();


return {
    successpageData,
    headerNav,
    footerNav,
    successNav,
    bankingData,
    fmcgData,
    financeData,
    technologyData,
    manufacturingData,
    retailData,
    telecomData,
    mediaData,
    locationData
  };
}


export default SuccessStories;
