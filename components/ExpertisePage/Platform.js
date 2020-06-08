import PlatformForm from "./Forms/PlatformForm";



const Platform = () =>{
    return (
      <section className="page_section expertise_section section-platform light-bg fadeInUp wow" data-wow-delay=".4s" id="platforms">
      <div className="container-fluid">
          <div className="content-block-container">

        <div className="content-block content-main">
            <h2>Platform</h2>
            <h3>E-commerce, enterprise <br /> application, CMS and more.</h3>

            <div className="row">
              <div className="col-md-9">

                <div className="row">
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">01</div>
                      <h4>Product <br />Development</h4>
                      <p>We develop user-centric digital products that solve legitimate customer needs.</p>
                      <a href="#" className="link popup_link" data-link="platform_01">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">02</div>
                      <h4>Enterprise <br />Application</h4>
                      <p>Our platforms ensure a seamless flow of information that enhances business agility.</p>
                      <a href="#" className="link popup_link" data-link="platform_02">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">03</div>
                      <h4>CMS Implementation (AEM, Liferay, Sitecore & Drupal)</h4>
                      <p>A bouquet of cutting-edge digital solutions tailored to your business’ needs.</p>
                      <a href="#" className="link popup_link" data-link="platform_03">Read in 30 seconds</a>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-3">
                  <div className="card-block ss-block">
                    <h4>Watch<br /> Success Stories</h4>
                    <div className="row no-gutters border">
                      <div className="col-6"><figure className="m-0"><img src="/img/success-stories/fmcg/oral-b.jpg" alt="" /></figure></div>
                      <div className="col-6">
                        <div className="content">
                          <figure><img src="/img/success-stories/fmcg/Oral-B-logo.png" alt="" /></figure>
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

        <PlatformForm />

        <div className="content-block content-popup" data-detail="platform_01">
              <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
              <div className="card-block">
                  <div className="number">01</div>
                  <h4>Product  <br/>Development</h4>
                  <div className="text-content">
                     <p>
                      We deliver digital products that use the latest and most appropriate technology to maximise user experience. We employ agile development methodologies to deliver products at speed. Our business partners also benefit from the fact that our products offer scalability, which essentially means we regularly test them to meet escalating user expectations.
                     </p>
                  </div>
                </div>
              </div>

              <div className="content-block content-popup" data-detail="platform_02">
                <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                <div className="card-block">
                    <div className="number">02</div>
                    <h4>Enterprise   <br/>Application</h4>
                    <div className="text-content">
                       <p>
                        From billing systems, customer relationship management systems to supplier relationship management systems, we possess the capabilities to develop diverse enterprise application solutions that can be used throughout your organisation to run multiple departments and business processes. Our EA solutions drive businesses forward by enhancing productivity and efficiency through business level support functionality. Other areas where our EA solutions can be implemented are online shopping and payment processing, interactive product catalogues, security, IT service management, content switching modules, resource planning, human resource management, manufacturing, application integration, forms automation, sales force automation, enterprise resource planning and business process management.
                       </p>
                    </div>
                  </div>
                </div>

                <div className="content-block content-popup" data-detail="platform_03">
                  <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                  <div className="card-block">
                      <div className="number">03</div>
                      <h4>CMS Implementation    <br/>(AEM, Liferay, Sitecore, Drupal & Sitefinity)</h4>
                      <div className="text-content">
                         <p>
                          Our Content Management Systems (CMS) are powerful solutions that enable personalised connections with your TG and allow you greater control of your digital presence. We provide full service CMS implementation and website design and development using platform best-practices and mobile-first, responsive design. We assist you with ongoing maintenance, patches, and technical support, including helping to manage your users and workflows. Our team of experts also possess extensive experience in customising content management systems to meet your unique needs including third party data and mobile app integration for iOS, Android, and hybrid platforms.
                         </p>
                      </div>
                    </div>
                  </div>

              </div>

      </div>
   </section>


    )
}



export default Platform;
