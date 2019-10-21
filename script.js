var sorted = false;
var arrLenInit = 1000;
var arrMaxNumInit = 10000;

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

window.onload = function () {
    console.log(this.randomArray)
    execTime(
        "Bubble sort : %%TIME%% / " + arrLenInit + " elements",
        bubbleSort, randomArray
        )

    execTime(
        "Both sides bubble sort (custom) : %%TIME%% / " + arrLenInit + " elements",
        bothSidesBubbleSort, randomArray
    )
}