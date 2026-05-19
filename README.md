````md
# Developer Portfolio AI

Production-ready fullstack developer portfolio with API integration, contact form, email delivery and AI helper section.

## Live Demo

Frontend:
https://developer-portfolio-ai.vercel.app

Backend API:
https://developer-portfolio-ai.onrender.com

---

# Stack

## Frontend
- React
- TypeScript
- Vite
- SCSS Modules
- Axios

## Backend
- Node.js
- Express
- Resend Email API

## Deploy
- Vercel
- Render

---

# Features

- Responsive landing page
- Developer presentation section
- Experience/projects section
- AI workflow section
- Contact form with validation
- Backend API integration
- Email sending to website owner
- Email copy to user
- Loading / success / error states
- AI Summary Helper endpoint
- Responsive UI
- Modular project architecture

---

# Project Structure

```txt
developer-portfolio-ai/
├── client/
│   └── src/
│       ├── app/
│       ├── shared/
│       ├── widgets/
│       └── pages/
│
├── server/
│   └── src/
│       └── server.js
│
├── README.md
└── .gitignore
````

---

# How to Run Project

## Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

## Backend

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```txt
http://localhost:5001
```

---

# Environment Variables

Create `.env` inside `server` folder:

```env
PORT=5001

RESEND_API_KEY=your_resend_api_key

OWNER_EMAIL=your_email@example.com
```

---

# Contact Form Implementation

Frontend sends POST request to backend API:

```txt
POST /contact
```

Backend validates required fields:

* name
* phone
* email
* comment

After successful submit:

* email is sent to website owner
* confirmation email is sent to user

Implemented:

* loading state
* success state
* error handling
* API validation

---

# AI Integration

Project includes AI-style helper endpoint:

```txt
GET /ai-summary
```

Frontend requests AI summary from backend and renders generated response.

AI tools were used for:

* architecture planning
* project structure
* component decomposition
* API implementation
* debugging
* README generation
* deployment troubleshooting

---

# Manual Improvements

Manually fixed and configured:

* TypeScript errors
* SMTP issues
* API integration
* Render deployment
* CORS configuration
* environment variables
* responsive layout improvements
* loading and error states

---

# What This Project Demonstrates

* frontend architecture
* backend API integration
* async request handling
* email delivery workflow
* AI integration approach
* production deployment
* environment configuration
* error handling
* responsive UI development

```
```
