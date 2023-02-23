export interface IGST {
    GSTRate: number;
    calculate(price:number): string;
}

export abstract class TAX {

    price: number;

    constructor(price: number) {
        this.price = price;
    }

    getter(price: number) {
        return price;
    }

    public abstract calculateGST(price: number): IGST;

    public calculatedGST(): string {
        const GSTRate = this.calculateGST(this.price);
        return `${GSTRate.calculate(this.price)}`
    }

}   

export class LocalGSTRate implements IGST {

    GSTRate: number = 5;

    public split(amount:number){
        return (amount/2).toFixed(3);
    }

    public calculate(originalPrice:number): string {
        const GST_Amount = (originalPrice -(originalPrice*(100/(100+this.GSTRate))))
        return `\nPre-GST AMOUNT - ${(originalPrice-GST_Amount).toFixed(3)} CGST - ${this.split(GST_Amount)} SGST - ${this.split(GST_Amount)}`;
    }

}

export class InterstateGSTRate implements IGST {
    
    GSTRate: number = 5;
    public calculate(Price:number): string {
        const GST_Amount = Price -(Price*(100/(100+this.GSTRate)))
        return `\nPre-GST AMOUNT - ${(Price-GST_Amount).toFixed(3)} IGST - ${(GST_Amount).toFixed(3)}\n`;
    }
}
