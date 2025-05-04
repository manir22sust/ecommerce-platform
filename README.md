# Full-Stack E-Commerce Application

[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-5.1.0-green)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.13.2-brightgreen)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-yellow)](https://opensource.org/licenses/ISC)

Modern full-stack e-commerce platform with React frontend and Express.js backend, featuring user authentication, product management, and order processing.

## Features

### Frontend

- ⚡ Vite-powered React 19 application
- 🎨 Tailwind CSS for modern styling
- 🔄 React Router v7 for client-side navigation
- 📱 Responsive mobile-first design
- 🔐 Form handling with React Hook Form
- 🛒 Shopping cart functionality
- 🔄 API integration with Axios

### Backend

- 🚀 Express.js 5 REST API
- 🗄️ MongoDB with Mongoose ODM
- 🔒 JWT authentication
- 🔄 Async error handling
- 📦 CRUD operations for products/orders
- 🔄 CORS-enabled security
- 📈 Database seeding script

## Tech Stack

**Frontend:**

- React 19
- React Router 7
- Vite 6
- Tailwind CSS 3
- Axios 1.8
- React Hook Form 7

**Backend:**

- Express.js 5
- MongoDB/Mongoose 8
- JSON Web Tokens (JWT)
- Bcrypt.js 3
- CORS 2.8
- Nodemon 3

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB 6+
- npm 9+ or yarn 1.22+

### Installation

1. **Clone repository:**

```bash
git clone https://github.com/manir22sust/ecommerce-platform.git
cd ecommerce-platform
```

2. **Frontend setup:**

```bash
cd frontend
npm install
```

3. **Backend setup:**

```bash
cd backend
npm install
```

4. **Configuration**

Frontend Environment (.env)

```js
VITE_API_URL= http://localhost:8000/api
VITE_STRIPE_PUBLIC_KEY=
```

Backend Environment (.env)

```js
HOST=localhost
PORT=5000
MONGODB_URI=mongodb://localhost:8000/ecommerce
JWT_SECRET=jwt_secret_here
JWT_EXPIRES_IN=7d
```

5. **Running the Application**

Start backend development server:

```bash
cd backend
npm run dev
```

Start frontend development server:

```bash
cd frontend
npm run dev
```

Seed initial data (optional):

```bash
cd backend
npm run seed
```

7. **Project Structure**

**Frontend**

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route components
│   ├── services/       # API service layer
│   ├── styles/         # Global styles
│   ├── App.jsx         # Root component
│   └── main.jsx        # Entry point
├── index.html          # Main HTML template
└── package.json
```

**Backend**

```
backend/

├── config/
│   └── db.js           # Database configuration
├── controllers/        # Business logic
├── models/             # MongoDB models
├── routes/             # API endpoints
├── middleware/         # Auth & error handlers
├── scripts/            # Database scripts
├── server.js           # Entry point
└── package.json
```

**Scripts Commands**

```bash 
Frontend
npm run dev      # Start development server
npm run build    # Create production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

```bash 
Backend
npm start        # Start production server
npm run dev      # Start development server (with nodemon)
npm run seed     # Seed database with sample data
npm run prod     # Start in production mode
```

**API Endpoints**

Method Endpoint Description

```bash
POST	/api/users/register	  # Register new user
POST	/api/users/login	    # Authenticate user
GET	  /api/products	        # Get all products
POST	/api/products	        # Create new product
GET	  /api/products/:id	    # Get single product
GET	  /api/orders	          # Get user orders
POST	/api/orders	          # Create new order
```

**Security Configuration**

```js
// CORS setup in backend
app.use(cors({
  origin: [
    "http://localhost:5173", // Vite frontend
    "https://your-production-domain.com"
  ],
  methods: ["POST", "GET", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
```

**Deployment**

**Frontend:**

```bash
cd frontend
npm run build      # Deploy /dist directory to hosting service
```

**Backend:**

```bash
cd backend
npm run prod      # Use process manager like PM2 for production
```

**Contributing**

- Fork the repository

- Create feature branch (git checkout -b feature/feature-name)

- Commit changes (git commit -m 'Add new feature')

- Push to branch (git push origin feature/feature-name)

- Open Pull Request
