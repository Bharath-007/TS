import { LocalTax, InterStateTax } from './GST'

const localTax = new LocalTax(1000);
console.log(`LOCAL GST\nSGST - ${localTax.calculatedGST()} CGST - ${localTax.calculatedGST()}\n`);

const interStateTax = new InterStateTax(1000);
console.log(`INTERSTATE GST\nIGST - ${interStateTax.calculatedGST()}\n`);