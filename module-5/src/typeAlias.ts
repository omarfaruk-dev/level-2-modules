type User = {
    id: number,
    name: {
        firstName: string,
        lastName: string
    },
    gender: 'male' | 'female',
    contact: string,
    address: {
        division: string,
        city: string
    }
}

const user1: User = {
    id: 1234,
    name: {
        firstName: 'Omar',
        lastName: 'Faruk',
    },
    gender: 'male',
    contact: '0171',
    address: {
        division: 'Rajshahi',
        city: 'Bogura'
    }

}
const user2: User = {
    id: 5678,
    name: {
        firstName: 'Fatiha',
        lastName: 'Binte',
    },
    gender: 'female',
    contact: '0171',
    address: {
        division: 'Rajshahi',
        city: 'Bogura'
    }

}

console.log(user2);

// function type alias

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;

