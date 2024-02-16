type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const elevatedEmployee: ElevatedEmployee = {
    name: "Alperen",
    privileges: ["create-server"],
    startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(employee: UnknownEmployee){
    console.log("Name: " + employee.name);

    // Type Guard
    if("privileges" in employee){
        console.log("Privileges: " + employee.privileges);
    }

    if("startDate" in employee){
        console.log("Start Date: " + employee.startDate);
    }

}

const someEmployee: UnknownEmployee = {
    name: "Alperen",
    startDate: new Date(),
}

const input = document.getElementById("user-input");


if(input){
    (input as HTMLInputElement).value = "YOOOOO"
}

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "Not a valid email!",
    username: "Must start with a capital character!"
}

// Optional Chaining

const fetchedUserData = {
    id: "u1",
    name: "Alperen",
    job: {title: null, description: "My own company"}
}

//console.log(fetchedUserData?.job?.title);

// Nullish Coalescing

const userInput = "";

