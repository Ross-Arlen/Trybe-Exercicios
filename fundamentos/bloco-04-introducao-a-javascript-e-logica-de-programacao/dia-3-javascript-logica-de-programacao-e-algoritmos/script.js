let n = 7;
let prime = false;

let divisible = 0;
for (let index2 = 1; index2 <= n; index2 += 1) {
    if (n%index2 == 0) {
        divisible += 1;
    }
}
if (divisible == 2) {
    prime = true;
}
if (prime) {
    console.log('O número é primo.');
} else {
    console.log('O número não é primo.');
}