

export const checkValidData=(name,email,password)=> {
 const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
 const isPasswordValid = /^.*(?=.{7,50})(?=.*\d)(?=.*[A-Z]).*$/.test(password);
 const isName =/^[A-Za-z]+([-' .][A-Za-z]+)*$/
.test(name);
 if(!isEmailValid) return "Email ID is not valid";
 if(!isPasswordValid) return "Password is not Valid";
 if(!isName) return "Name is not valid";

 return null;
};

