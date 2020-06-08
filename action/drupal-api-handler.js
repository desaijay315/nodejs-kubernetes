import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.DRUPAL_CMS_URL
});


const rejectPromise = (resError) => {
    let error = {};
  
    if (resError && resError.response && resError.response.data) {
      error = resError.response.data;
    } else {
      error = resError;
    }
  
    return Promise.reject(error);
  }

const setAuthHeader = () => {
    const defaultConfig = { 
        headers: 
        {
            'Authorization': "Basic " + new Buffer.from(process.env.DRUPAL_CMS_USERNAME + ":" + process.env.DRUPAL_CMS_PASSWORD).toString("base64"),
        }
    }
  
    if (defaultConfig) {
      return defaultConfig;
    }
    
    return undefined;
}

//get session token
const getToken = async () => {

    const body = {
        "username": process.env.DRUPAL_CMS_USERNAME,
        "password":process.env.DRUPAL_CMS_PASSWORD
    }

    const token = await axios.get(`${process.env.DRUPAL_CMS_URL}/rest/session/token?_format=json`, body).then(response => response.data);
    return token;
}


//set headers for post apis - Contact, Careers, Expertise Form
const setPostHeaders = async (formType) => {
    const token =  await getToken();

    switch(formType){
        case 'contact':
            const defaultConfig = { 
                headers: 
                {
                    'X-CSRF-Token': token.toString("base64"),
                    'Authorization': "Basic " + new Buffer.from(process.env.DRUPAL_CMS_USERNAME + ":" + process.env.DRUPAL_CMS_PASSWORD).toString("base64"),
                    'Content-Type': application/octet-stream
                } 
            };
            return defaultConfig;
        default: return undefined

    }
}

/*const postContactFormData = async (postData, value) => {

    const token =  await getToken();

    const { 
        name,
        email,
        phone_number,
        location,
        company,
        designation,
        selconsulting,
        digital_process,
        digital_roadmap,
        wish_message,
        blueval,
     } = postData;


     const body = {
            "webform_id": "contact_us",
            "name": name,
            "email": email,
            "phone_number": phone_number,
            "location":location,
            "company":company,
            "designation":designation,
            "consulting": selconsulting.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''),
            "attach_brd":value,
            "blue_ocean_strategy": blueval===true ? "blue_ocean_strategy" : "",
            "digital_process_re_engineering": digital_process===true ? "digital_process_re_engineering": "",
            "digital_roadmap":digital_roadmap === true ? "digital_roadmap" : "",
            "wish_message": wish_message
        } 


    const config = {
        headers:{
        'x-csrf-token': token.toString("base64"),
        'Authorization': "Basic " + new Buffer.from(process.env.DRUPAL_CMS_USERNAME + ":" + process.env.DRUPAL_CMS_PASSWORD).toString("base64")
       }
    }

    return await axios.post(`${process.env.DRUPAL_CMS_URL}/webform_rest/submit', body, config)
    .then(response => response.data)
    .catch(error => rejectPromise(error));
}*/

const postContactFormData = async (postData, value, isexpertise) => {

    const token =  await getToken();

    const { 
        name: name,
        email: email,
        phone_number: phone_number,
        company: company,
        designation: designation,
        industry: industry,
        website: website,
        wish_message: wish_message,
        country: country_name
     } = postData;


    //  const body = {
    //         "webform_id": "contact_us",
    //         "name": name,
    //         "email": email,
    //         "phone_number": phone_number,
    //         "location":location,
    //         "company":company,
    //         "designation":designation,
    //         "consulting": selconsulting.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''),
    //         "attach_brd":value,
    //         "blue_ocean_strategy": blueval===true ? "blue_ocean_strategy" : "",
    //         "digital_process_re_engineering": digital_process===true ? "digital_process_re_engineering": "",
    //         "digital_roadmap":digital_roadmap === true ? "digital_roadmap" : "",
    //         "wish_message": wish_message
    //     } 

    let webform_id;
    let body;

    if(isexpertise === 1){
        webform_id = "expertise_form";
        body = {
            "webform_id": webform_id,
            "your_name": name,
            "your_email": email,
            "phone": phone_number,
            "company_name":company,
            "designation":designation,
            "industry": industry,
            "website": website,
            "wish_to_add_more_details": wish_message,
            "upload_brd":value,
            "country": country_name
        }
    }else{
        webform_id = "contact_us"
         body = {
            "webform_id": webform_id,
            "name": name,
            "email": email,
            "phone_number": phone_number,
            "company":company,
            "designation":designation,
            "industry": industry,
            "website": website,
            "wish_to_add_more_details": wish_message,
            "upload_brd":value,
            "country": country_name
        }
    }


    // const body = {
    //     "webform_id": webform_id,
    //     "name": name,
    //     "email": email,
    //     "phone_number": phone_number,
    //     "company":company,
    //     "designation":designation,
    //     "industry": industry,
    //     "website": website,
    //     "wish_message": wish_message,
    //     "attach_brd":value,
    //     "country": country_name
    // } 

    console.log(body);


    const config = {
        headers:{
        'x-csrf-token': token.toString("base64"),
        'Authorization': "Basic " + new Buffer.from(process.env.DRUPAL_CMS_USERNAME + ":" + process.env.DRUPAL_CMS_PASSWORD).toString("base64")
       }
    }

    return await axios.post(`${process.env.DRUPAL_CMS_URL}/webform_rest/submit`, body, config)
    .then(response => response.data)
    .catch(error => rejectPromise(error));
}

