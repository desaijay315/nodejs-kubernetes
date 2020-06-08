

const DrivingTransformation = (props) => {

   const {drivingTransformationData} = props;
      const {field_title,  field_description, field_links_component}  = drivingTransformationData

    return (
        <section className="page_section driving_transformation">
        <div className="container-fluid py-5">
           <div className="row justify-content-center">
              <div className="col-md-9">
                 <h2 className="section_heading fadeInDown wow">{field_title}</h2>
                 <div className="row d-flex align-items-center mt-3">
                    <div className="col-md-8">
                       <p className="fadeInUp wow" data-wow-delay="0.8s">{field_description}</p>
                    </div>
                    {
                        field_links_component.map((link_data,index) =>(
                           <div className="col-md-4" key={index}>
                           <a href={link_data.field_link.uri}  className="btn btn-primary fadeInLeft wow">{link_data.field_link.title}</a>
                           </div>
                        ))
                     }
                 </div>
              </div>
           </div>
        </div>
     </section>
    )

}


export default DrivingTransformation