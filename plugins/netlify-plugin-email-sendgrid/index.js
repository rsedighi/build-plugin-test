const sgMail = require('@sendgrid/mail')
module.exports = {
    
    onSuccess: () => {
        console.log('onSuccess: I run on build success 🎉');
            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            const msg = {
            to: 'ramin@netlify.com', // Change to your recipient
            from: 'ramin+sendgrid@netlify.com', // Change to your verified sender
            subject: 'New Cirque Deploy URL',
            text: process.env.DEPLOY_URL,
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            }
            console.log(sgMail)
            console.log(msg)
            sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })
            console.log(process.env.DEPLOY_URL)
    }
}