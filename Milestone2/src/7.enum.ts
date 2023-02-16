//enum allow us to declare set of named constants
//numeric enum
enum Printmedia {
    Newspaper,
    Newsletter,
    Magazine,
    Book
}//here enum values starts from 0 and increment by 1 for each members
//enum are assigned with numeric values when they are stored

const getMedia = (mediaName: string): Printmedia => {
    if (mediaName === "Forbes" || mediaName === "Outlook") {
        return Printmedia.Magazine;
    } else {
        return Printmedia.Newspaper;
    }
}

let mediaType: Printmedia = getMedia('Forbes');
console.log(mediaType);

//computed enums

const getPrintMediaCode = (mediaName: string): number => {
    if (mediaName === 'Newsletter') {
        return 5
    } else {
        throw new Error('Nothing to print');
    }
}
enum PrintMedia {
    Book = 10,
    Newspaper = 1,
    Newsletter = getPrintMediaCode('Newsletter'),
    Magazine = Newsletter * 3
}
console.log(PrintMedia.Newsletter);
console.log(PrintMedia.Magazine);

//String enum
enum Details{
    Bharath='CSE',
    Nirmal='E&I',
    Vasanth='IT'
}
console.log(Details.Bharath);
console.log(Details.Vasanth);

//Heterogeneous enum
enum Status{
    Active='ACTIVE',
    deactivate = 1,
    Pending
}

console.log(Status.Active);
console.log(Status.deactivate);
console.log(Status.Pending);





