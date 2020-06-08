
const Corousel = (props) =>{

   const {HomePageData} = props;
   const banner_data  = HomePageData.content.field_component_type[0].field_banner;
   const field_body   = HomePageData.content.field_component_type[0].field_body;

    return(
       
        <div id="hero">
         <div id="canvas"></div>
         <div className="flex-wrapper multi-textures">
            {/* <!-- notice here we are using the data-sampler attribute to name our displacement sampler uniform --> */}
            <img src="/img/displacement.jpg" data-sampler="displacement" />
            <img src="/img/hero_slides/slide-1.jpg" />
            <img src="/img/hero_slides/slide-2.jpg" />
            <img src="/img/hero_slides/slide-3.jpg" />
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
               {/* <h2 className="animated fadeInDown">
                  <span className="txt_small">Shaping</span><br/>
                  <span>Human Behaviour </span> <span className="txt_small span_full">Through</span>
               </h2> */}
               <div dangerouslySetInnerHTML={ {__html: field_body} } />
               <div className="menu">
                  <div id="carouselText" data-animation="to-top">
                     <span data-text="Data">Data</span>,
                     <span data-text="Creativity" className="">Creativity</span> &
                     <span data-text="Technology">Technology</span>
                  </div>
                  <div id="one_liner">
                  { 
                  banner_data && banner_data.length >0 &&
                     banner_data.map((banner,index) => (
                        <div className={index===0 ? "desc active fadeInRight animated" : "desc fadeInRight animated"} data-title="data" key={index}>
                           <h3>{banner.field_subtitle}</h3>
                           <p>{banner.field_description}</p>
                        </div>
                     ))
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

    )
}


export default Corousel;