const express = require('express')
const app = express()
const path = require('path');
const PORT = 3000;
// let publicPath = path.join(__dirname,"public");
//app.use(express.static(publicPath))
app.use(express.static(path.join(__dirname,"public")));


app.get('/', (req,res) => {
    res.send("hello sir")
})
app.get('/greetings', (req,res) => {
    res.send("hello bsss sir")
})
//1..params wala tarika
app.get('/greet/:name', (req,res) => {//yaha name key hai
    console.log(req.params);
   // console.log(`KYA BE ${req.params.name}`) terminal me orint hoga jo bhi url me likhega /greet/ ke baad
    res.send(` kya be ${req.params.name}`)
    
})
//2..query parameter
// Query parameters req: '/bye?name=aman&city=delhi
app.get('/bye',(req,res)=>{
    res.send(`Aur, Chalo Milte hai baad mei? ${req.query.name} from ${req.query.city}`);
})

//ye jo line hai niche wo nhi chalegi aagar path require/import nhi hai to
app.get('/homee',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

//We don't want to do this manually one by one
// app.get('/script.js',(req,res)=>{
//     res.sendFile(path.join(__dirname,'script.js'));
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(path.join(__dirname,'style.css'));
// })

// Alternative to the above part is to send all the files inside a folder to the
// browser at once



//slash greetings wale ispe response alag hai 
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
}); // This will start the server