const express=require('express')
const app=express()
const PORT=8000;
const users=require('./MOCK_DATA.json');

app.listen(PORT,()=>{
    console.log("Welcome")
});
// app.get("/users",(req,res)=>{
//     const html=`
//     <ul>
//         ${users.map((user)=>`<li>${user.email}</li>`).join("")}
    
//     </ul>`;
//     return res.send(html)
// })



//rest api endpoints
app.get("/api/users:id",(req,res)=>{
    return res.json(users)
});

app
.route("/api/users:id")
.get((req,res)=>{
    const id=Number(req.params.id)
    const user=users.find((user)=>user.id===id);
    return res.json(user)

})
.patch((req,res)=>{
    // edit user with id
    return res.json({
        status:'pending'
    })
})
.delete((req,res)=>{
    //to do delete the user with id
     return res.json({
        status:'pending'
    })
});
//the above setup helps as if i want to change route i need to change at single place for all three ie get , delete and put

// :id -> it means dynamic id and it can be any id like 3 , 4 3,33
// app.get("/api/users/:id",(req,res)=>{
//     const id=Number(req.params.id)
//     const user=users.find((user)=>user.id===id);
//     return res.json(user)

// })

app.post("/api/users",(req,res)=>{
    //todo create a new user
    return res.json({
        status:'pending'
    })
})
app.patch("/api/users/:id",(req,res)=>{
    //to do update the user with id 
     return res.json({
        status:'pending'
    })
})
app.delete("/api/users/:id",(req,res)=>{
    //to do delete the user with id
     return res.json({
        status:'pending'
    })
})
