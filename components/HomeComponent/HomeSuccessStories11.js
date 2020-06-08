import React, { Component } from "react";

class HomeSuccessStories extends Component {

    constructor(props){
        super(props);

        const {successStoriesData, successNav} = props;

        this.state = {
            field_component_title: successStoriesData.field_component_title,
            field_show_more_link: successStoriesData.field_show_more_link,
            field_stories_content_reference: successStoriesData.field_stories_content_reference,
            field_title: successStoriesData.field_title,
            successNav: successNav[0].items,
            corouselData: []
        }

        // console.log(this.state.field_stories_content_reference);
        // console.log(this.state.successNav);

        this.showStories = this.showStories.bind(this);
        this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
    }

   componentDidMount(){

    $('.icon-grid-listing li button').click(function(){
        $('.icon-grid-listing li button').removeClass('active').removeAttr('disabled');
        $(this).addClass('active').attr('disabled','disabled');
      });

      $('.success_stories .nav_wrap .icon-grid-listing .icon-list').click(function(){
        $('#successCarousel').owlCarousel('destroy');
        $('#successCarousel').addClass('list');
        $('#successCarousel').addClass('tab-content');
        $('#successCarousel').removeClass('grid_view');
        $('#carouselNav').addClass('listNav');

        let selCat = $('#carouselNav li.active a').attr('href').replace('#', '');
        $('.slide-item').addClass('hide');
        $('.slide-item').each(function () {
            if($(this).data('cat') === selCat){
                $(this).removeClass('hide');
            }
        })
      });
   }

    showStories = (cat) => {
    $('.slide-item').addClass('hide');
    $('.slide-item').each(function () {
        if($(this).data('cat') === cat){
            $(this).removeClass('hide');
        }
    })
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    render(){
        return (
            <section className="page_section success_stories section_py section_grey">

            <div className="container-fluid">
        <h2 className="section_heading fadeInRight wow">{this.state.field_title}</h2>
            </div>

            <div className="nav_wrap">

                    <div className="container-fluid position-relative">
                            <ul className="icon-grid-listing">
                            <li><button className="icon-grid active" disabled><span></span><span></span><span></span><span></span></button></li>
                            <li><button className="icon-list"><span></span><span></span></button></li>
                            </ul>


            <div id="carouselNav">

                        <nav className="mynav position-relative">
                            <ul>
                                {
                                    this.state.successNav.map((SuccessNavData, index) => {
                                        return (
                                            <li className={`nav-item ${SuccessNavData.key}`} key={index}><a href=
                                            {`#${SuccessNavData.key}`}>{SuccessNavData.name}</a></li>
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
                        <div id="successCarousel" className="story_slider grid_view animated fadeInUp">
                            {
                                this.state.field_stories_content_reference.map((cdata,index) => {
                                return(
                                Object.values(cdata).map((data,index) => {
                                    if(data !== null){
                                        let field_term_name = data.content.field_terms.content.field_key;
                                        let main_logo_url = data.content.field_product_banner_component[0].field_logo_image.url;
                                        let main_logo_alt = data.content.field_product_banner_component[0].field_logo_image.alt;
                                        let main_image_url = data.content.field_product_banner_component[0].field_image.url;
                                        let main_image_alt = data.content.field_product_banner_component[0].field_image.alt;
                                        let field_description = data.content.field_product_banner_component[0].field_image.field_description;
                    return (
                        <div data-cat={field_term_name} data-hash={field_term_name} className="slide-item" key={index}>
                                <div className="row brand-row no-gutters animated fadeInLeft">
                                    <div className="col-md-6 slider-col">
                                        <figure className="brand-img"><img className="lazy" data-src={main_image_url} src="" alt={main_image_alt} /></figure>
                                    </div>
                                    <div className="col-md-6 slider-col white-box">
                                        <div className="card">
                                            <div className="card-block animated fadeInRight">
                                                <figure className="brand-logo"><img className="lazy img-fluid" data-src={main_logo_url} src="" alt={main_logo_alt}/></figure>
                                                <h4 className="card-title">{this.capitalizeFirstLetter(field_term_name)}</h4>
                                        <p className="card-text">{field_description}</p>
                                            </div>
                                            <div className="card-footer">
                                                <a href="#" className="btn btn-secondary">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                        }
                    })
                        
                    )
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