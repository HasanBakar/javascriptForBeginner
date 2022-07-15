// Here we convert string to integer or float number

var num1 = "344";

console.log(typeof num1);
console.log("String data type " + num1);

num1 = parseInt(num1);

console.log(typeof num1);
console.log("Number data type " + num1);

// Another converting system

var num2 = "3454.454";

num2 = parseFloat(num2);

console.log(typeof num2);

console.log(num2);


// an important difference between parseFloat() and parseInt()

var num3 = "234.344" //String but contain decimal point

var num4 = parseInt(num3); //parseInt() is not accept fraction part from the String

console.log("Only integer part convert = " + num4);

num4 = parseFloat(num3); // parseFloat() function is accept full convert from the string

console.log("parseFloat() is convert integer and fraction part at time = " + num4);

//To convert number type to string type

var num5 = 345;

console.log("This variable data type is " + typeof num5);

num5 = "" + num5;

console.log("Now that variable date type change number to " + typeof num5);