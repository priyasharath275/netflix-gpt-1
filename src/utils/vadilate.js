export const checkValidData =(eamil,password,name) =>{

    const isEmailValid =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eamil);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isEmailValid) return "Email Address not valid";
    if(!isPasswordValid) return "Password not valid";
   
    return null;
}