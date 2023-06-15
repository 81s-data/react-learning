function hello() {
    return 'hello';
}
function sum(a,b) {
    return parseInt(a) + parseInt(b);
}

function getData() {
    return [1,2,3];
}
// module.exports = hello; // ES6
module.exports.hello = hello;
module.exports.sum = sum;
module.exports.getData = getData;