function a() {
    var intOne;
    var intTwo;

    intOne = prompt("What is your first integer?");
    intTwo = prompt("What is your second Integer?");

    if(intOne > intTwo) {
        alert("Your first integer " + intOne + " is larger");
    }
    else if(intOne < intTwo) {
        alert("Your second integer " + intTwo + " is larger");
    }
    else {
        alert("Your integers are equal");
    }
}

function b() {
    var num = prompt("What is your integer?");

    if(num % 2 == 0) {
        alert("This integer is even");
    }
    else {
        alert("This integer is odd");
    }
}

a();
b();