const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
const { underline } = require('colors');
const path = require('path');

dotenv.config({ path: './config/config.env'})

const app = express();
app.use(express.json());

const port  = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}...`.cyan.bold));





// @desc    Send a contact message request
// @route   POST /send
// @access  Public
app.post('/send', (req, res) =>{

        let transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: 'hello.nowdevelopment@gmail.com',
                pass: '03121987@Dec'
            }
        });
        
        let mailOptions = {
            from: `${req.body.mail}`,
            to: 'hello.nowdevelopment@gmail.com',
            subject: `New customer request`,
            html:   `<h1>Enquiry from:  ${req.body.name}</h1>
                    <h3>Contact: ${req.body.mail}</h3>
                    <p>${req.body.message}</p>`
        };

        let mailSender = {
            from: `hello.nowdevelopment@gmail.com`,
            to: `${req.body.mail}`,
            subject: `NowDevelopment Lab. enqnuiry confiration`,
            html:   `<h1>Hello ${req.body.name},</h1>
                    <p>We have received your message and we will get to you shortly.
                    Our normal response time is about 24 hours sincer the request has been received.</p>`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return res.status(500).send(error.response);
            } else {
                return res.status(200).send(`Email sent: ${info.response}` )
            }
        });

        transporter.sendMail(mailSender, function(error, info){
            if(error){
                return res.status(500).send(error.response);
            } else {
                return res.status(200).send(`Email sent: ${info.response}` )
            }
        });
});

//serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }