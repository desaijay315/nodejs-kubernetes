export const removeHTMLChars = (string) =>{
    return string.replace(/<[^>]*>?/gm, '');
}

export const removeSlash = (string) => {
    return string.replace(/\\|\//g,'')
 }

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const link_is_external = (link_element) => {
    if(process.browser){
        return (link_element.host !== window.location.host);
    }
     return false;
}

export const isNumeric = (num) =>{
    return !isNaN(num)
}

export const seoTags = (seodata) => {

    let canonical_url = "";
    let canonical_description = "";
    let canonical_seo_keywords = "";
    let canonical_field_title = "";
    let field_itemprop_description = "";
    let field_itemprop_image_url = "";
    let field_itemprop_image_alt = "";
    let field_itemprop_name = "";
    let field_og_description = "";
    let field_og_image_url = "";
    let field_og_image_alt = "";
    let field_og_title = "";
    let field_og_url = "";
    
    if(seodata.field_paragraph_for_seo_can && seodata.field_paragraph_for_seo_can.length > 0){
        canonical_url  = seodata.field_paragraph_for_seo_can[0].field_canonical_url || "";
        canonical_description = removeHTMLChars(seodata.field_paragraph_for_seo_can[0].field_description) || "";
        canonical_seo_keywords = removeHTMLChars(seodata.field_paragraph_for_seo_can[0].field_seo_keywords) || "";
        canonical_field_title = removeHTMLChars(seodata.field_paragraph_for_seo_can[0].field_title) || "";
    }

    if(seodata.field_paragraph_for_seo_itemprop && seodata.field_paragraph_for_seo_itemprop.length > 0){
        field_itemprop_description = removeHTMLChars(seodata.field_paragraph_for_seo_itemprop[0].field_itemprop_description) || "";
        field_itemprop_image_url = seodata.field_paragraph_for_seo_itemprop[0].field_itemprop_image.url || "";
        field_itemprop_image_alt = seodata.field_paragraph_for_seo_itemprop[0].field_itemprop_image.alt || "";
        field_itemprop_name = removeHTMLChars(seodata.field_paragraph_for_seo_itemprop[0].field_itemprop_name) || "";
    }   

    if(seodata.field_paragraph_for_seo_opengrap && seodata.field_paragraph_for_seo_opengrap.length > 0){
        field_og_description = removeHTMLChars(seodata.field_paragraph_for_seo_opengrap[0].field_og_description) || "";
        field_og_image_url = seodata.field_paragraph_for_seo_opengrap[0].field_og_image.url || "";
        field_og_image_alt = seodata.field_paragraph_for_seo_opengrap[0].field_og_image.alt || "";
        field_og_title = removeHTMLChars(seodata.field_paragraph_for_seo_opengrap[0].field_og_title) || "";
        field_og_url = seodata.field_paragraph_for_seo_opengrap[0].field_og_url || "";
    }

    console.log(seodata.field_paragraph_for_seo_twitter);

    let field_twitter_description = ""
    let field_twitter_image_url = ""
    let field_twitter_image_alt = ""
    let field_twitter_title = ""

    if(seodata.field_paragraph_for_seo_twitter && seodata.field_paragraph_for_seo_twitter.length > 0){

        field_twitter_description = removeHTMLChars(seodata.field_paragraph_for_seo_twitter[0].field_twitter_description) || "";
        field_twitter_image_url = seodata.field_paragraph_for_seo_twitter[0].field_twitter_image.url || "";
        field_twitter_image_alt = seodata.field_paragraph_for_seo_twitter[0].field_twitter_image.alt || "";
        field_twitter_title = removeHTMLChars(seodata.field_paragraph_for_seo_twitter[0].field_twitter_title) || "";

    }
    
    return {
        canonical_url: canonical_url,
        canonical_description:canonical_description,
        canonical_seo_keywords: canonical_seo_keywords,
        canonical_field_title: canonical_field_title,
        field_itemprop_description: field_itemprop_description,
        field_itemprop_image_url: field_itemprop_image_url,
        field_itemprop_image_alt: field_itemprop_image_alt,
        field_itemprop_name: field_itemprop_name,
        field_og_description: field_og_description,
        field_og_image_url: field_og_image_url,
        field_og_image_alt: field_og_image_alt,
        field_og_title: field_og_title,
        field_og_url: field_og_url,
        field_twitter_description: field_twitter_description,
        field_twitter_image_url: field_twitter_image_url,
        field_twitter_image_alt: field_twitter_image_alt,
        field_twitter_title: field_twitter_title
    }
}


export const isValidFileType = (filename) => {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case 'pdf':
      case 'doc':
      case 'docx':
        return true;
    }
    return false;
}

const getExtension =(filename) => {
    let parts = filename.split('.');
    return parts[parts.length - 1];
}

export const specialCharNotAllow = (string) => {
    // const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const regex = /[^a-zA-Z0-9\-\/ ]/
    if(regex.test(string)){
        return true;
    }
    return false;
}

export const isValidWebsite = (url) =>{
    let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);
    if (url.match(regex)) {
        return true;
    }
    return false;
}

export const isValidphonenumber = (inputtxt) => {
    if(/^\d{15}$/.test(inputtxt)){
        return true;
    }
    return false;
  }
  
export const validateEmail = (email)  => {
      let emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(emailReg.test(email)){
          return true;
      }
      return false;
}