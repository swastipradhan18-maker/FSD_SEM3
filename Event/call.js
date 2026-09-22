const student1 = {
    name: "Swastika"
};

const student2 = {
    name: "Tripti"
};

function introduce(city) {
    console.log(`my name is ${this.name} and i live in ${city}`);
}

introduce.call(student1, "Delhi");