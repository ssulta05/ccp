// seed.js
const mongoose = require('mongoose');
const Message = require('./models/Message');
const User = require('./models/User');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/piazzaDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Sample data
const sampleMessages = [
  { topic: 'Sample Topic 1', content: 'Sample Content 1', author: new mongoose.Types.ObjectId() },
  // Add more sample data as needed
];

// Insert data into the Message collection
Message.insertMany(sampleMessages)
  .then((result) => {
    console.log('Sample data inserted successfully:', result);
  })
  .catch((error) => {
    console.error('Error inserting sample data:', error);
  })
  .finally(() => {
    // Close the MongoDB connection
    mongoose.connection.close();
  });
