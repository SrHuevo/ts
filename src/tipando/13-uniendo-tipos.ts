function test13_1(id: string | number) {
}

test13_1(1)
test13_1("abc")
test13_1(true)

type Id = number | string
function test13_2(id: Id) {
}

test13_2(1)
test13_2("abc")
test13_2(true)
