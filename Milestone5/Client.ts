import { LocalTax, InterStateTax } from './GST'

const price = 1000;

const localTax = new LocalTax(price);
const localGST = localTax.calculateGST(price)
console.log(`LOCAL GST\nSGST - ${(localGST.amount)} CGST - ${(localGST.amount)}\n`);

const interStateTax = new InterStateTax(1000);
const interStateGST = interStateTax.calculateGST(price);
console.log(`INTERSTATE GST\nIGST - ${interStateGST.amount}\n`);