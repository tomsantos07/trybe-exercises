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