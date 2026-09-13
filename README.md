# Backend Course – Movie Watchlist API

A RESTful backend API built with **Node.js and Express.js** as a hands-on backend development practice project.

This project was developed while following the **Backend Complete Course by PedroTech**, with a focus on understanding backend fundamentals, REST API development, database management, authentication, validation, and middleware.

## 🚀 Technologies

* **Node.js**
* **Express.js**
* **PostgreSQL**
* **Prisma ORM**
* **JWT (JSON Web Token)**
* **Zod**
* **bcrypt**
* **dotenv**
* **Nodemon**

## 📚 What I Practiced

Throughout this project, I practiced the following backend concepts:

* Setting up a Node.js backend server
* Building RESTful APIs with Express.js
* Creating routes and controllers
* HTTP methods and status codes
* PostgreSQL database integration
* Database schema design with Prisma
* Prisma migrations and database queries
* CRUD operations
* User registration and login
* Password hashing with bcrypt
* JWT-based authentication
* Authentication middleware
* Request validation with Zod
* Middleware structure
* Environment variables
* Database seed scripts
* Error handling
* Watchlist functionality
* API testing
* Backend deployment concepts

## 🎬 Project Overview

The project is a **Movie Watchlist API** where users can register, authenticate, manage movies, and create their own watchlists.

Authenticated users can add movies to their watchlist and manage their watchlist status.

### Watchlist Statuses

* `planned`
* `watching`
* `completed`
* `dropped`

The backend follows a basic separation between **routes, controllers, middleware, configuration, and database logic**.

## 🗂️ Project Structure

```text
backend-course/
│
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── seed.js
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   └── ...
│
├── .env
├── package.json
└── server.js
```

## 🔐 Authentication

The API uses **JWT-based authentication**.

The authentication flow includes:

1. User registration
2. Password hashing with bcrypt
3. User login
4. JWT generation
5. Authentication middleware
6. Protected routes

Protected endpoints require a valid JWT token.

```http
Authorization: Bearer <token>
```

## 🗄️ Database

The project uses **PostgreSQL** as the relational database and **Prisma ORM** for database access.

Main models include:

* `User`
* `Movie`
* `WatchListItem`

Relationships between users, movies, and watchlist items are managed through Prisma.

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Navigate to the project:

```bash
cd backend-course
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL="your_postgresql_connection_string"
JWT_SECRET="your_jwt_secret"
JWT_EXPIRES_IN="7d"
```

Run Prisma migrations:

```bash
npx prisma migrate dev
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run seed data:

```bash
npm run seed-movies
```

Start the development server:

```bash
npm run dev
```

The API will run locally on the configured port.

## 🧪 API Testing

The API can be tested using tools such as **Postman** or **Requestly**.

Example authentication endpoints:

```http
POST /auth/register
POST /auth/login
```

Protected watchlist endpoints require authentication.

## 🎯 Purpose

This repository represents my hands-on practice while learning **Node.js backend development**.

The main goal was not only to follow the tutorial, but also to understand how the different backend components work together:

```text
Client
   ↓
Express.js
   ↓
Routes
   ↓
Middleware
   ↓
Controllers
   ↓
Prisma ORM
   ↓
PostgreSQL
```

This project helped me strengthen my understanding of REST APIs, relational databases, authentication, authorization, and backend project structure.

## 📌 Learning Source

This project was developed while following:

**Backend Complete Course | NodeJS, ExpressJS, JWT, PostgreSQL, Prisma**

by **PedroTech**.

Course topics include Node.js server setup, Express routes, PostgreSQL/Prisma integration, controllers, JWT authentication, seed files, watchlist functionality, middleware, Zod validation, and deployment.

## 📄 License

This project was created for learning and practice purposes.
