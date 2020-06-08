import React, {Component} from 'react';


class SuccessStoryDetailBanner extends Component {

   constructor(props){
      super(props);
      const { categoryData } = props;

      this.state = {
         categoryData: categoryData,
         field_banner_component: []
      }
   }

   componentDidMount(){
      
      let cntData = this.state.categoryData.content.field_component_type && this.state.categoryData.content.field_component_type.length > 0 && this.state.categoryData.content.field_component_type.map((cData,index) => {
         return (
            cData
         )
      });
      for(const key in cntData){
         for(const keyd in cntData[key]){
            if(keyd === 'field_banner_component'){
               this.state[keyd] = cntData[key][keyd];
               break;
            }
         }
      }
      this.setState(this.state);
      
   }

  

   render(){
      return (
         <>
         {
            this.state.field_banner_component && this.state.field_banner_component.length > 0 && this.state.field_banner_component.map((bannerData, index) => (
               <div id="hero-inner" className="hero_inner detail_banner position-relative fadeInUp wow" data-wow-delay=".1s" key={index}>
                    <picture>
                       <source media="(max-width: 768px)" srcSet={bannerData.field_mobile_banner.url} />
                       <source media="(min-width: 769px)" srcSet={bannerData.field_banner_image.url} />
                       <img src={bannerData.field_banner_image.url} alt={bannerData.field_banner_image.alt} style={{width:"100%"}} />
                    </picture>
                    <div className="bannerText">
                       <div className="container-fluid">
                          <h1>{bannerData.field_title}</h1>
                          <h2>{bannerData.field_subtitle}</h2>
                       </div>
                    </div>
                 </div>
            ))
         }
         </>
        
      )
     }
  }
  


export default SuccessStoryDetailBanner