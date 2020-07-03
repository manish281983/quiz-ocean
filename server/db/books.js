const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/books', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Connected to MondoDB'))
.catch((err)=>console.log('Error=>'+err));

const bookSchema= new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    year: Number,
    isPublish: Boolean,
    category: String
});

const Books = mongoose.model('books', bookSchema); 

function CreateBook(i) {
    const book = new Books({
        name: `Book ${i}`,
        author: `Author ${i}`,
        price: 10 * i,
        year: 2000 + i,
        isPublish: false,
        category: `Category ${i}`
    });
    book.save();
}
