let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let positiveCounter = 0;
let positiveSum = 0;
let negativeCounter = 0;
let positiveOddCounter = 0;
let positiveEvenCounter = 0;
let positiveEvenSum = 0;
let positiveOddSum = 0;
let positiveProduct = 1;
let numText = arr.join(`, `);
for (i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
        positiveCounter++;
        positiveSum += arr[i];
        positiveProduct *= arr[i];
    }
    else if (arr[i] < 0) {
        negativeCounter++;
    }
}

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

for (i = 0; i <= arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 == 1) {
        positiveOddCounter++;
        positiveOddSum += arr[i];
    }
}

for (i = 0; i <= arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 == 0) {
        positiveEvenCounter++;
        positiveEvenSum += arr[i];
    }
}

document.getElementById(`text1`).innerHTML = numText;
console.log(`The number of positive values: ` + positiveCounter);
console.log(`The sum of positive values: ` + positiveSum);
console.log(`Min value: ` + myArrayMin(arr));
console.log(`Max value: ` + myArrayMax(arr));
console.log(`Index of min value: ` + arr.indexOf(myArrayMin(arr)));
console.log(`Index of max value: ` + arr.indexOf(myArrayMax(arr)))
console.log(`The number of negative values: ` + negativeCounter);
console.log(`The number of positive odd values: ` + positiveOddCounter);
console.log(`The number of positive even values: ` + positiveEvenCounter);
console.log(`The sum of positive even values: ` + positiveEvenSum);
console.log(`The sum of positive odd values: ` + positiveOddSum);
console.log(`The product of positive values: ` + positiveProduct);

for (i = 0; i <= arr.length; i++) {
    if (arr[i] < myArrayMax(arr)) {
        arr[i] = 0;
    }
}
numText = arr.join(`, `);
document.getElementById(`text2`).innerHTML = numText;