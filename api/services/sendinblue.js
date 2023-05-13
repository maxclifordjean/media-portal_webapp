var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey =
  "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";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

// Configure API key authorization: partner-key
// var partnerKey = defaultClient.authentications["partner-key"];
// partnerKey.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//partnerKey.apiKeyPrefix = 'Token';

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

// apiInstance.sendTransacEmail(sendSmtpEmail).then(
//   function(data) {
//     console.log("API called successfully. Returned data: " + data);
//   },
//   function(error) {
//     console.error("# sendingblue", error);
//   }
// );

const sendinblue = sendSmtpEmail => {
  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function(data) {
      console.log("res", data);
      return true;
    },
    function(error) {
      console.error(error);
      return false;
    }
  );
};

module.exports = sendinblue;
