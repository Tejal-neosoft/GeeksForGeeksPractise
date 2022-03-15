let object = {
    name: "Hello",
    age: 20,
    gender: "Male",
};

const rename = (object) => {
    object['firstname'] = object['name'];
    delete object.name
    return object
}

console.log(rename(object))
