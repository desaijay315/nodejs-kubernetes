
import {useState} from 'react';

const Header = (props) =>{
   const  { headerNav, locationData } = props;
   const { items } = headerNav[0];

   const { content } = locationData;
   const { title, field_component_type} = content;
   const [queryValue, setqueryValue] = useState("");

   const handleClick = () => {
      if(queryValue){
         var url = "search?keywords=" + encodeURIComponent(queryValue);
         window.location.href = url;
         return;
      }
   }

   const handleInputChange = e =>{
      if(e.target.name === 'queryValue'){
         setqueryValue(e.target.value);  
      }
   }
 
    return(
        <>
        <header id="header" className="site-header">
              <div className="logo">
                 <a href="/"><img src="/img/indigo_logo.svg" alt="" className="header_icon light" />
                 <img src="/img/logo-dark.svg" alt="" className="header_icon dark" />
                 </a>
              </div>
              <div className="header_right">
              <ul>
              <li>
                 <span className="header-nav-icon" data-open="location-nav"><img src="/img/Location.svg" alt="" className="header_icon light"/>
                 <img src="/img/icon-location-dark.svg" alt="" className="header_icon dark"/>
                 </span>
              </li>
              <li><span className="header-nav-icon" data-open="search-nav">
                 <img src="/img/Icon_map_search.svg" alt="" className="header_icon light"/>
                 <img src="/img/Icon-map-search-dark.svg" alt="" className="header_icon dark"/></span>
              </li>
              <li>
                 <span className="nav-icon header-nav-icon" data-open="main-nav">
                 <span></span>
                 <span></span>
                 <span></span>
                 </span>
              </li>
           </ul>
              </div>
           </header>
           <nav className="nav-wrapper main-nav">
              <span className="close_btn"><i className="fal fa-times-circle"></i></span>
              <div className="container-fluid">
                 <ul className="nav-list list-unstyled">
                 {
                     items && items.length > 0 && items.map((headerData, index) =>{
                        return (
                        <li key={headerData.key}>
                        <a href={headerData.url}>
                           <i className="fas fa-angle-right"></i> <span>{headerData.name}</span>
                        </a>
                     </li>
                        )
                     })
                  }
                 </ul>
                 <div className="connect_with_us">
                    <h4><a href="/contact-us"><i className="far fa-envelope"></i> Connect with us</a></h4>
                    <ul className="social-list list-unstyled d-flex">
                        <li><a href="https://www.facebook.com/IndigoConsulting?fref=ts" target="_blank"><i className="fab fa-facebook-f"></i> Indigo Consulting</a></li>
                        <li><a href="https://twitter.com/indigo_cons" target="_blank"><i className="fab fa-twitter"></i> @indigo_cons</a></li>
                        <li><a href="https://www.instagram.com/indigo.consulting/?hl=en" target="_blank"><i className="fab fa-instagram"></i> Indigo.consutling</a></li>
                        <li><a href="https://www.linkedin.com/company/indigo-consulting/" target="_blank"><i className="fab fa-linkedin-in"></i> Indigo Consulting</a></li>
                     </ul>
                 </div>
              </div>
           </nav>
           <div className="nav-wrapper location-nav">
              <span className="close_btn"><i className="fal fa-times-circle"></i></span>
              <div className="container-fluid">
                <h2 className="section_heading">{title}</h2>
                 <div className="row">
                    {
                       field_component_type && field_component_type.length > 0 && field_component_type.map((locationdata, index) => {
                          return locationdata.field_our_location_header_com && locationdata.field_our_location_header_com.length > 0 && locationdata.field_our_location_header_com.map((ldata, index) => {
                             let field_city = ldata.field_city ? ldata.field_city : "";
                             let field_address = ldata.field_address ? ldata.field_address : "";
                             let field_phone = ldata.field_phone ? ldata.field_phone : "";
                             let field_email = ldata.field_email ? ldata.field_email : "";

                             let last_element = ldata.field_address ? field_address.lastIndexOf(","): "";
                             let address      = last_element ? field_address.slice(0, last_element + 1): "0";

                             let pincode      = address ? field_address.split(/[,]+/).pop(): "";

                           let divClass = "";

                           divClass = index === 0 ? "column1" : index === 1 ? "column2" : "column3";
                           return (

                              <div className={`col-md-4 ${divClass}`} key={index}>
                              <address>
                                 <h3>{field_city}</h3>
                                    <div dangerouslySetInnerHTML={ {__html: field_address} } />
                                 <p>
                                 {/* <i className="fa fa-phone-office"></i> : <a href={`tel:${field_phone}`}> {field_phone}</a><br/> */}
                                    <i className="fa fa-envelope"></i> : <a href={`mailto:${field_email}`}> <span className="__cf_email__">{field_email}</span></a>
                                 </p>
                              </address>
                           </div>
   
                             )
                          })
                          
                       })
                    } 
              </div>
           </div>
           </div>
           <div className="nav-wrapper search-nav">
              <span className="close_btn"><i className="fal fa-times-circle"></i></span>
              <div className="container-fluid">
                 {/* <h2 className="section_heading">Search</h2> */}
                 <div className="row justify-content-center align-items-center searchBox">
                    <div className="col-lg-10 col-md-9 col-12">
                       <div className="form-group">
                       <input type="text" name="queryValue" id="search" className="form-control" value={queryValue} placeholder="I am looking for..." onChange={(e) => handleInputChange(e)}/>
                        {/* <label htmlFor="input_search"></label> */}
                       </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-12">
                       <button className="btn btn-primary btn-white" onClick={handleClick}>Submit</button>
                    </div>
                 </div>
              </div>
           </div>
        </>
    )
}


export default Header;