import { Component } from "react";
import moment from 'moment';
// import styles from '../styles/style_inner.css';


class NewsArticle extends Component {

  constructor(props) {
    super(props);
  }

    componentDidMount(){
        
        window.onload = function() { 
    
            // init Isotope
            var $grid = $('.grid').isotope({
              itemSelector: '.card-col',
              layoutMode: 'fitRows'
            });
            // filter functions
            var filterFns = {
              // show if number is greater than 50
              numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
              },
              // show if name ends with -ium
              ium: function() {
                var name = $(this).find('.name').text();
                return name.match( /ium$/ );
              }
            };
            // bind filter button click
            $('.filters-button-group').on( 'click', 'button', function() {
              var filterValue = $( this ).attr('data-filter');
              // use filterFn if matches value
              filterValue = filterFns[ filterValue ] || filterValue;
              $grid.isotope({ filter: filterValue });
            });
            // change active class on buttons
            $('.button-group').each( function( i, buttonGroup ) {
              var $buttonGroup = $( buttonGroup );
              $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.active').removeClass('active');
                $( this ).addClass('active');
              });
            });
        }

        // $(document).ready(function(){
        //     $('.all_articles .nav-tabs').slick({
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       variableWidth: true,
        //       dots: false,
        //       arrows: false,
        //       centerMode: false,
        //       infinite: false,
              
        //     });
        //     if ($(window).width() < 1024) {
        //       $('.all_articles .nav-tabs .nav-item').click(function(){
        //         var slideIndex = $(this).index();
        //         $('.all_articles .nav-tabs').slick('slickGoTo', slideIndex);
        //       });
        //   }
        //   else{
        //     $('.all_articles .nav-tabs').slick('unslick')
        //   }
         
        //  });
         
    }

    render(){

    return (
        <>
        {
          this.props.articlesData && this.props.articlesData.length > 0 ?
          <>
          <section className="section_sep">
          <div className="container-fluid"><hr className="my-0"/></div>
        </section>
      <section className="page_section all_articles">

          <div className="container-fluid">
            <div className="row head_row align-items-center">

           <div className="col-lg-4 col-md-12">
             <h2 className="section_heading">All Articles</h2>
           </div>

           <div className="col-lg-8 col-md-12">
          <div className="mynav position-relative removeNavAfter">
            <ul className="nav nav-tabs button-group filters-button-group border-0" id="scrollNav">
              <li className="nav-item"> <button className="nav-link button active" data-filter="*">all</button></li>
              <li className="nav-item"><button className="nav-link button" data-filter=".news">News</button></li>
                {/* <li className="nav-item"><button className="nav-link button" data-filter=".insights">Insights</button></li> */}
                  {/* <li className="nav-item"><button className="nav-link button" data-filter=".blogs">Blogs</button></li> */}
                    <li className="nav-item"><button className="nav-link button" data-filter=".press">Press Releases</button></li>
                
            </ul>
            <span className="target"></span>
          </div>
          </div>
            </div>

            <div className="grid row">
              {
                this.props.articlesData && this.props.articlesData.length > 0 && this.props.articlesData.map((articleData, index) => {
                  return Object.keys(articleData).filter(ardata => ardata === 'content').map((ldata, index) =>{
                    // console.log(articleData[ldata]);
                    let ref = 0;
                    let field_unique_url = articleData[ldata].field_unique_url ? articleData[ldata].field_unique_url: "";
                    let target_link = articleData[ldata].field_article_link ? articleData[ldata].field_article_link.uri : "";

                    if(target_link){
                      field_unique_url = target_link;
                      ref = 1;
                    }
                    let field_key = articleData[ldata].field_key ? articleData[ldata].field_key: "";
                    // let field_key = articleData[ldata].field_key;
                    let field_date  = moment(new Date(articleData[ldata].field_date)).format('LL');
                    return Object.keys(articleData[ldata]).filter(aldata => aldata === 'field_component_type').map((artsdata, index) => {
                      return articleData[ldata][artsdata].length > 0 && articleData[ldata][artsdata].map((indata, index) => {
                        
                          return Object.keys(indata) && Object.keys(indata).length >0 && Object.keys(indata).filter(d => d === "field_news_details_main").map((lsdata) => {
                           
                            return indata[lsdata].map((article, index) => {
            
                              let field_title = article.field_title ? article.field_title: "";
                              let field_content = article.field_content ? article.field_content: "";
                              let field_image = article.field_image.url ? article.field_image.url: "";
                              let field_image_alt = article.field_image.alt ? article.field_image.alt: "";
                              // let field_date  = article.field_date ? moment(new Date(article.field_date)).format('LL'): "";
                              
                              return (
                                <div className={`col-md-4 card-col ${field_key}`} data-category={field_key} key={index}>
                                <div className="card news-card">
                              <div className="card-body">
                              <div className="news-date">{field_date}</div>
                                <div className="news-desc">
                                <div className="news-img imgwrap"><img className="lazy" data-src={field_image} src="" alt={field_image_alt}/></div>
                              <div className="news-title"><h3>{field_title}</h3></div>
                              </div>
                              {
                                ref === 1 ?
                                <div className="view-more"><a target="_blank" rel="noopener" href={field_unique_url} className="btn btn-secondary">View Article</a></div> :
                                <div className="view-more"><a href={field_unique_url} className="btn btn-secondary">View Article</a></div>
                              }
                              
                                </div>
                              </div>
                            </div>

                              )
                            })
                          })
                      })
                    })
                  })
                })
              }
                
              </div>
              </div>
      </section>
      </>
      : null
        }
        
      </>
    )
  }
}

export default NewsArticle;