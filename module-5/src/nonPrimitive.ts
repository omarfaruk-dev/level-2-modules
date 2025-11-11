// array, obj


let bazarList: string[] = ["eggs", "milk", "rice"]


let mixedArr: (string | number)[] = ["eggs", 10, 15, "milk"]

mixedArr.push("apple")

// ts - tuple

let coordinates: [number, number] = [10, 20, 25]

let couple: [string, string] = ["Husband", "Wife"]

let mixing: [string, number] = ["name", 10]


// reference type : object

const user: {
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
} = {
    firstName: "Omar",
    lastName: "Faruk",
    isMarried: true
}

console.log(user);

 
