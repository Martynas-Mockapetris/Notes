# Notes — Full-Stack Note-Taking App

A full-stack note-taking application built with the MERN stack. Create, view, and manage notes through a responsive web interface backed by a REST API and MongoDB.

**[Live Demo](https://notes-yl5h.onrender.com)** · **[GitHub Repository](https://github.com/Martynas-Mockapetris/Notes)**

## Features

- **Note Management** — Create, view, and delete notes.
- **REST API** — Backend endpoints for managing notes.
- **Database Integration** — Store and retrieve notes using MongoDB.
- **Rate Limiting** — Protect API requests using Upstash Redis.
- **Responsive Interface** — A clean interface built with React and Tailwind CSS.
- **Production Deployment** — Deployed and accessible online through Render.

## Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- DaisyUI
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Upstash Redis & Rate Limiting

**Deployment**
- Render

## Project Structure

```text
Notes/
├── frontend/    # React frontend application
├── server/      # Express REST API and database logic
├── package.json # Root build and start scripts
└── .gitignore
```

## Running Locally

### Prerequisites

- Node.js and npm
- MongoDB connection string
- Upstash Redis credentials

### 1. Clone the repository

```bash
git clone https://github.com/Martynas-Mockapetris/Notes.git
cd Notes
```

### 2. Configure environment variables

Create a `.env` file in the `server/` directory and add the environment variables required by the application, including your MongoDB connection string and Upstash Redis credentials.

Keep your credentials private and never commit your `.env` file.

### 3. Install dependencies

```bash
npm run build
```

The root build script installs the server and frontend dependencies and builds the frontend.

### 4. Start the application

```bash
npm start
```

The root start script launches the backend server. In production mode, the server serves the built frontend as well.

## What I Learned

Building this project helped me practise full-stack web development, including connecting a React frontend to an Express API, working with MongoDB through Mongoose, implementing API rate limiting, managing environment variables, and deploying a full-stack application.

## Author

**Martynas Mockapetris**

[GitHub Profile](https://github.com/Martynas-Mockapetris)
