# User Directory — Frontend

This is a responsive, highly-polished React single page application built to view, search, and manage a directory of users. It integrates directly with the [Avivo Users Backend API](../README.md) and falls back gracefully to `https://dummyjson.com/users` if the local API is not available.

## Features

- **User Table View**: Displays user's avatar, name, company name, role/title, and country.
- **Dynamic Search Filtering**: Type-as-you-go filtering by name, company, role, or country.
- **Add Static User**: Interactive modal form to inject a user locally into the state with form validation.
- **Delete User**: Delete users from the list instantly (local-state only).
- **Graceful Failover / Dual Mode**: If your backend server or MySQL instance is down, the frontend automatically falls back to pulling users from the online API at `dummyjson.com` so you can test functionality.
- **Theme**: Premium modern dark mode interface with glassmorphism effects styled via Chakra UI.

## Tech Stack

- **React** (Bootstrapped with Vite)
- **Chakra UI v2** (Modern component UI framework)
- **Axios** (Robust API requests)
- **React Hooks** (`useState`, `useEffect`, `useMemo`, `useCallback`)

---

## Setup & Running

Ensure you have [Node.js](https://nodejs.org) (v18+) installed.

### 1. Install Dependencies
Navigate to the `client` directory and install the packages:
```bash
npm install
```

### 2. Start the Development Server
Run the project locally:
```bash
npm run dev
```

The application will start at:
**[http://localhost:5173](http://localhost:5173)**

### 3. Connect to the Backend (Optional but Recommended)
The dev server is preconfigured with a proxy to forward `/api/*` to `http://localhost:3000/*`.
If the backend is running, the frontend will automatically load users from your local MySQL database. If it is down, it logs a warning and pulls users from `dummyjson.com`.
