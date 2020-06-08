import React, {useState} from 'react';

import {postExpertiseFormData} from '../../action/drupal-api-handler';

const ExpertiseForm = () => {


    const [formData, setFormData] = useState({
        "webform_id": "expertise_form",
        "your_name": "",
        "your_email":  "",
        "your_phone": "",
        "location": "",
        "tell_us": ""
      });

      const {
        your_name,
        your_email,
        your_phone,
        location,
        tell_us
      } = formData;

      const onChange = e =>{
         setFormData({ ...formData, [e.target.name]: e.target.value });
     }

     const onSubmit = async (e) => {
        e.preventDefault();

        const formData =  {
            your_name: your_name,
            your_email: your_email,
            your_phone: your_phone,
            location: location,
            tell_us: tell_us
        }
        const postForm = await postExpertiseFormData(formData);
        if(postForm && postForm.sid){
            alert("Expertise Form Submitted Successfully");
        }
    }
    
    return (

        <div className="content-block expertise-form">
        <a href="#" className="close_btn"><i className="fa fa-times"></i></a>
      <h2>Start a Project</h2>
      <h3 className="form-headline">Tell us your project details</h3>

      <div className="form-wrap">

        
          <form onSubmit={e => onSubmit(e)}>
            <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input id="c_name" type="text" className="form-control" name=
              "your_name" onChange={e => onChange(e)} required />
              <label htmlFor="c_name">Your name</label>
              <span className="line"></span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="your_phone" required onChange={e => onChange(e)} />
              <label htmlFor="c_phone">Your Phone</label>
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="your_email" onChange={e => onChange(e)} required />
              <label htmlFor="c_email">Your Email</label>
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" name="location" onChange={e => onChange(e)} required />
              <label htmlFor="c_location">Location</label>
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">

            <div className="form-group radio-group">
              <label htmlFor="" className="title">Project Timeline</label>

              <ul className="list-unstyled d-flex flex-wrap ml-0 pl-0">
                <li className="w-50">
                  <label>
                  <input type="radio" name="c_timeline" />
                  <span> 2 - 4 Weeks</span>

                </label>
                </li>
                <li className="w-50">
                    <label>
                    <input type="radio" name="c_timeline"/> <span> 4 - 6 Weeks</span></label>
                  </li>
                  <li className="w-50">
                      <label>
                      <input type="radio" name="c_timeline"/> <span> 6 - 8 Weeks</span></label>
                    </li>
                    <li className="w-50">
                        <label>
                        <input type="radio" name="c_timeline" /> <span> 8+ Weeks</span></label>
                      </li>
              </ul>
              </div>

          </div>


          <div className="col-md-6">
              <div className="form-group">
                <textarea className="form-control" name="tell_us" onChange={e => onChange(e)} required></textarea>
                <label htmlFor="c_about">Tells us about your project</label>
                <span className="line"></span>
              </div>
            </div>

            </div>

            </form>

        

        <div className="row btn-row">
          <div className="col-md-12">
            <button href="#" className="btn btn-primary">SUBMIT DETAILS</button>
          </div>
        </div>

      </div>


      </div>

    )
}


export default ExpertiseForm