
import  React, {Component} from 'react';

import { SearchApi } from '../../action/drupal-api-handler';

import {removeHTMLChars} from '../../action/helpers';


class SearchMainDetails extends Component{ 

    constructor(props){
        super(props);

        const { searchData, keywords } = props;

        this.state =  {
            searchData: searchData,
            query: keywords
        }
        
        this.fetchSearchResults = this.fetchSearchResults.bind(this);
        this.handleOnInputChange = this.handleOnInputChange.bind(this);
    }

    fetchSearchResults = async (keywords) => {
        try {
            if(keywords.length >= 3){
                const response = await SearchApi(keywords);
                if(response){
                    this.setState({searchData: response})
                }else{
                    this.setState({searchData:[]})
                }
            }

        } catch (error) {
            console.log(error);
        }

        

    }

    handleOnInputChange = (e) =>{
        const query = event.target.value;

        if(!query){
            this.setState({query: "", searchData:[]})
        }else{
            this.setState({ query }, () => {
                this.fetchSearchResults(query);
            });
        }
    }

    render(){
        const { query } = this.state;
    return (

      <main id="main" className="inner_pages search_detail">
      <section className="page_section fadeInUp wow" data-wow-delay=".4s">

       <div className="container-fluid">

        <div className="search_container">

         
             <div className="form-group">
               <input type="text" id="input_search" name="query" value={query} className="form-control" placeholder="Search" onChange={this.handleOnInputChange}/>
               <span className="line"></span>
               <span className="search-icon"><i className="fal fa-search"></i></span>
           </div>
           

        
             <div className="results_found text-muted mt-5">
               <span>{this.state.searchData && this.state.searchData.length ? `(${this.state.searchData.length} results found)`: "No results found" }</span>
             </div>
          

        {
            this.state.searchData && this.state.searchData.length > 0 && 
            <div className="mynav tabs_wrap position-relative">
               <ul className="nav nav-tabs border-0">
                  <li className="nav-item"> <a className="nav-link" href="#" data-link="all"> All</a></li>
                  <li className="nav-item"> <a className="nav-link" href="#" data-link="Work"> Work</a></li>
                   {/* <li className="nav-item"><a className="nav-link" href="#" data-link="About">About</a></li> */}
                   {/* <li className="nav-item"><a className="nav-link" href="#" data-link="Expertise">Expertise</a></li> */}
                   <li className="nav-item"><a className="nav-link" href="#" data-link="News">News</a></li>
               </ul>
               <span className="searchbar target"></span>
               </div>
        }
         <div className="mt-4 search_results">

             {
                 this.state.searchData && this.state.searchData.length > 0 ?
                 this.state.searchData.map((sData, index) => {
                     let type = sData.type ? sData.type: "";
                     let title = sData.title ? sData.title: "";
                     let body = sData.body ? removeHTMLChars(sData.body) : "";
                     let url = sData.url ? sData.url: "";
                     let datasearch = type; 
                    if(type){
                        if(type.toLowerCase().includes("success")){
                            datasearch = "Work";
                        }else if(type.toLowerCase().includes("news")){
                            datasearch = "News";
                        }else{
                            datasearch = type; 
                        }

                        if(type.toLowerCase().includes("template")){
                            type = "Others"
                        }
                    }
                    return(                     
                    <div className="search_content" data-search={datasearch} key={index}>
                        <h5 className="category">{type}</h5>
                    <h4 className="search_title">
                        <a href={url}>{title}</a></h4>
                    <p className="search_desc">
                       {body}
                    </p>
                    </div>
                    )
                 }): null
             }

         </div>

        </div>

       </div>

      </section>
   </main>
    )
  }

}



export default SearchMainDetails;
