

//Implement -> Memoize one 
const cachedParameters = new Map();
function memoizeOne(fn){
    
    const temp =(...args)=>{
        
    const key = args.join('-');
    
    if(cachedParameters.has(key)){
        console.log('Retuened from cache')
        return cachedParameters.get(key)
    }else{
        console.log('Fresh execution')

        const result = fn(...args);
        cachedParameters.set(key,result);
        
        return result
    }
        
    }
    //execute the fn
    return temp
}



const add = (a,b)=> a+b;

const memoizedAdd = memoizeOne(add);

console.log(memoizedAdd(1,2))
console.log(memoizedAdd(1,2))
console.log(memoizedAdd(1,2))