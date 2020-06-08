



const CsrSection = () => {
    return (
      <section className="page_section csr_section onscroll_section fadeInUp wow" data-wow-delay=".4s" id="csr">
      <div className="container-fluid">
         <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
                <figure className="imgwrap"><img data-src="/img/aboutus/csr.jpg" src="" className="w-100 lazy" alt=""/></figure>
            </div>
            <div className="col-md-6">
               <div className="csr_content">
                  <h2 className="section_heading txt-black without_line">Corporate Responsibility</h2>
                  <h3>Delivering more for less, for our customers.</h3>
                  <p>Businesses are faced with enormous challenges and opportunities today. Enabled by mobile and other technologies, new competitors are disrupting the landscape. Our business model is designed to accompany our customers in this fast-moving environment. It delivers more innovation, ideas and growth in less time and at a low cost. We believe in more for less.</p>
               </div>
            </div>
         </div>
      </div>
   </section>
    )
}

export default CsrSection