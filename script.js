console.log('-----------------Chunk--------------------');
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
console.log('-----------------Sum--------------------');
function customSum(inputArray) {
    var sum = 0;
    for (var _i = 0, inputArray_1 = inputArray; _i < inputArray_1.length; _i++) {
        var num = inputArray_1[_i];
        sum += num;
    }
    return sum;
}
var numArr = [4, 2, 8, 6];
console.log('customSum output with input [4,2,8,6] is =', customSum(numArr));
console.log('-----------------Find--------------------');
var users_1 = [
    { 'user': 'ravikiran', 'age': 36, 'active': true },
    { 'user': 'Henry', 'age': 30, 'active': false },
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 30, 'active': false },
];
function customFind(inputArray, obj) {
    var result;
    inputArray.forEach(function (user, index, arr) {
        if (typeof obj === 'function') {
            if (obj(user)) {
                result = user;
                arr.length = index + 1;
            }
        }
        else if (Array.isArray(obj)) {
            var userKeys = Object.keys(user);
            if (userKeys.indexOf(obj[0]) !== -1) {
                if (user[obj[0]] === obj[1]) {
                    result = user;
                    arr.length = index + 1;
                }
            }
        }
        else if (typeof obj === 'object') {
            var userKeys_1 = Object.keys(user);
            var objKeys = Object.keys(obj);
            var bool_1 = true;
            objKeys.forEach(function (objKey) {
                if (userKeys_1.indexOf(objKey) !== -1) {
                    bool_1 = bool_1 && (user[objKey] === obj[objKey]);
                }
            });
            if (bool_1) {
                result = user;
                arr.length = index + 1;
            }
        }
        else {
            var userKeys = Object.keys(user);
            if (userKeys.indexOf(obj) !== -1) {
                result = user;
                arr.length = index + 1;
            }
        }
    });
    return result;
}
console.log(customFind(users_1, function (o) { return !o.active; }));
console.log(customFind(users_1, ['active', false]));
console.log(customFind(users_1, 'active'));
var users_2 = [
    { 'user': 'ravikiran', 'age': 36, 'active': true },
    { 'user': 'Henry', 'age': 30, 'active': false },
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 30, 'active': false },
];
console.log(customFind(users_2, { 'age': 36, 'active': false }));
console.log('-----------------Filter--------------------');
var users_3 = [
    { 'user': 'ravikiran', 'age': 36, 'active': true },
    { 'user': 'Henry', 'age': 30, 'active': false },
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 30, 'active': false },
];
function customFilter(inputArray, obj) {
    var result = [];
    inputArray.forEach(function (user, index, arr) {
        if (typeof obj === 'function') {
            if (obj(user)) {
                result.push(user);
            }
        }
        else if (Array.isArray(obj)) {
            var userKeys = Object.keys(user);
            if (userKeys.indexOf(obj[0]) !== -1) {
                if (user[obj[0]] === obj[1]) {
                    result.push(user);
                }
            }
        }
        else if (typeof obj === 'object') {
            var userKeys_2 = Object.keys(user);
            var objKeys = Object.keys(obj);
            var bool_2 = true;
            objKeys.forEach(function (objKey) {
                if (userKeys_2.indexOf(objKey) !== -1) {
                    bool_2 = bool_2 && (user[objKey] === obj[objKey]);
                }
            });
            if (bool_2) {
                result.push(user);
            }
        }
        else {
            var userKeys = Object.keys(user);
            if (userKeys.indexOf(obj) !== -1) {
                result.push(user);
            }
        }
    });
    return result;
}
console.log(customFilter(users_3, function (o) { return o.active; }));
console.log(customFilter(users_3, ['active', false]));
console.log(customFilter(users_3, 'active'));
console.log(customFilter(users_3, { 'age': 30, 'active': false }));
console.log('---------------------------Reduce------------------------');
function customReduce(input, fun, initialValue) {
    var result = initialValue;
    if (Array.isArray(input)) {
        input.forEach(function (element) {
            result = fun(result, element);
        });
    }
    else {
        for (var key in input) {
            result = fun(result, input[key], key);
        }
    }
    return result;
}
var result1 = customReduce([1, 2], function (sum, n) {
    return sum + n;
}, 0);
console.log('customReduce method ', result1);
var result2 = customReduce({ 'a': 1, 'b': 2, 'c': 1 }, function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
}, {});
console.log('customReduce method ', result2);
