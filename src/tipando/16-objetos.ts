let persona = {
    nombre: "Daniel",
    edad: 25
}

persona.nombre = "Pepe";
persona.nombre = 1;
persona.dni = "12345678Z"
persona.



let persona2: any = {
    nombre: "Daniel",
    edad: 25
}

persona2.nombre = "Pepe";
persona2.nombre = 1;
persona2.dni = "12345678Z"



function printLabel(obj) {
    console.log(obj.label);
}

printLabel({size: 10, label: "Size 10"});
printLabel({size: 10, labol: "Size 10"});

type Labelled = {
    size: number,
    label: string
}
function printLabel2(obj: Labelled) {
    console.log(obj.label);
}

printLabel2({size: 10, label: "Size 10"});
printLabel2({size: 10, labol: "Size 10"});



type Labelled2 = {
    size: number,
    label?: string,
}
function printLabel3(obj: Labelled2) {
    console.log(obj.label);
}

let l0 = printLabel3({size: 10, label: "Size 10"});
let l1 = printLabel3({size: 10, labol: "Size 10"});
let l2 = printLabel3({size: 10});
let l3 = printLabel3({size: 10, label: "Size 10", desc: "nooo"});

