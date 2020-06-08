import React, { Component } from "react";
import {removeHTMLChars, removeSlash, capitalizeFirstLetter} from '../../action/helpers';

class HomeSuccessStories extends Component {

    constructor(props){
        super(props);

        const {successStoriesData, successNav, successHeading} = props;

        this.state = {
            successNav: successNav[0].items,
            successStoriesData: successStoriesData,
            valuechangedData: false,
            successHead: successHeading ? successHeading: ""
        }

        this.showStories = this.showStories.bind(this);
        this.valueChanged = this.valueChanged.bind(this);
    }

   componentDidMount(){
       
    /*$('.icon-grid-listing li button').click(function(){
        $('.icon-grid-listing li button').removeClass('active').removeAttr('disabled');
        $(this).addClass('active').attr('disabled','disabled');
      });*/

      /*$('.success_stories .nav_wrap .icon-grid-listing .icon-list').click(function(){
        $('#successCarousel').owlCarousel('destroy');
        $('#successCarousel').addClass('list');
        $('#successCarousel').addClass('tab-content');
        $('#successCarousel').removeClass('grid_view');
        $('#carouselNav').addClass('listNav');

        console.log($('#carouselNav nav ul li.active a').attr('href').replace('#', ''));

        let cat   = $('#carouselNav nav ul li.active a').attr('href');
        // let mycat = cat.shift().join();
        if(cat){

            let arr = cat.split("");
            arr.shift();
            let getcat = arr.join("");
            console.log(arr.join(""));

            $('.slide-item').addClass('hide');
            $('.slide-item').each(function () {
                $(this).removeClass('hide');
            })
        }

    });*/
}


    showStories = (cat) => {
    $('.slide-item').addClass('hide');
    $('.slide-item').each(function () {
        if($(this).data('cat') === cat){
            $(this).removeClass('hide');
        }
    })
  }

  

 valueChanged = (string) => {
     let pushArr = new Set();
     
     if(pushArr.has(string)){
        this.setState({valuechangedData:false})
     }else{
        this.setState({valuechangedData:true})
     }
     return true;
 }

    render(){
        return (
            <section className="page_section success_stories section_py section_grey">

            <div className="container-fluid">
        <h2 className="section_heading fadeInRight wow">{this.state.successHead}</h2>
            </div>

            <div className="nav_wrap">

                    <div className="container-fluid position-relative">
                            {/* <ul className="icon-grid-listing">
                            <li><button className="icon-grid active" disabled><span></span><span></span><span></span><span></span></button></li>
                            <li><button className="icon-list"><span></span><span></span></button></li>
                            </ul> */}


            <div id="carouselNav">

                        <nav className="mynav position-relative navmargin">
                            <ul id="scrollNav">
                                {
                                    this.state.successNav.map((SuccessNavData, index) => {
                                        return (
                                            <li className={index===0?`nav-item active ${removeSlash(SuccessNavData.url)}` : `nav-item ${removeSlash(SuccessNavData.url)}`} key={index}><a href=
                                            {`#${removeSlash(SuccessNavData.url)}`}>{SuccessNavData.name}</a></li>
                                        )
                                    })
                                }
                            </ul>
                            <span className="target"></span>
                        </nav>
                    </div>
    </div>


            </div>

            <div className="success_stories grey_bg">
                    <div className="container-fluid" style={{overflow: "hidden", margin: "0 auto"}}>
                    <div id="successCarousel" className="story_slider animated fadeInUp list tab-content">
                        {
this.state.successStoriesData && this.state.successStoriesData.length > 0 && this.state.successStoriesData.map((successData, index) => {

return Object.keys(successData).filter(sData => sData !== 'field_component_title').map((carouselData, index) => {
    // console.log(successData[carouselData]);
    let field_unique_url = successData[carouselData].content.field_unique_url;
    let field_key = successData[carouselData].content.field_key;
    return successData[carouselData].content &&  successData[carouselData].content !== undefined && successData[carouselData].content.field_component_type && successData[carouselData].content.field_component_type.length > 0 && successData[carouselData].content.field_component_type.map((inCData, index) => {
        
        if(inCData.field_success_product_banner !==undefined && inCData.field_success_product_banner){
        
            return inCData.field_success_product_banner.map((prodData, index) => {

                let field_title = prodData.field_title ? prodData.field_title : "";
                let field_description = prodData.field_description ? removeHTMLChars(prodData.field_description) : "";
                // console.log(field_description);

                let field_image_url = prodData.field_thumbnail_image.url ? prodData.field_thumbnail_image.url : ""; 
                let field_image_alt = prodData.field_thumbnail_image.alt ? prodData.field_thumbnail_image.alt : ""; 
                let field_logo_image = prodData.field_logo_image.url ? prodData.field_logo_image.url : ""; 
                let field_logo_alt = prodData.field_logo_image.alt ? prodData.field_logo_image.alt : "";
                let view_more_title = prodData.field_link_detail[0].field_link.title ? prodData.field_link_detail[0].field_link.title : ""; 

return (
    <div data-cat={field_key} 
    data-hash ={field_key} 
    className="slide-item" key={index}>
    <div className="row brand-row no-gutters animated fadeInLeft">
        <div className="col-md-6 slider-col">
            <figure className="brand-img"><img className="lazy" data-src={field_image_url} src="" alt={field_image_alt}/></figure>
        </div>
        <div className="col-md-6 slider-col white-box">
            <div className="card">
                <div className="card-block animated fadeInRight">
                    <figure className="brand-logo"><img className="lazy img-fluid" data-src={field_logo_image} src="" alt={field_logo_alt}/></figure>
                    <h4 className="card-title">{field_title}</h4>
                    <p className="card-text">{field_description}</p>
                </div>
                <div className="card-footer">
                <a href={field_unique_url} className="btn btn-secondary">{view_more_title}</a>
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
                    </div>
                </div>
            </section>
        )
    }
}

export default HomeSuccessStories;