let n = 7;

for (let index = 1; index <= n/2+1; index += 1) {
    for (let index2 = 1; index2 < n-index; index2 += 1) {
        process.stdout.write(' ');
    }
    for (let index2 = 0; index2 < index*2-1; index2 += 1) {
        if (index2 == 0 || index2 == index*2-2 || index >= n/2) {
            process.stdout.write('*');
        } else {
            process.stdout.write(' ');
        }
    }
    for (let index2 = 1; index2 < n-index; index2 += 1) {
        process.stdout.write(' ');
    }
    process.stdout.write('\n');
}