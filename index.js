const express = require("express"),
    path = require("path"),
    app = express(),
    port = process.env.PORT || 3000; // Si está definido en el entorno, usarlo. Si no, el 3000
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const cors = require('cors');
// Connect to database
connectDB();

app.use(cors());
app.listen(port, console.log(`Server running on port ${port}`));
