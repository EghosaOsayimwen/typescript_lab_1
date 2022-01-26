function char_count(value:string):number{
    return value.length;
}
let count:number = char_count("test 1");
console.log(count);

function char_count_nospaces(value:string):number{
    return value.replace(" ","").length
}

let count2 = char_count_nospaces("test 1");
console.log(count2);

function count_both(value:string, spaces:boolean):number{
    if (spaces){
        return value.length;
    }else{
        return value.replace(" ","").length;
    }
}

let count3 = count_both("test 1");
console.log(count3);