import {TAX,IGST,LocalGSTRate,InterstateGSTRate} from './GST'


export class LocalTax extends TAX {
    constructor(price: number) {
        super(price);
    }
    public calculateGST(): IGST {
        return new LocalGSTRate();
    }
}

export class InterStateTax extends TAX {
    constructor(price: number) {
        super(price);
    }
    public calculateGST(): IGST {
        return new InterstateGSTRate();
    }
}