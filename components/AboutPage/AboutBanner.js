



const AboutBanner = (props) => {
   
   return(
     <div id="hero" className="hero-about">
     <div id="wrap-texture">
        {/* <!-- div that will hold our WebGL canvas --> */}
        <div id="canvas_banner"></div>

        {/* <!-- div used to create our plane --> */}
        <div className="plane">
           {/* <!-- images that will be used as textures by our plane --> */}
                <picture>
                   <source media="(max-width: 768px)" srcSet="/img/aboutus/about-hero-slide-banking-mob.jpg"/>
                   <source media="(min-width: 769px)" srcSet="/img/aboutus/about-hero-slide-banking.jpg"/>
                   <img className="texture" src="/img/aboutus/about-hero-slide-banking.jpg" alt="" crossOrigin="anonymous" />
                </picture>

                <picture>
                   <source media="(max-width: 768px)" srcSet="/img/aboutus/about-hero-slide-fmcg-mob.jpg"/>
                   <source media="(min-width: 769px)" srcSet="/img/aboutus/about-hero-slide-fmcg.jpg"/>
                   <img className="texture" src="/img/aboutus/about-hero-slide-fmcg.jpg" alt="" crossOrigin="anonymous" />
                </picture>

                <picture>
                   <source media="(max-width: 768px)" srcSet="/img/aboutus/about-hero-slide-1-mob.jpg"/>
                   <source media="(min-width: 769px)" srcSet="/img/aboutus/about-hero-slide-1.jpg"/>
                   <img className="texture" src="/img/aboutus/about-hero-slide-1.jpg" alt="" crossOrigin="anonymous" />
                </picture>
   
                <picture>
                   <source media="(max-width: 768px)" srcSet="/img/aboutus/about-hero-slide-2-mob.jpg"/>
                   <source media="(min-width: 769px)" srcSet="/img/aboutus/about-hero-slide-2.jpg"/>
                   <img className="texture" src="/img/aboutus/about-hero-slide-2.jpg" alt="" crossOrigin="anonymous" />
                </picture>

                <picture>
                       <source media="(max-width: 768px)" srcSet="/img/aboutus/about-hero-slide-3-mob.jpg"/>
                       <source media="(min-width: 769px)" srcSet="/img/aboutus/about-hero-slide-3.jpg"/>
                       <img className="texture" src="/img/aboutus/about-hero-slide-3.jpg" alt="" crossOrigin="anonymous" />
                    </picture>

           {/* <!-- <img className="texture" src="/img/aboutus/about-hero-slide-1.jpg" crossOrigin="anonymous" />
           <img className="texture" src="/img/aboutus/about-hero-slide-2.jpg" crossOrigin="anonymous" />
           <img className="texture" src="/img/aboutus/about-hero-slide-3.jpg" crossOrigin="anonymous" /> --> */}
        </div>
     </div>

     <nav id="pagination" className="nav-main">
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
     </nav>

     <div className="carousel-container">
            <div className="carousel-content">
              
               <div className="menu">
                  <div id="carouselText" data-animation="to-left">

                        <span className="active" data-text="IN BANKING">
                           <h2>
                                   <small className="txt_small wow bounceIn" data-wow-delay=".4s">20 YEARS OF</small><br />
                                   <small className="wow flipInX" data-wow-delay=".6s">
                                   DIGITAL <br /> 
                                   INNOVATION </small> 
                                </h2>
                       <small className="wow flipInX" data-wow-delay="1s">IN BANKING</small><br/><a className="wow flipInX" data-wow-delay="1.5s" href="https://indigo-node.indigo-consulting.co.in/success-stories?section=banking">Explore</a></span>

                        <span data-text="IN FMCG">
                           <h2>
                                   <small className="txt_small wow bounceIn" data-wow-delay=".4s">20 YEARS OF</small><br />
                                   <small className="wow flipInX" data-wow-delay=".6s">
                                   CREATIVE <br /> 
                                   EXCELLENCE </small> 
                                </h2>
                       <small className="wow flipInX" data-wow-delay="1s">IN FMCG</small><br/><a className="wow flipInX" data-wow-delay="1.5s" href="https://indigo-node.indigo-consulting.co.in/success-stories?section=fmcg">Explore</a></span>

                     <span data-text="IN TECHNOLOGY">
                           <h2>
                                   <small className="txt_small wow bounceIn" data-wow-delay=".4s">20 YEARS OF</small><br />
                                   <small className="wow flipInX" data-wow-delay=".6s">
                                   {/* CREATIVE <br />  */}
                                   EXCELLENCE </small> 
                                </h2>
                       <small className="wow flipInX" data-wow-delay="1s">IN TECHNOLOGY</small><br/><a className="wow flipInX" data-wow-delay="1.5s" href="https://indigo-node.indigo-consulting.co.in/success-stories?section=technology">Explore</a></span>
                     <span data-text="IN RETAIL">
                           <h2>
                                   <small className="txt_small wow bounceIn" data-wow-delay=".4s">20 YEARS OF</small><br />
                                   <small className="wow flipInX" data-wow-delay=".6s">CREATIVE <br /> EXCELLENCE </small> 
                                </h2>
                       <small className="wow flipInX" data-wow-delay="1.2s">IN RETAIL</small><br/><a className="wow flipInX" data-wow-delay="1.6s" href="https://indigo-node.indigo-consulting.co.in/success-stories?section=retail" >Explore</a></span>
                    <span data-text="IN MEDIA & ENTERTAINMENT">
                           <h2>
                                   <small className="txt_small wow bounceIn" data-wow-delay=".4s">20 YEARS OF</small><br />
                                   <small className="wow flipInX" data-wow-delay=".6s">CREATIVE <br /> EXCELLENCE </small> 
                                </h2>
                       <small className="wow flipInX" data-wow-delay="1.2s">IN MEDIA & ENTERTAINMENT</small><br/><a className="wow flipInX" data-wow-delay="1.6s" href="https://indigo-node.indigo-consulting.co.in/success-stories?section=media-and-entertainment">Explore</a></span>
                  </div>
               </div>
            </div>
         </div>
     <div className="scroll bounce">
        <span>Scroll</span>
        <span className="verticalLine"></span>
     </div>
  </div>

   )
}


export default AboutBanner;