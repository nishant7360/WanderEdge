# WanderEdge - Backend Project

A full‑stack **Tour Booking Web Application** built using **Node.js**, **Express**, **MongoDB**, and **Pug templates**. This project allows users to browse tours, book trips, write reviews, manage accounts, and more — all powered by a secure backend and clean MVC architecture.

---

## Features

### User Features

- User signup/login (JWT authentication)
- Forgot password + email reset (Nodemailer)
- Browse all tours with detailed pages
- Book tours (with booking management)
- Write & read reviews
- Update profile details & photo
- Fully responsive Pug-based frontend

### Admin Features

- Create, update, delete tours
- Manage users
- Manage reviews
- Full role-based access system
- RESTful API with secure permissions

---

## Tech Stack

**Backend:** Node.js, Express.js
**Database:** MongoDB, Mongoose
**Templating:** Pug
**Authentication:** JWT, Cookies, Bcrypt
**Email:** Nodemailer
**Image Upload:** Multer + Sharp
**Other Tools:** dotenv, Morgan, Express Rate Limit

---

## 📁 Project Structure (MVC Architecture)

```
wanderedge/
│
├── main/
│   ├── controllers/      # All route logic
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API route files
│   ├── views/            # Pug templates
│   ├── utils/            # Helper, email, error utils
│   └── public/           # Static assets
│
├── server.js             # App start file
├── app.js                # Express setup
├── config.env            # Environment variables
├── package.json
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone https://github.com/nishant7360/WanderEdge.git
cd WanderEdge
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create a `config.env` file

```
NODE_ENV=development
PORT=8000
DATABASE=your_mongo_uri
JWT_SECRET=your_secret
JWT_EXPIRES_IN=90d
EMAIL_USERNAME=your_email
EMAIL_PASSWORD=your_password
```

### 4️⃣ Start the server

```bash
npm start
```

Server will run on: `http://localhost:8000`

---

## 🧪 Testing API Endpoints

You can test using Postman, Thunder Client, or any REST client.
The API follows **RESTful standards** and includes proper error handling.

---

## 📸 Screenshots (Optional)

Add your screenshots here:

```
public/img/
```

---

## 🙌 Author

**Nishant Yadav**
Full Stack Developer
GitHub: [https://github.com/nishant7360](https://github.com/nishant7360)

---

## ⭐ Contribution

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---

## 📄 License

This project is licensed under the **MIT License**.
