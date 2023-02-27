export interface IGST {
    amount: number;
}

export abstract class TAX {

    price: number;

    constructor(price: number) {
        this.price = price;
    }

    getter() {
        return this.price;
    }

    public abstract calculateGST(price: number): IGST;

    public calculatedGST(): string {
        const GSTRate = this.calculateGST(this.price);
        return `${(GSTRate.amount).toFixed(2)}`
    }
}

export class LocalTax extends TAX {
    GSTRate: number = 5;
    constructor(price: number) {
        super(price);
    }
    public split(amount: number) {
        return (amount/2).toFixed(2);
    }
    public calculateGST(price: number): IGST {
        const GST_Amount = (price - (price * (100 / (100 + this.GSTRate))))
        return { amount: Number(this.split(GST_Amount)) };
    }
}

export class InterStateTax extends TAX {
    GSTRate: number = 5;
    constructor(price: number) {
        super(price);
    }
    public calculateGST(price: number): IGST {
        const GST_Amount = price - (price * (100 / (100 + this.GSTRate)))
        return { amount: GST_Amount };
    }
}
