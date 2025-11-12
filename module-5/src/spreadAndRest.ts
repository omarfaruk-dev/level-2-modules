// spread operator

const friends = ['Jakir', 'Zihad', 'Jishan']

const schoolFriends = ['Jodu', 'Modu', 'Kodu']
const collegeFriends = ['Josim', 'Mokim', 'Korim']

friends.push(...schoolFriends)
friends.push(...collegeFriends)


console.log(friends);

// use spread operator in obj

const user = {name: 'Omar', phone: '01739460198'};
const othersInfo = {hobby: 'travelling', book: 'Ar-Rahikul-Makhtum'}

const userInfo = {...user, ...othersInfo}

console.log(userInfo);

// rest info

