function a() {
    const side = 9;
    let diag = Math.sqrt(2) * side;

    console.log("Diagonal = " + diag);
}

function b() {
    const sideOne = 5;
    const sideTwo = 6;
    const sideThree = 7;

    const semi = (sideOne + sideTwo + sideThree) / 2;

    const area = Math.sqrt(
                 semi * (semi - sideOne) * 
                 (semi - sideTwo) * (semi - sideThree));

    console.log("Area = " + area);
}

function c() {
    const radius = 4;

    const circum = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;

    console.log("Circumference = " + circum + 
                "\nSurface Area = " + area);
}

a();
b();
c();