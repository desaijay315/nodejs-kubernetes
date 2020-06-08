import ExpertiseForm from "./ExpertiseForm";
import MarketingForm from "./Forms/MarketingForm";



const Marketing = () => {
    return (
      <section className="page_section expertise_section section-marketing dark-bg fadeInUp wow" data-wow-delay=".4s" id="marketing">
      <div className="container-fluid">
          <div className="content-block-container">

        <div className="content-block content-main">
            <h2>Marketing</h2>
            <h3>We weave memorable <br />digital stories for you.</h3>

            <div className="row">
              <div className="col-md-9">

                <div className="row">
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">01</div>
                      <h4>Brand <br />Narrative</h4>
                      <p>We tell insightful stories backed by data that connect with your Target Audience.</p>
                      <a href="#" className="link popup_link" data-link="marketing_01">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">02</div>
                      <h4>Communication<br /> Strategy</h4>
                      <p>From brand to budget alignment and everything in between, we walk with you every step of the way.</p>
                      <a href="#" className="link popup_link" data-link="marketing_02">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">03</div>
                      <h4>Branch <br />Launch</h4>
                      <p>We deliver the perfect strategy, value proposition and communication plan to make a great first impression.</p>
                      <a href="#" className="link popup_link" data-link="marketing_03">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">04</div>
                      <h4>Video</h4>
                      <p>Our in-house teams ensure seamless delivery of corporate, TV, digital and any other kind of video content.</p>
                      <a href="#" className="link popup_link" data-link="marketing_04">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">05</div>
                      <h4>SEO</h4>
                      <p>Our SEO specialists analyse, review and optimise content to drive traffic to your platform.</p>
                      <a href="#" className="link popup_link" data-link="marketing_05">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">06</div>
                      <h4>SEM</h4>
                      <p>We devise strategies that bring your website to the top of both organic and paid search engine rankings.</p>
                      <a href="#" className="link popup_link" data-link="marketing_06">Read in 30 seconds</a>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-3">
                  <div className="card-block ss-block">
                    <h4>Watch<br /> Success Stories</h4>
                    <div className="row no-gutters border">
                      <div className="col-6"><figure className="m-0"><img src="/img/success-stories/papmers.jpg" alt="" /></figure></div>
                      <div className="col-6">
                        <div className="content">
                          <figure><img src="/img/success-stories/logo-pampers.png" alt="" /></figure>
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

        <MarketingForm />

        <div className="content-block content-popup" data-detail="marketing_01">
              <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
              <div className="card-block">
                  <div className="number">01</div>
                  <h4>Brand <br />Narrative</h4>
                  <div className="text-content">
                     <p>A brand narrative is a central building block to a meaningful brand strategy. We help you build a strong brand narrative based on insights and information that come from thoroughly understanding what your brand stands for, and how your TG perceives it. We dig deep to stitch together a narrative that gives your brand the platform to stand out from the competition, which in turn helps your business grow, and change the way your customers feel about your brand. </p>
                  </div>
                </div>
              </div>

              <div className="content-block content-popup" data-detail="marketing_02">
                <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                <div className="card-block">
                    <div className="number">02</div>
                    <h4>Communication  <br/>Strategy</h4>
                    <div className="text-content">
                       <p>
                        Our communication strategy starts by understanding the needs of your target audience. Once we have understood this, we define your brand’s Unique Selling Proposition (USP), and this USP is reflected in every message your brand sends out, across all communication channels. We follow this up by identifying the channels that work best for your brand. We also set success metrics to help us gauge the progress of the communication strategy.
                       </p>
                    </div>
                  </div>
                </div>

                <div className="content-block content-popup" data-detail="marketing_03">
                  <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                  <div className="card-block">
                      <div className="number">03</div>
                      <h4>Brand   <br/>Launch</h4>
                      <div className="text-content">
                         <p>
                          When launching a brand, you are introducing an image, presenting a value proposition and communicating how your products or services are different. Our brand launch strategy addresses all these functions and determines how you are going to promote each one to the members of your target market. We plan the entire activity for you, finalise all the touchpoints, and define a roadmap that helps you stay the course.
                         </p>
                      </div>
                    </div>
                  </div>

                  <div className="content-block content-popup" data-detail="marketing_04">
                    <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                    <div className="card-block">
                        <div className="number">04</div>
                        <h4>Video    <br/>Production</h4>
                        <div className="text-content">
                           <p>
                            The consumption of content via video, as compared to the more traditional mediums such as articles, has gone through the roof in the past few years. But while getting a video made these days is easy, creating one that hits the right spot is not. The key is to understand your customer’s expectation from the content on screen. Our team of professionals, from script writers to editors, work tirelessly to deliver video content that holds your customer’s interest, and helps your brand leave a memorable impression on them.
                           </p>
                        </div>
                      </div>
                    </div>

                    <div className="content-block content-popup" data-detail="marketing_05">
                      <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                      <div className="card-block">
                          <div className="number">05</div>
                          <h4>SEO </h4>
                          <div className="text-content">
                             <p>
                              Search Engine Optimisation (SEO) is an essential part of any successful marketing strategy. It helps your users find your website when they search for specific words or phrases, called keywords in marketing parlance. Our SEO specialists do a complete assessment of your website, regular testing for continuous improvement and finally report on key metrics like traffic and conversions to get a clear understanding of what’s working and what’s not.
                             </p>
                          </div>
                        </div>
                      </div>

                      <div className="content-block content-popup" data-detail="marketing_06">
                        <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                        <div className="card-block">
                            <div className="number">06</div>
                            <h4>SEM </h4>
                            <div className="text-content">
                               <p>
                                While SEO allows you to optimise your website for a greater chance in appearing higher in search results, and online advertising allows you to send promotional content to the target audience of your choice, Search Engine Marketing (SEM) combines both benefits as your content is both optimised for higher search rankings and is placed primarily in front of audiences who are most likely to convert when they click on your ads. Our SEM specialists help carry out these tasks to literally drive business to your website.
                               </p>
                            </div>
                          </div>
                        </div>

              </div>

      </div>
   </section>
    )
}


export default Marketing;
