const student = {
    name: "Swastika"
};

function introduce(city, age) {
    console.log(`name: ${this.name}`);
    console.log(`city: ${city}`);
    console.log(`age: ${age}`);
}

introduce.apply(student, ["Delhi", 20]);