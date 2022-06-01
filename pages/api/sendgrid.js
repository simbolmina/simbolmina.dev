// import mail from '@sendgrid/mail';
import sendgrid from '@sendgrid/mail';
const validator = require('email-validator');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  const { fullname, email, subject, message } = req.body;

  if (validator.validate(email)) return;
  const body = JSON.parse(req.body);

  const data = {
    to: 'iletisim@filozofunyolu.com', // Your email where you'll receive emails
    from: 'iletisim@filozofunyolu.com', // your website email address here
    subject: `${body.subject}`,
    text: body.message,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
    <head>
      <meta charset="utf-8">
    
      <title>The HTML5 Herald</title>
      <meta name="description" content="The HTML5 Herald">
      <meta name="author" content="SitePoint">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    
      <link rel="stylesheet" href="css/styles.css?v=1.0">
    
    </head>
    
    <body>
      <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
            </div>
            <div class="container" style="margin-left: 20px;margin-right: 20px;">
            <h3>You've got a new mail from ${body.fullname}, their email is: ✉️${body.email} </h3>
            <div style="font-size: 16px;">
            <p>Message:</p>
            <p>${body.message}</p>
            <br>
            </div>
    </body>
    </html>`,
  };

  await sendgrid.send(data);
  res.status(200).json({ message: 'message is sent' });
}
