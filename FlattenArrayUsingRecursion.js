const arr = [1,2,3,[4,[5,6]], 7,8]

// const flatten = (arr) =>{
//     while(arr.some((element)=> Array.isArray(element))){
//         arr = [].concat(...arr);
//     }
//     return arr
// }

// console.log(flatten(arr))

////// --- USING RECURSION ----

const flatten = (arr) => {
    const result = [];

    const flattenHelper = (arr) => {
        arr.forEach((element) => {
            if (Array.isArray(element)) {
                flattenHelper(element);
            } else {
                result.push(element);
            }
        });
    };

    flattenHelper(arr);
    return result;
};

console.log(flatten(arr))
