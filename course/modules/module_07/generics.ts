const names = ["Alperen", "Max"];

const stringArray: Array<string> = ["Alperen", "Max"];

// Tuple
const role: [number, string] = [2, "author"];

// Generic Function

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

console.log(merge({name: "Alperen"}, {age: 30}));

function extractData<T>(data: T, key: string) {
    return data;
}