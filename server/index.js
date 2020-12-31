const express = require('express');
require('./db/mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const messageRoute = require('./routes/messageRoute');

const app = express();
const PORT = process.env.PORT;

// Register Mdiddleware
app.use((req, res, next) => {
  next();
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoute);
app.use(messageRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const Message = require('./models/messageModel');
const User = require('./models/userModel');
