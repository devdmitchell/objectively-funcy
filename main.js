// YOUR CODE GOES HERE!!!
/*************************/

function getFirstName(person) {
  return person.firstName;
}

function getLastName(person) {
  return person.lastName;
}

function getFullName(person) {
  return person.firstName + ' ' + person.lastName;
}

function setFirstName(person, newFirstName) {
  person.firstName = newFirstName;
}

function setAge(person, newAge) {
  person.age = newAge;
}

function giveBirthday(obj) {
  if (obj.hasOwnProperty("age")){
    obj.age = obj.age + 1;
 } else {
  obj.age = 1;
 }
   return obj;
}





/****************************/
// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}



module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
