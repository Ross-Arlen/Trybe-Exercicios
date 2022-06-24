test = 'arara';

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

console.log(verificaPalindrome(test));