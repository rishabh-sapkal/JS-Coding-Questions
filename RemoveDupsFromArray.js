//Remove Duplicates
const arr = [1,1,2,3,4,55,6,7,78,88,9,9,999];

const countMap = arr.reduce((acc,prev)=>{
    if(acc[prev]){
        acc[prev]= acc[prev] + 1;
    }
    else{
        acc[prev] = 1;
    }
    
    return acc
} , {})

console.log(Object.keys(countMap))