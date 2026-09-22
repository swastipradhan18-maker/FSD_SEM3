// ek function khud execute hone ke baad dusre function ko call krta hai
function first(){
    console.log("First");

    second();
}

function second(){
    console.log("Second");

    third();
}

function third(){
    console.log("Third");
}

first();