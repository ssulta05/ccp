const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Get all messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new message
router.post('/messages', async (req, res) => {
  const { topic, content, author } = req.body;

  const message = new Message({
    topic,
    content,
    author,
  });

  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add more routes as needed

module.exports = router;
