


const CareerHeader = (props) => {
   const {bannerData} = props;
    return(
       <>
       {
          bannerData && bannerData.length > 0 ? 
          bannerData.map((bData, index) => {
             let field_banner_image = bData.field_banner_image.url ? bData.field_banner_image.url: ""; 
             let field_banner_alt = bData.field_banner_image.alt ? bData.field_banner_image.alt: ""; 

             let field_mobile_banner = bData.field_mobile_banner.url ? bData.field_mobile_banner.url: "";
             let field_mobile_alt = bData.field_mobile_banner.url ? bData.field_mobile_banner.alt: "";

             let field_title = bData.field_title ? bData.field_title: "";
             let field_subtitle = bData.field_subtitle ? bData.field_subtitle: "";

            return (
               <div id="hero-inner" className="hero_inner hero_fullscreen position-relative fadeInUp wow" data-wow-delay=".1s" key={index}>
               <picture>
                  <source media="(max-width: 768px)" srcSet={field_mobile_banner} />
                  <source media="(min-width: 769px)" srcSet={field_banner_image} />
                  <img src={field_banner_image} alt={field_banner_alt} style={{width:"100%"}} />
               </picture>
               <div className="bannerText">
                  <div className="container-fluid">
                     <h1 className="fadeInUp wow" data-wow-delay=".1s">{field_title}</h1>
                     <h2 className="fadeInDown wow" data-wow-delay=".1s">{field_subtitle}</h2>  
                  </div>
               </div>
               <div className="scroll bounce">
                  <span>Scroll</span>
                  <span className="verticalLine"></span>
               </div>
            </div>
            )
          
          })
            
          : null
       }
       </>
        
    )
}



export default CareerHeader;