export const postContactFormAttach = async (postData, isexpertise) => {
    const { brdFile } = postData;
    

    let file_name = brdFile.name;

    const token =  await getToken();

    const config = {
        headers:{
        'X-CSRF-TOKEN': token.toString("base64"),
        'Authorization': "Basic " + new Buffer.from(process.env.DRUPAL_CMS_USERNAME + ":" + process.env.DRUPAL_CMS_PASSWORD).toString("base64"),
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `'file; filename="${file_name}"'`
       }
    }
    const body = brdFile;

    let contactformattachData =  await axios.post(`${process.env.DRUPAL_CMS_URL}/webform_rest/contact_us/upload/upload_brd?_format=json`, body, config)
    .then(response => response.data)
    .catch(error => rejectPromise(error));

    if(contactformattachData.fid[0]){
        let value = contactformattachData ? contactformattachData.fid[0].value : null;
        if(value !== null){
            const formdatapost = await postContactFormData(postData, value, isexpertise);
            return formdatapost;
        }

    }
   
}

export const getHomePageData = async () => {
   return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content?url=/home`, setAuthHeader()).then(response => response.data);
//    return await axios.get('http://localhost:3000/home.json', setAuthHeader()).then(response => response.data);
}


export const getContactUsPageData = async () => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content?url=/contact-us`, setAuthHeader()).then(response => response.data);
}

export const getSuccessStoriesNavigation = async () => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/menu/navigation?_format=json&key=success-stories`, setAuthHeader()).then(response => response.data);
}


export const getSuccessStoriesPageData = async () => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content?_format=json&url=/success-stories`, setAuthHeader()).then(response => response.data);
}

export const getSuccessStoriesDetailsPageData = async () => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content?_format=json&url=/success-stories-details`, setAuthHeader()).then(response => response.data);
}


export const getCategoryData = async(getData) => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&url=/success-stories/${getData}`,setAuthHeader()).then(response => response.data);
}

//do not take this live  - temp function as it take data from json file
export const getCategoryDataTemp = async(getData) => {

    // if(process.env.NODE_ENV === 'production'){
       

        if(getData === 'all'){
            return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content?_format=json&url=/success-stories`, setAuthHeader()).then(response => response.data);
        }else{
            return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=${getData}&count=4`,setAuthHeader()).then(response => response.data);
        }
    // }else{

    //     let file = "";
    //     if(getData === "fmcg"){
    //         file = "fmcg.json";
    //     }else if(getData === "banking"){
    //         file = "data.json";
    //     }else if(getData === "media-and-entertainment"){
    //         file = "media-and-entertainment.json";
    //     }

    //     return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&url=/${getData}`,setAuthHeader()).then(response => response.data);
    // }

}

export const getCategorySuccessStoryPageData = async(getData) => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content?_format=json&type=success_stories&key=${getData}&count=4`,setAuthHeader()).then(response => response.data);
}

//header navigation

export const getHeaderNavigation = async() => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/menu/navigation?_format=json&key=main-menus`, setAuthHeader() ).then(response => response.data);
} 

//footer navigation

export const getFooterNavigation = async() => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/menu/navigation?_format=json&key=footer`, setAuthHeader() ).then(response => response.data);
}

export const getNewsDetailsPageData = async(slug) => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&url=/news/${slug}`, setAuthHeader()).then(response => response.data);
}


