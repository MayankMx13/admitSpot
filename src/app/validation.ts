interface FormData {
    email: string;
    fullname: string;
    phone: string;
    country: string;
    message: string;
  }
  
  export const validateForm = (formData: FormData) => {
    const errors: { [key: string]: string } = {};
  
   
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format.";
    }
  
    
    if (!formData.fullname.trim()) {
      errors.fullname = "Full name is required.";
    }
  

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    }
  
   
    if (!formData.country.trim()) {
      errors.country = "Country of residence is required.";
    }
  
   
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }
  
    return errors;
  };
  