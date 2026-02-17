//interfaces
interface chai{
    readonly id:number,  //readonly
    flavour:string,
    price:number,  
    milk?:boolean   //optional 
}

const masalaChai:chai={
    id:123,
    flavour:"masala",
    price:20
}

const hotChai:chai={
    id:124,
    flavour:"ginger",
    price:15,
    milk:true
}
hotChai.milk=false //allowed because milk is optional and not readonly
//hotChai.id=125 //error because id is readonly


interface race{
    start():void;
    stop():void;
}

const car:race={
    start(){
        console.log("Car started");
    },

    stop(){
        console.log("Car stopped");
    }
}








//////

interface User{
    name:string,
}

interface User{
    age:number
}

const u:User={
    name:"Vansh",
    age:20
    //merge of interfaces with same name, properties are combined
}


//explicitly merging interfaces
interface A{a:string}
interface B{b:string}
interface C extends A,B{ //interface can extend multiple interfaces
    c:string
}