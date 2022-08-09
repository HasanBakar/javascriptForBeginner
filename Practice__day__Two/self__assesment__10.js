function spacificNumber(numbers) {
    let greater80 = [];

    for (var i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > 80) {
            // console.log(element);
            greater80.push(element);
        }
    }
    return greater80;
};

let marks = [80, 70, 90, 82, 84, 85, 91, 92, 75, 64];
// let result = spacificNumber(marks);
// console.log(result);
let ourNeedArray = spacificNumber(marks);
console.log(ourNeedArray);