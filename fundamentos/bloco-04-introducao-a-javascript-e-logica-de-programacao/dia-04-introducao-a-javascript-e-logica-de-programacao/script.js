test = 'arara';
testArray = [2, 3, 6, 7, 10, 1];

function verificaPalindrome(string) {
    let test1 = string.split('');
    test1 = test1.reverse();
    test1 = test1.join('');
    if (string === test1) {
        return true;
    } else {
        return false;
    }
}

function indexBigger(array) {
    let result = 0;
    for (let index = 0; index < array.length; index += 1) {
        const element = array[index];
        if (element > result) {
            result = index;
        }
    }
    return result;
}

