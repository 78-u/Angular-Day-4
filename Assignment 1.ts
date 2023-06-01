let isTrue: boolean = true;
let isFalse: boolean = false;

console.log(isTrue);  // Output: true
console.log(isFalse); // Output: false

//any
let anystat: any = "Yolo";
console.log(anystat); // Output: Yolo

//array of strings(homogenous)
let names: string[] = ["Tom", "Tim", "Tam"];
console.log(names); // Output: ["Tom", "Tim", "Tam"]

//array (heterogenous)
let heteroArray: (string | number)[] = ["my", "yes", "plant", 17];
console.log(heteroArray); 
