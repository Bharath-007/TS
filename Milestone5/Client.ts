import { InterStateTax, LocalTax } from "./creator";
import { TAX } from './GST'

const clientCode = (arg: TAX) => {
    console.log(arg.calculatedGST());
}

clientCode(new LocalTax(1000));
clientCode(new InterStateTax(1000));