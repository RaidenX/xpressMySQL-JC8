const sgMail = require('@sendgrid/mail')
const sgAPIKey = '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'

sgMail.setApiKey(sgAPIKey)

const sendVerify = (username, name, email) => {
    sgMail.send({
        to: email,
        from : 'tomirpdevelopment@gmail.com',
        subject: "Verikasi Email",
        html: `<h1><a href='http://localhost:2010/verify?username=${username}'>Klik untuk verifikasi</a></h1>`
    })
}

module.exports = {
    sendVerify
}