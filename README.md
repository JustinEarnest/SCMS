# Smart College Management System (SCMS)

A comprehensive web application for digitalizing college operations, built with the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS.

## 🚀 Features

*   **Role-Based Access Control**: Secure login for Admins, Teachers, and Students.
*   **Admin Dashboard**: Manage users (Students, Teachers) and college data.
*   **Teacher Portal**: Manage subjects, attendance, and marks.
*   **Student Portal**: View personal attendance records, marks, and notices.
*   **Modern UI**: Responsive design using Tailwind CSS.

## 🛠️ Tech Stack

*   **Frontend**: React (Vite), Tailwind CSS, Context API
*   **Backend**: Node.js, Express.js
*   **Database**: MongoDB (Mongoose)
*   **Authentication**: JWT (JSON Web Tokens)

## 📋 Prerequisites

*   Node.js (v18 or higher)
*   MongoDB (Local instance or Atlas URI)

## ⚙️ Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/JustinEarnest/SCMS.git
    cd SCMS
    ```

2.  **Backend Setup**
    ```bash
    cd backend
    npm install
    ```
    *   Create a `.env` file in `backend/` if not present:
        ```env
        PORT=5000
        MONGO_URI=mongodb://127.0.0.1:27017/scms
        JWT_SECRET=your_secret_key
        ```
    *   Seed the Database (Creates Admin User):
        ```bash
        node seeder.js
        ```
        > **Default Admin Credentials:**
        > *   Email: `admin@example.com`
        > *   Password: `password123`

    *   Start the Server:
        ```bash
        npm start
        ```

3.  **Frontend Setup**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    *   Access the app at `http://localhost:5173`

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
