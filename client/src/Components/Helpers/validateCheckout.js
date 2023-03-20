const validateCheckout = ({
  name }) => {
    const errorsCheckout = {};  
    const onlyLetters = /[\^$.¡*+?=¿%&!:|\\/()[\]{}1234567890¬"'#;-@¨]/;  
   
    
   
    if (
      typeof name !== "string" || name.length < 2 || name.length > 50 || onlyLetters.test(name) 
    ){
      errorsCheckout.name = "Please write only letters (2-50)";    
    }
    

    
    return errorsCheckout;
  };

  export default validateCheckout;

