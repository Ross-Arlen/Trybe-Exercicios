test = 'arara';
testArray = [2, 3, 2, 5, 8, 2, 3];

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

function indexSmaller(array) {
    let result = array[0];
    for (let index = 0; index < array.length; index += 1) {
        const element = array[index];
        if (element < result) {
            result = index;
        }
    }
    return result;
}

function biggerName(array) {
    let result = array[0];
    for (let index = 0; index < array.length; index += 1) {
        const element = array[index];
        if (element.length > result.length) {
            result = element;
        }
    }
    return result;
}

function mostRepeating(array) {
    const result = {}
    let most = 0;
    for (let index = 0; index < array.length; index += 1) {
        result[index] = 0;
    }
    for (let index2 = 0; index2 < array.length; index2 += 1) {
        
        for (let index = 0; index < array.length; index += 1) {
            const element = array[index];
            if (element === array[index2]) {
                result[index2] += 1;
            }
        }
        if (result[index2] > most) {
            most = array[index2];
        }
    }
    return most;
}

console.log(mostRepeating(testArray));