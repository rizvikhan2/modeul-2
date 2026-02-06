const numbers = [13, 22, 25, 45, 50];
const double = [];

for(const number of numbers){
    const ans = number * 2;
    double.push(ans)
}

console.log(double)
console.log(...double)

// map method multiline

const ages = [2,3,5,7,9,13,15]

const tripolIt = x => x * 3
const tripol = ages.map(tripolIt)
console.log(tripol)

// map method single line and we gonna use this method
const number = [1,3,5,7,9,11,13]

const fourTime = number.map( x => x *4)
console.log(fourTime)
const squer = number.map(x  => x * x)
console.log(squer)
const sum = number.map(x => x + x)
console.log(sum)

const names =['Alam', 'Mnaju','Rimi', 'Rizvi', 'Zara']
const lengthChake = names.map(n => n.length)
console.log(lengthChake)

const lengthChake2 = names.map(n => n[0])
console.log(lengthChake2)

const lengthChake3 = names.map(n => n[0].toLowerCase())
console.log(lengthChake3)
