const getUser = (input: string | null) => {
    if(input) {
        console.log(`Fron DB: ${input}`);
    } else {
        console.log('From DB: ALL USER');
    }
}

getUser(null)

//unknown types
const discountCalculator = (input: unknown) => {
    if(typeof input === 'number') {
        const discountPrice = input * 0.1;
        console.log(discountPrice);
    } else if(typeof input === 'string') {
        const splittedInput = input.split(' ');
        console.log(Number(splittedInput) * 0.1);
    } else {
        console.log('wrong input');
    }
}

discountCalculator(100)
discountCalculator('100')
discountCalculator(null)

// void / never

const throwError = (msg: string): never => {
    throw new Error(msg)
}

throwError('Opps! Some Error..........')
