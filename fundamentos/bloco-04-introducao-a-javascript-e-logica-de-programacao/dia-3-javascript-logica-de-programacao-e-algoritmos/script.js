let n = 5;

for (let index2 = 1; index2 <= n; index2 += 1) {
    for (let index3 = n; index3 >= index2; index3 -= 1) {
        process.stdout.write(' ');
    }
    for (let index = 1; index <= index2; index += 1) {
        process.stdout.write('*');
        if (index==index2) {
            process.stdout.write('\n');
        }
    }
}