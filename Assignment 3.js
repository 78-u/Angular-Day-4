var Country;
(function (Country) {
    Country[Country["India"] = 0] = "India";
    Country[Country["US"] = 1] = "US";
    Country[Country["China"] = 2] = "China";
    Country[Country["Canada"] = 3] = "Canada";
})(Country || (Country = {}));
// Accessing Enum values
console.log(Country.India); // Output: 0
console.log(Country.US); // Output: 1
console.log(Country.China); // Output: 2
console.log(Country.Canada); // Output: 3
// using indexes
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var directionIndex = 3;
var directionValue = Direction[directionIndex];
console.log(directionValue);
