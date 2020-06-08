import React, {useState} from 'react';
import ConsultingForm from "./Forms/ConsultingForm";



const Consulting = () => {

    return (
      <section className="page_section expertise_section section-consulting dark-bg fadeInUp wow" data-wow-delay=".4s" id="consulting">
      <div className="container-fluid">
          <div className="content-block-container">

        <div className="content-block content-main">
            <h2>Consulting</h2>
            <h3>Here are some ways to <br /> arrive at the right solution.</h3>

            <div className="row">
              <div className="col-md-9">

                <div className="row">
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">01</div>
                      <h4>Blue Ocean <br />Strategy</h4>
                      <p>We explore new business opportunities to keep you a step ahead of the competition.</p>
                      <a href="#" className="link popup_link" data-link="consulting_01">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">02</div>
                      <h4>Digital Process <br /> Re-Engineering</h4>
                      <p>We redefine processes and use new technologies to drive business change and efficiency.</p>
                      <a href="#" className="link popup_link" data-link="consulting_02">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">03</div>
                      <h4>Digital <br /> Roadmap</h4>
                      <p>We plan short-term and long-term business objectives with realistic action plan to deliver ROI.</p>
                      <a href="#" className="link popup_link" data-link="consulting_03">Read in 30 seconds</a>
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
                          {/*<p>Lorem Ipsum</p>*/}

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

        <ConsultingForm />

          <div className="content-block content-popup" data-detail="consulting_01">
              <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
              <div className="card-block">
                  <div className="number">01</div>
                  <h4>Blue Ocean <br/>Strategy</h4>
                  <div className="text-content">
                     <p>
                      For today’s businesses, gaining market share is extremely tough as the competition is immense. So, how will your business succeed when there is limited room to grow? This is where we look for verticals or avenues of finding new business opportunities so that you can enjoy an uncontested market share. We help you capture new demand by introducing a product or service with superior features, thus giving you the ‘first-mover’ advantage and rendering the competition irrelevant.
                     </p>
                  </div>
                </div>
              </div>

              <div className="content-block content-popup" data-detail="consulting_02">
                <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                <div className="card-block">
                    <div className="number">02</div>
                    <h4>Digital Process <br/>Re-engineering</h4>
                    <div className="text-content">
                       <p>
                        Sometimes, a business needs a fresh perspective to identify lags in processes, or to fill gaps that have gone unnoticed. Our digital process re-engineering capabilities involve value assessment and operational diagnostics to make your core business processes more strategic and efficient. We leverage the findings from assessment to design and implement an operating model to achieve a considerable increase in productivity, cycle times and quality. Using our digital expertise, we fundamentally rethink your existing processes, basis the end-user’s needs, to deliver more value to the customer and drive business change.
                       </p>
                    </div>
                  </div>
                </div>

                <div className="content-block content-popup" data-detail="consulting_03">
                  <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
                  <div className="card-block">
                      <div className="number">03</div>
                      <h4>Digital  <br/>Roadmap</h4>
                      <div className="text-content">
                         <p>
                          Businesses today are in a state of constant transition. This is due to changing customer needs, a volatile business environment and constantly evolving industry trends. Our experts devise a digital roadmap for your organisation so that you are prepared for these uncertainties as and when they come. We design a customised blueprint that aligns your organisation’s digital initiatives with short-term and long-term business objectives. We undertake the assessment of each digital initiative’s value against cost, complexity and risk to assess whether it can deliver on pre-defined goals. Ultimately, we enable you to convert your business’ vision into a realistic action plan that delivers ROI.
                         </p>
                      </div>
                    </div>
                  </div>

              </div>

      </div>
   </section>
    )
}


export default Consulting;
