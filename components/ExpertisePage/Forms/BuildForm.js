import React, {useState, useEffect, useRef} from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { country_names } from '../../ContactPage/countryData';
// import {isValidFileType} from '../../../action/helpers';
import {isValidFileType, isValidphonenumber, validateEmail, isValidWebsite, specialCharNotAllow} from '../../../action/helpers';



const animatedComponents = makeAnimated();


import {postContactFormAttach} from '../../../action/drupal-api-handler';

const BuildForm = () => {
  
  const [formData, setFormData] = useState({
    "webform_id": "expertise_form",
    "name": "",
    "email":  "",
    "phone_number": "",
    "company":"",
    "designation":"",
    "wish_message":"",
    "website":"",
    "industry":""
  });

  const {
    name,
    email,
    phone_number,
    company,
    designation,
    website,
    industry,
    wish_message
  } = formData;

  const [brdFile, setbrdFile] = useState("");
  const [filename, setFilename] = useState("");
  const [country_name, setCountryName] = useState("India");
  const [isSubmitted, setSubmission] = useState(false);
  const [isThankyou, setisThankyou] = useState(false);

  const firstRender = useRef(true)

  //email
  const [error, setError] = useState(false);
  const [emailErrors, setemailErrors] = useState("")

  //phone
  const [phoneErrors, setMobileError] = useState(false);
  const [phoneNumberErrors, setphoneNumberErrors] = useState("");

  //name
  const [nameErrors, setNameError] = useState(false);
  const [nameErrorsMessage, setnameErrorsMessage] = useState("");

  //company 
  const [companyErrors, setCompanyError] = useState(false);
  const [companyErrorsMessage, setCompanyErrorMessage] = useState("");

  //website 
  const [websiteErrors, setwebsiteError] = useState(false);
  const [websiteErrorsMessage, setwebsiteErrorMessage] = useState("");

  //industry 
  const [industryErrors, setindustryError] = useState(false);
  const [industryErrorsMessage, setindustryErrorMessage] = useState("");

  //designation 
  const [designationErrors, setdesignationError] = useState(false);
  const [designationErrorsMessage, setdesignationErrorMessage] = useState("");

  //wish message 
  const [wishMessageErrors, setwishMessageError] = useState(false);
  const [wishMessageErrorsMessage, setwishMessageErrorMessage] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setloading] = useState(false);

  const [activeForm, setActiveForm] = useState(true);

  const [onchangefileError, setonchangefileError] = useState(false);
  const [onchangefileErrorsMessage, setonchangefileErrorsMessage] = useState("");


  const onChange = e =>{
    console.log(e.target.name, e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value });
 }

//  const onChangeFile = e => {
//     console.log(e.target.files[0]);
//     setbrdFile(e.target.files[0]);
//     setFilename(e.target.files[0].name);
    
// }

const onChangeFile = e => {
  const file = e.target.files[0]; 
  if(file){
      const isValidType = isValidFileType(file.name);
      if(!isValidType){
                setonchangefileError(true);
                setonchangefileErrorsMessage("Please attach word or pdf doc only");
                setFilename("");
                return false;
            }else{
                setonchangefileError(false);
                setonchangefileErrorsMessage("");
            }
      setbrdFile(e.target.files[0]);
      setFilename(e.target.files[0].name)
  }
}

const onCountryChange = (e) => {
    console.log(e.label);
    setCountryName(e.label);
}

const onSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    setButtonDisabled(true);

    const formData =  {
        name: name,
        email: email,
        phone_number: phone_number,
        company: company,
        designation: designation,
        industry: industry,
        website: website,
        wish_message: wish_message,
        brdFile: brdFile,
        country: country_name
    }

    let error = formValidation(phone_number, email, name, website, industry, wish_message, company, designation);
  console.log(error);
  if(error.phoneNoNumber !==""){
      setMobileError(true);
      setphoneNumberErrors(error.phoneNoNumber);
      setloading(false);
      setButtonDisabled(false);  
      return false;   
  }else{
      setMobileError(false);
      setphoneNumberErrors("");
  }

  if(error.emailValidation !== ""){
      setError(true);
      setemailErrors(error.emailValidation);
      setloading(false);
      setButtonDisabled(false);  
      return false; 
  }else{
      setError(false);
      setemailErrors("");
  }

  if(error.nameValidation !== ""){
      setNameError(true);
      setnameErrorsMessage(error.nameValidation);
      setloading(false);
      setButtonDisabled(false);  
      return false; 
  }else{
      setNameError(false);
      setnameErrorsMessage("");
  }


  //need to make changes

  if(error.websiteValidation !== ""){
      setwebsiteError(true);
      setwebsiteErrorMessage(error.websiteValidation);
      setloading(false);
      setButtonDisabled(false);  
      return false; 
  }else{
      setwebsiteError(false);
      setwebsiteErrorMessage("");
  }


  if(error.industryValidation !== ""){
      setindustryError(true);
      setindustryErrorMessage(error.industryValidation);
      setloading(false);
      setButtonDisabled(false);  
      return false; 
  }else{
      setindustryError(false);
      setindustryErrorMessage("");
  }

  if(error.companyValidation !== ""){
      setCompanyError(true);
      setCompanyErrorMessage(error.companyValidation);
      setloading(false);
      setButtonDisabled(false);  
      return false; 
  }else{
      setCompanyError(false);
      setCompanyErrorMessage("");
  }

  if(error.wishMessageValidation !== ""){
      setwishMessageError(true);
      setwishMessageErrorMessage(error.wishMessageValidation);
      setloading(false);
      setButtonDisabled(false);  
      return false; 
  }else{
      setwishMessageError(false);
      setwishMessageErrorMessage("");
  }

  if(error.designationValidation !== ""){
      setdesignationError(true);
      setdesignationErrorMessage(error.designationValidation);
      setloading(false);
      setButtonDisabled(false);  
      return false; 
  }else{
      setdesignationError(false);
      setdesignationErrorMessage("");
  }

    const postForm = await postContactFormAttach(formData, 1);

    // console.log(formData); return;
    if(postForm && postForm.sid){
    console.log(postForm);
      setloading(false);
      setSubmission(true);
      setisThankyou(true);
      setButtonDisabled(false);
      setActiveForm(false);
      // console.log(isSubmitted);
        setFormData({
            "webform_id": "expertise_form",
            "name": "",
            "email":  "",
            "phone_number": "",
            "company":"",
            "designation":"",
            "wish_message":"",
            "buttonDisabled":false,
            "website":"",
            "industry":""
        });
        setFilename("");
        setTimeout(function () { 
          location.reload();
        }, 2000);
    }else{
        setloading(false);
        setSubmission(false);
        setButtonDisabled(false);
        setisThankyou(false);
        setActiveForm(false);
    }

    console.log(isThankyou);


    
}

useEffect(() => {

  // we want to skip validation on first render
  if (firstRender.current) {
    firstRender.current = false;
    return
  }   
  
  // here we can disable/enable the save button by wrapping the setState function
  // in a call to the validation function which returns true/false
  let error = formValidation(phone_number, email, name, website, industry, wish_message, company, designation);
  console.log(error);
  if(error.phoneNoNumber !==""){
      setMobileError(true);
      setphoneNumberErrors(error.phoneNoNumber);     
  }else{
      setMobileError(false);
      setphoneNumberErrors("");
  }

  if(error.emailValidation !== ""){
      setError(true);
      setemailErrors(error.emailValidation);
  }else{
      setError(false);
      setemailErrors("");
  }

  if(error.nameValidation !== ""){
      setNameError(true);
      setnameErrorsMessage(error.nameValidation);
  }else{
      setNameError(false);
      setnameErrorsMessage("");
  }


  //need to make changes

  if(error.websiteValidation !== ""){
      setwebsiteError(true);
      setwebsiteErrorMessage(error.websiteValidation);
  }else{
      setwebsiteError(false);
      setwebsiteErrorMessage("");
  }


  if(error.industryValidation !== ""){
      setindustryError(true);
      setindustryErrorMessage(error.industryValidation);
  }else{
      setindustryError(false);
      setindustryErrorMessage("");
  }

  if(error.companyValidation !== ""){
      setCompanyError(true);
      setCompanyErrorMessage(error.companyValidation);
  }else{
      setCompanyError(false);
      setCompanyErrorMessage("");
  }

  if(error.wishMessageValidation !== ""){
      setwishMessageError(true);
      setwishMessageErrorMessage(error.wishMessageValidation);
  }else{
      setwishMessageError(false);
      setwishMessageErrorMessage("");
  }

  if(error.designationValidation !== ""){
      setdesignationError(true);
      setdesignationErrorMessage(error.designationValidation);
  }else{
      setdesignationError(false);
      setdesignationErrorMessage("");
  }

  // if(error.phoneNoNumber === "" && phone_number !=="" && error.emailValidation === "" && email !=="" && error.nameValidation === "" && name !=="" && error.companyValidation === "" && company !==""){
  //     setButtonDisabled(false);
  // }else{
  //     setButtonDisabled(true);
  // }

  // if(!isSubmitted){
  //   if(!loading){
  //     console.log(isSubmitted);
  //     setSubmission(true);
  //   }
  // }

  console.log(isSubmitted, isThankyou);
  
}, [phone_number, email, name, website, industry, wish_message, company,designation]) // any state variable(s) included in here will trigger the effect to run

const formValidation = (phone_number, email, name, website, industry, wish_message, company, designation) => {
  let phoneNoNumber = "";
  let emailValidation = "";
  let nameValidation = "";
  let websiteValidation = "";
  let industryValidation = "";
  let companyValidation = "";
  let wishMessageValidation = "";
  let designationValidation="";
  if(phone_number !=="" && phone_number !== undefined){
      if(!isValidphonenumber(phone_number)){
          phoneNoNumber = "Please enter valid contact number";
      }
  } 

  if(email !=="" && email !== undefined){
      if(!validateEmail(email)){
          emailValidation = "Please enter valid email id";
      }
  }

  if(name!=="" && name !== undefined){
      if(specialCharNotAllow(name)){
          nameValidation = "Please enter proper full name";
      }
  }

  if(website!=="" && website !== undefined){
      if(!isValidWebsite(website)){
          websiteValidation = "Please enter valid wesbite URL";
      }
  }

  if(industry!=="" && industry !== undefined){
      if(specialCharNotAllow(industry)){
          industryValidation = "Please enter industry";
      }
  }

  if(wish_message !=="" && wish_message !== undefined){
      if(specialCharNotAllow(wish_message)){
          wishMessageValidation = "Please enter valid message";
      }
  }

  if(company !=="" && company !== undefined){
      if(specialCharNotAllow(company)){
          companyValidation = "Please enter company";
      }
  }
  console.log(designation);
  if(designation !=="" && designation !== undefined){
      if(specialCharNotAllow(designation)){
          designationValidation = "Please enter position";
      }
  }

  return {
      phoneNoNumber,
      emailValidation,
      nameValidation,
      wishMessageValidation,
      companyValidation,
      websiteValidation,
      industryValidation,
      designationValidation
  };      
}


    
    return (
      
      <>
      
      
        <div className="content-block expertise-form expert_consult_form">
        <a href="#" className="close_btn"><i className="fa fa-times"></i></a>

        <div className={activeForm ? "formContainer": "formContainer hidden"}>
      <h2>Start a Project</h2>
      <h3 className="form-headline">Tell us your project details</h3>

      <div className="form-wrap">

       
          <form onSubmit={e => onSubmit(e)}>
          <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input id="bld_name" type="text" className="form-control" name=
              "name" value={name} onChange={e => onChange(e)} required autoComplete="off" />
              <label htmlFor="bld_name">Name<sup>*</sup></label>
              <span className="line"></span>
              {
                nameErrorsMessage && 
                <small className={nameErrors ? "input_error active": "input_error"}>{nameErrorsMessage}</small>
              }
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input id="bld_email" type="text" className="form-control" name="email" value={email} onChange={e => onChange(e)} required autoComplete="off" />
              <label htmlFor="bld_email">Work Email<sup>*</sup></label>
              <span className="line"></span>
              {
                emailErrors && 
                <small className={error ? "input_error active": "input_error"}>{emailErrors}</small>
              }
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input id="bld_phone" type="text" className="form-control" name="phone_number" value={phone_number} required onChange={e => onChange(e)} autoComplete="off" />
              <label htmlFor="bld_phone">Phone<sup>*</sup></label>
              <span className="line"></span>
              {
                phoneNumberErrors && 
                <small className={phoneErrors ? "input_error active": "input_error"}>{phoneNumberErrors}</small>
              }

            </div>
          </div>

          

          {/* <div className="col-md-6">
            <div className="form-group">
              <input id="bld_location" type="text" className="form-control" name="location" value={location} onChange={e => onChange(e)} required />
              <label htmlFor="bld_location">Location</label>
              <span className="line"></span>
            </div>
          </div> */}

          <div className="col-md-6">
            <div className="form-group">
              <input id="bld_designation" type="text" className="form-control" name="designation" value={designation} onChange={e => onChange(e)} autoComplete="off" />
              <label htmlFor="bld_designation">Designation</label>
              <span className="line"></span>
              {
                designationErrorsMessage && 
                <small className={designationErrors ? "input_error active": "input_error"}>{designationErrorsMessage}</small>
              }
              
            </div>
          </div>

           <div className="col-md-6">
            <div className="form-group">
              <input id="bld_company" type="text" className="form-control" name="company" value={company} required onChange={e => onChange(e)} autoComplete="off" />
              <label htmlFor="bld_company">Company Name<sup>*</sup></label>
              <span className="line"></span>
              {
                companyErrorsMessage && 
                <small className={companyErrors ? "input_error active": "input_error"}>{companyErrorsMessage}</small>
              }
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <input id="bld_industry" type="text" className="form-control" name="industry" value={industry}  onChange={e => onChange(e)} autoComplete="off" />
              <label htmlFor="bld_industry">Industry</label>
              <span className="line"></span>
              {
                industryErrorsMessage && 
                <small className={industryErrors ? "input_error active": "input_error"}>{industryErrorsMessage}</small>
              }
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <input id="bld_website" type="text" className="form-control" name="website" value={website}  onChange={e => onChange(e)} autoComplete="off" />
              <label htmlFor="bld_website">Website</label>
              <span className="line"></span>
              {
                websiteErrorsMessage && 
                <small className={websiteErrors ? "input_error active": "input_error"}>{websiteErrorsMessage}</small>
              }
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
            <Select
            closeMenuOnSelect={true}
            components={animatedComponents}
            defaultValue={country_names[0]}
            options={country_names}
            onChange={e => onCountryChange(e)}
            name="country_name"
            />
            
            </div>
          </div>

          {/* <div className="col-md-6">

            <div className="form-group radio-group">
              <label htmlFor="" className="title">Project Timeline</label>

              <ul className="list-unstyled d-flex flex-wrap ml-0 pl-0">
                <li className="w-50">
                  <label>
                  <input type="radio" 
                  name="bld_timeline" 
                  value="2 - 4 Weeks" 
                  onChange={e => onChange(e)} 
                  checked={bld_timeline === "2 - 4 Weeks"}
                  />
                  <span>2 - 4 Weeks</span>

                </label>
                </li>
                <li className="w-50">
                    <label>
                    <input type="radio" 
                     name="bld_timeline"
                     value="4 - 6 Weeks" 
                     onChange={e => onChange(e)} 
                     checked={bld_timeline === "4 - 6 Weeks"}
                     /> <span> 4 - 6 Weeks</span></label>
                  </li>
                  <li className="w-50">
                      <label>
                      <input type="radio" 
                        name="bld_timeline" 
                        value="6 - 8 Weeks" 
                        onChange={e => onChange(e)} 
                        checked={bld_timeline === "6 - 8 Weeks"}
                      /> <span> 6 - 8 Weeks</span></label>
                    </li>
                    <li className="w-50">
                        <label>
                        <input type="radio" 
                          name="bld_timeline" 
                          value="8+ Weeks" 
                          onChange={e => onChange(e)} 
                          checked={bld_timeline === "8+ Weeks"} /> <span> 8+ Weeks</span></label>
                      </li>
              </ul>
              </div>

          </div> */}
          
          <div className="col-md-6">
            <div className="form-group">
              <input id="bld_resume" name="filename" value={filename} type="text" className="form-control" onChange={(e) => onChangeFile(e)}/>
              {
              onchangefileErrorsMessage && 
              <small className={onchangefileError ? "input_error active": "input_error"}>{onchangefileErrorsMessage}</small>
              }
              <label htmlFor="bld_resume">Upload BRD</label>
              <div className="fileUpload btn--browse text-white">
                  <i className="far fa-paperclip"></i>
                  <input id="uploadBtn" name="resumeFile" type="file" className="upload" onChange={(e) => onChangeFile(e)} />
              </div>
            </div>
          </div>
                          
          <div className="col-md-6">
              <div className="form-group">
                <textarea id="bld_about" className="form-control" name="wish_message" value={wish_message} onChange={e => onChange(e)} autoComplete="off"></textarea>
                <label htmlFor="bld_about">Tells us about your project</label>
                <span className="line"></span>
                {
                  wishMessageErrorsMessage && 
                  <small className={wishMessageErrors ? "input_error active": "input_error"}>{wishMessageErrorsMessage}</small>
                }
              </div>
            </div>
         </div>
          <div className="row btn-row">
            <div className="col-md-12">
            {/* <i className="spinner"></i>  */}
            {
              loading && <i className="spinner active"></i>
            }
            <button href="#" className="btn btn-primary" disabled={buttonDisabled}>SUBMIT DETAILS</button>
            </div>
          </div>
          </form>

      </div>
</div>


      
        <div className={activeForm ? "thankyou_container hidden": "thankyou_container"}>
        <p>Thank you! We appreciate that you’ve taken time out to write to us.</p> 
          <p> We promise to get back to you soon build.</p>
        </div>


      </div>

    </>

    )
}


export default BuildForm;