//2. multileval inheritance

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
        console.log('hello from myMethodD')
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
        console.log('hello from myMethodE')
        this.myMethod2()
    }
}

class MyClassF extends MyClassD{

    //1. properties
    //2. constructor
    //3. method
    myMethodF(){
        console.log('hello from my methodF')
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

    // G class object 
    let G = new MyClassG()
    G.gFun()
    G.myMethodF()
    G.myMethodD()
    