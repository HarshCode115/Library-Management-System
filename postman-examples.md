# Postman Collection Examples

## Base URL
```
http://localhost:5000
```

## 1. Health Check
**GET** `/api/health`

**Response:**
```json
{
  "success": true,
  "message": "Library Management API is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## 2. Create a Book
**POST** `/api/books`

**Headers:**
```
Content-Type: application/json
```

**Body (raw JSON):**
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

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "title": "Clean Code",
    "author": "Robert Martin",
    "isbn": "9780132350884",
    "genre": "Programming",
    "publisher": "Prentice Hall",
    "publicationYear": 2008,
    "totalCopies": 5,
    "availableCopies": 5,
    "shelfLocation": "A1",
    "bookType": "Circulating",
    "status": "Available",
    "_id": "65a1b2c3d4e5f6789012345",
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z",
    "__v": 0
  }
}
```

## 3. Get All Books
**GET** `/api/books`

**Response (200 OK):**
```json
{
  "success": true,
  "count": 2,
  "data": [
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
      "bookType": "Circulating",
      "status": "Available",
      "_id": "65a1b2c3d4e5f6789012345",
      "createdAt": "2024-01-01T12:00:00.000Z",
      "updatedAt": "2024-01-01T12:00:00.000Z",
      "__v": 0
    },
    {
      "title": "The Pragmatic Programmer",
      "author": "Andrew Hunt",
      "isbn": "9780201616224",
      "genre": "Programming",
      "publisher": "Addison-Wesley",
      "publicationYear": 1999,
      "totalCopies": 3,
      "availableCopies": 2,
      "shelfLocation": "B2",
      "bookType": "Circulating",
      "status": "Available",
      "_id": "65a1b2c3d4e5f6789012346",
      "createdAt": "2024-01-01T12:05:00.000Z",
      "updatedAt": "2024-01-01T12:05:00.000Z",
      "__v": 0
    }
  ]
}
```

## 4. Get Book by ID
**GET** `/api/books/65a1b2c3d4e5f6789012345`

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "title": "Clean Code",
    "author": "Robert Martin",
    "isbn": "9780132350884",
    "genre": "Programming",
    "publisher": "Prentice Hall",
    "publicationYear": 2008,
    "totalCopies": 5,
    "availableCopies": 5,
    "shelfLocation": "A1",
    "bookType": "Circulating",
    "status": "Available",
    "_id": "65a1b2c3d4e5f6789012345",
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z",
    "__v": 0
  }
}
```

## 5. Update a Book
**PUT** `/api/books/65a1b2c3d4e5f6789012345`

**Headers:**
```
Content-Type: application/json
```

**Body (raw JSON):**
```json
{
  "title": "Clean Code (Updated Edition)",
  "totalCopies": 10,
  "availableCopies": 8
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "title": "Clean Code (Updated Edition)",
    "author": "Robert Martin",
    "isbn": "9780132350884",
    "genre": "Programming",
    "publisher": "Prentice Hall",
    "publicationYear": 2008,
    "totalCopies": 10,
    "availableCopies": 8,
    "shelfLocation": "A1",
    "bookType": "Circulating",
    "status": "Available",
    "_id": "65a1b2c3d4e5f6789012345",
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-01T12:15:00.000Z",
    "__v": 0
  }
}
```

## 6. Delete a Book
**DELETE** `/api/books/65a1b2c3d4e5f6789012345`

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Book deleted successfully"
}
```

## 7. Search Books by Title
**GET** `/api/books/search?title=Clean`

**Response (200 OK):**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "title": "Clean Code (Updated Edition)",
      "author": "Robert Martin",
      "isbn": "9780132350884",
      "genre": "Programming",
      "publisher": "Prentice Hall",
      "publicationYear": 2008,
      "totalCopies": 10,
      "availableCopies": 8,
      "shelfLocation": "A1",
      "bookType": "Circulating",
      "status": "Available",
      "_id": "65a1b2c3d4e5f6789012345",
      "createdAt": "2024-01-01T12:00:00.000Z",
      "updatedAt": "2024-01-01T12:15:00.000Z",
      "__v": 0
    }
  ]
}
```

## 8. Search Books by Author
**GET** `/api/books/search?author=Robert`

**Response (200 OK):**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "title": "Clean Code (Updated Edition)",
      "author": "Robert Martin",
      "isbn": "9780132350884",
      "genre": "Programming",
      "publisher": "Prentice Hall",
      "publicationYear": 2008,
      "totalCopies": 10,
      "availableCopies": 8,
      "shelfLocation": "A1",
      "bookType": "Circulating",
      "status": "Available",
      "_id": "65a1b2c3d4e5f6789012345",
      "createdAt": "2024-01-01T12:00:00.000Z",
      "updatedAt": "2024-01-01T12:15:00.000Z",
      "__v": 0
    }
  ]
}
```

## 9. Error Responses

### Book Not Found (404)
```json
{
  "success": false,
  "message": "Book not found"
}
```

### Validation Error (400)
```json
{
  "success": false,
  "message": "Please add a title, Please add an author"
}
```

### Duplicate ISBN (400)
```json
{
  "success": false,
  "message": "Duplicate field value entered"
}
```

### Invalid Book ID (404)
```json
{
  "success": false,
  "message": "Resource not found"
}
```

## Collection Import

You can import these examples as a Postman collection:

1. Open Postman
2. Click "Import" → "Raw text"
3. Copy and paste the JSON below:

```json
{
  "info": {
    "name": "Library Management API",
    "description": "API for University Library Management System",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseUrl}}/api/health",
          "host": ["{{baseUrl}}"],
          "path": ["api", "health"]
        }
      }
    },
    {
      "name": "Create Book",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"title\": \"Clean Code\",\n  \"author\": \"Robert Martin\",\n  \"isbn\": \"9780132350884\",\n  \"genre\": \"Programming\",\n  \"publisher\": \"Prentice Hall\",\n  \"publicationYear\": 2008,\n  \"totalCopies\": 5,\n  \"availableCopies\": 5,\n  \"shelfLocation\": \"A1\",\n  \"bookType\": \"Circulating\"\n}"
        },
        "url": {
          "raw": "{{baseUrl}}/api/books",
          "host": ["{{baseUrl}}"],
          "path": ["api", "books"]
        }
      }
    },
    {
      "name": "Get All Books",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseUrl}}/api/books",
          "host": ["{{baseUrl}}"],
          "path": ["api", "books"]
        }
      }
    }
  ],
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:5000"
    }
  ]
}
```
