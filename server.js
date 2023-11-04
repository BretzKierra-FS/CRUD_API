const express = require('express');
require('dotenv').config();
const connectDB = require('../CRUD_API/app/db/config');
const cors = require('cors');
const path = require('path');
const app = express();
const routeHandler = require('../CRUD_API/app/routes/index');

connectDB();
const PORT = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/', routeHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
