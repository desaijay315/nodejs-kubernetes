


const ChooseUs = () =>{
    return (
      <section className="page_section why_choose fadeInUp wow" data-wow-delay=".4s" id="why-choose-indigo">

      <div className="container-fluid">

        <h2 className="section_heading txt-black without_line text-center fadeInUp wow" data-wow-delay=".4s">Why choose Indigo?</h2>

        <div className="row no-gutters">

          <div className="col-md-4">

            <div className="card card1 fadeInRight wow" data-wow-delay=".4s">
              <figure>
                <img src="/img/careers/icon-equal-opp.svg" alt=""/>
              </figure>
              <h3>Equal opportunities, inclusion and diversity</h3>
              <p>We, at Indigo, are unbiased employers and are open to hiring and nurturing talent. Our policies promote equal opportunities, irrespective of race, colour, religion, age, sexual orientation, pregnancy and more.</p>
            </div>

          </div>

          <div className="col-md-4">

              <div className="card card2 fadeInRight wow" data-wow-delay=".1s">
                  <figure><img src="/img/careers/icon-data-led.svg" alt=""/></figure>
                  <h3>Data-led creative and business solutions</h3>
                  <p>Our solutions are driven by deep insights extracted from data. Our data-led approach delivers business-impacting solutions across content platforms, channels, devices and experiences.</p>
                </div>

          </div>

          <div className="col-md-4">

              <div className="card card3 fadeInRight wow" data-wow-delay="1s">
                  <figure><img src="/img/careers/icon-opp-to-work.png" alt=""/></figure>
                  <h3>Opportunity to work with diverse clientele</h3>
                  <p>From banking and insurance, to beauty and from auto and apparel brands to FMCG, we provide digital marketing and technology solutions to a colossal list of clients from various industries.</p>
                </div>

          </div>

        </div>

        </div>

        </section>

    )
}


export default ChooseUs;