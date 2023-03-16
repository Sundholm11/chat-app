export const validateUsername = (input) => {
   const letters = /^[a-zA-ZäöåÄÖÅ0-9 ]*$/
   

   if ( input.match(letters) ) return true
   else return false
}