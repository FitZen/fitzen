import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB, query } from "./config/db.js";
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";

// start DB connection
connectDB();

// create express app
const app = express();

// user routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

// error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port: ${port}`));