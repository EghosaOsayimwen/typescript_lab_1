function char_count(value) {
    return value.length;
}
var count = char_count("test 1");
console.log(count);
function char_count_nospaces(value) {
    return value.replace(" ", "").length;
}
var count2 = char_count_nospaces("test 1");
console.log(count2);
function count_both(value, spaces) {
    if (spaces) {
        return value.length;
    }
    else {
        return value.replace(" ", "").length;
    }
}
var count3 = count_both("test 1");
console.log(count3);
