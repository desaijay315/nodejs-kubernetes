

const NewsDetails = (props) => {

  const { headingData, newsDetails } = props;

  

    return(
      <section className="page_section news_detail fadeInUp wow" data-wow-delay=".4s"><div className="container-fluid">
        {
          headingData && headingData.length > 0 && headingData.map((headingData, index) =>{
            let field_title = headingData.field_title ? headingData.field_title : "";
            return (
              <div className="row news_head_row" key={index}>
              <div className="col-md-12">
                <h2 className="section_heading">{field_title}</h2>
              </div>
            </div>
            )

          })
        }
        {
          newsDetails && newsDetails.length > 0 && newsDetails.map((mainD, index) =>{

            let image = mainD.field_image.url ? mainD.field_image.url : ""; 
            let image_alt = mainD.field_image.alt ? mainD.field_image.alt : ""; 
            let field_title = mainD.field_title ? mainD.field_title : ""; 
            let field_content = mainD.field_content ? mainD.field_content : ""; 
            return (
              <div key={index}>
                  <div className="row no-gutters">
                  <div className="col-lg-7 col-md-12">
                    <figure className="news_img"><img src={image} alt={image_alt} className="img-fluid w-100" /></figure>
                  </div>
                  <div className="col-lg-5 col-md-12">
                    <div className="news_box">
                      <div className="news-title">
                        <h2>
                          {field_title.replace(/<[^>]*>?/gm, '')}
                        </h2></div>
                    </div>
                  </div>
                  </div>
                  <div className="row detail_row">
                  <div className="col-md-12">
                     <div dangerouslySetInnerHTML={ {__html: field_content} } />
                  </div>
                </div>
                </div>
            )
          })
        }
      </div>
     </section>
    )
}



export default NewsDetails;