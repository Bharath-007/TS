// import { TAX, IGST, LocalGSTRate } from './GST'


// export class LocalTax extends TAX {
//     constructor(price: number) {
//         super(price);
//     }
//     public calculateGST(): IGST {
//         return new LocalGSTRate();
//     }
// }

// export class InterStateTax extends TAX {
//     GSTRate: number = 5;
//     constructor(price: number) {
//         super(price);
//     }
//     public calculateGST(Price: number): string {
//         const GST_Amount = Price - (Price * (100 / (100 + this.GSTRate)))
//         return `\nPre-GST AMOUNT - ${(Price - GST_Amount).toFixed(3)} IGST - ${(GST_Amount).toFixed(3)}\n`;
//     }
// }