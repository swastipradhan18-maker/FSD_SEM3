// closure: jo inner function hoga wo outer function ko yaad rkhega even when the outer function is finished
function outer(){
    let counter=0;

    function inner(){
        // inner remembers the outer
        counter++;

        console.log("counter", counter);
    }
    return inner;
}

let increment= outer();
increment();