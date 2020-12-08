//_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
function customChunk(inputArray, window) {
    if (window === undefined) {
        window = 1;
    }
    else if (window <= 0) {
        return [];
    }
    else if (window > inputArray.length) {
        window = inputArray.length;
    }
    var resultArr = [];
    var len = inputArray.length;
    for (var i = 0; i < len; i = i + window) {
        var temp = [];
        for (var j = i; j < (i + window) && j < len; j++) {
            temp.push(inputArray[j]);
        }
        resultArr.push(temp);
    }
    //console.log(resultArr);
    return resultArr;
}
var arr = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];
console.log('customChunk output with array size 8 and window size 3', customChunk(arr, 3));
console.log('customChunk output with array size 8 and window size 2', customChunk(arr, 2));
console.log('customChunk output with array size 8 and window size 1', customChunk(arr, 1));
console.log('customChunk output with array size 8 and window size 0', customChunk(arr, 0));
console.log('customChunk output with array size 8 and window size undefined', customChunk(arr));
console.log('customChunk output with array size 8 and window size -1', customChunk(arr, -1));
console.log('customChunk output with array size 8 and window size 8', customChunk(arr, 8));
/////////////////////////Chunk function implementation end////////////////////////////////////
