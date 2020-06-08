import React, {useState, useEffect, useRef} from 'react';

//actions
import { postCareersFormAttach } from '../../action/drupal-api-handler';

//helpers
import {isNumeric,isValidFileType, isValidphonenumber, validateEmail, specialCharNotAllow} from '../../action/helpers';


const CareersForm = () => {

  const [resumeFile, setresumeFile] = useState(null);
  const [filename, setFilename] = useState("");

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

  //experience in years 
  const [experienceErrors, setexperienceError] = useState(false);
  const [experienceErrorsMessage, setexperienceErrorMessage] = useState("");

  //present organization 
  const [presentOrganizationError, setpresentOrganizationError] = useState(false);
  const [presentOrganizationErrorsMessage, setpresentOrganizationErrorMessage] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setloading] = useState(false);

  const [qualificationError, setqualificationError] = useState(false);
  const [qualificationErrorsMessage, setqualificationErrorsMessage] = useState("");

  const [postionAppliedError, setpostionAppliedError] = useState(false);
  const [postionAppliedErrorsMessage, setpostionAppliedErrorsMessage] = useState("");

  const [onchangefileError, setonchangefileError] = useState(false);
  const [onchangefileErrorsMessage, setonchangefileErrorsMessage] = useState("");

  const [activeForm, setActiveForm] = useState(true);


  const [formData, setFormData] = useState({
      "webform_id": "careers",
      "your_name": "",
      "email":  "",
      "phone_number": "",
      "qualification":"",
      "location":"",
      "present_organization":"",
      "experience_in_years":"",
      "applying_for":""
    });

  const {
    your_name,
    email,
    phone_number,
    qualification,
    location,
    present_organization,
    experience_in_years,
    applying_for
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    setButtonDisabled(true);
  
    const formData =  {
        your_name: your_name,
        email: email,
        phone_number: phone_number,
        applying_for: JSON.parse(localStorage.getItem('post_applied')),
        qualification: qualification,
        preferred_location: location,
        present_organization:present_organization,
        experience:experience_in_years,
        resumeFile: resumeFile,
    }

    let error = formValidation(phone_number, email, your_name, qualification, present_organization, experience_in_years,applying_for);

    //careers form updation

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

    if(error.qualificationValidation !== ""){
      setqualificationError(true);
      setqualificationErrorsMessage(error.qualificationValidation);
      setloading(false);
      setButtonDisabled(false);
      return false;
    }else{
      setqualificationError(false);
      setqualificationErrorsMessage("");
    }


    if(error.presentOrganizationValidation !== ""){
      setpresentOrganizationError(true);
      setpresentOrganizationErrorMessage(error.presentOrganizationValidation);
      setloading(false);
      setButtonDisabled(false);
      return false;
    }else{
      setpresentOrganizationError(false);
      setpresentOrganizationErrorMessage("");
    }

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

    if(error.experienceValidation !== ""){
      setexperienceError(true);
      setexperienceErrorMessage(error.experienceValidation);
      setloading(false);
      setButtonDisabled(false);
      return false;
    }else{
      setexperienceError(false);
      setexperienceErrorMessage("");
    }

    if(error.appliedValidation !== ""){
      setpostionAppliedError(true);
      setpostionAppliedErrorsMessage(error.appliedValidation);
      setloading(false);
      setButtonDisabled(false);
      return false;
    }else{
      setpostionAppliedError(false);
      setpostionAppliedErrorsMessage("");
    }

    console.log(resumeFile);
    const isValidType = isValidFileType(resumeFile.name);
    if(!isValidType){
      setonchangefileError(true);
      setonchangefileErrorsMessage("Please attach word or pdf doc only");
      setFilename("");
      return false;
    }else{
      setonchangefileError(false);
      setonchangefileErrorsMessage("");
    }

    // console.log(formData);
    const postForm = await postCareersFormAttach(formData);
    if(postForm && postForm.sid){
      setSubmission(true);
      setisThankyou(true);
      setloading(false);
      setButtonDisabled(false);
      setActiveForm(false);

        setFormData({
          "webform_id": "careers",
          "your_name": "",
          "email":  "",
          "phone_number": "",
          "qualification":"",
          "preferred_location":"",
          "present_organization":"",
          "experience_in_years":""
      });
      // console.log("heeeee");

      setFilename("");
      // console.log("heeeee");

      localStorage.removeItem('post_applied');
      // console.log("heeeee");
      setTimeout(function () { 
        location.reload();
      }, 2000);
      
    }else{
      setloading(false);
      setSubmission(false);
      setButtonDisabled(false);
      setisThankyou(false);
    }
}

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
        setresumeFile(e.target.files[0]);
        setFilename(e.target.files[0].name)
    }
  }

  useEffect(() => {

    if (firstRender.current) {
      firstRender.current = false;
      return
    }   
    
    let error = formValidation(phone_number, email, your_name, qualification, present_organization, experience_in_years,applying_for);

    //careers form updation

    if(error.nameValidation !== ""){
      setNameError(true);
      setnameErrorsMessage(error.nameValidation);
    }else{
      setNameError(false);
      setnameErrorsMessage("");
    }

    if(error.qualificationValidation !== ""){
      setqualificationError(true);
      setqualificationErrorsMessage(error.qualificationValidation);
    }else{
      setqualificationError(false);
      setqualificationErrorsMessage("");
    }


    if(error.presentOrganizationValidation !== ""){
      setpresentOrganizationError(true);
      setpresentOrganizationErrorMessage(error.presentOrganizationValidation);
    }else{
      setpresentOrganizationError(false);
      setpresentOrganizationErrorMessage("");
    }

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

    if(error.experienceValidation !== ""){
      setexperienceError(true);
      setexperienceErrorMessage(error.experienceValidation);
    }else{
      setexperienceError(false);
      setexperienceErrorMessage("");
    }

    if(error.appliedValidation !== ""){
      setpostionAppliedError(true);
      setpostionAppliedErrorsMessage(error.appliedValidation);
    }else{
      setpostionAppliedError(false);
      setpostionAppliedErrorsMessage("");
    }

    console.log(error);
  
    // if(error.phoneNoNumber === "" && phone_number !=="" && error.emailValidation === "" && email !=="" && error.nameValidation === "" && your_name !=="" && error.experienceValidation === "" && experience_in_years !=="" && error.qualificationValidation === "" && qualification!=="" && error.appliedValidation === ""){
    //   setButtonDisabled(false);
    // }else{
    //   setButtonDisabled(true);
    // }
  
  
    console.log(isSubmitted, isThankyou);
    
  }, [phone_number, email, your_name, qualification, present_organization, experience_in_years,applying_for])
    
  const formValidation = (phone_number, email, your_name, qualification, present_organization, experience_in_years, applying_for) => {
    let phoneNoNumber = "";
    let emailValidation = "";
    let nameValidation = "";
    let presentOrganizationValidation = "";
    let qualificationValidation  = "";
    let experienceValidation = "";
    let appliedValidation = "";

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
  
    if(your_name !=="" && your_name !== undefined){
        if(specialCharNotAllow(your_name)){
          nameValidation = "Please enter proper full name";
        }
    }
  
    if(present_organization !=="" && present_organization !== undefined){
        if(specialCharNotAllow(present_organization)){
          presentOrganizationValidation = "Please enter present organization";
        }
    }
  
    if(qualification !=="" && qualification !== undefined){
        if(specialCharNotAllow(qualification)){
          qualificationValidation = "Please enter qualification/designations";
        }
    }

    if(applying_for !=="" && applying_for !== undefined){
      if(specialCharNotAllow(applying_for)){
        appliedValidation = "Please enter valid applying for!";
      }
  }

    if(experience_in_years !=="" && experience_in_years !== undefined){
        if(!isNumeric(experience_in_years)){
          experienceValidation = "Please enter valid experience";
        }
    }
  
    return {
        phoneNoNumber,
        emailValidation,
        nameValidation,
        qualificationValidation,
        experienceValidation,
        presentOrganizationValidation,
        appliedValidation
    };      
  }


    return (
      <>
        <div className="form-wrap">
       
                  <form onSubmit={e => onSubmit(e)} className={activeForm ? "careerapplypost active": "careerapplypost hidden"}>
                  <input type="hidden" name="post_applied_for" id="post_applied_for"  />
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input id="c_name" name="your_name" value={your_name} type="text" className="form-control" onChange={(e) => onChange(e)} required autoComplete="off"/>
                          <label htmlFor="c_name">Name<sup>*</sup></label>
                          <span className="line"></span>
                          {
                            nameErrorsMessage && 
                            <small className={nameErrors ? "input_error active": "input_error"}>{nameErrorsMessage}</small>
                          }
                        </div>
                      </div>
                      <div className="col-md-6">
                          <div className="form-group">
                            <input id="c_email" name="email" value={email} type="text" className="form-control" onChange={(e) => onChange(e)} required autoComplete="off" />
                            <label htmlFor="c_email">Email Address<sup>*</sup></label>
                            <span className="line"></span>
                            {
                              emailErrors && 
                              <small className={error ? "input_error active": "input_error"}>{emailErrors}</small>
                            }
                          </div>
                        </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input id="c_phone" name="phone_number" value={phone_number} type="text" className="form-control" onChange={(e) => onChange(e)} required autoComplete="off" />
                          <label htmlFor="c_phone">Mobile No.<sup>*</sup></label>
                          <span className="line"></span>
                          {
                            phoneNumberErrors && 
                            <small className={phoneErrors ? "input_error active": "input_error"}>{phoneNumberErrors}</small>
                          }

                        </div>
                      </div>

                      <div className="col-md-6">
                          <div className="form-group">
                            <input id="c_qualification" type="text" className="form-control" name="qualification" value={qualification} onChange={(e) => onChange(e)} required autoComplete="off"/>
                            <label htmlFor="c_qualification">Qualification<sup>*</sup></label>
                            <span className="line"></span>
                            {
                              qualificationErrorsMessage && 
                              <small className={qualificationError ? "input_error active": "input_error"}>{qualificationErrorsMessage}</small>
                            }

                          </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                              <input id="c_applyfor" type="text" className="form-control" name="applying_for" onChange={(e) => onChange(e)} required autoComplete="off"/>
                              <label htmlFor="c_applyfor">Position applied for<sup>*</sup></label>
                              <span className="line"></span>
                              {
                              postionAppliedErrorsMessage && 
                              <small className={postionAppliedError ? "input_error active": "input_error"}>{postionAppliedErrorsMessage}</small>
                            }
                            </div>
                          </div>

                      <div className="col-md-6">
                          <div className="form-group">
                            <div className="select_wrap">
                            <select name="location" id="" value={location} className="form-control" onChange={(e) => onChange(e)}>
                              <option value="0">Preferred location</option>
                              <option value="bengaluru">Bengaluru</option>
                              <option value="gurugram">Gurugram</option>
                              <option value="mumbai">Mumbai</option>
                            </select>
                          </div>
                          </div>
                        </div>


                      <div className="col-md-6">
                        <div className="form-group">
                          <input id="c_organization" type="text" className="form-control" name="present_organization" value={present_organization} onChange={(e) => onChange(e)}autoComplete="off"/>
                          <label htmlFor="c_organization">Present organization </label>
                          <span className="line"></span>
                          {
                              presentOrganizationErrorsMessage && 
                              <small className={presentOrganizationError ? "input_error active": "input_error"}>{presentOrganizationErrorsMessage}</small>
                            }
                        </div>
                      </div>
                      <div className="col-md-6">
                          <div className="form-group">
                            <input id="c_exp" type="text" name="experience_in_years" value={experience_in_years} className="form-control" required onChange={(e) => onChange(e)} autoComplete="off"/>
                            <label htmlFor="c_exp">Experience in years<sup>*</sup></label>
                            <span className="line"></span>
                            {
                              experienceErrorsMessage && 
                              <small className={experienceErrors ? "input_error active": "input_error"}>{experienceErrorsMessage}</small>
                            }
                          </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                              <input id="c_resume" name="filename" value={filename} type="text" className="form-control" onChange={(e) => onChangeFile(e)} autoComplete="off" required/>
                              {
                              onchangefileErrorsMessage && 
                              <small className={onchangefileError ? "input_error active": "input_error"}>{onchangefileErrorsMessage}</small>
                              }
                              <label htmlFor="c_resume">Upload Resume<sup>*</sup></label>
                              <small className="input_error">Please fill this field</small>
                              <div className="fileUpload btn--browse text-white">
                                  <i className="far fa-paperclip"></i>
                                  <input id="uploadBtn" name="resumeFile" type="file" className="upload" onChange={(e) => onChangeFile(e)} required/>
                              </div>
                            </div>
                          </div>


                    </div>

                    <div className="row btn-row">
                      <div className="col-md-12">
                      {/* <i className="spinner"></i>  */}
                      {
                        loading && <i className="spinner active"></i>
                      }
                      <button href="#" className="btn btn-primary btn-white" disabled={buttonDisabled}>SUBMIT</button>
                      </div>
                    </div>

                    </form>
           
                  
                      <div className={!activeForm ? "thankyou_container": "thankyou_container hidden"}>
                      <p>Thank you for your interest in working with us.</p> 
                      <p> We’ll review your application and get back to you ASAP.</p>
                      </div>
                    
                  
                  </div>
        
      </>
    )
}


export default CareersForm;