//Reverse a string

const str = 'AABCDFGHBJKKL';
let result = '';


for(let i=str.length-1; i>=0 ; i--){
    result = result + str[i]
}

console.log(result)