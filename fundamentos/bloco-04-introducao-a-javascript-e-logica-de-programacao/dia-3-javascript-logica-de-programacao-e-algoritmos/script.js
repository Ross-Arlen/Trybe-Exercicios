let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigger = '';

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > bigger.length) {
        bigger = array[index];
    }
}
console.log(bigger);