// type assertion

let anything : any;

anything = 'Omar';

// example
const kgToGmConverter = (input: string | number) => {
    if(typeof input === 'number'){
        return input * 1000;
    } else if(typeof input === 'string'){
        const [value] = input.split(' ')
        return `Converted output: ${Number(value) * 1000}`
    }
};

const result1 = kgToGmConverter(2) as number;
const result2 = kgToGmConverter('5 kg') as string;

console.log({result2});

type CustomError = {
    message: string;
}
try{

} catch (err) {
    console.log((err as CustomError).message);
}

