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
import receptionistRoutes from "./routes/receptionistRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import mealPlanRoutes from "./routes/mealPlanRoutes.js";
import goalRoutes from "./routes/goalRoutes.js";
import trainerRoutes from "./routes/trainerRoutes.js";
import physiotherapistRoutes from "./routes/physiotherapistRoutes.js";
import shakebarRoutes from "./routes/shakebarRoutes.js";
import uploadRoutes from './routes/uploadRoutes.js';
import membershipPlansRoutes from "./routes/membershipPlansRoutes.js";
import shakebarManagerRoutes from "./routes/shakebarManagerRoutes.js";
import ratingsRoutes from "./routes/ratingsRoutes.js";
import scheduleRoutes from "./routes/scheduleRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";


// start DB connection
connectDB();

// create express app
const app = express();

// allow requests from 'http://localhost:3000'
app.use(cors({
  origin: 'http://localhost:3000',
}));

// middlewares to parse raw JSON from request body (req.body) and
// urlencoded data (req.query) from URL query string (?key=value&key2=value2)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware to parse cookies from request header
app.use(cookieParser());

// routes
app.use('/api/users', userRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/receptionists', receptionistRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/mealplans', mealPlanRoutes);
app.use('/api/goals', goalRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/physiotherapists', physiotherapistRoutes);
app.use('/api/shakebar', shakebarRoutes);
app.use('/api/membershipplans', membershipPlansRoutes);
app.use('/api/shakebarmanagers', shakebarManagerRoutes);
app.use('/api/ratings', ratingsRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/requests', requestRoutes);

//upload routes
app.use('/api/upload', uploadRoutes)


// route handler for root URL ("/") to indicate the server is running
app.get('/', (req, res) => {
    res.send('Server is ready')
});

// error handlers
app.use(notFound);
app.use(errorHandler);

// set up server to listen on port 5000
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
