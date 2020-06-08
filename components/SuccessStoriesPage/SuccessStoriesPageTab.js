



const SuccessStoriesPageTab = (props) => {
   const { successNav } = props;

   const successStoriesData = successNav[0].items;

   const lowercaseLetter = (string) =>{
      return string.toLowerCase();
   }

   const getD = (string) =>{
      console.log(string)
   }

   const removeSlash = (string) => {
      return string.replace(/\\|\//g,'')
   }

    return (
        <div className="nav_wrap bg-white">
        <div className="container-fluid">
           <div className="row">
              <div className="col-12 fadeInUp wow" data-wow-delay=".1s">
                 <nav className="mynav position-relative removeNavAfter">
                    <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">All</a>
                     </li>
                       {
                          successStoriesData.map((sdata,index) =>{
                             return (
                              <li className="nav-item" key={index}>
                                 <a onClick={() => getD(removeSlash(sdata.url)) } className="nav-link" data-toggle="tab" href={`#nav-${removeSlash(sdata.url)}`} role="tab" aria-controls={`#nav-${removeSlash(sdata.url)}`} aria-selected="false">{sdata.name}</a>
                              </li>
                             )
                          })
                       }

                    </ul>
                    <ul className="icon-grid-listing">
                       <li><button className="icon-grid active" disabled><span></span><span></span><span></span><span></span></button></li>
                       <li><button className="icon-list"><span></span><span></span></button></li>
                    </ul>
                     <span className="target"></span>
                 </nav>
              </div>
           </div>
        </div>
     </div>
    )
}



export default SuccessStoriesPageTab;
