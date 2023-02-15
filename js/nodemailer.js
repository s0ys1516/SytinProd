const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
	{
		host: 'smtp.ethereal.email',
		port: 587,
		secure: false,
		auth: {
			user: 'oma.king9@ethereal.email',
			pass: 'MMSwpXwVMpKU22wHZv'
		}
	},
	{
		from: 'Mailer Test <oma.king9@ethereal.email>',
	}
)

const mailer = message => {
	transporter.sendMail(message, (err, info) => {
		if (err) return console.log(err)
		console.log('Email sent: ', info)
	})
}

module.exports = mailer