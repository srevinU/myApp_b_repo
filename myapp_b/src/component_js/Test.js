let test = [{
    "a": 1,
}, {
    "b": 2
}, {
    "c": 3,
}, {
    "d": 4
}, {
    "e": 5 
}]

// test[0]["a"] = "b";
// console.log(test[0]["a"]);

test.splice(4,1);

console.log(test);