var sorted = false;
var arrLenInit = 20;
var arrMaxNumInit = 30;

var randomArray = generateRandomArray(arrLenInit, arrMaxNumInit);

function bubbleSort(_arr) {
    arr = _arr.slice();
    var sorted = false;

    while (!sorted) {
        sorted = true;
        for (var i = 0; i < arr.length; i++) {
            var temp;
            var j = i + 1;
            if (j < arr.length && arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                sorted = false;
            }
        }
    }
    return arr;
}

function bothSidesBubbleSort(_arr) {
    arr = _arr.slice();
    var sorted = false;

    while (!sorted) {
        sorted = true;
        for (var i = 0; i < arr.length; i++) {
            var temp;
            var j = i + 1;

            if (j < arr.length && arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                sorted = false;
            }
            if (sorted === false) {
                k = arr.length - i;
                m = k - 1;
                if (m !== -1 && arr[k] < arr[m]) {
                    temp = arr[k];
                    arr[k] = arr[m];
                    arr[m] = temp;
                    sorted = false;
                }
            }
        }

    }
    return arr;
}

function execTime(text, sortFunc, _array) {
    var result;
    var t1 = performance.now();
    sortFunc(_array)
    var t2 = performance.now();
    console.log(text.replace(/%%TIME%%/g, (t2 - t1) + ' ms'));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateRandomArray(elementsNumber, maxNum) {
    var _array = [];
    for (var i = 0; i < elementsNumber; i++) {
        _array[i] = getRandomInt(maxNum);
    }
    return _array;
}

function selectionSort(_arr) {
    arr = _arr.slice();
    var min;
    var temp;
    for (var index = 0; index < arr.length; index++) {
        min = index;

        for (var i = index+1; i < arr.length; i++) {
            if (arr[i] < arr[min]) {
                min = i;
            }
        }
        if(arr[index] !== arr[min]) {
            temp = arr[index];
            arr[index] = arr[min];
            arr[min] = temp;
        }
    }
}

function insertionSort(_arr) {
    arr = _arr.slice();
    
    for (var index = 1; index < arr.length; index++) {
        var temp;

        for(var j = index; j > 0; j--) {
            if(arr[j] < arr[j-1]) {
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                break;
            } else {

            }
        }
    }
    console.log(arr)
}

function execTime(text, sortFunc, _array) {
    var text;
    var t1 = performance.now();
    sortFunc(_array)
    var t2 = performance.now();
    text = text.replace(/%%TIME%%/g, (t2 - t1).toLocaleString() + ' ms');

    var node = document.createElement("LI");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    window.results.appendChild(node); 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateRandomArray(elementsNumber, maxNum) {
    var _array = [];
    for (var i = 0; i < elementsNumber; i++) {
        _array[i] = getRandomInt(maxNum);
    }
    return _array;
}

window.onload = function () {
    console.log(randomArray);

    insertionSort(randomArray);
    // execTime(
    //     "%%TIME%% | Bubble sort : " + arrLenInit.toLocaleString() + " elements",
    //     bubbleSort, randomArray
    // )
    
    // execTime(
    //     "%%TIME%% | Both sides bubble sort (custom) : " + arrLenInit.toLocaleString() + " elements",
    //     bothSidesBubbleSort, randomArray
    //     )

    // execTime(
    //     "%%TIME%% | Selection sort : " + arrLenInit.toLocaleString() + " elements",
    //     bubbleSort, randomArray
    // )
}