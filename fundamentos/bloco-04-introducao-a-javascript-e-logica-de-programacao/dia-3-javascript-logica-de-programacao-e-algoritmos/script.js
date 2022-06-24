let n = 9;

for (let index = 1; index <= n/2+1; index += 1) {
    for (let index2 = 1; index2 < n-index; index2 += 1) {
        process.stdout.write(' ');
    }
    for (let index2 = 0; index2 < index*2-1; index2 += 1) {
        process.stdout.write('*');
    }
    for (let index2 = 1; index2 < n-index; index2 += 1) {
        process.stdout.write(' ');
    }
    process.stdout.write('\n');
}