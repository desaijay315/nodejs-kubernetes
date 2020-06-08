import ExpertiseForm from "./ExpertiseForm";
import BuildForm from "./Forms/BuildForm";


const Build = () => {
    return (
      <section className="page_section expertise_section section-buid light-bg fadeInUp wow" data-wow-delay=".4s" id="build">
      <div className="container-fluid">
          <div className="content-block-container">

        <div className="content-block content-main">
            <h2>Build</h2>
            <h3>Enterprise architecture, <br />APIs and lots more.</h3>

            <div className="row">
              <div className="col-md-9">

                <div className="row">
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">01</div>
                      <h4>Microservices <br />Development</h4>
                      <p>We design microservices that align with your core business capabilities to enable to change with agility.</p>
                      <a href="#" className="link popup_link" data-link="buid_01">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">02</div>
                      <h4>Expert Heuristic <br /> Evaluation</h4>
                      <p>Our specialists assess your website or app’s usability to match the demands of your Target Audience .</p>
                      <a href="#" className="link popup_link" data-link="buid_02">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">03</div>
                      <h4>Usability <br />Testing</h4>
                      <p>Our user-centered interactions help us evaluate your website for usability and intuitiveness.</p>
                      <a href="#" className="link popup_link" data-link="buid_03">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">04</div>
                      <h4>Mobile <br /> Apps</h4>
                      <p>Web, native or hybrid apps, our experts are equipped to service all your needs.</p>
                      <a href="#" className="link popup_link" data-link="buid_04">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">05</div>
                      <h4>Website <br />Development</h4>
                      <p>We stay on top of web development trends to create valuable experiences for your consumers.</p>
                      <a href="#" className="link popup_link" data-link="buid_05">Read in 30 seconds</a>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-3">
                  <div className="card-block ss-block">
                    <h4>Watch<br /> Success Stories</h4>
                    <div className="row no-gutters border">
                      <div className="col-6"><figure className="m-0"><img src="/img/success-stories/loreal.jpg" alt="" /></figure></div>
                      <div className="col-6">
                        <div className="content">
                          <figure><img src="/img/success-stories/logo-loreal.png" alt="" /></figure>
                          {/*<p>Lorem Ipsum</p>*/}

                        </div>
                      </div>
                    </div>
                    <a href="/success-stories" className="link">View Success Stories </a>
                  </div>

                  <div className="card-block btn-block">
                    <a href="#" className="btn btn-primary link-start">START A PROJECT</a>
                  </div>

              </div>
            </div>

        </div>

        <BuildForm/>

        <div className="content-block content-popup" data-detail="buid_01">
              <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
              <div className="card-block">
                  <div className="number">01</div>
                  <h4>Microservices  <br/>Development</h4>
                  <div className="text-content">
                     <p>
                      In today’s day and age, no company or sector is safe from disruption. Customers are quick to abandon brands that are too slow to respond to change. One way in which we help our business partners stay prepared is by ensuring they adopt our custom designed microservices architecture that helps them respond rapidly to the never-ending demands of the business. Our microservice development solutions encapsulate a core business capability and adheres to fundamental design principles and goals. It adds value to your business because it can be used in multiple contexts, such as business processes and transactions or the channels through which your customer, employee, or partner interacts with your business.
                     </p>
                  </div>
                </div>
              </div>

              <div className="content-block content-popup" data-detail="buid_02">
                <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                <div className="card-block">
                    <div className="number">02</div>
                    <h4>Expert Heuristic   <br/>Evaluation</h4>
                    <div className="text-content">
                       <p>
                        Heuristic evaluation is important when it comes to identifying and fixing your website or mobile application interface’s usability issues. Our evaluation experts review the interface against a set of usability principles to uncover issues, thus preventing failure once the interface is released. It is a quick method of gathering feedback, giving you the opportunity to respond to it before the go-live process.
                       </p>
                    </div>
                  </div>
                </div>

                <div className="content-block content-popup" data-detail="buid_03">
                  <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                  <div className="card-block">
                      <div className="number">03</div>
                      <h4>Usability    <br/>Testing</h4>
                      <div className="text-content">
                         <p>
                          Usability testing is key to knowing whether your product or service is ready to hit the market or not. We offer multiple types of usability tests, depending on your circumstance. These include Hallway Testing, Remote Testing and A/B Testing. We firmly believe that usability testing delivers various benefits for your business – it saves time for you and your users, provides a better user experience, offers insight into how satisfied users are with your product or service, identifies problem areas within the product or service that may not have been otherwise obvious, and provide an unbiased examination of the product or service.
                         </p>
                      </div>
                    </div>
                  </div>

                  <div className="content-block content-popup" data-detail="buid_04">
                    <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                    <div className="card-block">
                        <div className="number">04</div>
                        <h4>Mobile     <br/>Application</h4>
                        <div className="text-content">
                           <p>
                            A mobile application is perhaps the fastest way to reach your customers. But with every other brand’s app vying for their attention, it’s critical that your app offers the perfect mix of creativity and tech. Our experts strategise, design the UI, develop, test, launch and offer support & maintenance so that you can count on us to be by your side throughout. Having a dedicated and experienced team of experts also enables us to deliver mobile application solutions for a wide range of sectors and industries.
                           </p>
                        </div>
                      </div>
                    </div>

                    <div className="content-block content-popup" data-detail="buid_05">
                      <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                      <div className="card-block">
                          <div className="number">05</div>
                          <h4>Website      <br/>Development</h4>
                          <div className="text-content">
                             <p>
                              With businesses having varied needs and marketing objectives, there is no 'one size fits all' approach when it comes to creating the ideal web platform to support the growth of your business. Our dedicated team of web developers understand this, and are willing to work with you to make your business accessible through a unique, engaging and functional website. We build sites using the very best open source platforms keeping your business secure and at the cutting-edge of technology.
                             </p>
                          </div>
                        </div>
                      </div>

              </div>

      </div>
   </section>


    )
}


export default Build;
