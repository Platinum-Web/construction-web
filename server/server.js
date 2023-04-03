require('dotenv').config();
const express = require("express");
const { createTransport } = require('nodemailer');
const cors = require('cors');
const { urlencoded, json } = require('body-parser');
const app = express();


app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

app.post('/schedule-service', (req, res) => {
    const { firstName, lastName, email, phone, zipCode, message } = req.body;


    // Use nodemailer to send an email with the form data
    const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER, // Replace with your email address
            pass: process.env.GMAIL_USER// Replace with your email password
        }
    });

    const mailOptions = {
        from: email,
        to: 'heshameldawy__@outlook.com', // Replace with the email address you want to send the form data to
        subject: 'Request a service',
        text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Zip Code: ${zipCode}
        Message: ${message}
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent');
        }
    });
});

const port = 3000;
app.listen(port, () => { console.log(`Server started on port ${port}`) });