const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'obbeyyusuf.p@gmail.com',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN

    }
})

const mail ={
    from : 'Obbey <obbeyyusuf.p@gmail.com>',
    to: 'obbyyusuf.p@gmail.com',
    subject: 'Test Email',
    html: '<h1>Test ngirim emayl kakak</h1>'
}

transporter.sendMail(mail, (err, res) => {
    if(err) return console.log(err.message)

    console.log("Email berhasil terkirim");
})