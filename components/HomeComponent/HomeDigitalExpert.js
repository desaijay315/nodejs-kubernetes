

import {removeHTMLChars} from '../../action/helpers';

const HomeDigitalExpertise = (props) =>{

    const {digitalExpertiseData} = props;

    return (
      <>
      {
        digitalExpertiseData && digitalExpertiseData.length > 0 ?

        <section className="page_section expertise_digital">
        <div className="container-fluid no-gutters">
           <div className="row">
              <div className="col-md-4 offset-md-4 no-gutters p-0">
                 <h2 className="fadeInUp wow">Expertise</h2>
              </div>
           </div>
           <div className="row expertiseContain">
              <h4 className="zoomIn wow">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 987.98 319.66" style={{enableBackground: "new 0 0 987.98 319.66"}} xmlSpace="preserve">
               <style jsx>{`
                     .digi{
                         enable-background:new;
                        }
                     .digital{
                         fill:none;
                         stroke:#FFFFFF;
                         stroke-miterlimit:10;
                      }
                     `}
                   </style>
               <g className="digi">
                 <path className="digital" d="M0.52,254.81V33.71h72.36c35.29-0.44,64.32,9.66,87.1,30.32s33.94,47.18,33.5,79.56
                   c0.44,32.16-10.83,58.85-33.83,80.06c-23,21.22-51.92,31.6-86.77,31.16H0.52z M45.74,213.94h26.8c22.33,0,40.31-6.42,53.94-19.26
                   c13.62-12.84,20.44-29.87,20.44-51.09c0-21.44-6.7-38.3-20.1-50.59c-13.4-12.28-31.49-18.42-54.27-18.42h-26.8L45.74,213.94
                   L45.74,213.94z"/>
                 <path className="digital" d="M222.28,28.69c0-8.04,2.79-14.74,8.38-20.1c5.58-5.36,12.4-8.04,20.44-8.04s14.91,2.68,20.6,8.04
                   c5.7,5.36,8.54,12.06,8.54,20.1c0,7.82-2.85,14.4-8.54,19.77c-5.69,5.36-12.56,8.04-20.6,8.04s-14.86-2.68-20.44-8.04
                   C225.07,43.09,222.28,36.51,222.28,28.69z M228.65,254.81V88.98h45.23v165.83H228.65z"/>
                 <path className="digital" d="M443.72,88.98h41.54v147.4c0,26.58-7.71,47.01-23.12,61.3s-36.29,21.44-62.65,21.44
                   c-31.04,0-58.18-10.28-81.4-30.82l23.78-31.49c19.21,14.29,37.19,21.44,53.94,21.44c13.62,0,24.4-3.35,32.33-10.05
                   c7.92-6.7,11.89-16.42,11.89-29.15v-9.04c-12.06,13.18-28.92,19.76-50.58,19.76c-23,0-41.99-7.71-56.95-23.11
                   c-14.96-15.41-22.44-35.18-22.44-59.29c0-24.34,7.48-44.11,22.44-59.3s33.95-22.78,56.95-22.78c24.12,0,42.21,8.15,54.27,24.45
                   V88.98z M440.7,166.7c0-13.62-3.97-24.17-11.89-31.66c-7.93-7.48-17.92-11.22-29.98-11.22c-12.51,0-22.78,3.91-30.82,11.73
                   c-8.04,7.82-12.06,18.31-12.06,31.49s4.07,23.9,12.23,32.16c8.15,8.27,18.37,12.4,30.65,12.4c11.83,0,21.78-4.02,29.82-12.06
                   S440.7,180.56,440.7,166.7z"/>
                 <path className="digital" d="M523.78,28.69c0-8.04,2.79-14.74,8.38-20.1c5.58-5.36,12.39-8.04,20.43-8.04s14.91,2.68,20.6,8.04
                   c5.7,5.36,8.54,12.06,8.54,20.1c0,7.82-2.85,14.4-8.54,19.77c-5.69,5.36-12.56,8.04-20.6,8.04s-14.85-2.68-20.43-8.04
                   C526.57,43.09,523.78,36.51,523.78,28.69z M530.14,254.81V88.98h45.22v165.83H530.14z"/>
                 <path className="digital" d="M726.79,216.95v37.86c-10.72,2.68-21.1,4.02-31.15,4.02c-21.22,0-37.58-5.24-49.08-15.74
                   s-17.25-26.02-17.25-46.57v-69.34h-26.13V88.99h26.13V47.11h45.22v41.88h46.9v38.19h-46.9v65.33c0,9.38,2.4,16.03,7.2,19.93
                   c4.8,3.91,12.67,5.86,23.62,5.86C709.14,218.3,716.29,217.85,726.79,216.95z"/>
                 <path className="digital" d="M898.64,156.32v98.49H857.1v-16.08c-12.96,13.4-29.81,20.1-50.58,20.1c-17.42,0-31.32-4.57-41.71-13.73
                   c-10.38-9.16-15.58-21.11-15.58-35.84c0-14.96,5.64-26.74,16.92-35.34c11.27-8.59,26.52-12.9,45.73-12.9h41.54v-7.37
                   c0-9.38-2.63-16.58-7.87-21.61c-5.25-5.03-12.9-7.54-22.95-7.54c-8.26,0-15.75,1.79-22.44,5.36c-6.7,3.58-13.85,9.38-21.44,17.42
                   l-23.45-27.8c19.21-22.78,43.33-34.17,72.36-34.17c21.88,0,39.19,6.2,51.92,18.59S898.64,133.77,898.64,156.32z M853.41,192.84
                   v-2.01H817.9c-15.41,0-23.12,5.58-23.12,16.75c0,5.58,2.18,10,6.53,13.23c4.36,3.24,10.1,4.86,17.25,4.86
                   c10.05,0,18.37-3.07,24.96-9.21C850.12,210.31,853.41,202.44,853.41,192.84z"/>
                 <path className="digital" d="M942.19,254.81V3.56h45.22v251.25H942.19z"/>
               </g>
               </svg>
              </h4>
               {
                    digitalExpertiseData && digitalExpertiseData.length > 0 && digitalExpertiseData.map((data, index) => {
                    
                       let field_description = removeHTMLChars(data.field_description) ? removeHTMLChars(data.field_description) : "";
                       let field_title = data.field_title ? data.field_title : "";
                       let uri_link  = data.field_links_component[0].field_link ? data.field_links_component[0].field_link.uri : "" 
                       let uri_title  = data.field_links_component[0].field_link ? data.field_links_component[0].field_link.title : "" 

                       
                        return (
                        <div className="col-md-4 col-6 digitalBdr m-0 p-0" key={index}>
                          <div className={index > 2 ? "digital_box digital_box2 p-4" : "digital_box p-4"}>
                            <h3>{field_title}</h3>
                              <div className="mainBox">
                              <p>{field_description}</p>
                              <a href={uri_link}>{uri_title}<i className="arrow"></i></a>
                            </div>
                          </div>
                      </div>
                      )
                    })
                }
            </div>
        </div>
     </section>
        
        
        : null
      }
      </>
        
    )
}


export default HomeDigitalExpertise;