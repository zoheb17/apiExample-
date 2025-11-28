import mailer from "nodemailer"

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
export default sendMail
