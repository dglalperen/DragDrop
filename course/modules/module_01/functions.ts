function add(n1: number, n2:number){
    return n1 + n2;
}

function printSomething(phrase: string){
    console.log(phrase);
}

function addAndHandle(n1: number, n2:number,cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(8, 8));


addAndHandle(1,2,(result) => console.log(result))