

export const checkValidData=(email,password)=> {
 const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
 const isPasswordValid = /^.*(?=.{7,50})(?=.*\d)(?=.*[A-Z]).*$/.test(password);
 if(!isEmailValid) return "Email ID is not valid";
 if(!isPasswordValid) return "Password is not Valid";

 return null;
};

