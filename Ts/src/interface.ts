// interfaces
interface User {
  id: number
  name: string
  email?: string          // optional
  readonly createdAt: Date // cannot be reassigned
}

function greet(user: User) {
  console.log(`Hi ${user.name}`)
}

interface Person {
  name: string
}

interface Student extends Person {
  rollNo: number
}

class CollegeStudent implements Student {
  name: string
  rollNo: number

  constructor(name: string, rollNo: number) {
    this.name = name
    this.rollNo = rollNo
  }
}

type UserType = {
  id: number
  name: string
}

// When to prefer interface over type
// Public object contracts in app/domain models.
// Things classes will implements.
// Cases where declaration merging is useful.
interface Config {
  apiUrl: string
}

interface Config {
  timeout: number
}
// merged => { 
    // apiUrl: string; 
    // timeout: number
//  }

// (type cannot merge like this.)

// When type is required (do not replace with interface)
type ID = string | number          // union
type Status = "idle" | "loading"   // literal union
type Point = [number, number]      // tuple
type Nullable<T> = T | null        // generic alias



// ? optional properties
type User1={
  username: string,
  bio?: string  // bio is optional can be omitted when creating a User1 object
}

const user1:User1={
  username:"Vansh",
  bio:"Student at XYZ University" //optional
}



//readonly
type Config1={
  readonly appName:string,
  version:number
}

const c1:Config1={
  appName:"MyApp",
  version:1.0
}
// c1.appName="NewApp" // Error: Cannot assign to 'appName' because it is a read-only property.