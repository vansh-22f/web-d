//generics

function  wrapInArray<T>(item:T):T[]{
    return  [item]
}

wrapInArray(5) //[5]
wrapInArray("hello") //["hello"]



function pair<A,B> (a:A, b:B):[A,B]{
    return [a,b]
}

pair(1,"one") //[1,"one"]
pair("hello", true) //["hello", true]






//interface with generics

interface Box<T>{
    content:T
}
const numberBox:Box<number>={
    content:5
}
const stringBox:Box<string>={
    content:"hello"
}