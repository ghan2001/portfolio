var  nodemailer = require('nodemailer');
var  transporter=nodemailer.createTransport({
          service:'gmail',
          auth: {
                    user: 'ghanshyam.prajapati@hiddenbrains.in',
                    pass: 'Ghanshyam@9669607710'
                  }

})

var mailOptions = {
          from: 'ghanshyam.prajapati@hiddenbrains.in',
          to: 'nirala.kumar@hiddenbrains.in',
          subject: 'Sending Email using Node.js',
          text: 'That was easy!'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });