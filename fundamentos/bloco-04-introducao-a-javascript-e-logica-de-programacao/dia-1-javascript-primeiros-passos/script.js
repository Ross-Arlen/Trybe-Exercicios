const a = 5;
const b = 7;
const c = 10;

if (a>b) {
    if (a>c) {
        console.log(a);
    } else {
        console.log(c);
    }
} else if (b>a) {
    if (b>c) {
        console.log(b);
    } else {
        console.log(c);
    }
} else {
    console.log('Equal');
}