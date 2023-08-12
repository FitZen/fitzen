import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";
import announcementRoutes from "./routes/announcementRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";

// start DB connection
connectDB();

// create express app
const app = express();

// Allow requests from 'http://localhost:3000'
app.use(cors({
  origin: 'http://localhost:3000',
}));

// middlewares to parse raw JSON from request body (req.body) and
// urlencoded data (req.query) from URL query string (?key=value&key2=value2)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware to parse cookies from request header
app.use(cookieParser());

// user routes
app.use('/api/users', userRoutes);
//announcement routes
app.use('/api/announcements', announcementRoutes);
//complaint routes
app.use('/api/complaints', complaintRoutes);
//member routes
app.use('/api/members', memberRoutes);

// route handler for root URL ("/") to indicate the server is running
app.get('/', (req, res) => {
    res.send('Server is ready')
});

// error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
