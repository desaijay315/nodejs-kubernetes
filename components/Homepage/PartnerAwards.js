import { Component } from "react";

class PartnerAwards extends Component{

    constructor(props){
        super(props);
        const {partnersAwardData} = props;
                
        this.state = {
            field_left_section: partnersAwardData.field_left_section,
            field_right_section: partnersAwardData.field_right_section
        }
    }

    componentDidMount(){
        $('.award_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        });
    }

    render(){
        return (
            <section className="page_section partner_award_section">
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 pt-5 pb-5 col-partners">
                    <div className="partners_section">
                        <h2 className="section_heading fadeInRight wow">{this.state.field_left_section[0].field_title}</h2>
                        <p className="title-text fadeInRight wow">When we move forward with our partners, then success takes care of itself.</p>
                        <ul className="partners_list list-unstyled fadeInUp wow">
                        {

                            this.state.field_left_section.map((data,index) => {
                            //console.log(data);
                            
                            // <li key={index}><img src={data.field_image.url} alt={data[0].field_image.url} /></li>
                            })

                        }
                        </ul>
                        <p className="text-center">
                        <a href="#" className="btn btn-primary">View More</a>
                        </p>
                    </div>
                </div>
                <div className="col-md-6 pt-5 pb-5">
                    <div className="award_section">
                        <h2 className="section_heading fadeInRight wow">{this.state.field_right_section[0].field_title}</h2>
                        <p className="title-text fadeInRight wow">Here’s proof that even a 110cc bike can take you places.</p>
                        <div className="award_slider fadeInUp wow">
                        <div className="slide-item text-center">
                            <img src="/img/awards/effin.jpg" alt="" className="d-inline-block img-fluid" />
                        </div>
                        <div className="slide-item text-center">
                            <img src="/img/awards/effin.jpg" alt="" className="d-inline-block img-fluid" />
                        </div>
                        </div>
                        <p className="text-center">
                        <a href="#" className="btn btn-primary">View all</a>
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </section>
        )
    }
}


export default PartnerAwards;