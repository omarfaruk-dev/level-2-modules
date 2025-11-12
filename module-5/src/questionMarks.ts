// ? : ternary operator : decision making
// ?? : nullish coalescing operator (only works for null or undefined)
// ? optional chaining


// if else condition
const adultCheck = (age: number) => {
    if(age >= 21) {
        console.log('You are Adult');
    } else {
        console.log('You are kids');
    }
}

adultCheck(20);

// using ternary
const adult = (age: number) => {
    const result = age>=21 ? 'Adult' : 'Kids'
    console.log(result);
}
adult(21)

const userTheme = undefined;

const selectedTheme = userTheme ?? "Light Theme"

console.log(selectedTheme);

// optional chaining

const user: {
    address: {
        city: string,
        town: string,
        post: number,
    }
}

const postalCode = user?.address?.post;

console.log(postalCode);
