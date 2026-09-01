function checkage(age){
    if (age<18){
        throw new error("Not eligible");
    }

    console.log("Eligible");
}

try{
    checkage(15);
}
catch(error){
    console.log(error.message)
}