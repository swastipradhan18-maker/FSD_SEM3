// let numbers=[1,2,3,4,5,5,6];
// let total=numbers.reduce((sum,number)=>{
//     return sum+number;
// },0);

// console.log(total);

let numbers= [1,2,3,4,5,5,6];

let max= numbers.reduce((max,number) => {
    return number>max?number:max;
},0);

console.log(max);