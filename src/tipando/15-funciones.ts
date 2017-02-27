function test15_1() : number {
    return 1;
}

let test15_1_1 = test15_1;
test15_1_1();
test15_1_1(1);



function test15_2() : number {
    return 1;
}

let test15_2_1 : () => number;
test15_2_1 = test15_2;
let test15_2_2 : () => string;
test15_2_2 = test15_2;



function test15_3(n: number) : number {
    return 1;
}

let test15_3_1 : () => number;
test15_3_1 = test15_3;
let test15_3_2 : (string: string) => number;
test15_3_2 = test15_3;



function test15_4() : number {
    return 1;
}

let test15_4_1 : (s: String) => number;
test15_4_1 = test15_4;

