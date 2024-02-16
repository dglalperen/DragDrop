/* function Logger(logString: string){
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }

}

function WithTemplate(template: string, hookId: string){
    return function<T extends  { new (...args: any[]): {name: string}}>(originalConstructor: T){
        return class extends originalConstructor {
            constructor(...args: any[]){
                super(...args);
                console.log("Rendering template");
                const hookEl = document.getElementById(hookId);
                if(hookEl){
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1")!.textContent = this.name;
                }
            }
        }
    }
}


//@Logger("LOGGING - PERSON")
@WithTemplate('<h1>Decorator sind cool</h1>', 'app')
class Person {
    name: "Max";

    constructor(name: string) {
        console.log("Creating a new person...");
    }
}

const person = new Person("Max");

console.log("--------------------------------------------")

function Log(target: any, propertyName: string | Symbol){
    console.log("Property decorator!");
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);

}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string| Symbol, position: number){
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number){
        if(val > 0){
            this._price = val;
        } else {
            throw new Error("Invalid price - should be positive!");
        }
    }

    constructor(title: string, price: number){
        this.title = title;
        this._price = price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price * (1 + tax);
    }
}

class Printer {
    message =" This works!";

    showMessage(){
        console.log(this.message);
    }
}

const printer = new Printer();
const button = document.querySelector("button")!;
button.addEventListener("click", () => printer.showMessage());

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] // ["required", "positive"]
    }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}

function validate(obj: any){
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig){
        return true;
    }
    for(const prop in objValidatorConfig){
        for(const validator of objValidatorConfig[prop]){
            switch(validator){
                case "required":
                    return !!obj[prop];
                case "positive":
                    return obj[prop] > 0;
            }
        }
    }
    return true;
}

class Course {
    @Required
    title: string;

    @PositiveNumber
    @Required
    price: number;

    constructor(t: string, p: number){
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", event => {
    event.preventDefault();

    const titleEl = document.getElementById("title") as HTMLInputElement;
    const priceEl = document.getElementById("price") as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)){
        alert("Invalid input, please try again!");
        return;
    }
    console.log(createdCourse);
})

 */