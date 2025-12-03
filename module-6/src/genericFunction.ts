// generic function
const createArrayWithString = (value: string) => [value];
const createArrayWithNumber = (value: number) => [value];
const createArrayWithObj = (value: { id: number; name: string}) => { return [value]; }
// generic function

const arrString = createArrayWithString('hello');

const arrNumber = createArrayWithNumber(42);

const arrObj = createArrayWithObj({ id: 1, name: 'John' });