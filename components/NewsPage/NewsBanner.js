

const NewsBanner = (props) => {

   const { bannerData } = props
    return (
       <>
       {
          bannerData && bannerData.length > 0 ? 

          bannerData.map((bannerdata,index) => {

            let mobile_image  = bannerdata.field_mobile_banner.url ? bannerdata.field_mobile_banner.url: "";

            let banner_image = bannerdata.field_banner_image.url ? bannerdata.field_banner_image.url: "";
            let banner_image_alt = bannerdata.field_banner_image.alt ? bannerdata.field_banner_image.alt: "";

            let field_title = bannerdata.field_title ? bannerdata.field_title: "";
            let field_subtitle = bannerdata.field_subtitle ? bannerdata.field_subtitle: "";
             return (
               <div id="hero-inner" className="hero_inner position-relative fadeInUp wow overflowHidden" data-wow-delay=".1s" key={index}>
               <picture>
                  <source media="(max-width: 768px)" srcSet={mobile_image} />
                  <source media="(min-width: 769px)" srcSet={banner_image} />
                  <img className="zoomAnimation" src={banner_image} alt={banner_image_alt} style={{width:"100%"}} />
               </picture>
               <div className="bannerText">
                  <div className="container-fluid">
                  <h1>{field_title}</h1>
                  <h2>{field_subtitle}</h2>
                  </div>
               </div>
            </div>

             )
          })

           :  null
       }
       </>
        
    )
}


export default NewsBanner;