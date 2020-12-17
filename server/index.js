const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRoute');

require('./db/mongoose');
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use('/user', authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
