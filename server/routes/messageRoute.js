const express = require('express');
const Message = require('../models/messageModel');
const auth = require('../middleware/auth');
const router = new express.Router();

// Create new message -- TESTED
router.post('/messages', auth, async (req, res) => {
  const message = new Message({ ...req.body, owner: req.user._id });

  try {
    await message.save();
    res.status(201).send(message);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// GET all messages -- TESTED
router.get('/messages', auth, async (req, res) => {
  try {
    const messages = await Message.find({});
    res.send(messages);
  } catch (e) {
    res.status(500).send();
  }
});

// DELETE message -- TESTED
router.delete('/messages/:id', auth, async (req, res) => {
  try {
    const message = await Message.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
    if (!message) {
      res.status(404).send();
    }
    res.send(message);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
