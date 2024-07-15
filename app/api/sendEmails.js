// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com', // Remplacez par votre e-mail
        pass: 'your-email-password', // Remplacez par votre mot de passe d'application
      },
    });

    const mailOptions = {
      from: email,
      to: 'contact@jobmi.fr',
      subject: `New message from ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
