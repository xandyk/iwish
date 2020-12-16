const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./db/mongoose');
const PORT = process.env.PORT || 8000;
const authRouter = require('./routes/authRoute');

app.use(bodyParser.json());
app.use('/', authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
