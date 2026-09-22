const student={
    name:"Swastika"
};

function show(){
    console.log("students:", this.name);
}

const newfunction=show.bind(student);

newfunction();