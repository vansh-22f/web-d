type User={
    username :string
    id:number
}
const user1:User={
    username:"Vansh" ,
    id:123
}





//how to use objects efficiently in typescript
type address={street:string, city:string, country:string
}
type items={name:string, price:number}

type order={
    id:number,
    address:address[],
    items:items[]
}





//duck typing
type Cup={size:string}
let smallCup:Cup={size:"small"}

let bigCup:Cup={size:"big", material:"plastic"} //extra property is allowed in duck typing

smallCup=bigCup
//bigCup can be assigned to smallCup because it has all the properties of smallCup (size) and extra properties are allowed in duck typing

//bigCup has size and material properties, smallCup requires only size property
// bigCup can be assigned to smallCup because 
// it has all the properties of smallCup (size) and extra properties are allowed in duck typing




//partial<> Makes all properties optional.
type Chai={
    flavor:string
    price:number
    isHot:boolean
}
// Make all properties in T optional where T is <Chai>
const updateChai=(updates: Partial<Chai>)=>{  
    // OR const updateChai=Partial<Chai>=>{}
    
    //updates can have any subset of properties of Chai
    //for example, updates can be {flavor:"masala"} or {price:20} or {isHot:true} or {flavor:"ginger", price:15}
    
    //but it cannot have properties that are not in Chai, for example, updates cannot be {color:"brown"}
}
updateChai({flavor:"masala"})



//Required<>Makes all properties required.
type Coffee={
    flavor:string
    price:number    
}
const mycoffee:Required<Coffee>={
    flavor:"latte",
    price:25
}
//For required, all properties of the type must be provided when creating an object of that type.
//In the above example, mycoffee must have both flavor and price properties, and they cannot be optional.



// 3.
//readonly<>
Readonly<T> 
// makes all properties of T read-only, meaning they cannot be modified after they are set.
type User1={
    name:string,
    age:number,
    email:string
}
const user: Readonly<User1> = {
  name: "Vansh",
  age: 22,
  email: "vansh@mail.com"
};

user.age = 30; // ❌ Error






// type User1={
//     name:string,
//     age:number,
//     email:string
// }

// 4.
//Pick<>
Pick<T, K>
// Select specific properties.

type UserPreview = Pick<User1, "name" | "email">;

const preview: UserPreview = {
  name: "Vansh",
  email: "vansh@mail.com"
};
// Used when sending limited data in API responses.

//difference between pick and partial***
// Eg2
type User3 = { id: number; name: string; email: string };
type A = Pick<User3, "name" | "email">;
// { name: string; email: string }
type B = Partial<User3>;
// { id?: number; name?: string; email?: string }



// 5.
Omit<T, K>

// Remove specific properties.  
// here in below example we are creating a new type UserWithoutEmail by omitting the email property from User1.
type UserWithoutEmail = Omit<User1, "email">;

const user2: UserWithoutEmail = {
  name: "Vansh",
  age: 22
};




// 6.
Record<K, T>

// Creates an object type with specific key & value types.

type Roles = "admin" | "user";

const rolePermissions: Record<Roles, string[]> = {
  admin: ["read", "write", "delete"],  //yahan admin role ke paas read, write, delete permissions hain
  user: ["read"]
};

//eg2
type Role5 = "admin" | "user" | "guest";

type Access = Record<Role5, boolean>;
// {
//   admin: boolean;
//   user: boolean;
//   guest: boolean;
// }



//7.

Exclude<T, U>
// Exclude types from a union.
type Role="admin" | "user" | "guest"

type WithoutGuest = Exclude<Role, "guest">;
// WithoutGuest can be "admin" or "user",
// but not "guest" because we have excluded "guest" from the Role type using Exclude utility type.





// 8.
 Extract<T, U>

// Keeps only matching types.

type Role = "admin" | "user" | "guest";

type OnlyAdmin = Extract<Role, "admin">;
// "admin" only because we have extracted "admin" from the Role type using Extract utility type.