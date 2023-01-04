// for long numbers we can put an underscore to make the digits and code more readable.
let sales: number = 122_34_35;
let course: string = "Typescript";
let is_published: boolean = true;

let level;

// function render(document) {
//   console.log(document);

// }

// ENUM : group constants inside enum; we don't need to write const explicitly anymore just enum.

// const small = 1;
// const medium = 2;
// const large = 3;

// by default the first value will be 0; if we wanna change the value it's possible but values need to be set for all if we use a string
const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

// FUNCTIONS : annotate functions is important; number of paramaters passed into the function need to be exactly the same as when the function is called and we add the arguments in it. So if 4 paramaters were declared, we need to add 4 arguments. We can make a parameter optional by adding a question mark. However we can set a default value instead

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000);

// OBJECT : in JS object are dynamic, we can change their value throughout the program. In TS we can't do that. Readonly allow us to add a condition to a property so that it can't be modified.

// TYPE ALIAS : to define a custom type, which can be used to define the shape of an object (kinda similar to an annotation)

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

employee.name = "Priska";
// employee.id = 5;

// UNION TYPES : to give a function or parameters more than one type. We use a vertical bar (option + maj + L)
// Narrowing parameters helps defining their type, so that we can use a method on them.
// parseInt converts a string to an integer.

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

// INTERSECTION TYPES : we use &, which will mean we get an object that will have 2 types at the same time.

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// LITERAL TYPES : to limit the values we assign to variables to an exact or specific value.
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = "cm" | "inch";
let metric: Metric = "inch";

// NULLABLE TYPES : null and undefined values on TS are not working properly compared to JS. Need to configure tsconfig.json to allow TS to be less strict concerning null and undefined values.

function greet(name: string | null | undefined) {
  if (name)
  console.log(name.toUpperCase());
  else 
  console.log('Hola');
}

greet(undefined);

// OPTIONAL CHAINING : 

type Customer = {
  birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(1);
// optional property access operator with a question mark with dot operator : ?.
console.log(customer?.birthday?.getFullYear());




