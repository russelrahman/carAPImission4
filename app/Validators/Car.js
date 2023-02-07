'use strict'

class Car {
/**
* Validating all fields
* @param null
*/
get validateAll() {
 return true
}
/**
* Rules
*/
get rules() {
//  const { id } = this.ctx.request.input('carValue')
 // const categoryId = this.ctx.params.id
 // console.log(this.ctx.request.all())
 // console.log(id)
 const rules = {
   'carValue.model': `required | string : model`,
   'carValue.year': `required : year`,
 }
 return rules
}
/**
* Custom validation Messages
* @param null
*/
get messages() {
 return {
   'carValue.model.required': 'there is an error',
   'carValue.model.string': 'there is an error',
   'carValue.year.required': 'there is an error',
  //  'carValue.year.integer': 'Year must be a number.',
 }
}
/**
* Messages when validation is failed
*/
async fails(errorMessages) {
 // formatting the error messages
 let formedErrorMessages = {
   model: '',
   year: '',
 }
 if (errorMessages) {
   errorMessages.forEach((error) => {
     let field = error.field.substring(
       error.field.indexOf('.') + 1,
       error.field.length
     )
     formedErrorMessages[field] = error.message
   })
 }
 return this.ctx.response.send({
   STATUS: 400,
   MESSAGES: formedErrorMessages,
   TYPE: 'error',
 })
}
}

module.exports = Car
