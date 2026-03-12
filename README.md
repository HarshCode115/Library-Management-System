# University Library Management System API

A complete RESTful API backend for managing university library books using Node.js, Express.js, and MongoDB.

## 🚀 Features

- **Book Management**: Create, read, update, and delete books
- **Search Functionality**: Search books by title or author
- **Data Validation**: Comprehensive input validation using Mongoose
- **Error Handling**: Centralized error handling middleware
- **MongoDB Integration**: Full CRUD operations with Mongoose ODM
- **Environment Configuration**: Secure environment variable management

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (installed and running)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd library-management-api
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Update `.env` file with your configuration:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/libraryDB
NODE_ENV=development
```

5. Start MongoDB server (if not already running)

6. Run the application:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000`

## 📚 API Endpoints

### Base URL: `http://localhost:5000/api/books`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/books` | Create a new book |
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get a book by ID |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |
| GET | `/books/search` | Search books by title or author |

### Health Check
- GET `/api/health` - Check API status

## 📖 Book Schema

```javascript
{
  "title": "String (required)",
  "author": "String (required)",
  "isbn": "String (required, unique)",
  "genre": "String (required)",
  "publisher": "String (required)",
  "publicationYear": "Number",
  "totalCopies": "Number (required, min: 1)",
  "availableCopies": "Number (min: 0)",
  "shelfLocation": "String",
  "bookType": "String (enum: ['Reference', 'Circulating'])",
  "status": "String (enum: ['Available', 'Checked Out'])"
}
```

## 🔍 Search Examples

### Search by title:
```
GET /api/books/search?title=Clean Code
```

### Search by author:
```
GET /api/books/search?author=Robert Martin
```

### Search by both:
```
GET /api/books/search?title=Clean&author=Martin
```

## 📝 Postman Examples

### Create a Book
**POST** `/api/books`

```json
{
  "title": "Clean Code",
  "author": "Robert Martin",
  "isbn": "9780132350884",
  "genre": "Programming",
  "publisher": "Prentice Hall",
  "publicationYear": 2008,
  "totalCopies": 5,
  "availableCopies": 5,
  "shelfLocation": "A1",
  "bookType": "Circulating"
}
```

### Update a Book
**PUT** `/api/books/:id`

```json
{
  "title": "Clean Code (Updated Edition)",
  "totalCopies": 10,
  "availableCopies": 8
}
```

## 🚨 HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error

## 🏗️ Project Structure

```
library-management-api/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   └── bookController.js  # Business logic
├── models/
│   └── Book.js           # Mongoose schema
├── routes/
│   └── bookRoutes.js     # API routes
├── middleware/
│   └── errorMiddleware.js # Error handling
├── .env                  # Environment variables
├── server.js             # Main server file
├── package.json          # Dependencies
└── README.md            # Documentation
```

## 🚀 Deployment on Render

### Prerequisites
- Render account
- GitHub repository with your code

### Steps:

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Create Render Service**:
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure Service**:
   - **Name**: `library-management-api`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free` (to start)

4. **Environment Variables**:
   Add these in Render's environment section:
   ```
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/libraryDB?retryWrites=true&w=majority
   NODE_ENV=production
   ```

5. **Deploy**:
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Your API will be available at `https://library-management-api.onrender.com`

### MongoDB Atlas Setup (for Production):

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Add database user
4. Whitelist all IP addresses (0.0.0.0/0)
5. Get connection string and update `MONGO_URI`

## 🧪 Testing

### Using Postman:
1. Import the provided Postman collection
2. Set base URL to `http://localhost:5000`
3. Test each endpoint

### Using curl:
```bash
# Get all books
curl http://localhost:5000/api/books

# Create a book
curl -X POST http://localhost:5000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Book","author":"Test Author","isbn":"1234567890","genre":"Fiction","publisher":"Test Publisher","totalCopies":1}'

# Search books
curl "http://localhost:5000/api/books/search?title=Test"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For any queries or issues, please create an issue in the GitHub repository.
