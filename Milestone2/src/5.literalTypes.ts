//literal narrowing - , using const to declare a variable will inform TypeScript that this object will never change.
const helloWorld = "Hello World!" //compiler set the type as hello World not as string

let hiTS = "Hi, world!" //a let can change so the compiler declares it a string

// or

let hello: "welcome";
// hello = "Hello, world!"it shows error bcoz hello is only assignable to type "welcome"
hello = "welcome";

interface I {
    direction: "up" | "down" | "left" | "right";
    scrollAmount: 10 | 15 | 5 | 20;
}
const props: I = {
    direction: "left",
    scrollAmount: 5
}

let res: I = props;

//String literal
type calc = 'add' | 'sub' | 'mul' | 'div';
const calculate = (calculation: calc, a: number, b: number): number => {
    switch (calculation) {
        case 'add':
            return a + b;
        case 'sub':
            return a - b;
        case 'mul':
            return a * b;
        case 'div':
            return a / b;
        default:
            throw new Error('Invalid calculation type');
    }
}

console.log(calculate('add', 45, 23));

//numeric literal
const rollDice = (): 1 | 2 | 3 | 4 | 5 | 6 => {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}
const result = rollDice();
console.log(result);

//boolean literal
type IsEnabled = true | false;
const toggleFeature = (enabled: IsEnabled) => {
    if (enabled) {
        console.log('Feature is enabled');
    } else {
        console.log('Feature is disabled');
    }
};

toggleFeature(true); // Feature is enabled
toggleFeature(false); // Feature is disabled