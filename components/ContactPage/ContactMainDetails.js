import ContactForm from './ContactForm';

const ContactMainDetails = props => {

   const { contactData } = props;
   const { content } = contactData;
   const {field_component_type} = content;
   
        return(
            <section className="page_section contactPage fadeInUp wow" data-wow-delay=".4s">
                <div className="container-fluid formContact">
                    <div className="row">
                        <ContactForm />
                        <div className="col-md-12 col-lg-5 section_grey p-5">
                        <h2 className="section_heading fadeInUp wow" data-wow-delay="1s">{field_component_type[1].field_title ? field_component_type[1].field_title: ""}</h2>
                    {
                        field_component_type.map((officeData,index) => {
                            if(index === 1) {
                                return(
                                officeData.field_our_office.map((offInnerData,index) => {
                                    let filed_link_url  = offInnerData.field_explore_link[0].field_link.uri ? offInnerData.field_explore_link[0].field_link.uri: "";
                                    let filed_link_title  = offInnerData.field_explore_link[0].field_link.title ? offInnerData.field_explore_link[0].field_link.title: "";                                    
                                    return(
                                        <div className="row mt-5 bg-white width-95 no-gutters fadeInUp wow" data-wow-delay=".4s" key={index}>
                                            <div className="col-md-5 addThumb"><figure className="imgwrap"><img className="lazy" data-src={offInnerData.field_image.url} src="" alt={offInnerData.field_image.alt} style={{width:"100%"}} /></figure><p className=" fadeInUp wow" data-wow-delay=".4s">{offInnerData.field_title ? offInnerData.field_title: ""}</p></div>
                                            <div className="col-md-7 addRess d-flex flex-column">
                                            <address>
                                            <h3>{offInnerData.field_title ? offInnerData.field_title: ""}</h3>
                                            <div dangerouslySetInnerHTML={ {__html: offInnerData.field_description}} />
                                            <div className="viewMaps">
                                                <a target="_blank" rel="noopener" href={filed_link_url} className="btn btn-primary btn-small">{filed_link_title ? filed_link_title: ""}</a>    
                                                </div>
                                                </address>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                            
                            }
                        })
                    }
                        
                    </div>
                    </div>
                </div>
            </section>
        )
}


export default ContactMainDetails;