let number;

for (let index = 2; index <= 50; index += 1) {
    let divisible = 0;
    for (let index2 = 1; index2 <= index; index2 += 1) {
        if (index%index2 == 0) {
            divisible += 1;
        }
    }
    if (divisible == 2) {
        number = index;
    }
}
console.log(number);