let arr = [3,6,9,10,11];
////////////////// 1) - _.head 

function customHead(inputArray){
  return inputArray[0];
}
console.log(customHead(arr))

////////////////// 2)- _.tail
function customTail(inputArray){
  let tailArray = [];
  for(let i = 1; i < inputArray.length; i++){
    tailArray.push(inputArray[i]);
  }
  return tailArray;
}
console.log(customTail(arr));

//////////////// 3)_.first
function customFirst(inputArray){
  return inputArray[0];
}
console.log(customFirst(arr));

//////////////// 4)_.last
function customLast(inputArray){
  return inputArray[inputArray.length-1];
}

console.log('customLast',customLast(arr));

////////////// 5)_-lastIndexOf()
//let arr = [3,6,9,10,11];
function customLastIndexOf(inputArray, ele, fromIndex = null){
  let from;
  if(fromIndex !== null){
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

////////////////////////// 6)_.nth(array, elementAt)
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

////////////////////////// 7)_.take(arr)
arr = ['a', 'b', 'c', 'd', 'e'];
function customTake(arr, index = null){
  if(index === null){
    index = 1;
  } else if( index > arr.length){
    index = arr.length;
  }

  let take = [];
  for(let i = 0; i < index; i++){
    take.push(arr[i]);
  }

  return take;
}

console.log('customTake', customTake(arr,9));


////////////////////////// 8)_.join(arr, str)

function customJoin(arr, str = null){
  if(str === null){
    str = ',';
  }
  let result = [];

  for(let i = 0; i < arr.length; i++){
    result += arr[i] + str;
  }
  return result;
}

console.log('customJoin', customJoin(arr));
////////////////////////// 9)_.drop(arr,num)
arr = [1, 2, 3];
function customDrop(inputArray, num = null){
  if(num === null){
    num = 1;
  } else if (num > inputArray.length){
    num = inputArray.length;
  }

  let dropArr = [];
  for(let i = num; i < inputArray.length; i++){
    dropArr.push(inputArray[i]);
  }
  return dropArr;
}

console.log('customDrop', customDrop(arr, 0));

////////////////////////// 10)_.dropRight(arr,num)
arr = [1,2,3];
function customDropRight(inputArray, num = null){
  if(num === null){
    num = 1;
  } else if (num > inputArray.length){
    num = inputArray.length;
  }

  let dropArr = [];
  for(let i = 0; i < inputArray.length - num; i++){
    dropArr.push(inputArray[i]);
  }
  return dropArr;
}

console.log('customDropRight', customDropRight(arr,0));