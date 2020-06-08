
const NewsDetailBanner = (props) => {

   const {newsBannerData} = props;
   
      return (
         <>
         { newsBannerData && newsBannerData.length > 0 ? 
            <div id="hero-inner" className="hero_inner detail_banner position-relative fadeInUp wow" data-wow-delay=".1s">
            <picture>
               <source media="(max-width: 768px)" srcSet={newsBannerData[0].url ? newsBannerData[0].url: "" } />
               <source media="(min-width: 769px)" srcSet="/img/hero-banner-news-detail.jpg" />
               <source media="(min-width: 769px)" srcSet={newsBannerData[0].url ?  newsBannerData[0].url: ""} />
               <img src={newsBannerData.url ? newsBannerData.url: ""} alt={newsBannerData[0].alt} style={{ width:"100%"}} />
            </picture>
            <div className="bannerText">
               <div className="container-fluid">
               <h1>{newsBannerData[0].field_title}</h1>
               <h2>{newsBannerData[0].field_subtitle}</h2>
               </div>
            </div>
          </div> : null           
         }
         </>
      )
}
  
export default NewsDetailBanner;