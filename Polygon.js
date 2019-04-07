//classe Pai
class Polygon {
    constructor(width,height){
        this.name = 'Polygon'
        this.width = width
        this.height = height
    }

    sayMytype(){
        console.log(`This is a ${this.name} with width = ${this.width} and height = ${this.height}`)
    }
}

//classe filha
class Square extends Polygon{
    constructor(value){
        super(value,value)
        this.name = 'Square'
    }

    getArea(){
        return this.width*this.width
    }
}

const polygon = new Polygon(10,30)
const square = new Square(10)

console.log(square)
square.sayMytype()
console.log(square.getArea())

console.log(polygon)
polygon.sayMytype()