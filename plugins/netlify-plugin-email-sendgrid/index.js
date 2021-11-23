module.exports = {
    async onSuccess() {
      console.log("onSuccess: I run on build success 🎉");
      const sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: "mickael@netlify.com", // Change to your recipient
        from: "ramin+sendgrid@semoneytronic.com", // Change to your verified sender
        subject: "Automated Email sent from Ramin's Sendgrid Build Plugin",
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