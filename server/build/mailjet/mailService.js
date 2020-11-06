"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendEmail(name, to, pass) {
    const mailjet = require('node-mailjet')
        .connect('0c373b1a3dfd5387cbb4bf57907fc516', '2bfe23243b8f56c0aaef6bf97c43dad6');
    const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
        "Messages": [
            {
                "From": {
                    "Email": "parobacal@gmail.com",
                    "Name": "GT SALES"
                },
                "To": [
                    {
                        "Email": to,
                        "Name": name
                    }
                ],
                "Subject": "Corre de confirmacion",
                "TextPart": "Listo para unirte a GT SALES",
                "HTMLPart": `<h3>Bienvenido a GT SALES.`,
                "CustomID": "AppGettingStartedTest"
            }
        ]
    });
    request
        .then((result) => {
        console.log(result.body);
    })
        .catch((err) => {
        console.log(err.statusCode);
        console.log(err.message);
    });
}
exports.default = sendEmail;
