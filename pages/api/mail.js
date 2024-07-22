import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  console.log('Received request body:', req.body);

  const { to, subject, html } = req.body;

  if (!to || !subject || !html) {
    console.error('Missing required fields');
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  if (!SMTP_EMAIL || !SMTP_PASSWORD) {
    console.error('SMTP credentials are missing');
    return res.status(500).json({ error: 'SMTP Configuration Error' });
  }

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
  } catch (error) {
    console.error('SMTP Verification Error:', error);
    return res.status(500).json({ error: 'SMTP Verification Failed' });
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: to,
      cc: SMTP_EMAIL,
      subject: subject,
      html: html,
    });
    console.log('Email Sent:', sendResult);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error Sending Email:', error);
    return res
      .status(500)
      .json({ error: 'Failed to send email', details: error.message });
  }
}
