module.exports = {
    async onSuccess() {
      console.log("onSuccess: I run on build success 🎉");
      const sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: process.env.EMAIL_TO, // Change to your recipient
        from: process.env.APPROVED_SENDER, // Change to your verified sender
        subject: process.env.EMAIL_SUBJECT,
        text: process.env.DEPLOY_URL,
      };
      try {
        await sgMail.send(msg);
        console.log("Email sent");
      } catch (error) {
        console.error(error);
  
        if (error.response) {
          console.error(error.response.body);
        }
      }
      console.log(process.env.DEPLOY_URL);
    },
  };