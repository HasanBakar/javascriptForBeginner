function bestFriend(friends) {
    stringLength = [];
    for (let i = 0; i < friends.length; i++) {
        let element = friends[i];
        let n = element.length;
        stringLength.push(n);
        // console.log(n, element);
    }
    let temp = stringLength[0];
    for (let j = 1; j < stringLength.length; j++) {
        if (temp < stringLength[j]) {
            temp = stringLength[j];
        }
    }

    // console.log(temp);
    return temp;
}

let Friends = ['hasan', 'kasem', 'Abul hasnath', 'ripa', 'Sayed Al Hossain Rabbi'];
let longName = bestFriend(Friends);
console.log(longName);