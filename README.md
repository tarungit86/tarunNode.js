# E-Mart API

Node.js/Express e-commerce backend API with MongoDB.

## Structure

```
emartnode/
├── config/           # Database configuration
├── images/           # Product images
├── models/           # MongoDB schemas (User, Product, Order, Category)
├── routes/           # API routes (user, shop)
├── validation/       # Input validation
├── server.js         # Main server
└── Dockerfile        # Container config
```

## Setup

```bash
npm install
npm run server    # Development
npm start         # Production
```

## API

- `/api/user/*` - Authentication & user management
- `/api/shop/*` - Products & orders
- `/images/*` - Static images

## Tech Stack

Express, MongoDB, JWT, Bcrypt, Multer, Nodemailer