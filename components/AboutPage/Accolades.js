

const  Accolades = () => {

    
        return (
          <section className="page_section our_accolades onscroll_section fadeInUp wow" data-wow-delay=".4s" id="accolades">
          <div className="container-fluid">
             <h2 className="section_heading without_line">Our Accolades</h2>
             <div className="row">
                <div className="col-md-7">
                   <h4>The cream always rises to the top</h4>
                   <p>Our biggest reward is seeing our work build businesses for the brands we collaborate with. That is what helps us sleep peacefully at night. But we do love shiny new trophies. And yes, we are proud to say that we have quite a share</p>
                </div>
             </div>
             <div className="row">
                <div className="col-md-12">
                   <div className="accolades_slider">
                      <div className="item">
                         <div className="card-block">
                            <figure className="imgwrap"><img data-src="/img/aboutus/award_EFFIE.jpg" src="" className="lazy" alt=""/></figure>
                            <h4 className="award_name">EFFIE AWARDS</h4>
                            <h5 className="award_for">Bajaj CT110 - 2020</h5>
                         </div>
                      </div>
                      <div className="item">
                         <div className="card-block">
                            <figure className="imgwrap"><img data-src="/img/aboutus/award_THEMADDIES.jpg" src="" className="lazy" alt=""/></figure>
                            <h4 className="award_name">THE MADDIES</h4>
                            <h5 className="award_for">URI - 2019</h5>
                         </div>
                      </div>
                      <div className="item">
                         <div className="card-block">
                            <figure className="imgwrap"><img data-src="/img/aboutus/award_DMAASIAECHO.jpg" src="" className="lazy" alt=""/></figure>
                            <h4 className="award_name">DMA ASIA ECHO</h4>
                            <h5 className="award_for">NSE INDIA - 2019</h5>
                         </div>
                      </div>
                      <div className="item">
                         <div className="card-block">
                            <figure className="imgwrap"><img data-src="/img/aboutus/award_CUSTOMERSUCCESS.jpg" src="" className="lazy" alt=""/></figure>
                            <h4 className="award_name">CUSTOMER SUCCESS</h4>
                            <h5 className="award_for">HDFC - 2019</h5>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </section>
    )
}




export default Accolades;