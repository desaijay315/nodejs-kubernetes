

const Careers = (props) => {
    const {careersData} = props;
     const { field_title, field_subtitle, field_description ,field_image, field_explore_link} = careersData;
    return (
        <section className="page_section careers_impact d-flex align-items-center fadeInUp wow">
        <div className="container-fluid no-gutters m-0 p-0">
           <picture>
              <source media="(max-width: 640px)" srcSet="/img/careersBgMobile.jpg" />
              <source media="(max-width: 767px)" srcSet="/img/careersBgMobile-mid.jpg" />
              <source media="(min-width: 767px)" srcSet="/img/careersBg.jpg" />
              <img src={field_image.url} alt={field_image.alt} style={{width:"100%"}} />
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
                       <a href={field_explore_link[0].field_link.uri} className="btn btn-primary mt-4 fadeInUp wow" data-wow-delay="1.9s">{field_explore_link[0].field_link.title}</a>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
    )
}

export default Careers;