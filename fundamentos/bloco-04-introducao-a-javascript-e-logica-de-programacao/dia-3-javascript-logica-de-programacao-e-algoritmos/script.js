let n = 5;

for (let index2 = 1; index2 <= n; index2 += 1) {
    for (let index = 1; index <= n; index += 1) {
        process.stdout.write('*');
        if (index==n) {
            process.stdout.write('\n');
        }
    }
}