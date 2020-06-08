



const AboutTabs = () =>{

    
        return(
            <section className="scroll_tabs_section">
          <div className="container-fluid">
              <div className="mynav remove_target">
             <ul className="scroll-tabs m-0 p-0 d-flex list-unstyled">
                <li><a href="#our_association">Strategic Partners</a></li>
                <li><a href="#leadership">Leadership</a></li>
                <li><a href="#business_model">Business Model</a></li>
                <li><a href="#accolades">Accolades</a></li>
                <li><a href="#csr">CR</a></li>
             </ul>
             <span className="target"></span>
             <div className="btn_wrapper">
              <a href="/downloads/Indigo_Consulting_Quick_Facts.pdf" target="_blank" className="btn btn-primary">Indigo Factsheet</a>
             </div>
             </div>
          </div>
       </section>
        )
    
}

export default AboutTabs;