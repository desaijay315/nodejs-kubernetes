import moment from 'moment';
import {removeHTMLChars} from '../../action/helpers';

import {link_is_external} from '../../action/helpers';

const  NewsDetails = (props) => {

  const { newsDetails } = props;

    return(
      <section className="page_section news_main section_grey fadeInUp wow" data-wow-delay=".4s">
      {
        newsDetails && newsDetails.length > 0 &&
        newsDetails.map((newsProdData, index) => {

          let field_date  = newsProdData.field_date ? moment(new Date(newsProdData.field_date)).format('LL') : "";

          let field_image = newsProdData.field_image ? newsProdData.field_image.url : ""; 
          let field_image_alt = newsProdData.field_image ? newsProdData.field_image.alt : ""; 

          let field_title =  newsProdData.field_title ? newsProdData.field_title : ""; 

          let field_description = newsProdData.field_description ? removeHTMLChars(newsProdData.field_description) : ""; 

          let field_link_detail = newsProdData.field_link_detail[0].field_link.title ? newsProdData.field_link_detail[0].field_link.title: "";
          let field_link_uri = newsProdData.field_link_detail[0].field_link.uri ? newsProdData.field_link_detail[0].field_link.uri: "";

          let external_link_check = 0;
          if(link_is_external(field_link_uri)){
            external_link_check = 1;
          }


          return (
            <div className="container-fluid" key={index}>
            <div className="row no-gutters">
              <div className="col-lg-5 col-md-12">
                <figure className="news_img imgwrap"><img data-src={field_image} src="" alt={field_image_alt} className="img-fluid w-100 lazy" /></figure>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="news_box">
                  <div className="news-date">{field_date}</div>
                  <div className="news-title">
                    <h2>{field_title}</h2></div>
                  <div className="news-detail">{field_description}</div>
                  <div className="view-more">
                    {
                      external_link_check === 1 ? <a target="_blank" rel="noopener" href={field_link_uri} className="btn btn-primary btn-white">{field_link_detail}
                      </a> : <a href={field_link_uri} className="btn btn-primary btn-white">{field_link_detail}
                    </a>
                    }
                    
                    </div>
                </div>
              </div>
            </div>
          </div>
          )

        })


      }

          

         </section>
    )
}



export default NewsDetails;