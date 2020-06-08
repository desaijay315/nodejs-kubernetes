import React, { Component } from "react";


class ThinkingSection extends  Component{
    
    // // console.log(thinkingForwardData);
    // const {field_title, field_description, field_image, field_subtitle,field_video_link_details} = thinkingForwardData;

    constructor(props){
      super(props);
      const {thinkingForwardData} = props;

      this.state = {
        field_title: thinkingForwardData.field_title,
        field_description: thinkingForwardData.field_description,
        field_image: thinkingForwardData.field_image,
        field_subtitle: thinkingForwardData.field_subtitle,
        field_video_link_details: thinkingForwardData.field_video_link_details,
      }
    }

    componentDidMount(){
      
    }

    render(){
      return (
          <section className="page_section fwd_thinking_section">
          <div className="container-fluid">
            <h2 className="section_heading fadeInRight wow">{this.state.field_title}</h2>
            <div className="av_box main_av_box">
                <div className="video_wrapper">
                  {/* <!-- <div className="img_overlay"></div> --> */}
                  <img className="lazy w-100 videoImg" data-src={this.state.field_image.url} src="" alt={this.state.field_image.alt} />
                  <a className="video_link showModal" href="#" data-href="https://www.youtube.com/embed/oC63e7CmHOo" data-toggle="modal" data-target="#video_modal"><img src="/img/Play_icon.svg" alt="" /></a>

                  {/* <!--Modal: video --> */}
          <div className="modal fade video_modal" id="video_modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg" role="document">
                {/* <!--Content--> */}
                <div className="modal-content">
                  {/* <!--Body/--> */}
                  <div className="modal-body">
                      <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">
                          <i className="fal fa-times"></i>
                      </button>
                    <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                        <iframe className="embed-responsive-item" src="" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
                {/* <!--/.Content--> */}
              </div>
            </div>
            {/* <!-- @end Modal: video --> */}

                </div>
                <div className="av_desc position-relative fadeInRight wow" data-wow-delay=".1s">
                  <p className="name">{this.state.field_subtitle}</p>
                  <p className="desig">{this.state.field_description}</p>
                </div>
            </div>



          </div>


      </section>
      )
    }
}


export default ThinkingSection;