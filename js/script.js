//text change
function textchange() {
   document.getElementById('h2').innerHTML ="Hellow there!";
}
//show date 
function showDate() {
    document.getElementById('th2').innerHTML = Date();
}
//light 
function lighton() {
    document.getElementById('myImage').src='images/lighton.gif'
}
function lightoff() {
    document.getElementById('myImage').src='images/lightoff.gif'
}
// font big
function f_big() {
    document.getElementById('demo').style.fontSize='35px'
}
// font big
function f_sm() {
    document.getElementById('f-sm').style.fontSize='16px'
}
// d_none
function d_none() {
    document.getElementById('demo1').style.display='none'
}
// jog button
function jpg() {
    document.write(10 + 6)
}
//cmt
function cmt() {
    document.getElementById("dam").innerHTML = 5 + 6;
}
// -=-=-
function d8() {
    document.getElementById("demo8").innerHTML = 10.50;
}
// d_9
function d9() {
    let x;
    x = 6;
    document.getElementById("demo9").innerHTML = x;
}
// d_10
function d10() {
    document.getElementById("demo10").innerHTML = (5 + 6) * 10;
}
// d_11
function d11() {
    document.getElementById("demo11").innerHTML = (21 / 2);
}
// d_12
function d12() {
    let x,y;
    x = 30;
    y = 7;
    document.getElementById("demo12").innerHTML = (x/y);
}
// d_13
function d13() {
    let x,y;
    x = 3;
    y = 7;
    document.getElementById("demo13").innerHTML = (x*y);
}
// d_14
function d14() {
    let x,y;
    x = 30;
    y = 70;
    document.getElementById("demo14").innerHTML = (x+y);
}
// d_15
function d15() {
    let x,y;
    x = 70;
    y = 40;
    document.getElementById("demo15").innerHTML = (x-y);
}
// price
function d16() {
    const price1 = 5;
    const price2 = 6;
    let total = price1 + price2;
    document.getElementById("demo16").innerHTML =
    "The total is: " + total;
}
// var
function d17() {
    var x = 2;
    // Now x is 2

    var x = 3;
    // Now x is 3

    document.getElementById("demo17").innerHTML = x;
}
// carName
function d18() {
    carName = "Volvo";
    document.getElementById("demo18").innerHTML = carName;
    var carName;
}
// saab
function d19() {
    try {
    carName = "Saab";
    let carName = "Volvo";
    }
    catch(err) {
  document.getElementById("demo19").innerHTML = err;
    }
}
// err
function d20() {
    try {
    const PI = 3.141592653589793;
    PI = 3.14;
    }
    catch (err) {
    document.getElementById("demo20").innerHTML = err;
    }
}
// d_21
function d21() {
    // Create an object:
    const car = {type:"Fiat", model:"500", color:"white"};

    // Change a property:
    car.color = "red";

    // Add a property:
    car.owner = "Johnson";

    // Display the property:
    document.getElementById("demo21").innerHTML = "Car owner is " + car.owner; 
}
// d_22
function d22() {
    let text1 = "A";
let text2 = "B";
let result = text1 < text2;
document.getElementById("demo22").innerHTML = "Is A less than B? " + result;
}