



const HomePartnerAward = (props) => {
    const {partnersAwardData} = props;

    const { field_left_section, field_right_section } = partnersAwardData[0];

    return (
        <section className="page_section partner_award_section">
        <div className="container-fluid">
           <div className="row">
              <div className="col-md-6 pt-5 pb-5 col-partners">
                 <div className="partners_section">
    <h2 className="section_heading fadeInRight wow">{field_left_section[0].field_title}</h2>
    <p className="title-text fadeInRight wow">{field_left_section[0].field_description}</p>
                    <ul className="partners_list list-unstyled fadeInUp wow">
                        {
                            field_left_section && field_left_section.length > 0 &&field_left_section.map((partnerData, index) => (
                                partnerData.field_logo_component.map((ImgData, index) =>(
                                    <li key={index}><img src={ImgData.field_image.url} alt={ImgData.field_image.alt} /></li>
                                ))
                                
                            ))
                        }
                    </ul>
                    <p className="text-center">
                    {
                            field_left_section && field_left_section.length > 0 ? <a href={field_left_section[0].field_link_details_component[0].field_link.uri} className="btn btn-primary">{field_left_section[0].field_link_details_component[0].field_link.title}</a> : null
                        }
                       
                    </p>
                 </div>
              </div>
              <div className="col-md-6 pt-5 pb-5">
                 <div className="award_section">
                    <h2 className="section_heading fadeInRight wow">{field_right_section[0].field_title}</h2>
                    
                    <div className="award_slider fadeInUp wow">
                    {
                        field_right_section && field_right_section.length > 0 && field_right_section.map((awardsData, index) => (
                            awardsData.field_logo_component.map((ImgData, index) =>(
                                <div className="slide-item text-center" key={index}>
                                    <p className="title-text fadeInRight wow">{ImgData.field_image.title ? ImgData.field_image.title: "title here"}</p>
                                    <img src={ImgData.field_image.url} alt={ImgData.field_image.alt} className="d-inline-block img-fluid" />
                                </div>
                            ))
                        ))
                        }
                    </div>
                    <p className="text-center">
                        {
                            field_right_section && field_right_section.length > 0 ? <a href={field_right_section[0].field_link_details_component[0].field_link.uri} className="btn btn-primary">{field_right_section[0].field_link_details_component[0].field_link.title}</a> : null
                        }
                       
                    </p>
                 </div>
              </div>
           </div>
        </div>
     </section>
    )
}

export default HomePartnerAward;