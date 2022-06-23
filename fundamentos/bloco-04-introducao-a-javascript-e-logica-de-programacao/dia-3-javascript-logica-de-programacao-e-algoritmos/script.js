let array = ['java', 'javascript', 'python', 'html', 'css'];
let smaller = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smaller.length) {
        smaller = array[index];
    }
}
console.log(smaller);