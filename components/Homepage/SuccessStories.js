import { Component } from "react";


class SuccessStories extends Component {

    componentDidMount(){
        
        $('.icon-grid-listing li button').click(function(){
            $('.icon-grid-listing li button').removeClass('active').removeAttr('disabled');
            $(this).addClass('active').attr('disabled','disabled');
          });

          $('.success_stories nav .icon-grid-listing .icon-list').click(function(){
            $('.story_slider').removeClass('grid_view slick-slider');
            $('.story_slider').slick('unslick');
          })

          $('.success_stories nav .nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            dots: false,
            arrows: false,
            centerMode: false,
            infinite: false,

          });
          if ($(window).width() < 1024) {
            $('.success_stories nav .nav-tabs .nav-item').click(function(){
              var slideIndex = $(this).index();
              console.log(slideIndex);
              $('.success_stories nav .nav').slick('slickGoTo', slideIndex);
            });
        }
        else{
          $('.success_stories nav .nav').slick('unslick')
        }


        $('.success_stories nav .nav-tabs .nav-item .nav-link').click(function(){
          $('.success_stories nav .nav-tabs .nav-item .nav-link').removeClass('show active');
          //$(this).addClass('show active');
        })


        $('.story_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1.05,
                  slidesToScroll: 1,
                  centerMode: false,
                }
              }
            ]
        });

        $('.success_stories nav .icon-grid-listing .icon-grid').click(function(){
            $('.story_slider').addClass('grid_view slick-slider');
              $('.story_slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            });
        })

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $('.story_slider').slick('setPosition');
        });
          
    }
    render(){
    return (
        <section className="page_section success_stories section_py section_grey">

        <div className="container-fluid">
            <h2 className="section_heading fadeInRight wow">Success Stories</h2>
        </div>

        <div className="nav_wrap">
            <div className="container-fluid">
                <div className="row">
                   <div className="col-12 fadeInUp wow" data-wow-delay=".1s">
            <nav>
             <div className="tabUnderline"></div>
                <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                   <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#nav-banking" role="tab" aria-controls="nav-banking" aria-selected="true">Banking</a>
                   </li>
                   <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#nav-financial" role="tab" aria-controls="nav-financial" aria-selected="false">Financial Services</a></li>
                   <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#nav-fmcg" role="tab" aria-controls="nav-fmcg" aria-selected="true">FMCG</a></li>
                   <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#nav-manufacturing" role="tab" aria-controls="nav-manufacturing" aria-selected="false">Manufacturing</a></li>
                   <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#nav-media" role="tab" aria-controls="nav-media" aria-selected="false">Media & Entertainment</a></li>
                   <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#nav-retail" role="tab" aria-controls="nav-retail" aria-selected="false">Retail</a></li>
                   <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#nav-tech" role="tab" aria-controls="nav-tech" aria-selected="false">Technology</a></li>
                   <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#nav-telecom" role="tab" aria-controls="nav-telecom" aria-selected="false">CORPORATES</a></li>
                </ul>
                <ul className="icon-grid-listing">
                   <li><button className="icon-grid active" disabled><span></span><span></span><span></span><span></span></button></li>
                   <li><button className="icon-list"><span></span><span></span></button></li>
                </ul>
             </nav>
             </div>
             </div>
             </div>
        </div>

          <div className="container-fluid">

             <div className="row">
                <div className="col-12">

                   <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                      <div className="tab-pane fade" id="nav-banking" role="tabpanel" aria-labelledby="nav-banking-tab">
                         <div className="story_slider grid_view animated fadeInUp">
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                     <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                           <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" className="img-fluid"/></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div className="row my-4">
                            <div className="col-md-12 text-center">
                               <a href="#" className="btn btn-primary btn_show_more">Show More</a>
                            </div>
                         </div>
                      </div>
                      <div className="tab-pane fade" id="nav-financial" role="tabpanel" aria-labelledby="nav-financial-tab">
                         Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                      </div>
                      <div className="tab-pane fade show active" id="nav-fmcg" role="tabpanel" aria-labelledby="nav-fmcg-tab">
                         <div className="story_slider grid_view animated fadeInUp">
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/oral-b.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                           <figure className="brand-logo"><img src="/img/success-stories/fmcg/Oral-B-logo.png" alt="" className="img-fluid"/></figure>
                                           <h4 className="card-title">Lorem Ipsum dolor sitipsum</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                              <div className="row brand-row no-gutters animated fadeInLeft">
                                 <div className="col-md-6 slider-col">
                                     <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/papmers.jpg" src="" alt="" /></figure>
                                 </div>
                                 <div className="col-md-6 slider-col white-box">
                                    <div className="card">
                                       <div className="card-block animated fadeInRight">
                                          <figure className="brand-logo"><img src="/img/success-stories/logo-pampers.png" alt="" className="img-fluid"/></figure>
                                          <h4 className="card-title">Lorem Ipsum dolor sitipsum</h4>
                                          <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                       </div>
                                       <div className="card-footer">
                                          <a href="#" className="btn btn-secondary">View More</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="slide-item">
                            <div className="row brand-row no-gutters animated fadeInLeft">
                               <div className="col-md-6 slider-col">
                                   <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/loreal.jpg" src="" alt="" /></figure>
                               </div>
                               <div className="col-md-6 slider-col white-box">
                                  <div className="card">
                                     <div className="card-block animated fadeInRight">
                                        <figure className="brand-logo"><img src="/img/success-stories/logo-loreal.png" alt="" className="img-fluid"/></figure>
                                        <h4 className="card-title">Lorem Ipsum dolor sitipsum</h4>
                                        <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                     </div>
                                     <div className="card-footer">
                                        <a href="#" className="btn btn-secondary">View More</a>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         </div>
                         <div className="row my-4">
                            <div className="col-md-12 text-center">
                               <a href="#" className="btn btn-primary btn_show_more">Show More</a>
                            </div>
                         </div>
                      </div>
                      <div className="tab-pane fade" id="nav-manufacturing" role="tabpanel" aria-labelledby="nav-manufacturing-tab">
                         <div className="story_slider grid_view animated fadeInUp">
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                     <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                           <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" className="img-fluid"/></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div className="row my-4">
                            <div className="col-md-12 text-center">
                               <a href="#" className="btn btn-primary btn_show_more">Show More</a>
                            </div>
                         </div>
                      </div>
                      <div className="tab-pane fade" id="nav-media" role="tabpanel" aria-labelledby="nav-media-tab">
                         <div className="story_slider grid_view animated fadeInUp">
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/oral-b.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                           <figure className="brand-logo"><img src="/img/success-stories/fmcg/Oral-B-logo.png" alt="" className="img-fluid"/></figure>
                                           <h4 className="card-title">Lorem Ipsum dolor sitipsum</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                              <div className="row brand-row no-gutters animated fadeInLeft">
                                 <div className="col-md-6 slider-col">
                                     <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/papmers.jpg" src="" alt="" /></figure>
                                 </div>
                                 <div className="col-md-6 slider-col white-box">
                                    <div className="card">
                                       <div className="card-block animated fadeInRight">
                                          <figure className="brand-logo"><img src="/img/success-stories/logo-pampers.png" alt="" className="img-fluid"/></figure>
                                          <h4 className="card-title">Lorem Ipsum dolor sitipsum</h4>
                                          <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                       </div>
                                       <div className="card-footer">
                                          <a href="#" className="btn btn-secondary">View More</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="slide-item">
                            <div className="row brand-row no-gutters animated fadeInLeft">
                               <div className="col-md-6 slider-col">
                                   <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/loreal.jpg" src="" alt="" /></figure>
                               </div>
                               <div className="col-md-6 slider-col white-box">
                                  <div className="card">
                                     <div className="card-block animated fadeInRight">
                                        <figure className="brand-logo"><img src="/img/success-stories/logo-loreal.png" alt="" className="img-fluid"/></figure>
                                        <h4 className="card-title">Lorem Ipsum dolor sitipsum</h4>
                                        <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                     </div>
                                     <div className="card-footer">
                                        <a href="#" className="btn btn-secondary">View More</a>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         </div>
                         <div className="row my-4">
                            <div className="col-md-12 text-center">
                               <a href="#" className="btn btn-primary btn_show_more">Show More</a>
                            </div>
                         </div>
                      </div>
                      <div className="tab-pane fade" id="nav-retail" role="tabpanel" aria-labelledby="nav-retail-tab">
                         <div className="story_slider grid_view animated fadeInUp">
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                     <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                           <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" className="img-fluid"/></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div className="row my-4">
                            <div className="col-md-12 text-center">
                               <a href="#" className="btn btn-primary btn_show_more">Show More</a>
                            </div>
                         </div>
                      </div>
                      <div className="tab-pane fade" id="nav-tech" role="tabpanel" aria-labelledby="nav-tech-tab">
                         <div className="story_slider grid_view animated fadeInUp">
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/oral-b.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                           <figure className="brand-logo"><img src="/img/success-stories/fmcg/Oral-B-logo.png" alt="" className="img-fluid"/></figure>
                                           <h4 className="card-title">Lorem Ipsum dolor sitipsum</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                              <div className="row brand-row no-gutters animated fadeInLeft">
                                 <div className="col-md-6 slider-col">
                                     <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/papmers.jpg" src="" alt="" /></figure>
                                 </div>
                                 <div className="col-md-6 slider-col white-box">
                                    <div className="card">
                                       <div className="card-block animated fadeInRight">
                                          <figure className="brand-logo"><img src="/img/success-stories/logo-pampers.png" alt="" className="img-fluid"/></figure>
                                          <h4 className="card-title">Lorem Ipsum dolor sitipsum</h4>
                                          <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                       </div>
                                       <div className="card-footer">
                                          <a href="#" className="btn btn-secondary">View More</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="slide-item">
                            <div className="row brand-row no-gutters animated fadeInLeft">
                               <div className="col-md-6 slider-col">
                                   <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/loreal.jpg" src="" alt="" /></figure>
                               </div>
                               <div className="col-md-6 slider-col white-box">
                                  <div className="card">
                                     <div className="card-block animated fadeInRight">
                                        <figure className="brand-logo"><img src="/img/success-stories/logo-loreal.png" alt="" className="img-fluid"/></figure>
                                        <h4 className="card-title">Lorem Ipsum dolor sitipsum</h4>
                                        <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                     </div>
                                     <div className="card-footer">
                                        <a href="#" className="btn btn-secondary">View More</a>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         </div>
                         <div className="row my-4">
                            <div className="col-md-12 text-center">
                               <a href="#" className="btn btn-primary btn_show_more">Show More</a>
                            </div>
                         </div>
                      </div>
                      <div className="tab-pane fade" id="nav-telecom" role="tabpanel" aria-labelledby="nav-telecom-tab">
                         <div className="story_slider grid_view animated fadeInUp">
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                     <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                           <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy img-fluid" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" /></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                            <div className="slide-item">
                               <div className="row brand-row no-gutters animated fadeInLeft">
                                  <div className="col-md-6 slider-col">
                                      <figure className="brand-img"><img className="lazy" data-src="/img/success-stories/fmcg/garnier.jpg" src="" alt="" /></figure>
                                  </div>
                                  <div className="col-md-6 slider-col white-box">
                                     <div className="card">
                                        <div className="card-block animated fadeInRight">
                                            <figure className="brand-logo"><img className="lazy" data-src="/img/success-stories/fmcg/Garnier-logo.png" src="" alt="" className="img-fluid"/></figure>
                                           <h4 className="card-title">Micellar Cleansing Water</h4>
                                           <p className="card-text">We took the opportunity to create a ritual called the ‘Pour-Press-Swipe technique’ with the #TakeItOff anthem.</p>
                                        </div>
                                        <div className="card-footer">
                                           <a href="#" className="btn btn-secondary">View More</a>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div className="row my-4">
                            <div className="col-md-12 text-center">
                               <a href="#" className="btn btn-primary btn_show_more">Show More</a>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </section>
    )
  }
}

export default SuccessStories;