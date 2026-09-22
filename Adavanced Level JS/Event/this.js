// this current object ko refer krta hai
const student={
    name:"swastika",
    showName(){
        console.log(this.name);
    }
};

student.showName();