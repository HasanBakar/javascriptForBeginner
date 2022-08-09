function paperRequirements(firstBookNum, secondBookNum, thirdBookNum) {
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;
    return ((firstBookNum * firstBookPage) + (secondBookNum * secondBookPage) + (thirdBookNum * thirdBookPage));
    // return result;
}

console.log('Total Page: ', paperRequirements(2, 4, 6));