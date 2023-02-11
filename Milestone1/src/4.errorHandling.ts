//defining a method which returns an explicit error message
const errorMessage = () => {
    throw new Error("This is an error message")
}

//main method
const main = () => {
    try {
        errorMessage()
    } catch (error) {
        if (error instanceof Error) {//type guard
            console.log(error.message)
        }
    }
}

// main();

//throw custom errors using custom err class
class MyError extends Error {
    constructor(message: string) {
        super(message);
    }
}
const doSomething = () => {
    throw new MyError("This is an error message")
}

const execute = () => {
    try {
        doSomething()
    }
    catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
        } else if (typeof error === "string") {
            console.log('typeof error', error);//typeof type guard check
        }
    }
}
// execute();

try {
    throw 'Something went wrong';
} catch (error) {
    console.log(error);
    
}
