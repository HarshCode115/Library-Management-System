const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  author: {
    type: String,
    required: [true, 'Please add an author'],
    trim: true,
    maxlength: [100, 'Author name cannot be more than 100 characters']
  },
  isbn: {
    type: String,
    required: [true, 'Please add an ISBN'],
    unique: true,
    trim: true,
    match: [/^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/, 'Please enter a valid ISBN']
  },
  genre: {
    type: String,
    required: [true, 'Please add a genre/category'],
    trim: true,
    maxlength: [50, 'Genre cannot be more than 50 characters']
  },
  publisher: {
    type: String,
    required: [true, 'Please add a publisher'],
    trim: true,
    maxlength: [100, 'Publisher name cannot be more than 100 characters']
  },
  publicationYear: {
    type: Number,
    min: [1000, 'Publication year must be at least 1000'],
    max: [new Date().getFullYear() + 1, 'Publication year cannot be in the distant future']
  },
  totalCopies: {
    type: Number,
    required: [true, 'Please add total copies'],
    min: [1, 'Total copies must be at least 1'],
    default: 1
  },
  availableCopies: {
    type: Number,
    min: [0, 'Available copies cannot be negative'],
    default: function() {
      return this.totalCopies;
    }
  },
  shelfLocation: {
    type: String,
    trim: true,
    maxlength: [20, 'Shelf location cannot be more than 20 characters']
  },
  bookType: {
    type: String,
    enum: ['Reference', 'Circulating'],
    default: 'Circulating'
  },
  status: {
    type: String,
    enum: ['Available', 'Checked Out'],
    default: 'Available'
  }
}, {
  timestamps: true
});

// Index for search functionality
bookSchema.index({ title: 'text', author: 'text' });

// Ensure available copies doesn't exceed total copies
bookSchema.pre('save', function(next) {
  if (this.availableCopies > this.totalCopies) {
    this.availableCopies = this.totalCopies;
  }
  next();
});

// Update status based on available copies
bookSchema.pre('save', function(next) {
  if (this.availableCopies === 0) {
    this.status = 'Checked Out';
  } else if (this.availableCopies > 0 && this.status === 'Checked Out') {
    this.status = 'Available';
  }
  next();
});

module.exports = mongoose.model('Book', bookSchema);