export const getSuccessStoriesAllDataNavigation = async() => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories`, setAuthHeader()).then(response => response.data);
}



//more articles data
export const getNewsArticlesData = async() => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=news_aticles`, setAuthHeader()).then(response => response.data);
}

//news main page data
export const getNewsPageData = async () => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content?_format=json&url=/news-page`, setAuthHeader()).then(response => response.data);
}

const setFormHeader = async () => {

    const token =  await getToken();
    const defaultConfig = { 
        headers:{
            'x-csrf-token': token.toString("base64"),
            'Authorization': "Basic " + new Buffer.from(process.env.DRUPAL_CMS_USERNAME + ":" + process.env.DRUPAL_CMS_PASSWORD).toString("base64")
        }
    }
  
    if (defaultConfig) {
      return defaultConfig;
    }
    
    return undefined;
}


export const postExpertiseFormData = async (postData) => {

    const { 
        your_name,
        your_email,
        your_phone,
        location,
        tell_us,
        project_timelines,
        formname
    } = postData;

    const body = {
        "webform_id": "expertise_form",
        "your_name": your_name,
        "your_email":  your_email,
        "your_phone": your_phone,
        "location": location,
        "tell_us":  tell_us,
        "project_timelines": project_timelines,
        "formname": formname 
    };

    console.log(body);

    return await axios.post(`${process.env.DRUPAL_CMS_URL}/webform_rest/submit`, body, await setFormHeader())
    .then(response => response.data)
    .catch(error => rejectPromise(error));
    
}


//banking data

export const getBankingData = async() => {
    // return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=banking&count=4`,setAuthHeader()).then(response => response.data);

    let bankingData = [];
    try {
        bankingData =  await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=banking&count=4`,setAuthHeader());
        
        if(bankingData){
            return bankingData.data;
        }
        
    } catch (error) {
        if (error.response) {
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            if(error.response.status !== 200){
                bankingData = [];
                return bankingData;
            }
        }
        
    }
}

//financial services

export const getFinanceData = async () => {

    // return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=financial-services&count=4',setAuthHeader()).then(response => response.data);

    let financeData = [];
    try {
        financeData =  await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=financial-services&count=4`,setAuthHeader());
        
        if(financeData){
            return financeData.data;
        }
        
    } catch (error) {
        if (error.response) {
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            if(error.response.status !== 200){
                financeData = [];
                return financeData;
            }
        }
        
    }

}

//fmcg data
export const getFmcgData = async () => {
    // return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=fmcg&count=4',setAuthHeader()).then(response => response.data);

    let fmcgData = [];
    try {
        fmcgData =  await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=fmcg&count=4`,setAuthHeader());
        
        if(fmcgData){
            return fmcgData.data;
        }
        
    } catch (error) {
        if (error.response) {
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            if(error.response.status !== 200){
                fmcgData = [];
                return fmcgData;
            }
        }
        
    }
}

//manufacturing data
export const getManufacturing = async () => {

    let mandata = [];
    try {
        mandata =  await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=manufacturing&count=4`,setAuthHeader());
        
        if(mandata){
            return mandata.data;
        }
        
    } catch (error) {
        if (error.response) {
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            if(error.response.status !== 200){
                mandata = [];
                return mandata;
            }
        }
        
    }
}

//technology data
export const getTechnology = async () =>{
    // return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=technology&count=4`,setAuthHeader()).then(response => response.data);

    let techData = [];
    try {
        techData =  await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=technology&count=4`,setAuthHeader());
        
        if(techData){
            return techData.data;
        }
        
    } catch (error) {
        if (error.response) {
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            if(error.response.status !== 200){
                techData = [];
                return techData;
            }
        }
        
    }
}

//media and entertainment

export const getMediaData = async() => {
    // return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=media-and-entertainment&count=4`,setAuthHeader()).then(response => response.data);

    let mediaData = [];
    try {
        mediaData =  await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=media-and-entertainment&count=4`,setAuthHeader());
        
        if(mediaData){
            return mediaData.data;
        }
        
    } catch (error) {
        if (error.response) {
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            if(error.response.status !== 200){
                mediaData = [];
                return mediaData;
            }
        }
        
    }
}

//retail data
export const getRetailData = async() =>{
    // return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=retail&count=4',setAuthHeader()).then(response => response.data);

    let retailData = [];
    try {
        retailData =  await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=retail&count=4`,setAuthHeader());
        
        if(retailData){
            return retailData.data;
        }
        
    } catch (error) {
        if (error.response) {
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            if(error.response.status !== 200){
                retailData = [];
                return retailData;
            }
        }
        
    }
    
}

//telecom data
export const getTelecomData = async() => {
    // return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=telecom-and-others&count=4',setAuthHeader()).then(response => response.data);

    let telecomData = [];
    try {
        telecomData =  await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&type=success_stories&key=telecom-and-others&count=4`,setAuthHeader());
        
        if(telecomData){
            return telecomData.data;
        }
        
    } catch (error) {
        if (error.response) {
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
            if(error.response.status !== 200){
                telecomData = [];
                return telecomData;
            }
        }
        
    }
}





const postCareersFormData = async (postData, value) => {

    const token =  await getToken();

    const { 
        your_name,
        email,
        phone_number,
        applying_for,
        qualification,
        preferred_location,
        present_organization,
        experience
     } = postData;


     const body = {
            "webform_id": "career_form",
            "your_name": your_name,
            "email": email,
            "phone_number": phone_number,
            "applying_for":applying_for,
            "qualification":qualification,
            "preferred_location":preferred_location,
            "present_organization":present_organization,
            "experience":experience,
            "attach_resume":value
    }

    console.log(body);

    const config = {
        headers:{
        'x-csrf-token': token.toString("base64"),
        'Authorization': "Basic " + new Buffer.from(process.env.DRUPAL_CMS_USERNAME + ":" + process.env.DRUPAL_CMS_PASSWORD).toString("base64")
       }
    }

    return await axios.post(`${process.env.DRUPAL_CMS_URL}/webform_rest/submit`, body, config)
    .then(response => response.data)
    .catch(error => rejectPromise(error));
}


export const postCareersFormAttach = async (postData) => {
    const { resumeFile } = postData;

    let file_name = resumeFile.name;

    const token =  await getToken();

    const config = {
        headers:{
        'X-CSRF-TOKEN': token.toString("base64"),
        'Authorization': "Basic " + new Buffer.from(process.env.DRUPAL_CMS_USERNAME + ":" + process.env.DRUPAL_CMS_PASSWORD).toString("base64"),
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `'file; filename="${file_name}"'`
       }
    }


    const body = resumeFile;

    let contactformattachData =  await axios.post(`${process.env.DRUPAL_CMS_URL}/webform_rest/career_form/upload/attach_resume?_format=json`, body, config)
    .then(response => response.data)
    .catch(error => rejectPromise(error));

    if(contactformattachData.fid[0]){
        let value = contactformattachData ? contactformattachData.fid[0].value : null;
        if(value !== null){
            const formdatapost = await postCareersFormData(postData, value);
            return formdatapost;
            // console.log(value)
        }

    }
   
}


//location api

export const locationApi = async () => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content/?_format=json&url=/our-location`,setAuthHeader()).then(response => response.data);
}

export const SearchApi = async (key) =>{
    // return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/search/?_format=json&type=all&keyword=${key}`,setAuthHeader()).then(response => response.data);

    let searchData = [];
    try {
        searchData =  await axios.get(`${process.env.DRUPAL_CMS_URL}/api/search/?_format=json&type=all&keyword=${key}`,setAuthHeader());
        
        if(searchData){
            return searchData.data;
        }
        
    } catch (error) {
        if (error.response) {
            if(error.response.status !== 200){
                searchData = [];
                return searchData;
            }
        }
    }
}


export const expertiseApi = async () => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content?url=/expertise`,setAuthHeader()).then(response => response.data);
}


export const careersApi = async () => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content?url=/careers`,setAuthHeader()).then(response => response.data);
}


export const aboutUsApi = async () => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content?url=/about-us`,setAuthHeader()).then(response => response.data);
}


export const privacyPolicyApi = async () => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content?url=/privacy-policy`,setAuthHeader()).then(response => response.data);
}

export const termsAndCondition = async () => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content?url=/terms-and-conditions`,setAuthHeader()).then(response => response.data);
}


export const cookiePolicy = async () => {
    return await axios.get(`${process.env.DRUPAL_CMS_URL}/api/content?url=/cookie-policy`,setAuthHeader()).then(response => response.data);
}
 
