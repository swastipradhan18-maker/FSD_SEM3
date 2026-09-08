// A function that takes another function as an argument or return a function is called a higher order function

function Calculate(a,b,operation){
    return operation(a,b);
}

function add(x,y){
    return x+y;
}

function multiply(x,y){
    return x*y;
}

console.log();