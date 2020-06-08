import Head from 'next/head';
import { Component } from 'react';

import BaseLayout from '../../components/Layout/BaseLayout';
import SearchBanner from '../../components/SearchPage/SearchBanner';
import SearchDetails from '../../components/SearchPage/SearchDetails';

//action
import { getHeaderNavigation, getFooterNavigation, locationApi, SearchApi } from '../../action/drupal-api-handler';


class SearchPage extends Component {

    constructor(props){
        super(props);
        const { headerNav, footerNav, locationData, searchData, keywords } = props;

        this.state = {
            headerNav: headerNav,
            footerNav: footerNav,
            locationData: locationData,
            searchData: searchData,
            keywords:keywords
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
                    <script src="/dist/js/main.js"></script>
                    <script src="/dist/js/search.js"></script>
                </Head>
                <BaseLayout headerNav={this.state.headerNav} footerNav={this.state.footerNav} locationData={this.state.locationData}>
                    <SearchBanner />
                    <SearchDetails searchData={this.state.searchData} keywords={this.state.keywords}/>
                </BaseLayout>
            </>
        )
    }
}


SearchPage.getInitialProps = async ({query}) => {
    const headerNav = await getHeaderNavigation();
    const footerNav = await getFooterNavigation();
    
    //location api
    const locationData = await locationApi();
    
    let keywords  = "";
    if(query){
        keywords = query.keywords;
    }
    
    const searchData = await SearchApi(keywords);

    return {
        headerNav,
        footerNav,
        locationData,
        searchData,
        keywords
    }
}




export default SearchPage;