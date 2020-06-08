import React, {useState, useEffect, useRef} from 'react';

import {postContactFormAttach} from '../../action/drupal-api-handler';
import {isValidFileType, isValidphonenumber, validateEmail, isValidWebsite, specialCharNotAllow} from '../../action/helpers';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { country_names } from './countryData';

const animatedComponents = makeAnimated();

const ContactForm = () => {

    // we use the help of useRef to test if it's the first render
  const firstRender = useRef(true)
    
    const [brdFile, setbrdFile] = useState("");
    const [filename, setFilename] = useState("");
    const [country_name, setCountryName] = useState("India");
    const [isSubmitted, setSubmission] = useState(false);
    
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

    const [onchangefileError, setonchangefileError] = useState(false);
    const [onchangefileErrorsMessage, setonchangefileErrorsMessage] = useState("");


    const [formData, setFormData] = useState({
        "webform_id": "contact_us",
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

      const onChange = e => {
        //   console.log(e.target.name, e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
        console.log(buttonDisabled);
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


        const postForm = await postContactFormAttach(formData);
        
        // console.log(postForm);
        if(postForm && postForm.sid){
        // console.log(buttonDisabled);
            setloading(false);
            setSubmission(true);
            setButtonDisabled(false);
            setFormData({
                "webform_id": "contact_us",
                "name": "",
                "email":  "",
                "phone_number": "",
                "company":"",
                "designation":"",
                "wish_message":"",
                "website":"",
                "industry":""
            });
            setFilename("");
            setCountryName("India")

        }else{
            setloading(false);
            setSubmission(false);
            setButtonDisabled(false);
        }
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
            setemailErrors(error.emailValidation);
        }

        if(error.nameValidation !== ""){
            setNameError(true);
            setnameErrorsMessage(error.nameValidation);
        }else{
            setNameError(false);
            setnameErrorsMessage(error.nameValidation);
        }


        //need to make changes

        if(error.websiteValidation !== ""){
            setwebsiteError(true);
            setwebsiteErrorMessage(error.websiteValidation);
        }else{
            setwebsiteError(false);
            setwebsiteErrorMessage(error.websiteValidation);
        }


        if(error.industryValidation !== ""){
            setindustryError(true);
            setindustryErrorMessage(error.industryValidation);
        }else{
            setindustryError(false);
            setindustryErrorMessage(error.industryValidation);
        }

        if(error.companyValidation !== ""){
            setCompanyError(true);
            setCompanyErrorMessage(error.companyValidation);
        }else{
            setCompanyError(false);
            setCompanyErrorMessage(error.companyValidation);
        }

        if(error.wishMessageValidation !== ""){
            setwishMessageError(true);
            setwishMessageErrorMessage(error.wishMessageValidation);
        }else{
            setwishMessageError(false);
            setwishMessageErrorMessage(error.wishMessageValidation);
        }

        if(error.designationValidation !== ""){
            setdesignationError(true);
            setdesignationErrorMessage(error.designationValidation);
        }else{
            setdesignationError(false);
            setdesignationErrorMessage(error.designationValidation);
        }

        // if(error.phoneNoNumber === "" && phone_number !=="" && error.emailValidation === "" && email !=="" && error.nameValidation === "" && name !=="" && error.companyValidation === "" && company !==""){
        //     setButtonDisabled(false);
        // }else{
        //     setButtonDisabled(true);
        // }
        
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
                companyValidation = "Please enter valid company name!";
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
       {
        !isSubmitted && 
        <div className="col-md-12 col-lg-7 p-lg-5 pb-0">
                <h2 className="section_heading fadeInRight wow" data-wow-delay=".6s">Drop us a line</h2>
                <form onSubmit={(e) => onSubmit(e)} className="my-lg-5 mb-0" >
                    <div className="row focused mb-4">

                     <div className="col-md-6">
                     <div className="form-group">
                                    <input type="text" id="fname" name="name" value={name} onChange={e => onChange(e)} autoComplete="false" required/>
                                    <label htmlFor="fname">Name<sup>*</sup></label>
                                    <span className="line"></span>
                                    {
                                        nameErrorsMessage && 
                                        <small className={nameErrors ? "input_error active": "input_error"}>{nameErrorsMessage}</small>
                                    }
                                </div>
                                </div>

                                 <div className="col-md-6">
                                 <div className="form-group">
                                    <input type="text" id="email" name="email" value={email} onChange={e => onChange(e)} required autoComplete="off"/>
                                    <label htmlFor="email">Work Email<sup>*</sup></label>
                                    <span className="line"></span>
                                    {
                                        emailErrors && 
                                        <small className={error ? "input_error active": "input_error"}>{emailErrors}</small>
                                    }
                                </div>
                                </div>

                             <div className="col-md-6">
                             <div className="form-group">
                                    <input type="text" id="phone" name="phone_number" value={phone_number} required onChange={e => onChange(e)} autoComplete="off" />
                                    <label htmlFor="phone">Phone<sup>*</sup></label>
                                    <span className="line"></span>
                                    {
                                        phoneNumberErrors && 
                                        <small className={phoneErrors ? "input_error active": "input_error"}>{phoneNumberErrors}</small>
                                    }
                                    </div>
                                    </div>

                                     <div className="col-md-6">
                                     <div className="form-group">
                                        <input type="text" id="designation" name="designation" value={designation}  onChange={e => onChange(e)} autoComplete="off"/>
                                       <label htmlFor="designation">Designation</label>
                                       <span className="line"></span>
                                       {
                                            designationErrorsMessage && 
                                            <small className={designationErrors ? "input_error active": "input_error"}>{designationErrorsMessage}</small>
                                        }
                                   </div>
                                   </div>

                                   <div className="col-md-6">
                                   <div className="form-group">
                                       <input type="text" id="company" name="company" value={company} required onChange={e => onChange(e)} autoComplete="off"/>
                                       <label htmlFor="company">Company<sup>*</sup></label>
                                       <span className="line"></span>
                                       {
                                            companyErrorsMessage && 
                                            <small className={companyErrors ? "input_error active": "input_error"}>{companyErrorsMessage}</small>
                                        }
                                   </div>
                                   </div>

                                    <div className="col-md-6">
                                    <div className="form-group">
                                       <input type="text" id="industry" name="industry" value={industry} onChange={e => onChange(e)} autoComplete="off" />
                                       <label htmlFor="industry">Industry</label>
                                       <span className="line"></span>
                                       {
                                            industryErrorsMessage && 
                                            <small className={industryErrors ? "input_error active": "input_error"}>{industryErrorsMessage}</small>
                                        }
                                   </div>
                                   </div>

                                   <div className="col-md-6">
                                   <div className="form-group">
                                       <input type="text" id="website" name="website" value={website} onChange={e => onChange(e)} autoComplete="off" />
                                       <label htmlFor="website">Website</label>
                                       <span className="line"></span>
                                       {
                                            websiteErrorsMessage && 
                                            <small className={websiteErrors ? "input_error active": "input_error"}>{websiteErrorsMessage}</small>
                                        }
                                   </div>
                                   </div>
                                   <div className="col-md-6">
                                   <div className="form-group">
                                 
                                     {/* <select id="inputState"  value={selconsulting}  name="selconsulting" className="form-control" onChange={(e) => onChange(e)}>
                                        <option value="0">Select</option>
                                        <option value="consulting">Consulting</option>
                                        <option value="miss">Miss.</option>
                                    </select>  */}

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

                              <div className="col-md-6 demoTest">
                              <div className="form-group">
                                        <input value={filename} name="filename" id="attach" type="text" onChange={onChangeFile} />
                                        {
                                        onchangefileErrorsMessage && 
                                        <small className={onchangefileError ? "input_error active": "input_error"}>{onchangefileErrorsMessage}</small>
                                        }
                                        <label htmlFor="attach">Upload BRD</label>
                                        <span className="line"></span>
                                        <div className="fileUpload btn--browse">
                                            <i className="far fa-paperclip"></i>
                                            <input id="uploadBtn" type="file" className="upload" onChange={onChangeFile} name="brdFile" />
                                        </div>
                                </div>
                                </div>

                                 <div className="wish col-md-6">
                                 <div className="form-group">
                       {/* <!-- <input type="text" id="wish" required/> --> */}
                       <textarea name="wish_message" value={wish_message} id="wish" onChange={e => onChange(e)} autoComplete="off"></textarea>
                       <label htmlFor="wish">Wish to add something?</label>
                       <span className="line"></span>
                       {
                            wishMessageErrorsMessage && 
                            <small className={wishMessageErrors ? "input_error active": "input_error"}>{wishMessageErrorsMessage}</small>
                        }
                       </div>
                       </div>
                      
                        </div>

                       
                    {/* <div className="row focused checkBox mb-4">
                     <div className="form-group col-md-3 chkBt mb-3 mr-4">
                        <input type="checkbox" id="customCheck" name="blue_ocean" value={blueval} onChange={() => {
                                        setFormData({ ...formData, blueval: !blueval });
                                        togglecheckDisable(!togglecheck);
                                    }} checked={blueval}/>
                        <label htmlFor="customCheck">Blue Ocean Strategy</label>
                     </div>
                     <div className="form-group col-md-4 chkBt mb-3 mr-4">
                        <input type="checkbox" id="customCheck2" name="digital_process" value={digital_process} onChange={() => {setFormData({ ...formData, digital_process: !digital_process });
                        togglecheckDisable(!togglecheck);}} checked={digital_process}/>
                        <label htmlFor="customCheck2">Digital Process Re-engineering</label>
                     </div>
                     <div className="form-group col-md-4 chkBt mb-3">
                        <input type="checkbox" id="customCheck3" name="digital_roadmap" value={digital_roadmap}  onChange={() => {
                                        setFormData({ ...formData, digital_roadmap: !digital_roadmap });
                                        togglecheckDisable(!togglecheck);
                                    }} checked={digital_roadmap}/>
                        <label htmlFor="customCheck3">Digital Roadmap</label>
                     </div>
                    </div> */}
                    {/* <div className="row focused mb-4 mt-4">
                    
                    </div> */}
                    <div className="row focused mb-4 mt-4">
                     <div className="col-md-12">
                     <div className="form-group">
                        <div className="viewMaps">
                           <button className="btn btn-primary" disabled={buttonDisabled}>Let’s connect</button> 
                           {
                               loading && <i className="spinner active"></i>
                           }
                         </div>
                       </div>
                       </div>
                    </div>
                </form>
            </div>
        }
        {
            isSubmitted &&
            <div className="col-md-12 col-lg-7 p-lg-5 pb-0">
            <h2 className="section_heading fadeInRight wow" data-wow-delay=".6s">Drop us a line</h2>

             <div className="thankyou_container">
                <p>Thank you for contacting us.</p> 
                   <p> We have received your enquiry and will respond within 24 hours.</p>
             </div>

         </div>
        }
    </>
    )

}



export default ContactForm;