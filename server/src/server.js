import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://developer-portfolio-ai.vercel.app',
    ],
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
    },
});

app.get('/', (req, res) => {
    res.json({
        message: 'API is working',
    });
});

app.post('/contact', async (req, res) => {
    try {
        const { name, phone, email, comment } = req.body;

        if (!name || !phone || !email || !comment) {
            return res.status(400).json({
                message: 'All fields are required',
            });
        }

        await transporter.sendMail({
            from: process.env.SMTP_EMAIL,
            to: process.env.SMTP_EMAIL,
            subject: 'New portfolio request',
            html: `
        <h2>New request from portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Comment:</strong> ${comment}</p>
      `,
        });

        await transporter.sendMail({
            from: process.env.SMTP_EMAIL,
            to: email,
            subject: 'Your message was received',
            html: `
        <h2>Thank you for contacting me!</h2>
        <p>I received your request and will contact you soon.</p>
      `,
        });

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        console.error('CONTACT FORM ERROR:', error);

        return res.status(500).json({
            message: 'Internal server error',
        });
    }
});

app.get('/ai-summary', (req, res) => {
    res.json({
        summary:
            'Vera is a frontend developer with experience in React, TypeScript, API integration and clean UI architecture. She uses AI tools to speed up prototyping, improve code structure, generate documentation and validate technical decisions.',
    });
});

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

server.on('error', (error) => {
    console.error('SERVER ERROR:', error);
});