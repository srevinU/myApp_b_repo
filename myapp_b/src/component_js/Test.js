const test = [{
    "a": 1,
    "b": 2
}, {
    "c": 3,
    "d": 4
}]
test[0]["a"] = "b";

console.log(test[0]["a"]);