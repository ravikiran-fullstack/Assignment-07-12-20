let arr = [3,6,9,10,11];
////////////////// - _.head

function customHead(inputArray){
  return inputArray[0];
}
console.log(customHead(arr))

////////////////// - _.head
function customTail(inputArray){
  let tailArray = [];
  for(let i = 1; i < inputArray.length; i++){
    tailArray.push(inputArray[i]);
  }
  return tailArray;
}
console.log(customTail(arr));

//////////////// _.first
function customFirst(inputArray){
  return inputArray[0];
}
console.log(customFirst(arr));
//////////////// _.last
function customLast(inputArray){
  return inputArray[inputArray.length-1];
}

console.log('customLast',customLast(arr));

////////////// _-lastIndexOf()
//let arr = [3,6,9,10,11];
function customLastIndexOf(inputArray, ele, fromIndex = ''){
  let from;
  if(fromIndex !== ''){
    if(fromIndex > inputArray.length){
      from = inputArray.length - 1;
    } else {
      from = fromIndex;
    }
  } else {
    from = inputArray.length - 1;
  }
  for(let i = from; i >= 0; i--){
    
    if(inputArray[i] === ele){
      return i;
    }
  }
  return -1;
}

console.log('customLastIndexOf', 9,' = in ', arr ,' is ',customLastIndexOf(arr, 9, 3));

//////////////////////////_.nth(array, elementAt)
 arr = ['a', 'b', 'c', 'd', 'e'];
function customNthEle(inputArray, elementAt){
  if(elementAt >= 0){
    return inputArray[elementAt];
  } else{
    let index = inputArray.length + elementAt;
    if(index < 0){
      return undefined;
    }
    return inputArray[index];
  }
}

console.log('customNthEle', customNthEle(arr, -6));

