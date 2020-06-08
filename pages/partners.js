import Head from 'next/head';
import { Component } from 'react';

import BaseLayout from '../components/Layout/BaseLayout';
import Banner from '../components/PartnerPage/Banner';
import PartnerTab from '../components/PartnerPage/PartnerTab';


//action
import { getHeaderNavigation, getFooterNavigation, locationApi } from '../action/drupal-api-handler';
import PartnerDetails from '../components/PartnerPage/PartnerDetails';


class Partners extends Component {

    constructor(props){
        super(props);
        const { headerNav, footerNav, locationData } = props;
        
        this.state = {
            headerNav: headerNav,
            footerNav: footerNav,
            locationData: locationData
        }
    }

    componentDidMount(){}

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
                    <script src="/dist/js/partners.js" type="text/javascript"></script>
                </Head>
                <BaseLayout headerNav={this.state.headerNav} footerNav={this.state.footerNav} locationData={this.state.locationData}>
                    <Banner />
                    <main id="main" className="inner_pages partners">
                        <PartnerTab />
                        <PartnerDetails />
                    </main>
                </BaseLayout>
            </>
        )
    }
}


Partners.getInitialProps = async() => {
    const headerNav = await getHeaderNavigation();
    const footerNav = await getFooterNavigation();
    //location api
    const locationData = await locationApi();
    return {
        headerNav,
        footerNav,
        locationData
    }
}




export default Partners;