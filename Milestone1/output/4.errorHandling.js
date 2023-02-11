"use strict";
//defining a method which returns an explicit error message
const errorMessage = () => {
    throw new Error("This is an error message");
};
//main method
const main = () => {
    try {
        errorMessage();
    }
    catch (error) {
        console.log(error);
    }
};
