# Borrower Portal

A modern, full-stack loan application platform built with React and Node.js. The application provides a seamless user experience for applying for loans with a secure backend API.

## 🚀 Features

- **User Authentication**: Secure registration and login system with JWT tokens
- **Loan Application**: Comprehensive form for loan applications with validation
- **Responsive Design**: Modern UI with Tailwind CSS and gradient themes
- **Real-time Feedback**: Instant form validation and status updates
- **Secure API**: Backend with MongoDB integration and password hashing
- **Success Tracking**: Application submission confirmation and status

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   └── ...
│   └── ...
├── server/                 # Backend Node.js application
│   ├── controllers/        # Request handlers
│   ├── middlewares/        # Custom middleware
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── service/           # Business logic
│   └── ...
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd borrower-portal
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the `server` directory:
   ```env
   PORT=8001
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   CLIENT_URL=http://localhost:5173
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```
   The server will start on `http://localhost:8001`

2. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```
   The client will start on `http://localhost:5173`

## 📋 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login

### Loan Application
- `POST /api/submitForm` - Submit loan application form

## 🎨 Key Features

### User Interface
- **Modern Design**: Gradient backgrounds and glassmorphism effects
- **Responsive Layout**: Works seamlessly on desktop and mobile
- **Interactive Navigation**: Active page indicators and hover effects
- **Form Validation**: Real-time client-side validation

### Security
- **Password Hashing**: Secure password storage with bcryptjs
- **JWT Authentication**: Stateless authentication with cookies
- **CORS Protection**: Configured for secure cross-origin requests
- **Input Validation**: Server-side validation for all endpoints


## 🔧 Available Scripts

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Server
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
