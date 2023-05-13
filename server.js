const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const sendinblue = require("./api/services/sendinblue");

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      console.log("in handle middleware");
      return handle(req, res);
    });

    server.use(bodyParser.json()).post("/api/email/newsletter", (req, res) => {
      const { email = "" } = req.body; //We will use this later

      let sendSmtpEmail = {
        to: [
          {
            email: "maxjean.tech@gmail.com" //TODO: Change this on production.
          }
        ],
        templateId: 1,
        params: {
          name: "Malith",
          subject: "Someone want to subscribe to our newsletter",
          emailSubscriber: email
        }
      };
      console.info("server send email newslette", sendSmtpEmail);
      sendinblue(sendSmtpEmail);
      res.send("success");
    });

    server.listen(3004, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3004");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
