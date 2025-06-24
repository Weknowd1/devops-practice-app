function add(a, b) {
    return a + b;
}

if (require.main === module) {
    console.log(add(5, 3)); // Output: 8
}

module.exports = { add };
