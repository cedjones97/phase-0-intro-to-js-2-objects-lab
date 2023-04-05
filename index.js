// Write your solution in this file!


// //  //          Objects()
// //  //                                                                        nextNote()

//const obj = {};
//            ^^  empty object

//const obj = { key: value };
//    ^^      single property object

//const obj = {
//    key1: value1,
//    key2: value2,
//      ^^    multiple properties

// const obj = {
//     key1: value1,
//     key2: {
//       innerKey1: innerValue1,
//       innerKey2: innerValue2,
//     },
//   };
//          ^^    nested object

// const address = {
//     street: {
//       line1: "11 Broadway",
//       line2: "2nd Floor",
//     },
//     city: "New York",
//     state: "NY",
//     zipCode: "10004",
//   };
//     ^^    nested object example

// const meals = {
//     breakfast: "Avocado toast",
//     lunch: "Avocado toast",
//     dinner: "Avocado toast",
//   };
  
//   meals.breakfast;
//   // => "Avocado toast"
  
//   meals.dinner;
//   // => "Avocado toast"

 
//console.log(address.street);
//=> { line1: "11 Broadway", line2: "2nd Floor" }
//console.log(address.street.line1)
// => "11 Broadway"

//console.log(address["street"]);
//=> { line1: "11 Broadway", line2: "2nd Floor" }

//console.log(address["street"]["line1"]);
//=> "11 Broadway"

//address["street"]["line2"];
//=> "2nd Floor"

//address["city"];
//=> "New York"

/////                                                             Nonstandard Keys
// const wildKeys = {                  
//     "Cash rules everything around me.": "Wu",
//     "C.R.E.A.M.": "Tang",
//     "Get the money.": "For",
//     "$ $ bill, y'all!": "Ever",
//   };

 // wildKeys.'Cash rules everything around me.';
// ERROR: Uncaught SyntaxError: Unexpected string

//console.log(wildKeys["$ $ bill, y'all!"]);
//=> "Ever"

// const morningMeal = "breakfast";
// const middayMeal = "lunch";
// const eveningMeal = "dinner";

// const meals = {
//   [morningMeal]: "French toast",
//   [middayMeal]: "Personal pizza",
//   [eveningMeal]: "Fish and chips",
// };

// console.log(meals);
//=> { breakfast: "French toast", lunch: "Personal pizza", dinner: "Fish and chips" }

/////                                            Object.keys()

// const wednesdayMenu = {
//     cheesePlate: {
//       soft: "Brie",
//       semiSoft: "Fontina",
//       hard: "Provolone",
//     },
//     fries: "Sweet potato",
//     salad: "Southwestern",
//   };
  
//   console.log(Object.keys(wednesdayMenu));
//   //=> ["cheesePlate", "fries", "salad"]
//   console.log(Object.values(wednesdayMenu))


  // //  //          modifyingObjects()
// //  //                                                                        nextNote()

///// Add an Object Property Using Dot or Bracket Notation

// const texas = {};
// texas.city = "dallas"
// texas['town'] = "oak cliff"
// console.log(texas)

// const circle = {}; // Create `circle` and set it to an empty Object

// //circle;
// //=> {}

// circle.radius = 5; // Create the key inside `circle` and set its value to 5

// console.log(circle);
// //=> { radius: 5 }

// const circle = {};

// circle.radius = 5;

// circle["diameter"] = 10;

// circle.circumference = circle.diameter * Math.PI;
// //=> 31.41592653589793

// circle["area"] = Math.PI * circle.radius ** 2;
// //=> 78.53981633974483

// circle;
//=> { radius: 5, diameter: 10, circumference: 31.41592653589793, area: 78.53981633974483 }

//// Modify a Property Using Dot or Bracket Notation

// const mondayMenu = {
//     cheesePlate: {
//       soft: "Chèvre",
//       semiSoft: "Gruyère",
//       hard: "Manchego",
//     },
//     fries: "Curly",
//     salad: "Cobb",
//   };
  
//   mondayMenu.fries = "Sweet potato";
//   mondayMenu['salad'] = 'ceasar'
//   console.log(mondayMenu);

// const tuesdayMenu = destructivelyUpdateObject(mondayMenu, "salad", "southwest");
//console.log(tuesdayMenu)
// /// how to modify in one line destructively^^

// function destructivelyUpdateObject(obj, key, value) {
//     obj[key] = value; //Why are we using bracket notation here?
  
//     return obj;
//}
//


// function nondestructivelyUpdateObject(obj, key, value) {
//     return {
//       ...obj,
//       [key]: value,
//     };
//   }
  

//   const sundayMenu = nondestructivelyUpdateObject(
//     tuesdayMenu,
//     "fries",
//     "Shoestring"
//   );
  
//   console.log(tuesdayMenu.fries);
//   //=> "Sweet potato"
  
//   console.log(sundayMenu.fries);
  //=> "Shoestring

    // Code to return new, updated menu object goes here
  
  // /// how to modify in one line nondestructively^^

///// Remove a Property from an Object

//   const wednesdayMenu = {
//     cheesePlate: {
//       soft: "Brie",
//       semiSoft: "Fontina",
//       hard: "Provolone",
//     },
//     fries: "Sweet potato",
//     salad: "Southwestern",
//   };
  
//   delete wednesdayMenu.salad;
//   //=> true
//   delete wednesdayMenu.cheesePlate.semiSoft
//   console.log(wednesdayMenu);

 ///// Identify the Relationship Between Arrays and Objects

//  const myArray = [2, 3, 5, 7];

// myArray["1"] = "Hi";
// //=> "Hi"

// myArray;
// //=> [2, "Hi", 5, 7]

// myArray["01"] = "Ho";
// //=> "Ho"

// myArray;
// //=> [2, "Hi", 5, 7, 01: "Ho"]

// myArray[01];
// //=> "Hi"

// myArray["01"];
// //=> "Ho"

const employee = {
    name: 'Cedric Jones',
    streetAddress: 'Dumore Dr'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newUpdateEmployee = { ...employee };
  
    newUpdateEmployee[key] = value;
  
    return newUpdateEmployee;
  }

  //const destructiveKeyAndValue = destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value);

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
  
  return employee;
  }







  function deleteFromEmployeeByKey(employee, key){
    const newUp = { ...employee };
    delete newUp.name
    return newUp
  }


 function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    return employee
 }