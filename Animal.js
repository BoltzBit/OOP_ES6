//essa é a nossa classe base
class Animal{
    say(){
        console.log('')
    }
}

//classes filha
class Bird extends Animal{
    say(){
        console.log('bird sound')
    }
}

//class filha de bird
class Parrot extends Bird{
    say(){
        console.log('parrot sound')
    }
}


const animal = new Animal()
const bird = new Bird()
const parrot = new Parrot()

bird.say()
parrot.say()