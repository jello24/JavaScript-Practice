console.log("Hello World!");

var arr1 = ["i", "love", "my", "fiancee"];
var arr2 = [1, 2, 3, 4];
var arr3 = [1, 2];
var arr4 = [3,4,5];
var arr5 = [];

var nums = [2,5,5,11]

caseInsensitiveStringSearch(arr1, "my");
combineArrays(arr1, arr2);
twoSums(nums, 10);

function caseInsensitiveStringSearch(strArr, str) {
    index = -1;
    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i] == str)
        {
            index = i;
        }
    }
    if(index != -1) {
        console.log(index);
    }
}
        
function combineArrays(arrA, arrB) {
    // Determine the length of both arrays
    longLength = arrA.length + arrB.length;

    var j = 0;
    var resArr = [];
    for(i = 0; i < longLength; i++) {
        if(j >= arrA.length) {
            i--;
        }
        else {
            resArr[i] = arrA[j];
        }
        i++;
        if(j>= arrB.length) {
            i--;
        }
        else {
            resArr[i] = arrB[j];
        }
        j++;
    }
    console.log(resArr);
}

function twoSums(nums, sum) {

    var j = 0;
    var found = false;
    var result = [0,0];
    for(i = 0; i < nums.length; i++) {
        for(j = 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == sum) {
                result[0] = i;
                result[1] = j;
                found = true;
                break;
            }
        }
        if(found)
            break;
    }
    console.log(result);
}