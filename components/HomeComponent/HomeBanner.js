



const HomeBanner = (props) => {
    const {bannerData} = props;
    
    return (
       <>
       {
          bannerData && bannerData.length > 0 ?
          <div id="hero">
         <div id="canvas"></div>
         <div className="flex-wrapper multi-textures">
            <img src="/img/displacement.jpg" data-sampler="displacement" />
            {
               bannerData.length > 0 && bannerData.map((banner, index) => {
                  let image = banner.field_banner_image.url ? banner.field_banner_image.url: "";
                  return (
                     <img src={image} key={index}/>
                  )
               })
            }
            
         </div>


         <div className="bannerContainer">
         <div id="pagination">
            <span className="active"></span>
            <span></span>
            <span></span>
         </div>

        </div>
         <div className="carousel-container">
            <div className="carousel-content">
               {
                     bannerData.length > 0 && bannerData[0] &&
                     <div dangerouslySetInnerHTML={ {__html: bannerData[0].field_description}}/>
   
               }
               <div className="menu">
               {
                     bannerData.length > 0 && bannerData[1] &&
                     <div dangerouslySetInnerHTML={ {__html: bannerData[1].field_description}}/>
   
               }
                  <div id="one_liner">
                  {
                     bannerData.length > 0 && bannerData.map((banner, index) => {
                        let divClass = "";

                        divClass = index === 0 ? "desc active fadeInRight animated" : "desc fadeInRight animated";
                        return (
                           <div className={divClass} data-title="data" key={index}>
                           <h3><a href={banner.field_cta_link.uri}>{banner.field_subtitle ? banner.field_subtitle : ""}</a></h3>
                           <p>{banner.field_body ? banner.field_body:""}</p>
                        </div>
                        )
                     })
                  }
                  </div>
               </div>

            </div>
         </div>
         <div className="scroll bounce">
          <span>Scroll</span>
          <span className="verticalLine"></span>
      </div>
      </div>
         : null
       }
       </>
        
    )
}



export default HomeBanner;