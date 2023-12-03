const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // import cors
const app = express();

app.use(cors()); // use cors middleware

const port = 3001;

mongoose.connect('mongodb://mongo:27017/empdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.listen(port, () => console.log(`Backend server is running on port ${port}`));