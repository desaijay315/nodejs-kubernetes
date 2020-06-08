
import {removeHTMLChars} from '../../action/helpers';

const HomeThinkingForward = (props) => {
    const { thinkingForwardData, thinkingHeading} = props;

    // console.log(thinkingForwardData);
    let first_image_url = thinkingForwardData && thinkingForwardData.length > 0 &&  thinkingForwardData[0].field_image && thinkingForwardData[0].field_image.url ? thinkingForwardData[0].field_image.url: "";
    let first_image_alt = thinkingForwardData && thinkingForwardData.length > 0 &&  thinkingForwardData[0].field_image && thinkingForwardData[0].field_image.alt ? thinkingForwardData[0].field_image.alt: "";

    let first_vid_uri = thinkingForwardData && thinkingForwardData &&thinkingForwardData[0].field_video_links && thinkingForwardData &&thinkingForwardData[0].field_video_links.length > 0 && thinkingForwardData[0].field_video_links[0].field_link.uri ? thinkingForwardData[0].field_video_links[0].field_link.uri: "";
    let thinkingHead = thinkingHeading ? thinkingHeading: "";

    return (
        <>
        {
            thinkingForwardData && thinkingForwardData.length > 0 ?
            
                    <section className="page_section fwd_thinking_section">
                    <div className="container-fluid overflowXhidden">
                    <h2 className="section_heading fadeInRight wow">{thinkingHead}</h2>
                    <div className="av_box main_av_box videoContain">
                    <div className="video_wrapper">
                     <img className="lazy w-100 videoImg" data-src={first_image_url} src="" alt={first_image_alt}/>
                     <a className="video_link showModal" data-href={first_vid_uri}><img src="/img/Play_icon.svg" alt=""/></a>
                   
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
                    
                    <div className="desc_wrap">
                        {
                            thinkingForwardData && thinkingForwardData.length > 0 && thinkingForwardData.map((forwardData, index) => {
                                let field_title = forwardData ? forwardData.field_title : "";
                                let field_description = forwardData ? removeHTMLChars(forwardData.field_description) : "";

                                return (
                                    <div className="av_desc" data-text={`video_text_0${index}`} key={index}>
                                    <p className="name">{field_title}</p>
                                    <p className="desig">{field_description}</p>
                                </div>

                                )})
                        }
                     </div>
                </div>


               </div>
                <div id="videoThumb" className="vid_thumbcarousel">
                {
                            thinkingForwardData && thinkingForwardData.length > 0 && thinkingForwardData.map((forwardData, index) => {
                                let field_thumbnail_image = forwardData ? forwardData.field_thumbnail_image.url : "";
                                let video_link = forwardData.field_video_links.length > 0 && forwardData.field_video_links[0].field_link ? forwardData.field_video_links[0].field_link.uri : "";
                                let video_title = forwardData.field_video_links.length > 0 && forwardData.field_video_links[0].field_link ? forwardData.field_video_links[0].field_link.title : "";

                                return (
                                    <div data-img-link={field_thumbnail_image} data-text-link={`video_text_0${index}`}data-href={video_link} className={index === 0? "videoLink active": "videoLink"} key={index}>
                                    <img src={field_thumbnail_image} alt=""/>
                                </div>

                                )})
                        }
                
                </div>
            </div>
         </section>
            : null
        }
        </>
        
    )
}


export default HomeThinkingForward;