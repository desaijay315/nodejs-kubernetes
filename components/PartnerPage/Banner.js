


const Banner = () => {
    return (

        <div id="hero-inner" className="hero_inner hero_partners position-relative fadeInUp wow" data-wow-delay=".1s">
        <picture>
           <source media="(max-width: 768px)" srcSet="/img/hero-banner-partners-mob.jpg"/>
           <source media="(min-width: 769px)" srcSet="/img/hero-banner-partners.jpg" />
           <img src="/img/hero-banner-partners.jpg" alt="News" style={{width:"100%"}} />
        </picture>
        <div className="bannerText">
           <div className="container-fluid">
              <h1 className="fadeInUp wow" data-wow-delay=".1s">Our Partners</h1>
              <h2 className="fadeInRight wow" data-wow-delay=".1s">When we move forward with our partners,
                  <br />then success takes care of itself.
              </h2>
           </div>
        </div>
     </div>
    )
}


export default Banner;