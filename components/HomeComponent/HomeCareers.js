

import {removeHTMLChars} from '../../action/helpers';


const HomeCareers = (props) => {

    const {careersData} = props;
    

    return (
        <>
        { 
         careersData && careersData.length > 0 && careersData.map((careerdata,index) =>{

            let field_background_image = careerdata.field_background_image ? careerdata.field_background_image.url : "";
            let field_image = careerdata.field_image ? careerdata.field_image.url: "";
            let field_image_alt = careerdata.field_image ? careerdata.field_image.alt: "";
            let field_mobile_image = careerdata.field_mobile_image ? careerdata.field_mobile_image.url: "";
            let field_description = removeHTMLChars(careerdata.field_description) ? removeHTMLChars(careerdata.field_description) : "";
            let field_subtitle = careerdata.field_subtitle ? careerdata.field_subtitle: "";
            let field_title = careerdata.field_title ? careerdata.field_title: "";
            let field_explore_link = careerdata.field_explore_link.length > 0 && careerdata.field_explore_link[0] ? careerdata.field_explore_link[0].field_link.uri : "";
            let field_explore_title = careerdata.field_explore_link.length > 0 && careerdata.field_explore_link[0] ? careerdata.field_explore_link[0].field_link.title : "";

            return (
               <section className="page_section careers_impact d-flex align-items-center fadeInUp wow" key={index}>
           <div className="container-fluid nu-gutters m-0 p-0">
              <picture>
                 <source media="(max-width: 640px)" srcSet={field_mobile_image} />
                 <source media="(max-width: 767px)" srcSet={field_mobile_image}/>
                 <source media="(min-width: 767px)" srcSet={field_image}/>
                 <img src={field_image} alt={field_image_alt} style={{width:"100%"}} />
              </picture>
           </div>
           <div className="careersBoxTop">
              <div className="container-fluid">
                 <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-5 text-white">
                       <div className="careersText">
                          <h2 className="fadeInRight wow">{field_title}</h2>
                          <h3 className="mt-4 fadeInRight wow" data-wow-delay="1.2s">{field_subtitle}</h3>
                           <p className="mt-3 fadeInUp wow" data-wow-delay="1.6s">{field_description}</p>
                           <a href={field_explore_link} className="btn btn-primary mt-4 fadeInUp wow" data-wow-delay="1.9s">{field_explore_title}</a>
                       </div>
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


export default HomeCareers;