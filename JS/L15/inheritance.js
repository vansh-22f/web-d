class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Admin extends User{
    constructor(username){
        super(username);
    }
    logout(){
        console.log(`${this.username} has logged out`);

    }
    static names(){     //static makes names() a class method and not an instance method
        console.log("hi")
    }
    
}


const user1=new User("vansh");

user1.logMe();

const admin1=new Admin("mittal");
admin1.logMe(); //able to access the method of parent class
admin1.logout();
Admin.names();//works fine here as calling class itself and not an inst

admin1.names(); //can call class itself and not an object created from the class


// instanceof operator
console.log(admin1 instanceof User);
