enum Country {
    India,
    US,
    China,
    Canada,
  }
  
  // Accessing Enum values
  console.log(Country.India); // Output: 0
  console.log(Country.US); // Output: 1
  console.log(Country.China);  // Output: 2
  console.log(Country.Canada);  // Output: 3
  
 // using indexes
 enum Direction {
    North,
    South,
    East,
    West,
  }
  
  const directionIndex = 3;
  const directionValue = Direction[directionIndex];
  
  console.log(directionValue); 
  