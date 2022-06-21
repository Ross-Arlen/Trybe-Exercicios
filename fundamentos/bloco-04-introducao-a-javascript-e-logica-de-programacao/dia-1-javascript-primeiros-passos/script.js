const bruto = 5000;
const alíquotaINSS1 = 8;
const alíquotaINSS2 = 9;
const alíquotaINSS3 = 11;
const alíquotaINSSM = 570.88;
const alíquotaIR1 = 7.5;
const alíquotaIR2 = 15;
const alíquotaIR3 = 22.5;
const alíquotaIR4 = 27.5;
const deduçãoIR1 = 142.80
const deduçãoIR2 = 354.80
const deduçãoIR3 = 636.13
const deduçãoIR4 = 869.36
let base;
let líquido;

if (bruto<1556.95) {
    base = bruto-(bruto/100*alíquotaINSS1);
} else if (bruto<2594.93) {
    base = bruto-(bruto/100*alíquotaINSS2);
} else if (bruto<5189.83) {
    base = bruto-(bruto/100*alíquotaINSS3);
} else {
    base = bruto-alíquotaINSSM;
}

if (base<1903.99){
    líquido=base;
} else if (base<2926.66) {
    líquido=base-((base/100*alíquotaIR1)-deduçãoIR1);
} else if (base<3751.06) {
    líquido=base-((base/100*alíquotaIR2)-deduçãoIR2);
} else if (base<4664.69) {
    líquido=base-((base/100*alíquotaIR3)-deduçãoIR3);
} else {
    líquido=base-((base/100*alíquotaIR4)-deduçãoIR4);
}

console.log(líquido);