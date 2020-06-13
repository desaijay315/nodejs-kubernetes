
const Footer = (props) => {

    const {footerNav } = props;
    const  { items } = footerNav[0];

    return(
        <>
        <footer>
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="footer_left">
                        <ul className="list-unstyled d-flex">
                            {
                                items && items.length > 0 && items.map( (item) =>{
                                    const { url, name } = item
                                    return (
                                        <li key={url}>
                                            <a href={url}>{name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="footer_right">
                        <h4><a href="/contact-us"><i className="far fa-envelope"></i> Connect with us - OKAYYYYY</a></h4>
                        <ul className="list-unstyled d-flex">
                           <li><a href="https://www.facebook.com/IndigoConsulting?fref=ts" target="_blank" rel="noopener"><i className="fab fa-facebook-f"></i></a></li>
                           <li><a href="https://twitter.com/indigoconsultin" target="_blank" rel="noopener"><i className="fab fa-twitter"></i></a></li>
                           <li><a href="https://www.instagram.com/indigo.consulting/?hl=en" target="_blank" rel="noopener"><i className="fab fa-instagram"></i></a></li>
                           <li><a href="https://www.linkedin.com/company/indigo-consulting/" target="_blank" rel="noopener"><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="copyright_wrap">
                <p className="copyright">Copyright@TLG India Pvt. Ltd. Division Indigo Consulting</p>
                </div>
            </div>
        </footer>
        </>
    )
}


export default Footer;