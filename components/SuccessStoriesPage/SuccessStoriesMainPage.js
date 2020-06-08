import {Component} from 'react';

import {removeHTMLChars, removeSlash} from '../../action/helpers';


class SuccessStoriesMainPage extends Component{

   constructor(props){
      super(props);


      const { bankingData, fmcgData, financeData, successpageData, successNav, technologyData, manufacturingData,retailData, telecomData, mediaData} = props;


      this.state = {
         successpageData: successpageData,
         successNav: successNav[0].items,
         field_field_latest_success_story: [],
         field_discover_more: [],
         bankingData: bankingData && bankingData.length > 0 ? bankingData : [],
         fmcgData: fmcgData && fmcgData.length > 0 ? fmcgData : [],
         financeData: financeData && financeData.length > 0 ? financeData : [],
         technologyData: technologyData && technologyData.length > 0 ? technologyData : [],
         manufacturingData: manufacturingData && manufacturingData.length > 0 ? manufacturingData : [],
         retailData: retailData && retailData.length > 0 ? retailData :[],
         telecomData: telecomData && telecomData.length > 0 ? telecomData: [],
         mediaData: mediaData && mediaData.length > 0 ? mediaData: []
      }
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

    render(){
    return (
        <main id="main" className="inner_pages template_ss">
        <section className="page_section success_stories section_py section_grey">
           <div className="nav_wrap bg-white">
              <div className="container-fluid">
                 <div className="row">
                    <div className="col-12 fadeInUp wow" data-wow-delay=".1s">
                       <nav className="mynav">
                          <ul className="nav nav-tabs" id="scrollNav" role="tablist">
                             <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">All</a>
                             </li>
                             {
                                 this.state.successNav && this.state.successNav.length > 0 && this.state.successNav.map((sdata,index) =>{
                                    return (
                                       <li className="nav-item" key={index}>
                                          <a className="nav-link" data-toggle="tab" href={`#nav-${removeSlash(sdata.url)}`} role="tab" aria-controls={`#nav-${removeSlash(sdata.url)}`} aria-selected="false">{sdata.name}</a>
                                       </li>
                                    )
                                 })
                           }
                          </ul>
                          {/* <ul className="icon-grid-listing">
                             <li><button className="icon-grid active" disabled><span></span><span></span><span></span><span></span></button></li>
                             <li><button className="icon-list"><span></span><span></span></button></li>
                          </ul> */}
                          <span className="target"></span>
                       </nav>
                    </div>
                 </div>
              </div>
           </div>
           <div className="container-fluid">
              <div className="row">
                 <div className="col-12 fadeInUp wow" data-wow-delay=".1s">
                    <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                       <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-banking-tab">
                          <div className="all_section latest grid_view all_list_view">
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
                            let field_description = removeHTMLChars(fData.field_description);
                            let field_image = fData.field_thumbnail_image.url;
                            let field_image_alt = fData.field_thumbnail_image.alt;
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
                                             <p className="card-text"> {field_description}</p>
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
                                             <p className="card-text"> {field_description}</p>
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
   </div>

{
   this.state.field_discover_more && this.state.field_discover_more.length > 0 ?

   <div className="all_section discover_more grid_view fadeInUp wow all_list_view" data-wow-delay=".1s">
                              <h2 className="section_heading">Discover more</h2>
                              <div className="row">
                              {
    this.state.field_discover_more.map((discoverData,index) => {
       return Object.keys(discoverData).filter((disData) => disData !== 'field_title').map((dData,index) => {
         //  console.log(discoverData[dData].content.field_unique_url);
          return discoverData[dData].content.field_component_type && discoverData[dData].content.field_component_type.map((dsData, index) => {
             if(dsData.field_success_product_banner && dsData.field_success_product_banner.length > 0  && dsData.field_success_product_banner !== undefined){
                return dsData.field_success_product_banner.map((fData,index) => {
                  let field_description = removeHTMLChars(fData.field_description);
                  let field_image = fData.field_thumbnail_image.url;
                  let field_image_alt = fData.field_thumbnail_image.alt;
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

                       <div className="tab-pane fade" id="nav-banking" role="tabpanel" aria-labelledby="nav-banking-tab">
                           <div className="story_slider grid_view animated fadeInUp pt-5">

                       {
                          this.state.bankingData && this.state.bankingData.length > 0 ? this.state.bankingData.map((pBannerData, index) => {

                           let field_unique_url = pBannerData.content.field_unique_url;
                           return pBannerData.content.field_component_type && pBannerData.content.field_component_type.length > 0 && pBannerData.content.field_component_type.map((prodbanner, index) => {
                              if(prodbanner.field_success_product_banner !==undefined){
                                 let prd_data = prodbanner.field_success_product_banner;

                                 let field_description = removeHTMLChars(prd_data[0].field_description);
                                 let field_image = prd_data[0].field_thumbnail_image.url;
                                 let field_image_alt = prd_data[0].field_thumbnail_image.alt;
                                 let field_logo_image = prd_data[0].field_logo_image.url;
                                 let field_logo_alt = prd_data[0].field_logo_image.alt;
                                 let title = prd_data[0].field_title;

                                 return(
                                    <div className="slide-item" key={index}>
                                  <div className="row brand-row no-gutters animated fadeInUp">
                                     <div className="col-md-6 slider-col">
                                        <figure className="imgwrap brand-img"><img data-src={field_image} src="" className="lazy" alt={field_image_alt}/></figure>
                                     </div>
                                     <div className="col-md-6 slider-col white-box">
                                        <div className="card">
                                           <div className="card-block animated fadeInUp">
                                              <figure className="brand-logo"><img src={field_logo_image} alt={field_logo_alt} className="img-fluid"/></figure>
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
                        }): "No records Found!"
                       }


                     </div>

                       </div>
                       <div className="tab-pane fade" id="nav-financial-services" role="tabpanel" aria-labelledby="nav-financial-services-tab">
                           <div className="story_slider grid_view animated fadeInUp pt-5">

                           {
                          this.state.financeData && this.state.financeData.length > 0 ? this.state.financeData.map((pBannerData, index) => {

                           let field_unique_url = pBannerData.content.field_unique_url;
                           return pBannerData.content.field_component_type && pBannerData.content.field_component_type.length > 0 && pBannerData.content.field_component_type.map((prodbanner, index) => {
                              if(prodbanner.field_success_product_banner !==undefined){
                                 let prd_data = prodbanner.field_success_product_banner;

                                 let field_description = removeHTMLChars(prd_data[0].field_description);
                                 let field_image = prd_data[0].field_thumbnail_image.url;
                                 let field_image_alt = prd_data[0].field_thumbnail_image.alt;
                                 let field_logo_image = prd_data[0].field_logo_image.url;
                                 let field_logo_alt = prd_data[0].field_logo_image.alt;
                                 let title = prd_data[0].field_title;

                                 return(
                                    <div className="slide-item" key={index}>
                                  <div className="row brand-row no-gutters animated fadeInUp">
                                     <div className="col-md-6 slider-col">
                                        <figure className="imgwrap brand-img"><img data-src={field_image} src="" className="lazy" alt={field_image_alt}/></figure>
                                     </div>
                                     <div className="col-md-6 slider-col white-box">
                                        <div className="card">
                                           <div className="card-block animated fadeInUp">
                                              <figure className="brand-logo"><img src={field_logo_image} alt={field_logo_alt} className="img-fluid"/></figure>
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
                        }): "No records Found!"
                       }
                       </div>
                       </div>
                       <div className="tab-pane fade" id="nav-fmcg" role="tabpanel" aria-labelledby="nav-fmcg-tab">
                          <div className="story_slider grid_view animated fadeInUp pt-5">
                          {
                          this.state.fmcgData && this.state.fmcgData.length > 0 ? this.state.fmcgData.map((pBannerData, index) => {

                           let field_unique_url = pBannerData.content.field_unique_url;

                           return pBannerData.content.field_component_type && pBannerData.content.field_component_type.length > 0 && pBannerData.content.field_component_type.map((prodbanner, index) => {
                              if(prodbanner.field_success_product_banner !==undefined){
                                 let prd_data = prodbanner.field_success_product_banner;

                                 let field_description = removeHTMLChars(prd_data[0].field_description);
                                 let field_image = prd_data[0].field_thumbnail_image.url;
                                 let field_image_alt = prd_data[0].field_thumbnail_image.alt;
                                 let field_logo_image = prd_data[0].field_logo_image.url;
                                 let field_logo_alt = prd_data[0].field_logo_image.alt;
                                 let title = prd_data[0].field_title;

                                 return(
                                    <div className="slide-item" key={index}>
                                  <div className="row brand-row no-gutters animated fadeInUp">
                                     <div className="col-md-6 slider-col">
                                        <figure className="imgwrap brand-img"><img data-src={field_image} src="" className="lazy" alt={field_image_alt}/></figure>
                                     </div>
                                     <div className="col-md-6 slider-col white-box">
                                        <div className="card">
                                           <div className="card-block animated fadeInUp">
                                              <figure className="brand-logo"><img src={field_logo_image} alt={field_logo_alt} className="img-fluid"/></figure>
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
                        }): "No records Found"
                       }
                            </div>
                       </div>
                       <div className="tab-pane fade" id="nav-manufacturing" role="tabpanel" aria-labelledby="nav-manufacturing-tab">
                           <div className="story_slider grid_view animated fadeInUp pt-5">
                           {
                          this.state.manufacturingData && this.state.manufacturingData.length > 0 ? this.state.manufacturingData.map((pBannerData, index) => {

                           let field_unique_url = pBannerData.content.field_unique_url;

                           return pBannerData.content.field_component_type && pBannerData.content.field_component_type.length > 0 && pBannerData.content.field_component_type.map((prodbanner, index) => {
                              if(prodbanner.field_success_product_banner !==undefined){
                                 let prd_data = prodbanner.field_success_product_banner;

                                 let field_description = removeHTMLChars(prd_data[0].field_description);
                                 let field_image = prd_data[0].field_thumbnail_image.url;
                                 let field_image_alt = prd_data[0].field_thumbnail_image.alt;
                                 let field_logo_image = prd_data[0].field_logo_image.url;
                                 let field_logo_alt = prd_data[0].field_logo_image.alt;
                                 let title = prd_data[0].field_title;

                                 return(
                                    <div className="slide-item" key={index}>
                                  <div className="row brand-row no-gutters animated fadeInUp">
                                     <div className="col-md-6 slider-col">
                                        <figure className="imgwrap brand-img"><img data-src={field_image} src="" className="lazy" alt={field_image_alt}/></figure>
                                     </div>
                                     <div className="col-md-6 slider-col white-box">
                                        <div className="card">
                                           <div className="card-block animated fadeInUp">
                                              <figure className="brand-logo"><img src={field_logo_image} alt={field_logo_alt} className="img-fluid"/></figure>
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
                        }): "No records Found!"
                       }
                           </div>
                       </div>
                       <div className="tab-pane fade" id="nav-media-and-entertainment" role="tabpanel" aria-labelledby="nav-media-tab">
                           <div className="story_slider grid_view animated fadeInUp pt-5">
                           {
                          this.state.mediaData && this.state.mediaData.length > 0 ? this.state.mediaData.map((pBannerData, index) => {

                           let field_unique_url = pBannerData.content.field_unique_url;

                           return pBannerData.content.field_component_type && pBannerData.content.field_component_type.length > 0 && pBannerData.content.field_component_type.map((prodbanner, index) => {
                              if(prodbanner.field_success_product_banner !==undefined){
                                 let prd_data = prodbanner.field_success_product_banner;

                                 let field_description = removeHTMLChars(prd_data[0].field_description);
                                 let field_image = prd_data[0].field_thumbnail_image.url;
                                 let field_image_alt = prd_data[0].field_thumbnail_image.alt;
                                 let field_logo_image = prd_data[0].field_logo_image.url;
                                 let field_logo_alt = prd_data[0].field_logo_image.alt;
                                 let title = prd_data[0].field_title;

                                 return(
                                    <div className="slide-item" key={index}>
                                  <div className="row brand-row no-gutters animated fadeInUp">
                                     <div className="col-md-6 slider-col">
                                        <figure className="imgwrap brand-img"><img data-src={field_image} src="" className="lazy" alt={field_image_alt}/></figure>
                                     </div>
                                     <div className="col-md-6 slider-col white-box">
                                        <div className="card">
                                           <div className="card-block animated fadeInUp">
                                              <figure className="brand-logo"><img src={field_logo_image} alt={field_logo_alt} className="img-fluid"/></figure>
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
                        }): "No records Found!"
                       }

                           </div>
                       </div>
                       <div className="tab-pane fade" id="nav-retail" role="tabpanel" aria-labelledby="nav-retail-tab">
                           <div className="story_slider grid_view animated fadeInUp pt-5">
                           {
                          this.state.retailData && this.state.retailData.length > 0 ? this.state.retailData.map((pBannerData, index) => {

                           let field_unique_url = pBannerData.content.field_unique_url;

                           return pBannerData.content.field_component_type && pBannerData.content.field_component_type.length > 0 && pBannerData.content.field_component_type.map((prodbanner, index) => {
                              if(prodbanner.field_success_product_banner !==undefined){
                                 let prd_data = prodbanner.field_success_product_banner;

                                 let field_description = removeHTMLChars(prd_data[0].field_description);
                                 let field_image = prd_data[0].field_thumbnail_image.url;
                                 let field_image_alt = prd_data[0].field_thumbnail_image.alt;
                                 let field_logo_image = prd_data[0].field_logo_image.url;
                                 let field_logo_alt = prd_data[0].field_logo_image.alt;
                                 let title = prd_data[0].field_title;

                                 return(
                                    <div className="slide-item" key={index}>
                                  <div className="row brand-row no-gutters animated fadeInUp">
                                     <div className="col-md-6 slider-col">
                                        <figure className="imgwrap brand-img"><img data-src={field_image} src="" className="lazy" alt={field_image_alt}/></figure>
                                     </div>
                                     <div className="col-md-6 slider-col white-box">
                                        <div className="card">
                                           <div className="card-block animated fadeInUp">
                                              <figure className="brand-logo"><img src={field_logo_image} alt={field_logo_alt} className="img-fluid"/></figure>
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
                        }): "No records Found!"
                       }

                           </div>
                       </div>
                       <div className="tab-pane fade" id="nav-technology" role="tabpanel" aria-labelledby="nav-technology-tab">
                           <div className="story_slider grid_view animated fadeInUp pt-5">
                           {
                          this.state.technologyData && this.state.technologyData.length > 0 ? this.state.technologyData.map((pBannerData, index) => {

                           let field_unique_url = pBannerData.content.field_unique_url;

                           return pBannerData.content.field_component_type && pBannerData.content.field_component_type.length > 0 && pBannerData.content.field_component_type.map((prodbanner, index) => {
                              if(prodbanner.field_success_product_banner !==undefined){
                                 let prd_data = prodbanner.field_success_product_banner;

                                 let field_description = removeHTMLChars(prd_data[0].field_description);
                                 let field_image = prd_data[0].field_thumbnail_image.url;
                                 let field_image_alt = prd_data[0].field_thumbnail_image.alt;
                                 let field_logo_image = prd_data[0].field_logo_image.url;
                                 let field_logo_alt = prd_data[0].field_logo_image.alt;
                                 let title = prd_data[0].field_title;

                                 return(
                                    <div className="slide-item" key={index}>
                                  <div className="row brand-row no-gutters animated fadeInUp">
                                     <div className="col-md-6 slider-col">
                                        <figure className="imgwrap brand-img"><img data-src={field_image} src="" className="lazy" alt={field_image_alt}/></figure>
                                     </div>
                                     <div className="col-md-6 slider-col white-box">
                                        <div className="card">
                                           <div className="card-block animated fadeInUp">
                                              <figure className="brand-logo"><img src={field_logo_image} alt={field_logo_alt} className="img-fluid"/></figure>
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
                        }): "No records found!"
                       }
                           </div>
                       </div>
                       <div className="tab-pane fade" id="nav-telecom-and-others" role="tabpanel" aria-labelledby="nav-telecom-tab">
                           <div className="story_slider grid_view animated fadeInUp pt-5">
                           {
                          this.state.telecomData && this.state.telecomData.length > 0 ? this.state.telecomData.map((pBannerData, index) => {

                           let field_unique_url = pBannerData.content.field_unique_url;

                           return pBannerData.content.field_component_type && pBannerData.content.field_component_type.length > 0 && pBannerData.content.field_component_type.map((prodbanner, index) => {
                              if(prodbanner.field_success_product_banner !==undefined){
                                 let prd_data = prodbanner.field_success_product_banner;

                                 let field_description = removeHTMLChars(prd_data[0].field_description);
                                 let field_image = prd_data[0].field_thumbnail_image.url;
                                 let field_image_alt = prd_data[0].field_thumbnail_image.alt;
                                 let field_logo_image = prd_data[0].field_logo_image.url;
                                 let field_logo_alt = prd_data[0].field_logo_image.alt;
                                 let title = prd_data[0].field_title;

                                 return(
                                    <div className="slide-item" key={index}>
                                  <div className="row brand-row no-gutters animated fadeInUp">
                                     <div className="col-md-6 slider-col">
                                        <figure className="imgwrap brand-img"><img data-src={field_image} src="" className="lazy" alt={field_image_alt}/></figure>
                                     </div>
                                     <div className="col-md-6 slider-col white-box">
                                        <div className="card">
                                           <div className="card-block animated fadeInUp">
                                              <figure className="brand-logo"><img src={field_logo_image} alt={field_logo_alt} className="img-fluid"/></figure>
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
                        }): "No records Found!"
                       }
                           </div>
                       </div>
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
