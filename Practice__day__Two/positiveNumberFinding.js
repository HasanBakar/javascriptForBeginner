function positiveInteger(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i]);
        let tamp = numbers[i];
        if (tamp >= 0) {
            sum = sum + tamp;
            // console.log(numbers[i]);
        }
        else {
            // continue;
            break;
        }
    }
    return sum;
    // console.log(sum);
}

let numbers = [2, 3, 4, 5, 6, 7, -12, -5, -6, -9, 8, 9, 10];
let positiveSum = positiveInteger(numbers);
console.log(positiveSum);