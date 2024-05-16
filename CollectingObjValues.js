const arr = [{a: 1}, {b: 2}, {c:3}, {d:4}, {e:5}]
 
//output = [1,2,3,4,5]

const valuesArr = arr.map((element)=> Object.values(element));

console.log('Values arr',valuesArr)

const faltten = (arr) =>{
    const result = [];
    
    const flattenHelper = (arr)=>{
        arr.forEach((el)=>{
            if(Array.isArray(el)){
                flattenHelper(el)
            }else{
                result.push(el)
            }
        })
    }
    flattenHelper(arr);
    
    return result
}

console.log('Result',faltten(valuesArr))

