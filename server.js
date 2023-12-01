const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const messagesRouter = require('./routes/messages');
app.use('/api', messagesRouter);

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/piazzaDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define your routes here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
