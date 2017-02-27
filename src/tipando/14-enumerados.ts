function test14_1(day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday") {
}

test14_1("Monday");
test14_1("Wednesday");
test14_1("Wedesday");

enum DAY { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}

function test14_2(day: DAY) {
}

test14_2(DAY.Monday);
test14_2(DAY.Wednesday);
test14_2(DAY.);