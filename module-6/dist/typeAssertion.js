"use strict";
// type assertion
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = 'Omar';
// example
const kgToGmConverter = (input) => {
    if (typeof input === 'number') {
        return input * 1000;
    }
    else if (typeof input === 'string') {
        const [value] = input.split(' ');
        return `Converted output: ${Number(input)}`;
    }
};
const result1 = kgToGmConverter(2);
const result2 = kgToGmConverter('5kg');
//# sourceMappingURL=typeAssertion.js.map