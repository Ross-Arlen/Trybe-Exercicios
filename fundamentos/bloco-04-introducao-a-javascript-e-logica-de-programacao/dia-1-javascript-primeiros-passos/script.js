const a = 60;
const b = 60;
const c = 60;

if (!(typeof a== typeof 1) || !(typeof b== typeof 1) || !(typeof c== typeof 1)) {
    console.log("Error");
} else if (a<0 || b<0 || c<0) {
    console.log("Error");
} else if (a+b+c==180) {
        console.log(true);
    } else {
        console.log(false);
}