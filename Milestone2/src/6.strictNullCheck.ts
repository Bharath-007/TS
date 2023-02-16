let a: number;
// a = null;//when strictNullCheck is true it will raise an error

//optional parameter
type value = (x?: number) => string; //xhas type number | undefined - the ? denotes it can also be undefined

//Nullish coelasing operator
const cusName = null;
const defaultName = 'John'
console.log(cusName??defaultName);

//non-null assertion operator
let organizationName : string | undefined;
organizationName = 'xyz';
console.log(organizationName!.toUpperCase());//! using this because to tell the compiler that organizationName should treat as a string

