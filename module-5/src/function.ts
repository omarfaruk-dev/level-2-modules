// arrow function and normal function

//normal function
function addNormal(num1 : number, num2 : number) : number 
{
    return num1 + num2;
}

addNormal(2, 3)

//arrow function
const addArrow = (num1: number, num2 : number) : 
number => num1 + num2;

addArrow(2, 2);

// object => function => method

const user ={
    name: "Omar",
    balance: 1000,
    addBalance(value: number): number {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}

user.addBalance(2000)

// callback function

const arr: number[] = [1,4,6];

const sqrArray = arr.map((element:number): number =>element * element);