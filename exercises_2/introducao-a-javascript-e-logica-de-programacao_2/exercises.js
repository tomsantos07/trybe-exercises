// EX: 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for ( let index = 0; index < numbers.length; index++){
    console.log(numbers[index])

}

// EX: 2

console.log(numbers.length)
console.log('---------------------------------------')

let result = 0
for (let index = 0; index < numbers.length; index++) {
    result += numbers[index]
}
console.log(result)
console.log('---------------------------------------')

// EX:3
let result1 = 0
for (let index = 0; index < numbers.length; index++) {
    result1 += numbers[index] / 10
}
console.log(result1)
console.log('---------------------------------------')

// EX:4

if (result1 > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menor ou igual a 20')
}
console.log('---------------------------------------')