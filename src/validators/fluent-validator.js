'use strict'

class ValidarionContract{ 

  constructor(){
    this.errors = [];
  }

  isRequired(value, message){
    if(!value || value.length <= 0){
      this.errors.push({message: message});
    }
  };

  hasMaxLen(value, max, message){
    if(!value || value.length > max){
      errors.push({message: message});
    }
  };

  isFixedLen(value, len, message){
    if(value.length != len){
      this.errors.push({message: message});
    }
  };

  errors(value, message){
    return errors;
  };

  clear(){
    return this.errors = [];
  };

  isValid(){
    return this.errors.length == 0;
  };
};

module.exports = ValidarionContract;