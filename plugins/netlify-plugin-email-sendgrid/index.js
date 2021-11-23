require("dotenv").config();

const {
  SENDGRID_API_KEY,
  SENDGRID_EMAIL,
  DEPLOY_URL,
} = process.env;

const sendgrid = require("@sendgrid/mail");
sendgrid.setApiKey(SENDGRID_API_KEY);

module.exports = {

    onSuccess: () => {
        console.log('onSuccess: I run on build success 🎉');
      },
    }

    
async function sendEmail(DEPLOY_URL) {
  try {
    await sendgrid.send({
      from: SENDGRID_EMAIL,
      templateId: "d-4267fc29fa6b48d09ce91278c7f331e2",
      to: "ramin@netlify.com",
      dynamicTemplateData: DEPLOY_URL,
    });
    console.log("email sent");
  } catch (error) {
    console.error(error);
  }
}

