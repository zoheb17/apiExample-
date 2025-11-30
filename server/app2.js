import express from "express"
import dotenv from "dotenv";
dotenv.config()
import {sendMail, SMS} from "./utils/mailer.js"


const app= express()
app.use(express.json())
const port = process.env.PORT;

app.post("/mailer",async(req,res)=>{
    try {
        let{to ,subject,text}=req.body
        await sendMail(to,subject,text)
        res.status(200).json({msg:"sent mail"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})

app.post("/twilio",async (req,res)=>{
    try {
        // sid,token,phone,from,to,body
        // let sid =req.body.sid 
        // let token=req.body.token 
        // let phone= req.body.phone
    let {sid,token,phone,to,body}=req.body
        // let to = req.body.to 
        // let body = req.body.body 
        await SMS(sid,token,phone,to,body)
        res.status(200).json({msg:"sms send"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})

app.listen(port,()=>{
    console.log("udgf");
})