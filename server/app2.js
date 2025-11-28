import express from "express"
import dotenv from "dotenv";
dotenv.config()
import sendmail from "./utils/mailer.js"

const app= express()
app.use(express.json)
const port = process.env.PORT;

app.post("/mailer",async(req,res)=>{
    try {
        let{to ,subject,text}=req.body
        await sendmail(to,subject,text)
        res.status(200).json({msg:"sent mail"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})
app.listen(port,()=>{
    console.log("udgf");
})