const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
 //data:  { type: String, required: true }, 

 authors: [],           //is this how you make an array schema???
 description: [], 
 image:  [],
 link: [],
 title: []
 // date: { type: Date, default: Date.now }

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
