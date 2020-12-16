require('./db/mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const authRouter = require('./routes/authRoute');

// Route Middlewares
app.use('/user', authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
