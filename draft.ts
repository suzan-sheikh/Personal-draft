// // Problem_1 :
// //*TODO
// //? create a function - complete
// //? This function received only array of number - complete
// //? This function return a array of number only even number

// // type TInput = number[];
// // const filterEvenNumbers = (input: TInput): TInput => {
// //   let output: TInput = [];
// //   input.map((i) => {
// //     if (i % 2 == 0) {
// //       output.push(i);
// //     }
// //   });
// //   return output
// // };
// // console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// // type TInput = number[];

// // const filterEvenNumbers = (input: TInput): TInput => {
// //   return input.filter((i) => i % 2 === 0);
// // };

// // console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// // assignment_1
// const filterEvenNumbers = (input: number[]): number[] => {
//   return input.filter((i) => i % 2 === 0);
// };

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// class NewClass {
//   person: string;
//   age: number;
//   constructor(person: string, age: number) {
//     this.person = person;
//     this.age = age;
//   }
// }
// class SubClass extends NewClass {
//   designation: string;
//   constructor(person: string, age: number, designation: string) {
//     super(person, age);
//     this.designation = designation;
//   }
//   callMethod(T: boolean, X: string) {
//     return {
//       name: this.person,
//       age: this.age,
//       designation: this.designation,
//       isSelected: T,
//       payment: X,
//     };
//   }
// }

// const result = new SubClass("suzan", 30, "developer");

// // rest and spread operator

// const number: number[] = [1, 2, 3, 4];

// const newNumber: number[] = [...number, 10, 20, 40];
// console.log(newNumber);

// class Animal {
//   makeSound() {
//     console.log("Animal makes sound");
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log("Dog barks");
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log("Cat meows");
//   }
// }

// const ani = new Animal();

// const dog = new Dog();
// const cat = new Cat();

// dog.makeSound();
// cat.makeSound();
// ani.makeSound();

//! code is continue .......

// OOP in TypeScript
