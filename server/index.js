const express = require('express');
require('./db/mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');

const app = express();
const PORT = process.env.PORT || 8000;

// Register Mdiddleware
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
