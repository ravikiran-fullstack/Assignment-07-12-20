//_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
/*
function customChunk(inputArray:Array<any>, window?: number){
  if(window === undefined){
    window = 1;
  } else if (window <= 0){
    return [];
  } else if(window > inputArray.length){
    window = inputArray.length;
  }

  let resultArr = [];
  const len = inputArray.length;
  for(let i = 0; i < len; i = i + window){
    let temp = [];
    for(let j = i; j < (i + window) && j < len; j++){
        temp.push(inputArray[j]);
    } 
    resultArr.push(temp);
  }
  //console.log(resultArr);
  return resultArr;
}

let arr:String[] = ['a', 'b', 'c', 'd','a', 'b', 'c', 'd'];

console.log('customChunk output with array size 8 and window size 3',customChunk(arr, 3));
console.log('customChunk output with array size 8 and window size 2',customChunk(arr, 2));
console.log('customChunk output with array size 8 and window size 1',customChunk(arr, 1));
console.log('customChunk output with array size 8 and window size 0',customChunk(arr, 0));
console.log('customChunk output with array size 8 and window size undefined',customChunk(arr));
console.log('customChunk output with array size 8 and window size -1',customChunk(arr, -1));
console.log('customChunk output with array size 8 and window size 8',customChunk(arr, 8));
*/
/////////////////////////Chunk function implementation end////////////////////////////////////
function customSum(inputArray:Array<number>){
  let sum = 0;
  for(let num of inputArray){
    sum += num;
  }
  return sum;
}

let numArr:number[] = [4,2,8,6];
console.log('customSum output with input [4,2,8,6] is =',customSum(numArr));