import React, {Component} from 'react';

import {getCategoryDataTemp} from '../../action/drupal-api-handler';

import {removeHTMLChars, removeSlash} from '../../action/helpers';

class SuccessStoryDetail extends Component{

   constructor(props) {
      super(props);

      const { categoryData, successNav, slugData } = props;

      this.state = {
         categoryData: categoryData,
         successNav: successNav[0].items,
         slugData: slugData,
         field_success_product_banner: [],
         field_success_opportunity: [],
         field_success_detail_two_column: [],
         field_success_detail_awards: [],
         field_client_reviews_component: [],
         field_success_get_in_touch: [],
         activeLink: null,
         active:true
      }

      this.getCatData = this.getCatData.bind(this);
   }

   componentDidMount(){

      let cntData = this.state.categoryData.content.field_component_type && this.state.categoryData.content.field_component_type.length > 0 && this.state.categoryData.content.field_component_type.map((cData,index) => {
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

      const selectedCatData = await getCategoryDataTemp(string);

      this.setState({slugData:string});

      let cntData = selectedCatData && selectedCatData[0].content && selectedCatData[0].content.field_component_type && selectedCatData[0].content.field_component_type.length > 0 && selectedCatData[0].content.field_component_type.map((cData,index) => {
         return (
            cData
         )
      });

      this.setState({
         field_success_product_banner: [],
         field_success_opportunity: [],
         field_success_detail_two_column: [],
         field_success_detail_awards: [],
         field_client_reviews_component: [],
         field_success_get_in_touch: []
      });

      this.setState({active:false})
      for(const key in cntData){
         for(const keyd in cntData[key]){
            this.state[keyd] = cntData[key][keyd];
         }
      }

      // this.setState(this.state);
      // this.setState({active:true})
      //    wow = new WOW({
      //       animateClass: 'animated',
      //       offset: 100
      //   });
      //   wow.init();

     setTimeout(
      function() {
         this.setState(this.state);
         this.setState({active:true})
         wow = new WOW({
            animateClass: 'animated',
            offset: 100,
            live: true
        });
        wow.init();

        $('.award_slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: true,
         arrows: false,
         autoplay:true,
         autoplaySpeed:3000,
     });
      }
      .bind(this),
      0
  );


   

}

   componentWillUnmount(){

   }



   render(){
    return (
        <>
        <div className="nav_wrap bg-white">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-12 fadeInUp wow" data-wow-delay=".1s">
                        <nav className="mynav">
                           <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                              {/* <li className="nav-item">
                                 <a className="nav-link" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="false">All</a>
                              </li> */}
                              {
                         this.state.successNav && this.state.successNav.map((sdata,index) =>{
                              if(this.state.slugData === removeSlash(sdata.url)){
                                 this.state.activeLink = "nav-link active";
                              }else{
                                 this.state.activeLink = "nav-link";
                              }
                             return (
                              // <li className="nav-item" key={index}>
                              //    <a onClick={() => this.getCatData(this.removeSlash(sdata.url)) } className={this.state.activeLink} data-toggle="tab" href={`#nav-${this.removeSlash(sdata.url)}`} role="tab" aria-controls={`#nav-${this.removeSlash(sdata.url)}`} aria-selected="false">{sdata.name}</a>
                              // </li>
                               <li className="nav-item" key={index}>
                                 <a className={this.state.activeLink} href={`/success-stories?section=${removeSlash(sdata.url)}`}>{sdata.name}</a>
                              </li>
                             )
                          })
                       }
                           </ul>
                           {/*<ul className="icon-grid-listing">
                              <li><button className="icon-grid" disabled><span></span><span></span><span></span><span></span></button></li>
                              <li><button className="icon-list" disabled><span></span><span></span></button></li>
                           </ul>*/}
                        </nav>
                     </div>
                  </div>
               </div>
            </div>

                     <div className="tab-content pt-0 fadeInUp wow" id="nav-tabContent" data-wow-delay=".1s">
                        <div className={this.state.active ? "tab-pane fade show active": "tab-pane fade"} id={`nav-${this.state.slugData}`} role="tabpanel" aria-labelledby={`nav-${this.state.slugData}-tab`}>
                          <div className="detail-container grey_bg">
                            <div className="container-fluid">
                               {
                                 this.state.field_success_product_banner && this.state.field_success_product_banner.length > 0 ?
                                 <div className="prod_banner">
                                 <div className="row">
                                   <div className="col-md-7">
                                      {
                                         this.state.field_success_product_banner[0].field_link_detail && this.state.field_success_product_banner[0].field_link_detail.length > 0 && this.state.field_success_product_banner[0].field_link_detail[1] && this.state.field_success_product_banner[0].field_link_detail[1].field_link.uri ? 
                                         <figure className="img_hover imgwrap brand-img"><img data-src={this.state.field_success_product_banner[0].field_image.url ? this.state.field_success_product_banner[0].field_image.url: ""} src="" className="lazy showModal cursor-pointer" alt={this.state.field_success_product_banner[0].field_image.alt ? this.state.field_success_product_banner[0].field_image.alt: ""} data-href={this.state.field_success_product_banner[0].field_link_detail[1].field_link.uri ? this.state.field_success_product_banner[0].field_link_detail[1].field_link.uri: ""} />
                                         <a className="video_icon"><img src="/img/Play_icon.svg" alt="" /></a>
                                       <div className="video_modal" id="video_modal">
                                       <div className="modal-dialog modal-lg" role="document">
                                          <div className="modal-content">
                                          <div className="modal-body">
                                                <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">
                                                   <i className="fal fa-times"></i>
                                                </button>
                                             <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                                <iframe className="embed-responsive-item" src="" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                             </div>
                                          </div>
                                          </div>
                                       </div>
                                    </div>
                                    </figure> : 
                                         <figure className="img_hover imgwrap"><img data-src={this.state.field_success_product_banner[0].field_image.url ? this.state.field_success_product_banner[0].field_image.url: ""} src="" alt={this.state.field_success_product_banner[0].field_image.alt ? this.state.field_success_product_banner[0].field_image.alt:""} className="w-100 lazy"/></figure>
                                      }
                                   </div>

                                   <div className="col-md-5">

                                     <div className="bnr_content d-flex flex-column h-100 justify-content-center">
                                       <div className="product_logo">
                                         <img src={this.state.field_success_product_banner[0].field_logo_image.url} alt={this.state.field_success_product_banner[0].field_logo_image.alt}/>
                                       </div>
                                       <div className="product_text">
                                         <h2>{this.state.field_success_product_banner[0].field_title}</h2>
                                         <h3>{this.state.field_success_product_banner[0].field_description}</h3>
                                       </div>
                                     </div>

                                   </div>

                                 </div>



                               </div>
                                 : null
                               }

                              {
                                 this.state.field_success_opportunity && this.state.field_success_opportunity.length > 0 ?
                                 <div className="the_opportunity">

                                 <div className="row">
                                    <div className="col-md-7">
                                       <h3 className="section_heading fadeInUp wow" data-wow-delay=".1s">{this.state.field_success_opportunity[0].field_title ? this.state.field_success_opportunity[0].field_title: ""}</h3>
                                       {/* <p className="fadeInUp wow" data-wow-delay="1s"> */}
                                          <p className="fadeInUp wow" data-wow-delay="1s" dangerouslySetInnerHTML={ {__html: this.state.field_success_opportunity[0].field_subtitle ? this.state.field_success_opportunity[0].field_subtitle : ""}}/>
                                       {/* </p> */}
                                    </div>
                                 </div>

                               <div className="row opportunity_slider">

                                 {
                                    this.state.field_success_opportunity[0].field_image_component.map((imageData,index) => {
                                       return (
                                          <div className="col-lg-4 col-md-4 slide-item" key={index}>
                                          <figure className="img_hover fadeInUp wow" data-wow-delay=".1s">
                                          <img src={imageData.field_image.url ? imageData.field_image.url: ""} className="w-100" alt={imageData.field_image.alt ? imageData.field_image.alt: ""}/>
                                          </figure>
                                       </div>
                                       )
                                    })
                                 }
                              </div>

                              </div>
                                 : null
                              }


                            </div>
                          </div>
                           {
                              this.state.field_success_detail_two_column && this.state.field_success_detail_two_column.length  > 0 ?
                              <div className="detail-container story_detail_container">
                              <div className="container-fluid">
                                <div className="row">
                                <div className="col-md-7">

                                   {
                                      this.state.field_success_detail_two_column[0].field_left_part.map((leftData,index) =>{
                                         return(
                                            <div className="content-block" key={index}>
                                            <h3 className="section_heading fadeInUp wow" data-wow-delay=".4s">{leftData.field_title ? leftData.field_title: ""}</h3>
                                            <p className="fadeInUp wow" data-wow-delay=".1s" dangerouslySetInnerHTML={ {__html: leftData.field_description} } />
                                         </div>
                                         )
                                      })
                                   }
                                </div>

                                <div className="col-md-5">
                                    <div className="content-block">

                                  <h3 className="section_heading fadeInUp wow" data-wow-delay=".4s">{this.state.field_success_detail_two_column[0].field_right_part[0].field_title ? this.state.field_success_detail_two_column[0].field_right_part[0].field_title: ""}</h3>
                                <p className="dark fadeInUp wow" data-wow-delay=".4s">{this.state.field_success_detail_two_column[0].field_right_part[0].field_description ? removeHTMLChars(this.state.field_success_detail_two_column[0].field_right_part[0].field_description): ""}</p>
                                  <ul>
                                     {
                                        this.state.field_success_detail_two_column[0].field_right_part.map((rData,index) =>{
                                           return rData.field_title_with_description.map((dDetails, index) => {

                                                let Delaydata = index === 1 ? ".7s" : index === 2 ? "1s" : "1.3s"
                                               return (
                                                 <li className="fadeInUp wow" data-wow-delay={`${Delaydata}`} key={index}>{dDetails.field_title ? dDetails.field_title :""}<br/>
                                                 <span>{dDetails.field_description ? removeHTMLChars(dDetails.field_description): ""}</span>
                                                 </li>
                                              )

                                           })


                                        })
                                     }

                                    </ul>
                                </div>


                                </div>

                              </div>

                            </div>

                            </div>
                              : null
                           }

                        {
                           this.state.field_success_detail_awards && this.state.field_success_detail_awards.length > 0 ?
                           <div className="detail-container product_award">
                            <div className="container-fluid">
                              <div className="row align-items-center">
                                <div className="col-md-6">
                                  <div className="award_txt fadeInUp wow" data-wow-delay=".1s">
                                    Awards
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  {/* <!-- added slider here 11/05 --> */}
                                  <div className="award_slider">
                                     {
                                        this.state.field_success_detail_awards.map((awardsData, index) => {
                                           return (

                                             <div className="item" key={index}>
                                             <div className="award_desc fadeInUp wow" data-wow-delay="1s">
                                             <div className="award_year">{awardsData.field_title ? awardsData.field_title :  ""}</div>
                                             <div className="award_name">
                                             {awardsData.field_subtitle}
                                             <span>{awardsData.field_description ? removeHTMLChars(awardsData.field_description): ""}</span>
                                            </div>
                                          </div>
                                    </div>

                                           )
                                        })
                                     }
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                           : null
                        }

                        {
                           this.state.field_client_reviews_component && this.state.field_client_reviews_component.length > 0 ?
                           <div className="detail-container client_reviews">

                           <div className="container-fluid">

                             <div className="row">
                               <div className="col-md-3">
                                 <div className="client_desc">
                                   <span className="quote"><img src="/img/inverted_left.svg" alt=""/></span>
                                   <figure className="img_hover"><img src={this.state.field_client_reviews_component[0].field_image.url} alt={this.state.field_client_reviews_component[0].field_image.alt} className="w-100"/></figure>
                                 <div className="client_name">
                                    <h4>{this.state.field_client_reviews_component[0].field_name ? this.state.field_client_reviews_component[0].field_name: ''} </h4>
                                    <p className="fadeInUp wow" data-wow-delay="1s">{this.state.field_client_reviews_component[0].field_designation ? this.state.field_client_reviews_component[0].field_designation: ""}</p>
                                 </div>
                                 </div>
                               </div>
                               <div className="col-md-9">
                                 <div className="review_content">
                                   <h3 className="fadeInUp wow" data-wow-delay=".1s">{this.state.field_client_reviews_component[0].field_title}</h3>
                                   <h4 className="fadeInUp wow" data-wow-delay=".1s">{this.state.field_client_reviews_component[0].field_subtitle}</h4>
                                     <p className="fadeInUp wow" data-wow-delay=".1s">{this.state.field_client_reviews_component[0].field_description ? removeHTMLChars(this.state.field_client_reviews_component[0].field_description): ""}</p>
                                 </div>
                               </div>
                             </div>

                             </div>
                             </div>
                           : null
                        }
                              {
                                 this.state.field_success_get_in_touch && this.state.field_success_get_in_touch.length > 0 ?
                                <div className="detail-container get_in_touch">
                                <div className="container-fluid">
                                  <div className="row justify-content-center">
                                    <div className="col-md-6 text-center">
                                      <h3 className="fadeInUp wow" data-wow-delay=".4s">{this.state.field_success_get_in_touch[0].field_title ? removeHTMLChars(this.state.field_success_get_in_touch[0].field_title) : ""}</h3>
                                      <p className="fadeInUp wow" data-wow-delay=".1s">{this.state.field_success_get_in_touch[0].field_description ? removeHTMLChars(this.state.field_success_get_in_touch[0].field_description): ""}</p>
                                      <p className="fadeInUp wow animated" data-wow-delay="1s"><a href={this.state.field_success_get_in_touch[0].field_links_component[0].field_link.uri} className="btn btn-primary">{this.state.field_success_get_in_touch[0].field_links_component[0].field_link.title ? removeHTMLChars(this.state.field_success_get_in_touch[0].field_links_component[0].field_link.title): ""} </a></p>
                                    </div>
                                  </div>
                                  </div>
                              </div>

                                 : null
                              }
                        </div>
                     </div>
                    </>
    )
   }
}


export default SuccessStoryDetail;
