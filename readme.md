# 🌍 WanderEdge

A full-stack travel and tour booking platform that brings the world to your fingertips. Built with modern web technologies to deliver a seamless booking experience.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=flat&logo=mongodb&logoColor=white)
![Pug](https://img.shields.io/badge/Pug-Template-A86454?style=flat&logo=pug&logoColor=white)

## 📋 Overview

WanderEdge is a comprehensive tour booking web application that enables users to discover, explore, and book amazing travel experiences around the world. With a robust backend architecture and intuitive user interface, WanderEdge provides everything needed for a modern travel booking platform.

Built following the **Model-View-Controller (MVC)** architecture pattern, WanderEdge ensures clean, maintainable, and scalable code. The platform features secure authentication, payment processing, review systems, and a powerful admin dashboard for managing tours and users.

## ✨ Features

### 👤 User Features

- **Account Management**
  - User registration and login with JWT authentication
  - Password reset via email (Nodemailer integration)
  - Profile management with photo upload
  - Account security with encrypted passwords (Bcrypt)

- **Tour Discovery & Booking**
  - Browse comprehensive tour catalog
  - Detailed tour pages with rich information
  - Secure tour booking system
  - Booking history and management
  - Interactive tour maps and locations

- **Reviews & Ratings**
  - Write reviews for completed tours
  - Star ratings system
  - Browse reviews from other travelers
  - Verified booking reviews

- **Responsive Design**
  - Mobile-friendly Pug templates
  - Optimized for all screen sizes
  - Fast loading times
  - Intuitive navigation

### 🔐 Admin Features

- **Tour Management**
  - Create new tours with detailed information
  - Update existing tour details
  - Delete tours from the platform
  - Manage tour availability and pricing

- **User Management**
  - View all registered users
  - Manage user roles and permissions
  - Monitor user activity
  - Handle user accounts

- **Review Moderation**
  - Review management dashboard
  - Approve or remove reviews
  - Monitor review quality

- **Access Control**
  - Role-based authorization system
  - Secure admin routes
  - Permission-based operations

## 🛠️ Tech Stack

### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling

### Frontend

- **Pug (Jade)** - High-performance template engine
- **CSS3** - Modern styling and animations
- **JavaScript** - Client-side interactivity

### Authentication & Security

- **JWT (JSON Web Tokens)** - Secure user authentication
- **Bcrypt** - Password hashing and encryption
- **Cookie-based sessions** - Persistent user sessions
- **Express Rate Limit** - API request rate limiting
- **Helmet.js** - HTTP header security

### File Handling & Email

- **Multer** - Multipart/form-data file upload
- **Sharp** - High-performance image processing
- **Nodemailer** - Email sending for password resets

### Development Tools

- **Morgan** - HTTP request logger
- **Dotenv** - Environment variable management
- **ESLint** - Code quality and consistency
- **Postman** - API testing and documentation

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager
- Email service credentials (for password reset functionality)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/nishant7360/WanderEdge.git
   cd WanderEdge
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   Create a `config.env` file in the root directory:

   ```env
   # Server Configuration
   NODE_ENV=development
   PORT=8000

   # Database
   DATABASE=mongodb+srv://<username>:<password>@cluster.mongodb.net/wanderedge?retryWrites=true&w=majority
   DATABASE_PASSWORD=your_database_password

   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRES_IN=90d
   JWT_COOKIE_EXPIRES_IN=90

   # Email Configuration (for password reset)
   EMAIL_USERNAME=your_email@gmail.com
   EMAIL_PASSWORD=your_email_password
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_FROM=noreply@wanderedge.com

   # Stripe (for payments - optional)
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Start the application**

   Development mode:

   ```bash
   npm start
   ```

   Or with nodemon for auto-restart:

   ```bash
   npm run dev
   ```

5. **Access the application**

   Open your browser and navigate to:

   ```
   http://localhost:8000
   ```

### Database Setup

The application uses MongoDB. You can either:

1. **Use MongoDB Atlas** (Cloud):
   - Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a cluster and get your connection string
   - Add it to your `config.env` file

2. **Use Local MongoDB**:
   - Install MongoDB on your machine
   - Use local connection string: `mongodb://localhost:27017/wanderedge`

## 📁 Project Structure

```
WanderEdge/
│
├── main/
│   ├── controllers/          # Business logic controllers
│   │   ├── authController.js
│   │   ├── tourController.js
│   │   ├── userController.js
│   │   ├── reviewController.js
│   │   └── bookingController.js
│   │
│   ├── models/              # Database models (Mongoose schemas)
│   │   ├── tourModel.js
│   │   ├── userModel.js
│   │   ├── reviewModel.js
│   │   └── bookingModel.js
│   │
│   ├── routes/              # API route definitions
│   │   ├── tourRoutes.js
│   │   ├── userRoutes.js
│   │   ├── reviewRoutes.js
│   │   └── bookingRoutes.js
│   │
│   ├── views/               # Pug templates
│   │   ├── base.pug
│   │   ├── tour.pug
│   │   ├── login.pug
│   │   ├── account.pug
│   │   └── ...
│   │
│   ├── public/              # Static assets
│   │   ├── css/
│   │   ├── js/
│   │   └── img/
│   │
│   └── utils/               # Utility functions
│       ├── email.js
│       ├── apiFeatures.js
│       └── catchAsync.js
│
├── app.js                   # Express application setup
├── server.js                # Server startup file
├── config.env               # Environment variables
├── package.json             # Dependencies and scripts
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

## 🔌 API Endpoints

### Authentication

```
POST   /api/v1/users/signup          # Create new user account
POST   /api/v1/users/login           # User login
GET    /api/v1/users/logout          # User logout
POST   /api/v1/users/forgotPassword  # Request password reset
PATCH  /api/v1/users/resetPassword   # Reset password with token
```

### Tours

```
GET    /api/v1/tours                 # Get all tours
GET    /api/v1/tours/:id             # Get single tour
POST   /api/v1/tours                 # Create tour (admin only)
PATCH  /api/v1/tours/:id             # Update tour (admin only)
DELETE /api/v1/tours/:id             # Delete tour (admin only)
```

### Users

```
GET    /api/v1/users                 # Get all users (admin only)
GET    /api/v1/users/:id             # Get single user
PATCH  /api/v1/users/updateMe        # Update current user
DELETE /api/v1/users/deleteMe        # Delete current user
```

### Reviews

```
GET    /api/v1/reviews               # Get all reviews
GET    /api/v1/tours/:tourId/reviews # Get reviews for specific tour
POST   /api/v1/reviews               # Create review
PATCH  /api/v1/reviews/:id           # Update review
DELETE /api/v1/reviews/:id           # Delete review
```

### Bookings

```
GET    /api/v1/bookings              # Get all bookings (admin only)
POST   /api/v1/bookings              # Create booking
GET    /api/v1/bookings/my-bookings  # Get current user's bookings
```

## 🧪 Testing

### Using Postman

1. Import the API endpoints into Postman
2. Set up environment variables:
   - `URL`: http://localhost:8000/api/v1
   - `JWT`: (will be set automatically after login)

3. Test authentication flow:
   - Sign up a new user
   - Log in to receive JWT token
   - Use token for protected routes

### Using Thunder Client (VS Code)

1. Install Thunder Client extension
2. Create new request collections
3. Test individual endpoints

## 🔒 Security Features

- **Password Encryption**: Bcrypt hashing with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **HTTP Security Headers**: Helmet.js implementation
- **Rate Limiting**: Prevent brute force attacks
- **Data Sanitization**: Protection against NoSQL injection
- **XSS Protection**: Clean user input
- **Parameter Pollution**: Prevent query parameter attacks

## 🎯 Key Features Explained

### Image Upload & Processing

- Users can upload profile photos
- Images are automatically resized and optimized using Sharp
- Efficient storage and fast loading times

### Email System

- Automated password reset emails
- Booking confirmation emails
- HTML email templates
- Support for multiple email services

### Review System

- Users can only review tours they've booked
- One review per user per tour
- Average rating calculation
- Review moderation capabilities

### Advanced Querying

- Filtering, sorting, and pagination
- Field limiting for optimized responses
- Aggregation pipeline for statistics
- Geospatial queries for location-based tours

## 🚀 Deployment

### Deploying to Heroku

1. Install Heroku CLI
2. Create a new Heroku app:

   ```bash
   heroku create wanderedge-app
   ```

3. Set environment variables:

   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set DATABASE=your_mongodb_uri
   # Set other env variables
   ```

4. Deploy:
   ```bash
   git push heroku main
   ```

### Deploying to Railway/Render

1. Connect your GitHub repository
2. Set environment variables in the dashboard
3. Deploy automatically on git push

## 🔮 Future Enhancements

- [ ] Real-time chat support
- [ ] Multi-language support
- [ ] Social media integration
- [ ] Advanced search filters
- [ ] Tour recommendations based on user preferences
- [ ] Mobile application (React Native)
- [ ] Live tour tracking
- [ ] Group booking discounts
- [ ] Loyalty points system
- [ ] Integration with more payment gateways

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Add tests for new features
- Ensure all tests pass before submitting PR

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Nishant Yadav**

- GitHub: [@nishant7360](https://github.com/nishant7360)
- Email: nishant.developer@example.com
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- Thanks to all contributors who help improve this project
- Inspired by modern travel booking platforms
- Built with guidance from the Node.js and Express communities
- Special thanks to MongoDB University for database best practices

## 📞 Support

If you have any questions or need help with setup, please:

1. Check the [Issues](https://github.com/nishant7360/WanderEdge/issues) page
2. Create a new issue if your problem isn't already listed
3. Reach out via email for urgent matters

---

<p align="center">
  <strong>Built with ❤️ for travelers around the world</strong>
</p>

<p align="center">
  Made with Node.js, Express, MongoDB, and a passion for exploration
</p>
