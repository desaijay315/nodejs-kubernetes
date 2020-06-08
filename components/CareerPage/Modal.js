
import CareersForm from './CarreersForm';

const Modal = () => {

  return (
      <>
<script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=5ed7464268af2600136d125d&product=inline-share-buttons' async='async'></script>
<section className="page_section job_list_section fadeInUp wow" data-wow-delay=".4s" id="openings">

                            <div className="container-fluid">
                                <h2 className="section_heading txt-black without_line">Find out if you fit in</h2>

                                <div className="row filter_row">
                                  <div className="col-md-3 col-6">
                                    <label htmlFor="" className="custom_select_wrap">
                                    <select name="" id="applied_city" className="form-control">
                                      <option value="all">All Location</option>
                                      <option value="mumbai">Mumbai</option>
                                      <option value="gurgaon">Gurgaon</option>
                                      <option value="bengaluru">Bengaluru</option>
                                    </select></label>
                                  </div>

                                  <div className="col-md-3 col-6">
                                      <label htmlFor="" className="custom_select_wrap">
                                          <select name="" id="applied_post" className="form-control">
                                        <option value="all">All Positions</option>
                                        <option value="creative">Creative</option>
                                        <option value="technology">Technology</option>
                                        <option value="accountmanager">Account Management</option>
                                        <option value="others">Others</option>
                                      </select>
                                      </label>
                                    </div>

                                </div>

                                <div className="row joblist_row" id="careersfilter">
                                  <div className="col-md-6 careersDetails" data-location="mumbai bengaluru gurgaon" data-cat="others">
                                    <div className="card job_card">
                                      <h4>Strategist</h4>
                                      <p>Understand business requirements and offer strategic solutions led by technology and digital communications</p>
                                      <div className="btn-wrap">
                                      <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#career_modal_strategist">View More</a> 
                                      <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#career_form">Apply</a>
                                    </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6 careersDetails" data-location="mumbai bengaluru gurgaon" data-cat="creative">
                                      <div className="card job_card">
                                        <h4>Copywriter</h4>
                                        <p>Write copy for digital and social media campaigns & Complete knowledge of digital. Understand strategy briefs</p>
                                        <div className="btn-wrap">
                                          <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#career_modal">View More</a> <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#career_form">Apply</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 careersDetails" data-location="mumbai" data-cat="creative">
                                      <div className="card job_card">
                                          <h4>UX Consultant</h4>
                                          <p>Expertise in User Research, Journey Maps and Information Architecture. Interaction Design &amp; Wireframe Design in Sketch and Axure</p>
                                          <div className="btn-wrap"><a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#uxConsultant">View More</a> <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#career_form">Apply</a></div>
                                      </div>
                                  </div>
                                      <div className="col-md-6 careersDetails" data-location="mumbai bengaluru" data-cat="creative">
                                          <div className="card job_card">
                                            <h4>Visualizer</h4>
                                            <p>Owner of visual content for the respective brand/brands. This role requires developing visual content including micro-blogs</p>
                                            <div className="btn-wrap">
                                              <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#visualizer">View More</a> <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#career_form">Apply</a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-md-6 careersDetails" data-location="mumbai" data-cat="others">
                                            <div className="card job_card">
                                              <h4>SEO Consultant</h4>
                                              <p>Manage SEO businesses successfully. Team Management. Identify opportunities for business development</p>
                                              <div className="btn-wrap"> 
                                                <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#seoConsultant">View More</a> <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#career_form">Apply</a>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-md-6 careersDetails" data-location="mumbai" data-cat="creative">
                                          <div className="card job_card">
                                              <h4>UI Designer</h4>
                                              <p>3+ years of Experience designing for intuitive and delightful user experiences i.e websites and apps</p>
                                              <div className="btn-wrap"><a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#uiDesigner">View More</a> <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#career_form">Apply</a></div>
                                          </div>
                                      </div>

                                      <div className="col-md-6 careersDetails" data-location="mumbai bengaluru" data-cat="technology">
                                  <div className="card job_card">
                                      <h4>Magento Developer</h4>
                                      <p>Must have a minimum experience of 5-7 years. Must have a minimum 2+ years front-end development experience</p>
                                      <div className="btn-wrap"><a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#magentoDeveloper">View More</a> <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#career_form">Apply</a></div>
                                  </div>
                              </div>


                              <div className="col-md-6 careersDetails" data-location="mumbai bengaluru" data-cat="technology">
                              <div className="card job_card">
                                  <h4>Drupal Developer</h4>
                                  <p>Minimum 5 years of experience managing large multi-environment database-centric web applications</p>
                                  <div className="btn-wrap"><a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#drupalDeveloper">View More</a> <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#career_form">Apply</a></div>
                              </div>
                          </div>

                          <div className="col-md-6 careersDetails" data-location="mumbai bengaluru" data-cat="technology">
                            <div className="card job_card">
                                <h4>AEM Developer</h4>
                                <p>Design and implement solutions leveraging Adobe AEM Sites. Develop digital consumer experiences based on foundation of</p>
                                <div className="btn-wrap"><a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#aemDeveloper">View More</a> <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#career_form">Apply</a></div>
                            </div>
                        </div>

                        <div className="col-md-6 careersDetails" data-location="mumbai" data-cat="technology">
                        <div className="card job_card">
                            <h4>React Js</h4>
                            <p>Should be able to understand the React JS, Resource should be able to understand the HTML5 dev concepts</p>
                            <div className="btn-wrap"><a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#reactJS">View More</a> <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#career_form">Apply</a></div>
                        </div>
                    </div>
                    <div className="col-md-6 careersDetails" data-location="mumbai" data-cat="technology">
                        <div className="card job_card">
                            <h4>Node Js</h4>
                            <p>Must Have Skill Set Experience in development with Java Spring Boot Spring Framework and JavaScript NodeJS React or Angular Redux</p>
                            <div className="btn-wrap"><a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#nodeJS">View More</a> <a href="#" className="btn btn-secondary" data-toggle="modal" data-target="#career_form">Apply</a></div>
                        </div>
                    </div>

                                  </div>


                              </div>
                              </section>
    

<div className="modal fade career_modal" id="career_modal" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                  {/* <!--Content--> */}
                  <div className="modal-content">
                    {/* <!--Body--> */}
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal">
                            <i className="fal fa-times"></i>
                        </button>

                        <h4>Copywriter</h4>
                        <ul className="d-flex list-unstyled loc_exp">
                          <li><span>Location:</span> Mumbai, Bangalore & Delhi</li>
                          <li><span>Experience:</span> 1-3 years</li>
                        </ul>

                        <div className="job_desc">
                          <h5>Job Description:</h5>
                          <ul className="d-flex flex-column">
                            <li>Write copy for digital and social media campaigns & Complete knowledge of digital </li>
                             <li> Understand strategy briefs and create innovative campaigns</li>
                            <li> Brilliant writing/editing skills & Team player and passion to work on pitches</li>
                          </ul>
                        </div>

                        <div className="footer_btns d-flex align-items-center">
                         {/* <!-- removed this below button 13/05 --> */}
                          {/* <!-- <div className="btn-wrap">
                              <a href="#" className="btn btn-primary btn-small" data-dismiss="modal" data-toggle="modal" data-target="#career_form">Apply</a>
                          </div> --> */}

                          <div className="social-wrap">
                          <div className="sharethis-inline-follow-buttons"></div>
                          </div>

                        </div>



                    </div>
                  </div>
                  {/* <!--/.Content--> */}
                </div>
              </div>
    <div className="modal fade career_modal" id="career_modal_strategist" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      {/* <!--Content--> */}
      <div className="modal-content">
        {/* <!--Body--> */}
        <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal">
                <i className="fal fa-times"></i>
            </button>
            <h4>Strategist</h4>
            <ul className="d-flex list-unstyled loc_exp">
              <li><span>Location:</span> Mumbai, Bangalore & Delhi</li>
              <li><span>Experience:</span> 4-8 years</li>
            </ul>
            <div className="job_desc">
              <h5>Job Description:</h5>
              <ul className="d-flex flex-column">
                  <li>	Understand business requirements and offer strategic solutions led by technology and digital communications</li>
                  <li>	Identify, decode and solve business problems and convert them into opportunities for clients across multiple industries and define frameworks to measure the results.</li>
                  <li>	Drive digital and social media content marketing strategy for campaigns, content and platforms</li>
                  <li>	Create communication strategy roadmaps for campaigns, content and platforms.</li>
                  <li>	Be a constant guide from strategy to execution and optimization.</li>
                  <li>	Provide ongoing support to account management, creative and tech teams to reach their goals.</li>
                  <li>	Mentor team members to do excellent work in formulating and following through established strategies.</li>
                  <li>	Actively contribute to the continuous growth of the agency’s client portfolio across categories.</li>
                  <li>	Lead data led insight mining</li>
                  <li>	Drive IMC strategy in collaboration with main line agency partners in the group</li>
                  <li>Collaborate with creative and business partners to produce effective and award winning ‘work’ on client mandates</li>
                  <li>	Actively contribute to the continuous growth of the agency’s client portfolio across categories</li>
                  
              </ul>
            </div>
            <div className="footer_btns d-flex align-items-center">
              <div className="social-wrap">
              <div className="sharethis-inline-follow-buttons"></div>
                  {/* <ul className="list-unstyled d-flex m-0 p-0">
                    <li>Share on</li>
                      <li><a href="#" data-network="facebook"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#" data-network="twitter"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#" data-network="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                   </ul> */}
              </div>

            </div>



        </div>
      </div>
      {/* <!--/.Content--> */}
    </div>
  </div>

  <div className="modal fade career_modal" id="uxConsultant" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        {/* <!--Content--> */}
        <div className="modal-content">
          {/* <!--Body--> */}
          <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal">
                  <i className="fal fa-times"></i>
              </button>
              <h4> UX Consultant</h4>
              <ul className="d-flex list-unstyled loc_exp">
                <li><span>Location:</span> Mumbai</li>
                <li><span>Experience:</span> 1-3 years</li>
              </ul>
              <div className="job_desc">
                <h5>Job Description:</h5>
                <ul className="d-flex flex-column">
                    <li>Expertise in User Research, Journey Maps and Information Architecture</li>
                    <li>Interaction Design &amp; Wireframe Design in Sketch and Axure</li>
                    <li>Preference for the Designers from IIT, NID, MIT, HFI Certified or equivalent Design schools</li>
                    <li>Must have strong turn around skills backed with sound understanding of any given design problem</li>
                    <li>Strong communication and assertive skills</li>
                    <li>	Should be able to sell / present Design to any audience</li>
                    <li>	Sound knowledge of UI Development nuances</li>
                    <li>	Story Telling, Reasoning, Probing skills, excellent written and spoken English</li>
                    <li>	International and Diverse Culture exposure</li>
                </ul>
              </div>
              <div className="footer_btns d-flex align-items-center">
                <div className="social-wrap">
                <div className="sharethis-inline-follow-buttons"></div>
                </div>

              </div>



          </div>
        </div>
        {/* <!--/.Content--> */}
      </div>
    </div>

    <div className="modal fade career_modal" id="visualizer" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          {/* <!--Content--> */}
          <div className="modal-content">
            {/* <!--Body--> */}
            <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal">
                    <i className="fal fa-times"></i>
                </button>
                <h4>Visualizer</h4>
                <ul className="d-flex list-unstyled loc_exp">
                  <li><span>Location:</span> Mumbai & Bangalore</li>
                  <li><span>Experience:</span> 0-2 years</li>
                </ul>
                <div className="job_desc">
                  <h5>Job Description:</h5>
                  <ul className="d-flex flex-column">
                      <li>	Owner of visual content for the respective brand/brands. </li>
                      <li>	This role requires developing visual content including micro-blogs, social media posts, blog posts, e-mailers, sales collaterals, infographics, website content and more.</li>
                      <li>	This person should be a passionate Social Media Specialist and a healthy social media presence would be appreciated</li>
                      <li>	Skilled at the art of designing compelling and share-worthy designs</li>
                      <li>	Should most definitely know GIF animation, basic video editing, after effects and or related software.</li>
                      <li>	Should be a pro at operating Photoshop and Illustrator (video editing software will be a bonus)</li>
                      <li>	Should have a knack to spot visual trends</li>

                  </ul>
                </div>
                <div className="footer_btns d-flex align-items-center">
                  <div className="social-wrap">
                    <div className="sharethis-inline-follow-buttons"></div>
                  </div>

                </div>



            </div>
          </div>
          {/* <!--/.Content--> */}
        </div>
      </div>

      <div className="modal fade career_modal" id="seoConsultant" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            {/* <!--Content--> */}
            <div className="modal-content">
              {/* <!--Body--> */}
              <div className="modal-body">
                  <button type="button" className="close" data-dismiss="modal">
                      <i className="fal fa-times"></i>
                  </button>
                  <h4>SEO Consultant</h4>
                  <ul className="d-flex list-unstyled loc_exp">
                    <li><span>Location:</span> Mumbai</li>
                    <li><span>Experience:</span> 3-8 years</li>
                  </ul>
                  <div className="job_desc">
                    <h5>Job Description:</h5>
                    <ul className="d-flex flex-column">
                        <li>	Manage SEO businesses successfully</li>
                        <li>	Team Management</li>
                        <li>	Identify opportunities for business development</li>
                        <li>	Respond to and follow up on RFPs received proactively</li>
                        <li>	Do internal reviews & ensure the same at client site (Monthly, Quarterly, Half Yearly & Annually)</li>
                        <li>	Strong management experience and skills with the ability to lead cross-functional teams and people not directly reporting to you</li>
                        <li>	Honest story-teller with skills to simplify technology/jargons</li>
                        <li>	Solid understanding of web analytics & digital media</li>
                        

                    </ul>
                  </div>
                  <div className="footer_btns d-flex align-items-center">
                    <div className="social-wrap">
                    <div className="sharethis-inline-follow-buttons"></div>
                    </div>

                  </div>



              </div>
            </div>
            {/* <!--/.Content--> */}
          </div>
        </div>

        <div className="modal fade career_modal" id="uiDesigner" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
              {/* <!--Content--> */}
              <div className="modal-content">
                {/* <!--Body--> */}
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal">
                        <i className="fal fa-times"></i>
                    </button>
                    <h4> UI Designer</h4>
                    <ul className="d-flex list-unstyled loc_exp">
                      <li><span>Location:</span> Mumbai</li>
                      <li><span>Experience:</span> 3-6 years</li>
                    </ul>
                    <div className="job_desc">
                      <h5>Job Description:</h5>
                      <ul className="d-flex flex-column">
                          <li>	 3+ years of Experience designing for intuitive and delightful user experiences i.e websites and apps. </li>
                          <li>	Deep experience with Adobe CC, especially Photoshop, XD and Sketch. </li>
                          <li>	A serious understanding of visual branding concepts. </li>
                          <li>	A strong portfolio that demonstrates expertise in mobile app UI/UX design and user-centric thinking. </li>
                          <li>	Intimate knowledge with iOS app design, Android app design, and both platforms’ Human Interface Guidelines, including Material Design principles. </li>
                          <li>	Excellent work ethic and ability to meet deadlines. </li>
                          <li>	Excellent problem solving, critical thinking, and communication skills </li>
                      </ul>
                    </div>
                    <div className="footer_btns d-flex align-items-center">
                      <div className="social-wrap">
                      <div className="sharethis-inline-follow-buttons"></div>
                      </div>

                    </div>



                </div>
              </div>
              {/* <!--/.Content--> */}
            </div>
          </div>

          <div className="modal fade career_modal" id="magentoDeveloper" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
              <div className="modal-dialog modal-lg" role="document">
                {/* <!--Content--> */}
                <div className="modal-content">
                  {/* <!--Body--> */}
                  <div className="modal-body">
                      <button type="button" className="close" data-dismiss="modal">
                          <i className="fal fa-times"></i>
                      </button>
                      <h4>Magento Developer</h4>
                      <ul className="d-flex list-unstyled loc_exp">
                        <li><span>Location:</span> Mumbai/Bangalore</li>
                        <li><span>Experience:</span> 5-7 years</li>
                      </ul>
                      <div className="job_desc">
                        <h5>Job Description:</h5>
                        <ul className="d-flex flex-column">
                            <li>	Must have a minimum experience of 5-7 years.</li>
                            <li>	Must have a minimum 2+ years front-end development experience using Magento 1 or Magento 2.</li>
                            <li>	Must have a minimum 2+ year of experience in - Html5, XHTML, PHTML, Css3, Bootstrap, Less, Javascript, Php, Jquery, Ajax, Node.js, ReactJS</li>
                            <li>	Proficient understanding of cross-browser compatibility issues and ways to work around them.</li>
                            <li>	Should be well experienced in responsive design, mobile development, and parallax.</li>
                            <li>	Should have good knowledge of semantics and code optimization techniques.</li>
                            <li>	Preference would be given to candidates having Magento certification</li>
                            <li>	Experience in work with Wamp, Xampp, Lamp or docker</li>
                            
                        </ul>
                      </div>
                      <div className="footer_btns d-flex align-items-center">
                        <div className="social-wrap">
                        <div className="sharethis-inline-follow-buttons"></div>
                        </div>

                      </div>



                  </div>
                </div>
                {/* <!--/.Content--> */}
              </div>
            </div>

            <div className="modal fade career_modal" id="drupalDeveloper" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                  {/* <!--Content--> */}
                  <div className="modal-content">
                    {/* <!--Body--> */}
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal">
                            <i className="fal fa-times"></i>
                        </button>
                        <h4>Drupal Developer</h4>
                        <ul className="d-flex list-unstyled loc_exp">
                          <li><span>Location:</span> Mumbai/Bangalore</li>
                          <li><span>Experience:</span> 5-8 years</li>
                        </ul>
                        <div className="job_desc">
                          <h5>Job Description:</h5>
                          <ul className="d-flex flex-column">
                              <li>	Minimum 5 years of experience managing large multi-environment database-centric web applications</li>
                              <li>	Experience in Drupal site building, module development and Drupal theming</li>
                              <li>	5+ years’ experience developing with HTML, CSS, jQuery, and JavaScript</li>
                              <li>	4+ years of working experience with PHP</li>
                              <li>	3+ years of professional Drupal 7 development experience</li>
                              <li>	1+ years of professional Drupal 8 development experience</li>
                              <li>	AngularJS or another JS Framework-plus</li>
                              <li>	1+ SASS</li>
                              <li>	Experience working in a Marketing Agency</li>
                              <li>	Experience working with Drupal version 7 & 8</li>
                              <li>	Experience working with Acquia</li>
                              <li>	Experience using Jira for development work tasks and release management</li>
                              <li>Hands-on experience with MySQL</li>
                              <li>	Experience in using and configuring common modules, such as; Views, CTools, Display Suite Knowledge</li>
                              <li>	Experience with GIT from CLI or GUI</li>
                              <li>	Experience running a LAMP stack locally using any method</li>
                          </ul>
                        </div>
                        <div className="footer_btns d-flex align-items-center">
                          <div className="social-wrap">
                          <div className="sharethis-inline-follow-buttons"></div>
                          </div>

                        </div>



                    </div>
                  </div>
                  {/* <!--/.Content--> */}
                </div>
              </div>

              <div className="modal fade career_modal" id="aemDeveloper" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                  <div className="modal-dialog modal-lg" role="document">
                    {/* <!--Content--> */}
                    <div className="modal-content">
                      {/* <!--Body--> */}
                      <div className="modal-body">
                          <button type="button" className="close" data-dismiss="modal">
                              <i className="fal fa-times"></i>
                          </button>
                          <h4>AEM Developer</h4>
                          <ul className="d-flex list-unstyled loc_exp">
                            <li><span>Location:</span> Mumbai/Bangalore</li>
                            <li><span>Experience:</span> 5-8 years</li>
                          </ul>
                          <div className="job_desc">
                            <h5>Job Description:</h5>
                            <ul className="d-flex flex-column">
                                <li>Design and implement solutions leveraging Adobe AEM Sites</li>	
                                <li>Develop digital consumer experiences based on foundation of the Adobe CQ AEM product suite including CQ AEM CRX CQ WCM and DAM</li>
                                <li>	Translate marketing and web site needs into AEM specific recommendations and solutions</li>
                                <li>	Leverage AEM other state of the art technologies and </li>integration patterns to solve cross departmental challenges
                                <li>	Work in an agile rapid development and prototyping environment Drive project scope and timeline definition based on collaborative needs assessments</li>
                                <li>	Design and improve internal development methodologies around Adobe AEM solution </li>
                                
                            </ul>
                          </div>
                          <div className="footer_btns d-flex align-items-center">
                            <div className="social-wrap">
                            <div className="sharethis-inline-follow-buttons"></div>
                            </div>
  
                          </div>
  
  
  
                      </div>
                    </div>
                    {/* <!--/.Content--> */}
                  </div>
                </div>

                <div className="modal fade career_modal" id="reactJS" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                      {/* <!--Content--> */}
                      <div className="modal-content">
                        {/* <!--Body--> */}
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal">
                                <i className="fal fa-times"></i>
                            </button>
                            <h4>React Js</h4>
                            <ul className="d-flex list-unstyled loc_exp">
                              <li><span>Location:</span> Mumbai</li>
                              <li><span>Experience:</span> 3-6 years</li>
                            </ul>
                            <div className="job_desc">
                              <h5>Job Description:</h5>
                              <ul className="d-flex flex-column">
                                  <li>	Should be able to understand the React JS, Resource should be able to understand the HTML5 dev concepts</li>
                                  <li>	Development and supporting using core Java technologies such as Collections, including Concurrent collections and iterators, Practical knowledge of Threading, i.e. executors, futures, Experienced in ReactJS, HTML5 and CSS, Fixing software defects/bugs, measures and analyses code for quality, Contributing to problem and root cause analysis</li>
                                  <li>	Should have good communication skills b: Resource Should have good Analytical skills</li>
                              </ul>
                            </div>
                            <div className="footer_btns d-flex align-items-center">
                              <div className="social-wrap">
                              <div className="sharethis-inline-follow-buttons"></div>
                              </div>
    
                            </div>
    
    
    
                        </div>
                      </div>
                      {/* <!--/.Content--> */}
                    </div>
                  </div>

                  <div className="modal fade career_modal" id="nodeJS" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                      <div className="modal-dialog modal-lg" role="document">
                        {/* <!--Content--> */}
                        <div className="modal-content">
                          {/* <!--Body--> */}
                          <div className="modal-body">
                              <button type="button" className="close" data-dismiss="modal">
                                  <i className="fal fa-times"></i>
                              </button>
                              <h4>Node Js</h4>
                              <ul className="d-flex list-unstyled loc_exp">
                                <li><span>Location:</span> Mumbai</li>
                                <li><span>Experience:</span> 5-7 years</li>
                              </ul>
                              <div className="job_desc">
                                <h5>Job Description:</h5>
                                <ul className="d-flex flex-column">
                                    <li>	Must Have Skill Set Experience in development with Java Spring Boot Spring Framework and JavaScript NodeJS React or Angular Redux.</li>
                                    <li>	Experience with front end and back end development knowledgeable in Database Servers and UI</li>
                                    <li>	Ability to understand the general language in investment industry </li>
                                    <li>	5 year’s experience with Waterfall Agile and Iterative Development Technologies JIRA</li>
                                    <li>	Experience preferred Great written and verbal communication skills in English Ability to be able to handle multiple tasks and set priorities Good To Have Skill Set Experience with Python Scripts </li>
                                    <li>	5 year’s experience with Waterfall Agile and Iterative Development Technologies </li>
                                    <li>	Collaborative attitude to participate in Agile Scrum meetings and experience with task management tool</li> 
                                    <li>	Full Stack Engineer who can handle WEB UI databases servers systems engineering and clients for Risk Analyst Project</li>
                                    
                                </ul>
                              </div>
                              <div className="footer_btns d-flex align-items-center">
                                <div className="social-wrap">
                                <div className="sharethis-inline-follow-buttons"></div>
                                </div>
      
                              </div>
      
      
      
                          </div>
                        </div>
                        {/* <!--/.Content--> */}
                      </div>
                    </div>

<div className="modal fade career_form" id="career_form" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">

        <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
                <i className="fal fa-times"></i>
            </button>
            {/* <!--Body--> */}
            <div className="modal-body">


                <div className="header_section">
                  <img src="/img/icon-jointeam.png" alt=""/>

                  Join<br/>
                  <span>Our Team</span>

                </div>

                <CareersForm />


                </div>

                </div>


      </div>

      </div>
      </>

  )
}

export default Modal;