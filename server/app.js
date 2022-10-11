const express = require ('express');
const app = express();
const cors = require('cors');
const  bodyParser = require('body-parser');
const booksRoute = require('./routes/books');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser .json());
app.use('/books', booksRoute)

mongoose.connect('mongodb+srv://mernBookList:hsBWMo33z5IqtdQa@cluster0.1wy3joh.mongodb.net/?retryWrites=true&w=majority',(event)=>{
console.log('connect to MongoDB')
}).catch(e=> console.log(e));


app.get ('/', (req, res)=>{
    res.send('hello!')
})

app.listen(4000);
