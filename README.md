# Avivo Full-Stack User Directory Application

This repository contains a full-stack user directory application built as a coding assignment. It consists of:
1. **Backend**: A Node.js & Express REST API backed by MySQL that serves a mock user list modeled after [dummyjson.com/users](https://dummyjson.com/users).
2. **Frontend**: A React application styled with Chakra UI and powered by Axios to search, view, add, and delete users with a fallback mode to external DummyJSON API.

## What's inside

The project is organized into the following areas:

- **`client/`** is the React frontend application (Vite, Chakra UI, Axios).
- **`server/`** is the Node.js & Express backend API (Express, MySQL, dotenv).

```
avivo-assignment/
├── client/              # React Frontend Application
│   ├── src/
│   ├── package.json
│   └── README.md
└── server/              # Node.js Express Backend API
    ├── sql/             # SQL Schemas & Seed Data
    │   ├── schema.sql
    │   └── seed.sql
    ├── scripts/         # Database Setup Scripts
    │   ├── migrate.js
    │   ├── seed.js
    │   └── seedFromApi.js
    ├── src/             # Backend Code
    │   ├── server.js
    │   ├── app.js
    │   ├── config/db.js
    │   ├── models/userModel.js
    │   ├── controllers/userController.js
    │   ├── routes/userRoutes.js
    │   └── middleware/errorHandler.js
    ├── package.json
    └── server.js
```



## Requirements

- Node.js v18 or higher
- MySQL 8.0 or higher
- npm (comes with Node.js)


## Getting started

**1. Install Backend dependencies**

Navigate to the `server` directory and run:
```bash
cd server
npm install
```

**2. Set up your environment file**

Copy the example file inside the `server` folder and fill in your MySQL password:

```bash
cp .env.example .env
```

Open `.env` and update it:

```
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=avivo_users
NODE_ENV=development
```

**3. Create the database and load sample data**

Run database setups inside the `server` folder:

```bash
npm run setup
```

If you want to run the steps separately:

```bash
npm run migrate    # creates the avivo_users database and all four tables
npm run seed       # inserts 20 sample users
```

There is also an optional script that pulls the full live dataset directly from dummyjson.com (200+ users) and loads it into your local database:

```bash
npm run seed:api
```

**4. Start the Backend API Server**

Run the backend server inside the `server` folder:

```bash
npm run dev
```

The server starts on `http://localhost:3000`. You should see:

```
✅ Server running on http://localhost:3000
   GET http://localhost:3000/users
   GET http://localhost:3000/health
```

**5. Start the React Frontend App**

Open a new terminal window, navigate to the `client` directory, install packages, and start the frontend:

```bash
cd client
npm install
npm run dev
```

The React frontend starts on `http://localhost:5173`. In development, it automatically proxies API calls to `http://localhost:3000`. If you do not run the backend API or MySQL database, the React app will gracefully fall back to calling the live `https://dummyjson.com/users` API directly.

---

## API

### GET /users

Returns all users from the database in the same nested JSON format as dummyjson.com.

You can optionally pass `limit` and `skip` as query parameters to paginate results.

```bash
curl http://localhost:3000/users

curl http://localhost:3000/users?limit=5

curl http://localhost:3000/users?limit=10&skip=10
```

Response shape:

```json
{
  "users": [
    {
      "id": 1,
      "firstName": "Emily",
      "lastName": "Johnson",
      "maidenName": "Smith",
      "age": 29,
      "gender": "female",
      "email": "emily.johnson@x.dummyjson.com",
      "phone": "+81 965-431-3024",
      "username": "emilys",
      "birthDate": "1996-05-30",
      "image": "https://dummyjson.com/icon/emilys/128",
      "bloodGroup": "O-",
      "height": 193.24,
      "weight": 63.16,
      "eyeColor": "Green",
      "hair": {
        "color": "Brown",
        "type": "Curly"
      },
      "ip": "42.48.100.32",
      "address": {
        "address": "626 Main Street",
        "city": "Phoenix",
        "state": "Mississippi",
        "stateCode": "MS",
        "postalCode": "29112",
        "coordinates": {
          "lat": -77.16213,
          "lng": -92.084824
        },
        "country": "United States"
      },
      "macAddress": "47:fa:41:18:ec:eb",
      "university": "University of Wisconsin--Madison",
      "bank": {
        "cardExpire": "05/28",
        "cardNumber": "3693233511855044",
        "cardType": "Diners Club International",
        "currency": "GBP",
        "iban": "GB74MH2UZLR9TRPHYNU8F8"
      },
      "company": {
        "department": "Engineering",
        "name": "Dooley, Kozey and Cronin",
        "title": "Sales Manager",
        "address": {
          "address": "263 Tenth Street",
          "city": "San Francisco",
          "state": "Wisconsin",
          "stateCode": "WI",
          "postalCode": "37657",
          "coordinates": {
            "lat": 71.814525,
            "lng": -161.150263
          },
          "country": "United States"
        }
      },
      "ein": "977-175",
      "ssn": "900-590-289",
      "userAgent": "Mozilla/5.0 ...",
      "role": "admin"
    }
  ],
  "total": 20,
  "skip": 0,
  "limit": 20
}
```

---

### GET /health

A quick check to confirm the server and database are both reachable.

```bash
curl http://localhost:3000/health
```

```json
{
  "status": "ok",
  "database": "connected",
  "timestamp": "2026-07-03T06:45:00.000Z"
}
```

If the database is down or unreachable, this returns a `503` with a descriptive error message instead of crashing.

---

## Database schema

The data is split across four tables that are joined together when serving the API response:

- **users** — all the core fields like name, email, age, gender, and role
- **user_addresses** — the user's home address with coordinates
- **user_bank** — card number, card type, IBAN, and currency
- **user_company** — employer name, department, job title, and company address

All four tables are linked to `users` by `user_id` with a foreign key and `ON DELETE CASCADE`, so removing a user cleans up all related records automatically.

---

## Environment variables

| Variable | Description |
|---|---|
| `PORT` | Port the server listens on (default: 3000) |
| `DB_HOST` | MySQL host (default: localhost) |
| `DB_PORT` | MySQL port (default: 3306) |
| `DB_USER` | MySQL username |
| `DB_PASSWORD` | MySQL password |
| `DB_NAME` | Database name (default: avivo_users) |
| `NODE_ENV` | Set to `production` to suppress error details in responses |

Never commit your `.env` file. The `.env.example` file is the safe template to share.

---

## A few things worth mentioning

All database queries are parameterised so there is no risk of SQL injection. Sensitive configuration like database credentials is read entirely from environment variables and never hardcoded. Errors from the database are caught by a global Express error handler that returns structured JSON responses — if the database goes down, the API returns a `503` rather than crashing. Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`) are set on every response. In production mode, raw database error messages are hidden from the response and only logged server-side.
