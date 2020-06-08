import ExpertiseForm from "./ExpertiseForm";
import ProductForm from "./Forms/ProductForm";





const Products = () => {
    return (
      <section className="page_section expertise_section section-products light-bg fadeInUp wow" data-wow-delay=".4s" id="products">
      <div className="container-fluid">
          <div className="content-block-container">

        <div className="content-block content-main">
            <h2>Products</h2>
            <h3>Solutions that help you <br/> reach the top.</h3>

            <div className="row">
              <div className="col-md-9">

                <div className="row">
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">01</div>
                      <h4>Mutual Safe (Mutual Fund Monitoring platform)</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <a href="#" className="link popup_link" data-link="product_01">Read in 30 seconds</a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card-block">
                      <div className="number">02</div>
                      <h4>Concord (Channel Loyalty program)</h4>
                      <p>We help you build loyal Sales partnerships for a sustainable business</p>
                      <a href="#" className="link popup_link" data-link="product_02">Read in 30 seconds</a>
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

        <ProductForm />

       <div className="content-block content-popup" data-detail="product_01">
              <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
              <div className="card-block">
                  <div className="number">01</div>
                  <h4>Blue Ocean <br/>Strategy</h4>
                  <div className="text-content">
                     <p> We explore new business opportunities to keep you a step ahead of the competition. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                     <p>
                     The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et Malorum for use in a type specimen book. We explore new business opportunities to keep you a step ahead of the competition. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et Malorum for use in a type specimen book. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et Malorum for use in a type specimen book. </p>
                      <p>
                      We explore new business opportunities to keep you a step ahead of the competition. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                  </div>

                </div>

              </div>

              <div className="content-block content-popup" data-detail="product_02">
              <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
              <div className="card-block">
                  <div className="number">02</div>
                  <h4>Concord (Channel Loyalty program)</h4>
                  <div className="text-content">
                     <p> To have a sustainable business it is vital for a brand to build loyal sales partner relationships. With our Channel Loyalty solution, your brand would be able to blend in the best practice loyalty methodology with strategic incentive programs. It would assist you to build long lasting and healthy relationships with your partners. Moreover, our solution uses tailored segmentation strategies, where the incentives are personalised and communication is targeted. It facilitates in retaining loyal partners and motivating underperforming channels.</p>
                  </div>

                </div>

              </div>

              </div>

      </div>
    </section>
    )
}


export default Products;
