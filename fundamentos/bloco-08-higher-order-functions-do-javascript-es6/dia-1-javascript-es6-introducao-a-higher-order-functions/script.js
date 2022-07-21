const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const score = (right, student, func) => {
    return func(right, student);
}

const compare = (right, student) => {
    let score = 0;
    for (let index = 0; index < right.length; index += 1) {
        const element = right[index];
        const element2 = student[index];
        if (element === element2) {
            score += 1;
        } else if (element2 === 'N.A') {
            continue;
        } else if (element !== element2) {
            score -= 0.5;
        }
    }
    return score;
}

console.log(score(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));