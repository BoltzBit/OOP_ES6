class Athlete{
    constructor(name,weight,height){
        this.name = name
        this.weight = weight
        this.height = height
    }

    //get não precisa passar argumento
    get name(){
        return this._name
    }

    set name(value){
        this._name = value
    }

    get weight(){
        return this._weight
    }

    set weight(value){
        this._weight = value
    }

    get height(){
        return this._height
    }

    set height(value){
        this._height = value
    }

    getResultIMC(height,weight){
        return weight/Math.sqrt(height)
    }

    static formatImcResult(imc){
        return imc.toFixed(2)
    }
}



const mateus = new Athlete()

mateus.name = 'Mateus'
mateus.weight = 85.4
mateus.height = 1.82

console.log(mateus)
console.log(mateus.name, mateus.height, mateus.weight)
console.log(`${mateus.name} has ${Athlete.formatImcResult(mateus.getResultIMC(mateus.height,mateus.weight))} IMC`)