//Primitive type - number,string, boolean ,bigint,null,undefined,symbol
let stuName = 'Bharath' //the ts file will take it is of type:String

let employeeName:string; //delare variable employeeName of type String
employeeName = 'Arun'//assign variable employeeName
let isPermanent:boolean = true; //defining the variable with type boolean

let age = 21;

let multiple =(num:number) => {//this is static typing
    return num*10;
}
console.log(multiple(90));//this is where the static typing and the dynamic typing takes place 

//Implicit - in implicit we dont define the type
let sampleArray = [12,3,4,5];
let sampleName = ['arun','varun','tharun']
console.log(sampleArray);
console.log(sampleName);



//Explicit - in explicit we define the type of the array
let sampleArray1:number[] = [6,32,1,23,32]
let isBoolean:boolean[] = [false,true,false,true]
let nameArray:string[] = ['Virav','Vikas']


//Declare and Assign later
 let numS:number[];
 numS = [];//initializing the array
 numS.push(1)
 //or
 let nameSample:string[] = [];
 nameSample.push('arun')

 console.log(numS);
 console.log(nameSample);

 //read only - to convert a array to read only
 let color:readonly String[] = ['sdbshjd','dasdsa','sds'];
// color.push('fds') // it arises a error 
 
    
 
