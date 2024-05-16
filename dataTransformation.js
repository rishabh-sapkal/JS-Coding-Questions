const obj = [{
    key: 'Sample 1',
    data: 'Data 1'
},
{
    key: 'Sample 1',
    data: 'Data 1'
},
{
    key: 'Sample 2',
    data: 'Data 2'
},
{
    key: 'Sample 1',
    data: 'Data 1'
},
{
    key: 'Sample 3',
    data: 'Data 1'
},
{
    key: 'Sample 4',
    data: 'Data 1'
}]

//Output -

// let Output = {
//     'Sample 1' :[{
//     key: 'Sample 1',
//     data: 'Data 1'
// },
// {
//     key: 'Sample 1',
//     data: 'Data 1'
// },
// {
//     key: 'Sample 1',
//     data: 'Data 1'
// }]
// }

let result = obj.reduce((acc,prev)=> {
    if(acc[prev.key]){
        acc[prev.key] = [...acc[prev.key] , prev]
    }else{
        acc[prev.key] = [prev]
    }
    
    return acc
}, {})

console.log(result)