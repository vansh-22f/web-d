class User{
    constructor(username, password){
        this.username=username;
        this.password=password;
    }
    encryptPassword(){
        return this.password;
    }
    changeUsername(){
        return this.username.toUpperCase();
    }

}

const user1=new User("vansh001","abc");
console.log(user1.encryptPassword());

user1.changeUsername();

console.log(user1.changeUsername())
console.log(user1);


