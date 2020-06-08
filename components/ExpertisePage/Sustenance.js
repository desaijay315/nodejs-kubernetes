import ExpertiseForm from "./ExpertiseForm";
import SustenanceForm from "./Forms/SustenanceForm";





const Sustenance = () => {
    return (
      <section className="page_section expertise_section section-sustenance dark-bg fadeInUp wow" data-wow-delay=".4s" id="sustenance">
      <div className="container-fluid">
          <div className="content-block-container">

        <div className="content-block content-main">
            <h2>Sustenance</h2>
            <h3>Solutions that help you <br/> reach the top.</h3>

            <div className="row">
              <div className="col-md-9">

                <div className="row">
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">01</div>
                      <h4>DevOps<br />Support</h4>
                      <p>Our in-house experts help your business innovate at a much faster pace.</p>
                      <a href="#" className="link popup_link" data-link="sustenance_01">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">02</div>
                      <h4>Insfrastructure <br/>Support</h4>
                      <p>We have a reliable and responsive support team to meet the dynamic needs of your business.</p>
                      <a href="#" className="link popup_link" data-link="sustenance_02">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">03</div>
                      <h4>On Prem to <br />Cloud Migration</h4>
                      <p>We offer cost effective cloud migration solutions to help your business move forward.</p>
                      <a href="#" className="link popup_link" data-link="sustenance_03">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">04</div>
                      <h4>Testing <br />Services</h4>
                      <p>Be it desktop or mobile applications, our testing specialists work to improve time to market, and thus, your ROI.</p>
                      <a href="#" className="link popup_link" data-link="sustenance_04">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">05</div>
                      <h4>Application <br />Modernization</h4>
                      <p>We refactor and repurpose legacy software programming to speed up your business’ digital transformation.</p>
                      <a href="#" className="link popup_link" data-link="sustenance_05">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">06</div>
                      <h4>VAPT<br />Report</h4>
                      <p>We use active, passive, network, distributed and penetration testing methods to safeguard your data.</p>
                      <a href="#" className="link popup_link" data-link="sustenance_06">Read in 30 seconds</a>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-3">
                  <div className="card-block ss-block">
                    <h4>Watch<br /> Success Stories</h4>
                    <div className="row no-gutters border">
                      <div className="col-6"><figure className="m-0"><img src="/img/success-stories/fmcg/garnier.jpg" alt="" /></figure></div>
                      <div className="col-6">
                        <div className="content">
                          <figure><img src="/img/success-stories/fmcg/Garnier-logo.png" alt="" /></figure>
                          {/*<p>India’s new ritual</p>*/}

                        </div>
                      </div>
                    </div>
                    <a href="/success-stories/garnier" className="link">View Success Stories </a>
                  </div>

                  <div className="card-block btn-block">
                    <a href="#" className="btn btn-primary link-start">START A PROJECT</a>
                  </div>

              </div>
            </div>

        </div>

        <SustenanceForm />

        <div className="content-block content-popup" data-detail="sustenance_01">
              <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
              <div className="card-block">
                  <div className="number">01</div>
                  <h4>DevOps</h4>
                  <div className="text-content">
                    <p>DevOps, a combination of development and operations, is endorsed by experts all over the world. It is a practical and valuable asset for organisations because of its wide range of real and measurable benefits. Our team of experts help you reap these benefits that include faster delivery times, improved customer experience, early detection and faster correction of defects, faster development cycles, and continuous integration, delivery, testing and monitoring. </p>
                  </div>
                </div>
              </div>

              <div className="content-block content-popup" data-detail="sustenance_02">
                <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                <div className="card-block">
                    <div className="number">02</div>
                    <h4>Infrastructure <br /> Support</h4>
                    <div className="text-content">
                       <p>Our IT infrastructure services are custom tailored based upon your business needs. We provide services that align network architecture and end-to-end communication, to ensure your company has the best IT solutions built by certified technology experts. We provide small, midsize and enterprise size businesses with scalable support services both onsite and remotely. We also provide 24/7 service for your business to address all technical requests, problems, services and other related inquiries.</p>
                    </div>
                  </div>
                </div>

                <div className="content-block content-popup" data-detail="sustenance_03">
                  <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                  <div className="card-block">
                      <div className="number">03</div>
                      <h4>On Prem to  <br /> Cloud Migration</h4>
                      <div className="text-content">
                        <p>Data is absolutely critical to your business operations. This is why our software engineers prioritise a pain-free migration experience when moving databases, app code and whole systems from on-prem to cloud, their new home. Some reasons to move include increased security, improved productivity, easier data recovery, flexibility, and cost efficiency. All these help improve your business’ bottom-line. </p>
                      </div>
                    </div>
                  </div>

                  <div className="content-block content-popup" data-detail="sustenance_04">
                    <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                    <div className="card-block">
                        <div className="number">04</div>
                        <h4>Testing   <br /> Services</h4>
                        <div className="text-content">
                         <p>Our dedicated team of testing professionals are adept at delivering large, multimodal, QA-managed service engagements. Our testing services provide transformation, modernisation, and automation solutions by ensuring maximum re-usability, ease of maintenance, better test execution, and enhanced reporting. Whether desktop, mobile or next-gen based applications, our software testing specialists work with a focused approach to help you get more out of your testing efforts and improve time to market, and thus, your ROI.</p>
                        </div>
                      </div>
                    </div>

                      <div className="content-block content-popup" data-detail="sustenance_05">
                        <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                        <div className="card-block">
                            <div className="number">05</div>
                            <h4>Application    <br /> Modernisation</h4>
                            <div className="text-content">
                             <p>
                              Legacy technology can hold your business back, slow down productivity and increase your costs. Our application moderisation service provides end-to-end solutions, from strategy definition to project execution. It helps you transform your IT landscape into a digital-ready, Cloud-ready and agile ecosystem enabling your IT to function at the speed of your business. We take a holistic approach across business, IT, people and processes to deliver digital transformation, that meets the ever-changing needs of your business.
                             </p>
                            </div>
                          </div>
                        </div>

                        <div className="content-block content-popup" data-detail="sustenance_06">
                          <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                          <div className="card-block">
                              <div className="number">06</div>
                              <h4>VAPT </h4>
                              <div className="text-content">
                               <p>
                                VAPT is a combination of both Vulnerability Assessment (VA) and Penetration Testing (PT), which locates the flaws in the system, measures the vulnerability for each flaw, classifies the nature of possible attack and raises the alarm before these flaws lead to any exploitation. Our team of VAPT experts secure corporate networks from unauthorised access and prevent information loss, protect data integrity, as well as prevent any monetary loss.
                               </p>
                              </div>
                            </div>
                          </div>

              </div>

      </div>
   </section>

    )
}


export default Sustenance;
