// object destructuring

const user = {
    id: 1254,
    name: {
        firstName: 'Omar',
        lastname: 'Faruk'
    },
    favColor: 'black',
    gender: 'male'
};

// const myFavColor = user.favColor;
// console.log(myFavColor);

const {favColor : myFavColor} = user; // myFavColor = name alias (if needed we can add different name as alias)

// normal method
const friends = ['Jakir', 'Zihad', 'Jishan']

const [ , , myFriend] = friends;
console.log(myFriend);