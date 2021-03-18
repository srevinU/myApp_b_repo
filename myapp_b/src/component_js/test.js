const test = [1,2,3,4,5,6,7,8,9];
let newContent = [];
let finalContent = [];

test.forEach((element, index) => {
    if (index !== 0 && index % 4 === 0) {
        finalContent.push(newContent);
        newContent = [element];
    } else {
        newContent.push(element);
    }
});

finalContent.push(newContent);




const rows = [...Array( Math.ceil(test.length / 4) )];

console.log(rows);
