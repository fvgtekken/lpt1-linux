let auto = 5

const auto1 = 10
const auto2 = 15
const auto3 = 20

function usar() {
    auto = 7;
    console.log(auto)
}

function usar2() {
    auto = auto2;
    console.log(auto);
}

function usar3() {
    let auto = 6;
    console.log(auto);
}
usar();
usar2();
usar3();