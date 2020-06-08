import React, { Component } from "react";

import {getCategorySuccessStoryPageData, getCategoryDataTemp} from '../../action/drupal-api-handler';

import {removeHTMLChars, removeSlash, capitalizeFirstLetter} from '../../action/helpers';


class SuccessStoriesMainPage extends Component {
    constructor(props){
        super(props);

        const { successpageData, successNav } = props;

        this.state = {
           successpageData: successpageData,
           successNav: successNav[0].items,
           field_field_latest_success_story: [],
           field_discover_more: [],
           nav_tab_data: [],
           activeLink: null,
           activeAll:true,
           activeTab:false,
           tabString: '',
           activeDiv: 'all'
        }

        // this.getCatData = this.getCatData.bind(this);

     }

     componentDidMount(){

        let cntData = this.state.successpageData && this.state.successpageData.content && this.state.successpageData.content.field_component_type && this.state.successpageData.content.field_component_type.length > 0 && this.state.successpageData.content.field_component_type.map((cData,index) => {
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
     }

     getCatData = async (string) => {

        console.log(string);

        const selectedCatData = await getCategoryDataTemp(string);

        if(string === 'all'){

            this.setState({
                nav_tab_data: []
            })

            this.setState({activeDiv: string});

            let cntData = selectedCatData && selectedCatData.content && selectedCatData.content.field_component_type && selectedCatData.content.field_component_type.length > 0 && selectedCatData.content.field_component_type.map((cData,index) => {
                return (
                   cData
                )
             });

             if(cntData && cntData.length > 0){
                for(const key in cntData){
                    for(const keyd in cntData[key]){
                       this.state[keyd] = cntData[key][keyd];
                    }
                }

                this.setState(this.state);
            }


            console.log(this.state);
        }else{

            this.setState({
                field_field_latest_success_story: [],
                field_discover_more: []
            })

            this.setState({tabString: string})
            this.setState({activeDiv: string})

            if(selectedCatData && selectedCatData.length > 0){
                let cntData =  selectedCatData.map((catData, index) => {
                   let selCategory = Object.values(catData)[0];
                   return (
                      selCategory
                   )
                });

                if(cntData && cntData.length > 0 ){

                    this.setState({
                        nav_tab_data: cntData
                    });
                    console.log(this.state);
                }
            }

        }
     }

     render(){
         return(
            <main id="main" className="inner_pages template_ss">
         <section className="page_section success_stories section_py section_grey">
            <div className="nav_wrap bg-white">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-12 fadeInUp wow" data-wow-delay=".1s">
                        <nav className="mynav position-relative removeNavAfter">
                           <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                              <li className="nav-item">
                                 <a onClick={() => this.getCatData(this.removeSlash('all')) }  className="nav-link active" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">All</a>
                              </li>
                              {
                                 this.state.successNav && this.state.successNav.map((sdata,index) =>{
                                       // if(index === 0){
                                       //    this.state.activeLink = "nav-link active";
                                       // }else{
                                       //    this.state.activeLink = "nav-link";
                                       // }
                                    return (
                                       <li className="nav-item" key={index}>
                                          <a onClick={() => this.getCatData(this.removeSlash(sdata.url)) } className="nav-link" data-toggle="tab" href={`#nav-${this.removeSlash(sdata.url)}`} role="tab" aria-controls={`#nav-${this.removeSlash(sdata.url)}`} aria-selected="false">{sdata.name}</a>
                                       </li>
                                    )
                                 })
                           }
                           </ul>
                           <ul className="icon-grid-listing">
                              <li><button className="icon-grid active" disabled><span></span><span></span><span></span><span></span></button></li>
                              <li><button className="icon-list"><span></span><span></span></button></li>
                           </ul>
                           <span className="target"></span>
                        </nav>
                        <style jsx>
                        {`
                        .mynav ul {
                            display: flex;
                            flex-wrap: no-wrap;
                            list-style-type: none;
                            padding: 30px 0;
                            margin: 0;
                            overflow: hidden;
                            overflow-x: auto;
                        }
                
                        .mynav a {
                            display: block;
                            font-size: 1.125rem;
                            color: #707070;
                            text-decoration: none;
                            padding: 10px 5px;
                            text-transform: uppercase;
                            white-space: nowrap
                        }
                        .mynav li.active a {
                            color: #0ca6e4;
                        }
                
                        .target {
                            position: absolute;
                            border-bottom: 4px solid #0ca6e4;
                            z-index: 3;
                            transform: translateX(-60px);
                        }
                
                        .mynav a,
                        .target {
                            transition: all 0.35s ease-in-out;
                        }
                
                        
                        .nav-tabs .nav-item .nav-link:after{
                            display: none;
                        }
                        
                        `}
                     </style>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-12 fadeInUp wow" data-wow-delay=".1s">
                     <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                        <div className={this.state.activeDiv === 'all' ? "tab-pane fade show active": "tab-pane fade"} id="nav-all" role="tabpanel" aria-labelledby="nav-banking-tab">
                        {
   this.state.field_field_latest_success_story && this.state.field_field_latest_success_story.length > 0 ?
<div className="all_section latest grid_view">
   <h2 className="section_heading">Latest</h2>
   <div className="row" id="latest_slider">
{
    Object.values(this.state.field_field_latest_success_story).map((latestData, index) => {
      let divClass = "";
      let divClass2 = "";
      let divClass3 = "";
      let divClass4 = "";
      let count = 0;
       return(
          Object.keys(latestData).filter((ldata) => ldata !== 'field_title').map((LData, index) =>{
             return(
               latestData[LData].content.field_component_type && latestData[LData].content.field_component_type.map((latestD, index) => {
                   if(latestD.field_success_product_banner && latestD.field_success_product_banner.length > 0  && latestD.field_success_product_banner !== undefined){

                      return latestD.field_success_product_banner.map((fData,index) => {
                            let field_description = fData.field_description;
                            let field_image = fData.field_image.url;
                            let field_image_alt = fData.field_image.alt;
                            let field_logo_image = fData.field_logo_image.url;
                            let field_logo_alt = fData.field_logo_image.alt;
                            let title = fData.field_title
                            let link_uri = fData.field_link_detail[0].field_link.uri;
                            let field_unique_url = latestData[LData].content.field_unique_url;
                            if(count === 0){
                              count++;
                                divClass = "col-md-6 slider-col anim_col animated";
                                divClass2 = "col-md-6 slider-col-fav";
                                divClass3 = "col-md-6 slider-col-fav";
                                divClass4 = "card fav";
                                return(
                                 <div className={divClass} key={title}>
                                 <div className="row no-gutters brand-row animated fadeInLeft">
                                     <div className={divClass2}>
                                         <figure className="brand-img"><img className="lazy" data-src={field_image} src="" alt={field_image_alt}/></figure>
                                     </div>
                                     <div className={divClass3}>
                                         <div className={divClass4}>
                                         <div className="card-block">
                                             <h4 className="card-title">{title}</h4>
                                             <p className="card-text"> {` ${field_description}`}</p>
                                         </div>
                                         <div className="card-footer">
                                             <a href={field_unique_url} className="btn btn-secondary">View More</a>
                                         </div>
                                         </div>
                                     </div>
                                 </div>
                                 </div>
                                 )

                            }else{
                              count++;
                                divClass = "col-md-3 slider-col";
                                divClass2 = "col-md-12 slider-col-fav";
                                divClass3 = "col-md-12 slider-col-fav white-box";
                                divClass4 = "card";
                                return(
                                 <div className={divClass} key={title}>
                                 <div className="row no-gutters brand-row animated fadeInLeft">
                                     <div className={divClass2}>
                                         <figure className="brand-img"><img className="lazy" data-src={field_image} src="" alt={field_image_alt}/></figure>
                                     </div>
                                     <div className={divClass3}>
                                         <div className={divClass4}>
                                         <div className="card-block">
                                               <figure className="brand-logo"><img className="lazy img-fluid" data-src={field_logo_image} src="" alt={field_logo_alt}/></figure>
                                             <h4 className="card-title">{title}</h4>
                                             <p className="card-text"> {` ${field_description}`}</p>
                                         </div>
                                         <div className="card-footer">
                                             <a href={field_unique_url} className="btn btn-secondary">View More</a>
                                         </div>
                                         </div>
                                     </div>
                                 </div>
                                 </div>
                                 )
                            }

                    })
                   }
                })
                )
        })
       )
    })
}
   </div>
   </div> : null
}
{
   this.state.field_discover_more && this.state.field_discover_more.length > 0 ?

   <div className="all_section discover_more grid_view fadeInUp wow" data-wow-delay=".1s">
                              <h2 className="section_heading">Discover more</h2>
                              <div className="row">
                              {
    this.state.field_discover_more.map((discoverData,index) => {
       return Object.keys(discoverData).filter((disData) => disData !== 'field_title').map((dData,index) => {
         //  console.log(discoverData[dData].content.field_unique_url);
          return discoverData[dData].content.field_component_type && discoverData[dData].content.field_component_type.map((dsData, index) => {
             if(dsData.field_success_product_banner && dsData.field_success_product_banner.length > 0  && dsData.field_success_product_banner !== undefined){
                return dsData.field_success_product_banner.map((fData,index) => {
                  let field_description = fData.field_description;
                  let field_image = fData.field_image.url;
                  let field_image_alt = fData.field_image.alt;
                  let field_logo_image = fData.field_logo_image.url;
                  let field_logo_alt = fData.field_logo_image.alt;
                  let title = fData.field_title;
                  let link_uri = fData.field_link_detail[0].field_link.uri;
                  let field_unique_url = discoverData[dData].content.field_unique_url;
                    return(
                    <div className="col-md-3 grid-col" key={title}>
                        <div className="row no-gutters brand-row animated fadeInLeft">
                        <div className="col-md-12 slider-col">
                           <figure className="brand-img"><img className="lazy" data-src={field_image} src="" alt={field_image_alt}/></figure>
                        </div>
                        <div className="col-md-12 slider-col white-box">
                            <div className="card">
                                <div className="card-block animated fadeInRight">
                                    <figure className="brand-logo"><img className="lazy img-fluid" data-src={field_logo_image} src="" alt={field_logo_alt}/></figure>
                                    <h4 className="card-title">{title}</h4>
                                    <p className="card-text"> {` ${field_description}`}</p>
                                </div>
                                <div className="card-footer">
                                    <a href={field_unique_url} className="btn btn-secondary">View More</a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    )

                })
             }
          })
       })
    })
 }
      </div>
   </div>: null

}
</div>

                        {
   this.state.nav_tab_data && this.state.nav_tab_data.length > 0 ?

                        <div className={this.state.activeDiv === this.state.tabString ? "tab-pane fade show active": "tab-pane fade"} id={`nav-${this.state.tabString}`} role="tabpanel" aria-labelledby="nav-banking-tab">
                        <div className="story_slider grid_view animated fadeInUp pt-5">
                           {
                              this.state.nav_tab_data && this.state.nav_tab_data.length > 0 && this.state.nav_tab_data.map((pBannerData, index) => {
                                 let field_unique_url = pBannerData.field_unique_url;
                                 return pBannerData.field_component_type && pBannerData.field_component_type.length > 0 && pBannerData.field_component_type.map((prodbanner, index) => {

                                    if(prodbanner.field_success_product_banner !==undefined){
                                       let prd_data = prodbanner.field_success_product_banner;

                                       let field_description = prd_data[0].field_description;
                                       let field_image = prd_data[0].field_image.url;
                                       let field_image_alt = prd_data[0].field_image.alt;
                                       let field_logo_image = prd_data[0].field_logo_image.url;
                                       let field_logo_alt = prd_data[0].field_logo_image.alt;
                                       let title = prd_data[0].field_title;

                                       return (
                                          <div className="slide-item" key={title}>
                                       <div className="row brand-row no-gutters animated fadeInLeft">
                                       <div className="col-md-6 slider-col">
                                          <figure className="brand-img"><img className="lazy" data-src={field_image} src="" alt={field_image_alt}/></figure>
                                       </div>
                                       <div className="col-md-6 slider-col white-box">
                                          <div className="card">
                                             <div className="card-block animated fadeInRight">
                                                <figure className="brand-logo"><img className="lazy img-fluid" data-src={field_logo_image} src="" alt={field_logo_alt}/></figure>
                                                <h4 className="card-title">{title}</h4>
                                       <p className="card-text">{field_description}</p>
                                             </div>
                                             <div className="card-footer">
                                                <a href={field_unique_url} className="btn btn-secondary">View More</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                       )
                                    }
                                 })


                              })
                           }
                        </div>
                        </div>



   :null
}
                     </div>
                  </div>
               </div>
            </div>

         </section>
      </main>
        )
     }
}

export default SuccessStoriesMainPage;
