//Type annotations
let empName: string = "bharath";
let empAge: number = 20;

//type annotation in object
let emp: {
    id:number;
    name:string;
}

//type annotation of parameters
const display = (id:number,name:string) => {
    console.log('ID = '+id+' name = '+name);
}
display(322,'bharath');