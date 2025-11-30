import express from "express"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT
const app = express()

app.use(express.json())

app.post("/add",(req,res)=>{
    try {
        let num1 =req.body.a 
        let num2=req.body.b
        total = num1 +  num2
        res.status(200).json({msg:` my total is ${tota}`})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

// multiply two num

app.post("/mul",(req,res)=>{
    try {
        let num1 =+ req.body.a 
        let num2=+ req.body.b
        total = num1 * num2
        res.status(200).json({msg:` my total is ${tota}`})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

// compare 

app.post("/",(req,res)=>{
    try {
        let num1 =+ req.body.a 
        let num2=+ req.body.b
        if(num1>num2){
          return  res.status(200).json({msg:`${num1} is greater than ${num2}`})
        }else if(num1<num2){
            return res.status(200).json({msg:`${num1} is greater than ${num2}`})
        }
    } catch (error) {
        console.log(error);
       res.status(500).json({msg:error})


        
    }
})

//  check if number is even 

app.post("/even",(req,res)=>{
    try {
        let num= Number(req.body.a);

        if(num %2 ){
            res.status(200).json({msg:`${num} is even`})
        } else{
            res.status(200).json({msg:`${num} is odd`})
        }
        res.status(200).json({msg:`${num} is even`})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})




app.post("/reverse",(req,res)=>{
    try {
        let string= req.body.string
        let b = string.split("")
        console.log(b);
        let c=b.reverse()
        console.log(c);
        let d=c.join("")
        console.log(d);
     
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


app.post("/palindrom",(req,res)=>{
    try {
         let string= req.body.a 
         let output = a.split('').reverse('').join('');
    if (output===string)

       
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})


app.post("/",(req,res)=>{
    let a = req.body.a
    if(a>18){
        res.status(200).json({msg:`${a} is adult `})
    }else {
        res.status(200).json({msg:`${a} is a child`})
    }
})



app.post("/vowels",(req,res)=>{
    try {
    let v = req.body.v
    const vowels=["a","e","i","o" ,"u"]
    const cont =vowels.split.filter()

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})

app.listen(port,()=>{
    console.log(`server start http://localhost${port}`);
})