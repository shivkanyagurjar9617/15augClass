class MyClassA{

    //1 properties
    // 2. constructor
    // 3. method

    myFun1(){
        console.log('hello everyone')
        // object.method
        this.myFun2()
    }

    myFun2(){
        console.log('happy independence day ')
    }

    myFun3(){
        console.log('hello from myFun3')
    }
    myFun4(){
        console.log('hello my name is shivkanya')
    }
}
   
   
   

class  MyClassB extends MyClassA{
    //1. properties
    //2. constructor
    //3. method

    myFunB(){
        console.log('hello from myFunB')
        this.myFun1()
    }

}
class MyClassC extends MyClassB{

    //1. properties
    //2. constructor
    //3. method
    myFunC1(){
        console.log('hello from myFunC1')
    }
}

class MyClassD extends MyClassC{

    //1. properties
    //2. constructor
    //3. method
    myMethodD(){
        console.log('hello everyon how are you')
    }
    myMethod2(){
        console.log('welcome to OKLABS')
    }
}

class MyClassE extends MyClassD{

    //1. properties
    //2. constructor
    //3. method
    myMethodE(){
        console.log('OOPs programming language')
        this.myMethod2()
    }
}

class MyClassF extends MyClassD{

    //1. properties
    //2. constructor
    //3. method
    myMethodF(){
        console.log('javascript is a programming language')
        this.myMethodD()
    }
}

class MyClassG extends MyClassF{

    //1. properties
    //2. constructor
    //3. method
   gFun(){
       console.log('hello from gFunction')
       this.myMethodF()
   }
}
     // objectA = new ClassName()
     let myObjA = new MyClassA()
     //obj.method
     myObjA.myFun1()

    // objectB = new ClassName()
    let myObjB = new MyClassB()
    //obj.method
    myObjB.myFun3()
    myObjB.myFun4()

    // objectC = new ClassName()
    let myObjC = new MyClassC()
    //obj.method
    myObjC.myFunB()
    
    // objectD = new ClassName()
    let D = new MyClassD()
    //obj.method
    D.myFunC1()
    
    // objectD = new ClassName()
    let E = new MyClassE()
    //obj.method
    E.myMethodE()

    let F = new MyClassF()
    //obj.method
    F.myMethodF()

    // G class object 
    let G = new MyClassG()
    G.gFun()
    