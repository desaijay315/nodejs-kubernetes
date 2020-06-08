


const ExpertiseBanner = (props) => {

   const {bannerData} = props;
   
    return (
       <>
       {
          bannerData && bannerData.length > 0 ? 
          bannerData.map((bData, index) => {
             let field_banner_image = bData.field_banner_image.url ? bData.field_banner_image.url: "";
             let field_banner_alt = bData.field_banner_image.alt ? bData.field_banner_image.alt : "";
             let field_title = bData.field_title ?  bData.field_title: "";
             let field_subtitle = bData.field_subtitle ?  bData.field_subtitle: "";

             return (
                  <div id="hero-inner" className="hero_inner position-relative fadeInUp wow" data-wow-delay=".1s" key={index}>
                  <div id="bannerCanvas"></div>
                     <div className="plane">
                        <img src={field_banner_image} alt={field_banner_alt} />
                     </div>
                  <div className="bannerText">
                     <div className="container-fluid">
                        <h1 className="fadeInUp wow" data-wow-delay=".1s">{field_title}</h1>
                        <h2 className="fadeInRight wow" data-wow-delay=".1s">{field_subtitle}</h2>
                     </div>
                  </div>
               </div> 
             )
          }) : null
       }
       </>
              
    )
}


export default ExpertiseBanner;