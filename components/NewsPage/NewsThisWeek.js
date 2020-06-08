import moment from 'moment';
import {link_is_external} from '../../action/helpers';


const NewsThisWeek  = (props) => {

  const { headingComponent, thisWeekData, thisweekTitle } = props;

    return (
        <section className="page_section news_thisweek">

        <div className="container-fluid">
            <div className="row intro align-items-center justify-content-center fadeInUp wow" data-wow-delay=".4s">
              {
                headingComponent && headingComponent.length > 0 && headingComponent.map((headData, index) => {
                  let field_title = headData.field_title ? headData.field_title : "";
                    return (
                      <div className="col-10" key={index}>
                        {field_title}
                      </div>
                    )
                })
             }
              
            </div>

            <div className="row fadeInUp wow" data-wow-delay=".4s">
              <div className="col-12">
                <h2 className="section_heading">{thisweekTitle}</h2>

                <div className="thisweek_container">
                  <div className="row">
                    {
                      thisWeekData && thisWeekData.length > 0 && thisWeekData.map((weekData, index) => {                        
                        let field_date  = weekData.field_date ? moment(new Date(weekData.field_date)).format('LL'): "";
                        let field_description = weekData.field_description ? weekData.field_description : "" ;
                        let field_title = weekData.field_title ? weekData.field_title : "";
                        let field_image = weekData.field_image.url ? weekData.field_image.url: "";
                        let field_image_alt = weekData.field_image.alt ? weekData.field_image.alt: "";
                        let field_link_title = weekData.field_link_detail[0].field_link.title ? weekData.field_link_detail[0].field_link.title: "";
                        let field_link_uri = weekData.field_link_detail[0].field_link.uri ? weekData.field_link_detail[0].field_link.uri: "";

                        let external_link_check = 0;
                        if(link_is_external(field_link_uri)){
                          external_link_check = 1;
                        }                        
                        
                        if(index === 0){
                          return (

                            <div className="col-md-6 card-col" key={index}>
                            <div className="card news-card main-news-card">
                              <div className="card-body">
                              <div className="news-date">{field_date}</div>
                                <div className="news-desc">
                                <div className="news-img imgwrap"><img className="lazy" data-src={field_image} src="" alt={field_image_alt} /></div>
                                <div className="news-title"><h3>{field_description}</h3></div>
                                </div>
                          <div className="view-more">
                            {
                              external_link_check === 1 ? <a target="_blank" rel="noopener" href={field_link_uri} className="btn btn-secondary">{field_link_title}</a> :
                              <a href={field_link_uri} className="btn btn-secondary">{field_link_title}</a>
                            }
                            </div>
                              </div>
                            </div>
                          </div>

                            )
                          
                        }else{
                          return (

                            <div className="col-md-3 card-col" key={index}>
                         <div className="card news-card">
                          <div className="card-body">
                            <div className="news-date">{field_date}</div>
                            <div className="news-desc">
                            <div className="news-img"><img src={field_image} alt={field_image_alt} /></div>
                            <div className="news-title"><h3>{field_description}</h3></div>
                          </div>
                          <div className="view-more">
                          {
                              external_link_check === 1 ? <a target="_blank" href={field_link_uri} className="btn btn-secondary">{field_link_title}</a> :
                              <a href={field_link_uri} className="btn btn-secondary">{field_link_title}</a>
                            }
                            </div>
                          </div>
                        </div>
                      </div>

                            )
                        }
                        
                      })

                    }
                    
                    
                      
                  </div>
                </div>

              </div>
            </div>

          </div>

          </section>

    )
}


export default NewsThisWeek;