enum size{
        SMALL,
    MEDIUM,
    LARGE
}
const val=size.MEDIUM
console.log(val) //1

//by default, enum values start from 0 and increment by 1 for each member. 
//so small=0, medium=1, large=2



enum color{
    SMALL=100,
    MEDIUM, //automatically assigned 101
    LARGE   //automatically assigned 102
}
const val2=color.MEDIUM
console.log(val2) //101