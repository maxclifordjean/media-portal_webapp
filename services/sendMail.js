import axios from "axios";

export const sendMail = async email => {
  try {
    let request = await axios
      .post("/api/email/newsletter", {
        name: "Malith",
        email: "malith2@sendinblue.com",
        subject: "Someone want to subscribe to the newsletter.",
        email: email
      })
      .then(res => {
        return res;
      });
    return request.status === 200 ? true : false;
  } catch (err) {
    console.error(err);
  }
};
