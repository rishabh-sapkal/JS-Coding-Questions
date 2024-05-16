let arr  = [
	{a: 'a'},
	{b: 'c'},
	{c: 'd'},
	{d: 'a'}
]
 
//Output  = [‘a’, ‘b’, ‘c’, ‘d’, ‘a’]
let result = [];
let element = ''; 
arr.forEach((obj)=>{
    Object.keys(obj).forEach((key)=>{
        if(element !== key){
        result.push(key);
        element = key
        };
 
        if(obj[key] !== element ){
             result.push(obj[key])
             element = obj[key]
        }
    })
});
 
console.log(result)