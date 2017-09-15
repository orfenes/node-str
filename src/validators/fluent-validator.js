class ValidarionContract{

};

module.exports = teste;

// module.exports = class ValidarionContract{

//   errors = [];

//   static isRequired(value, message){
//     if(!value || value.length <= 0){
//       errors.push({message: message});
//     }
//   };

//   static hasMaxLen(value, max, message){
//     if(!value || value.length > max){
//       errors.push({message: message});
//     }
//   };

//   static isFixedLen(value, len, message){
//     if(value.length != len){
//       errors.push({message: message});
//     }
//   };

//   errors(value, message){
//     return errors;
//   };

//   static clear(){
//     return errors = [];
//   };

//   static isValid(){
//     return errors.length == 0;
//   };
// };