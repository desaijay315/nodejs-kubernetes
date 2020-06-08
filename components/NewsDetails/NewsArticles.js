import moment from 'moment';


const  NewsArticles = (props) => {

  const { newsarticles } = props

    return (
      <>
      {
        newsarticles && newsarticles.length > 0 ? 
        <section className="page_section all_articles">

          <div className="container-fluid">
            <div className="row head_row align-items-center">

           <div className="col-lg-4 col-md-12">
             <h2 className="section_heading">More Articles</h2>
           </div>

          
            </div>

            <div className="grid row">
              {
                newsarticles.length > 0 && newsarticles.map((articleData, index) => {
                    let field_date  = articleData.field_date ?  moment(new Date(articleData.field_date)).format('LL') : "";
                    let field_description = articleData.field_description ? articleData.field_description: "";
                    let field_title = articleData.field_title ? articleData.field_title:"";
                    let field_image = articleData.field_image.url ? articleData.field_image.url: "";
                    let field_image_alt = articleData.field_image.alt ? articleData.field_image.alt: "";
                    let field_link_title = articleData.field_link_detail[0].field_link.title ? articleData.field_link_detail[0].field_link.title : "";
                    let field_link_uri = articleData.field_link_detail[0].field_link.uri ? articleData.field_link_detail[0].field_link.uri: "";

                    return(
                    <div className="col-md-4 card-col news" data-category="news" key={index}>
                    <div className="card news-card">
                        <div className="card-body">
                          <div className="news-date">{field_date}</div>
                          <div className="news-desc">
                          <div className="news-img"><img src={field_image} alt={field_image_alt} /></div>
                          <div className="news-title"><h3>{field_description}</h3></div>
                          </div>
                          <div className="view-more"><a href={field_link_uri} className="btn btn-secondary">{field_link_title}</a></div>
                        </div>
                      </div>
                    </div>
                    )
                })
              }
              
            </div>

             
              </div>


      </section>
        : null
      }
      </>
      
    )
}


export default NewsArticles;