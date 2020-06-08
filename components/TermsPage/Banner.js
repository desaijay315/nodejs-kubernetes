


const Banner = () =>{
    return (
        <div id="hero-inner" className="hero_inner detail_banner position-relative fadeInUp wow" data-wow-delay=".1s">
        <picture>
           <source media="(max-width: 768px)" srcSet="/img/hero-banner-cookies.jpg" />
           <source media="(min-width: 769px)" srcSet="/img/hero-banner-cookies.jpg" />
           <img src="/img/hero-banner-cookies.jpg" alt="" style={{width:"100%"}}/>
        </picture>
        <div className="bannerText">
           <div className="container-fluid">
              <h1 className="fadeInUp wow" data-wow-delay=".1s">Terms & Conditions</h1>
           </div>
        </div>
     </div>
    )
}

export default Banner;