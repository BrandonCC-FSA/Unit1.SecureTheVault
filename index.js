let code1;
code1 = 7 + 3;

const code2 = 120 / 2 - 20;

const code3 = 79 % 40;

let message = `The vault has been secured. The combinations is:`;

const codeA = code1 + `-` + code2 + `-` + code3;

const codeB = `${code1}-${code2}-${code3}`;

console.log(message, codeA, codeB);
console.log(message, codeA === codeB);
