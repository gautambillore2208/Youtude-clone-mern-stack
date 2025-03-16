

const express = require('express');
const app = express();
const port = 4000;
const cookieParser = require('cookie-parser')

const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173', // Your React app's URL
    credentials: true
  }))




app.use(express.json());
app.use(cookieParser())

// Require Database Connection
require('./Connections/conn');

// Import and Use Auth Routes
const AuthRoutes = require('./Routes/user');
const VideoRoutes = require('./Routes/video');
const CommentRoutes = require('./Routes/comment');

app.use('/auth', AuthRoutes);
app.use('/api',VideoRoutes);
app.use('/commentApi',CommentRoutes);


















// Start Server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
