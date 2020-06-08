


const ContactSlider = (props) => {

   const { contactData } = props;

   const { content } = contactData;
   const {field_component_type} = content;
   const bannerdata = field_component_type && field_component_type.length > 0 && field_component_type[0] && field_component_type[0].field_banner_component[0];


    return (
      <div id="hero-inner" className="hero_inner position-relative fadeInUp wow" data-wow-delay=".1s">
          <div id="bannerCanvas"></div>

          <div className="plane">
              <img src={bannerdata.field_banner_image.url ? bannerdata.field_banner_image.url: ""} />
          </div>
         <div className="bannerText">
            <div className="container-fluid">
               <h1 className="fadeInUp wow" data-wow-delay=".1s">Contact us</h1>
               <h2 className="fadeInRight wow" data-wow-delay=".1s">TO SHAPE HUMAN BEHAVIOUR <br/>TOGETHER</h2>
            </div>
         </div>
      </div>
    )

}



export default ContactSlider;