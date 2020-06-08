import { Component } from "react";
import { render } from "react-dom";




class SuccessBanner extends Component {

   constructor(props){
      super(props);
      const { successpageData} = props

     this.state = {
      successpageData: successpageData,
      field_banner_component: []
     }

   }

   componentDidMount(){

      let cntData = this.state.successpageData.content.field_component_type && this.state.successpageData.content.field_component_type.length > 0 && this.state.successpageData.content.field_component_type.map((cData,index) => {
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
          this.state.field_banner_component && this.state.field_banner_component.length > 0 && this.state.field_banner_component.map((bannerData, index) => {
            //  console.log(bannerData.field_banner_image.url);
             return (
                 <div id="hero-inner" className="hero_inner detail_banner position-relative fadeInUp wow" data-wow-delay=".1s" key={index}>
                     <div id="bannerCanvas"></div>

                     <div className="plane">
                         <img src={bannerData.field_banner_image.url} />
                     </div>
                  <div className="bannerText">
                     <div className="container-fluid">
                        <h1 className="fadeInUp wow" data-wow-delay=".1s">{bannerData.field_title}</h1>
                        <h2 className="fadeInRight wow" data-wow-delay=".1s">{bannerData.field_subtitle}</h2>
                     </div>
                  </div>
               </div>
             )
          })
       }
      </>

    )
   }
}



export default SuccessBanner;
