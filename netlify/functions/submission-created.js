const fetch = require("node-fetch");

const { NETLIFY_ACCESS_TOKEN, NETLIFY_SLUG } = process.env;

exports.handler = async function (event) {
  const body = JSON.parse(event.body);
  const { email } = body.payload.data;
  const response = await fetch(
    `https://api.netlify.com/api/v1/${NETLIFY_SLUG}/members?` +
      new URLSearchParams({
        email,
        role: "Collaborator",
      }),
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NETLIFY_ACCESS_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return {
    statusCode: 200,
    body: `Invite sent to ${email}`,
  };
};

