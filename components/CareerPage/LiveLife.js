



const LiveLife = () => {
    return (
        <section className="page_section live_lifes fadeInUp wow" data-wow-delay=".4s" id="best-life">

        <div className="container-fluid">

          <div className="row head_row">
            <div className="col-md-12">
          <h2 className="section_heading text-white without_line fadeInUp wow" data-wow-delay=".4s">Live your best life</h2>
          <p className="text-white fadeInUp wow" data-wow-delay=".1s">The perks of working with Indigo Consulting</p>
        </div>
          </div>

        <div className="row">
          <div className="col-md-12">
            <div className="slider_livelife fadeInUp wow" data-wow-delay=".1s" id="slider_livelife">
              <div className="slide-item">
                <figure><img src="/img/careers/icon-EmployeeBenefits.svg" alt=""/></figure>
                <h3>Employee Benefits</h3>
                <p>From top-of-the-line insurance coverage to generous leave of absence, you get to enjoy benefits that meet global industry standards.</p>
              </div>
              <div className="slide-item">
                  <figure><img src="/img/careers/icon-TrainingDevelopment.svg" alt=""/></figure>
                  <h3>Training and Development</h3>
                  <p>Being part of the Publicis Groupe affords us the opportunity to expose our employees to the best upskilling opportunities in the industry.</p>
                </div>
                <div className="slide-item">
                    <figure><img src="/img/careers/icon-PeopleOverProcess.svg" alt=""/></figure>
                    <h3>People Over Process</h3>
                    <p>We’ve always prided ourselves on being a company that puts employees first. All our policies, processes and programs are designed to meet this requirement.</p>
                  </div>
            </div>
          </div>
        </div>

          </div>

          </section>

    )
}




export default LiveLife;