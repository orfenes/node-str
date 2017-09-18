'use strict'

class ValidarionContract{  

  constructor(){
    this.infoErrors = [];
  }

  isRequired(value, message){
    if(!value || value.length <= 0){
      this.infoErrors.push({message: message});
    }
  };

  hasMaxLen(value, max, message){
    if(!value || value.length > max){
      this.infoErrors.push({message: message});
    }
  };

  hasMinLen(valeu, max, message){    
    if(valeu.length < max){      
      this.infoErrors.push({message: message});
    }
  }

  isFixedLen(value, len, message){
    if(value.length != len){
      this.infoErrors.push({message: message});
    }
  };

  errors(value, message){
    return this.infoErrors;
  };

  clear(){
    return this.infoErrors = [];
  };

  isValid(){    
    return this.infoErrors.length == 0;
  };
};

module.exports = ValidarionContract;