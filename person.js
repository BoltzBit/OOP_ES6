/*const Person = class {

}*/

class Person {
    constructor(name, age, height){
        this.name = name
        this.age = age
        this.height = height
    }

    static sayHello(name) {
        console.log(`Hello World ${name}, how are you?`)
    }
    //sayHello(name) {
    //    console.log(`Hello World ${name}, how are you?`)
    //}
}

Person.sayHello('Mateus')

class Humano {
    //metodo construtor precisa ser unico
    constructor(){
        this.sexo
        this.pais
        this.idioma
    }
}



let mateus = new Person('Mateus',24,1.98)//instanciando o objeto
let asiatico = new Humano()

console.log(mateus)

//mateus.name = 'Carlos'
//mateus.age = '24'
//mateus.height = 1.84
//mateus.sayHello(mateus.name)

//console.log(mateus)
console.log(asiatico)
