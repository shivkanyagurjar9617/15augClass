//single type inheritance

class MyClassA{
    //1 properties
     name = 'shivkanya'
    // 2. constructor
    
    constructor(){
        console.log('hello from A constructor')
    }
    // 3. method

    myFunA(){
        console.log('hello from myFunA')
    }
}
class MyClassB extends MyClassA{
     //1 properties
     surname = 'gurjar'

    // 2. constructor
    constructor(){
        super()
        console.log('hello from B constructor ')
    }
    // 3. method

    myFunB(){
        console.log('hello from myFunB')
    }
}

let myObjB = new MyClassB()
myObjB.myFunA()
myObjB.myFunB()
console.log(myObjB.name+myObjB.surname)
