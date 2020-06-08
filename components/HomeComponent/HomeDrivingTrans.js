


import {removeHTMLChars} from '../../action/helpers';

const HomeDrivingTrans = (props) => {

    const {drivingTransformationData} = props;

    return(
       <>
       {
          drivingTransformationData && drivingTransformationData.length > 0 && drivingTransformationData.map((driveTransData, index) => {
            let field_description = driveTransData.field_description ?  removeHTMLChars(driveTransData.field_description) : ""; 
            let field_title = driveTransData.field_title ?  driveTransData.field_title : ""; 
            let uri_title = driveTransData.field_links_component[0] ? driveTransData.field_links_component[0].field_link.title : "";
            let uri_link =driveTransData.field_links_component[0] ? driveTransData.field_links_component[0].field_link.uri : "";

             return (
            <section className="page_section driving_transformation" key={index}>
            <div className="container-fluid py-5">
               <div className="row justify-content-center">
                  <div className="col-md-9">
                     <h2 className="section_heading fadeInDown wow" data-wow-delay="0.5s">{field_title}</h2>
                     <div className="row d-flex align-items-center mt-3">
                        <div className="col-md-8">
             <p className="fadeInUp wow" data-wow-delay="0.8s">{field_description}</p>
                        </div>
                        <div className="col-md-4"><a href={uri_link} className="btn btn-primary fadeInLeft wow" data-wow-delay="1.2s">{uri_title}</a></div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         )
          })
       }
       </>
    )
}

export default HomeDrivingTrans