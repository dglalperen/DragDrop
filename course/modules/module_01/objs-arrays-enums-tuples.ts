
type Person = {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // Tuple
    maritalStatus: MaritalStatus;
};

enum MaritalStatus { SINGLE, MARRIED, DIVORCED };

const person: Person = {
    name: "Alperen",
    age: 23,
    hobbies: ["Sports", "Coding"],
    role: [2, "author"],
    maritalStatus: MaritalStatus.MARRIED
};

person.role.push("admin");
person.role[0] = 10;


console.log(person.age);