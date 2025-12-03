type User = {
    name: string,
    age: number
};


// ** interface declaration : only use for object types as like: object, function and arrays
interface IUser {
    name: string;
    age: number;
}

type Role = {
    role: 'admin' | 'user'
};

type UserWithRole = IUser & Role;

interface IUserWithRole extends IUser, Role {
    // additional properties can be added here
    role: 'admin' | 'user';
}

const user1 : UserWithRole = {
    name: 'Alice',
    age: 30,
    role: 'admin'
}

console.log(user1);

// * function type interface
type Add = (num1: number, num2: number) => number;

interface IAdd {
    (num1: number, num2: number): number;
}
