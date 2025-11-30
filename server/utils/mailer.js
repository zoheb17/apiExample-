import mailer from "nodemailer"
import Twilio  from "twilio"
import dotenv from "dotenv"
dotenv.config()

async function sendMail(to ,subject,text){
    try {
        let usermail=process.env.EMAIL;
        let appPass=process.env.PASS;
        let userDetails = mailer.createTransport({
            service:"gmail",
            auth:{
                user:usermail,
                pass:appPass

            }
        })

        const sender = await  userDetails.sendMail({
            from:usermail,
            to,
            subject,
            text
        })
        console.log("email sent",sender.messageId);
    } catch (error) {
        console.log(error);
    }

}

async function SMS(sid,token,from,to,body) {
    try {
       
        let sender = Twilio(sid,token)

        let user =sender.messages.create({
            from,
            to,
            body
        })
        console.log("sms send");
    } catch (error) {
        console.log(error);
    }
}

export {sendMail,SMS} 
