let flag:boolean = true;
console.log("My boolean value is: "+flag);

let message:string = "Hello World";
console.log("My boolean value is: "+message);

let num:number = 5.434234;
console.log("My number is: "+num);

let myarray:number[] = [4.5,8];
for (let i=0;i<myarray.length;i++){
    console.log("The value at position " +(i+1)+ "is: "+myarray[i])
}

let notSure:any = "Not sure datatype";
console.log("The value of notSure is "+notSure);

let unknown:any[] = [2, "hello", false];
for (let i=0;i<unknown.length;i++){
    console.log("The value at position "+(i+1)+ "is: "+unknown[i])
}