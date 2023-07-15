import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

// create connection string
const pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

// create connection
const connectDB = async () => {
    try {
        const conn = await pool.connect()
        console.log(`PostgreSQL is connected to DB: ${conn.connectionParameters.database}`)
    } catch (error) {
        console.error(`Error connecting DB: ${error.message}`)
        process.exit(1)
    }
};

// create query
const query = async (text, params) => {
    try {
        const result = await pool.query(text, params)
        return result
    } catch (error) {
        console.error(`Error executing query: ${error.message}`)
        throw error
    }
}

export {
    connectDB,
    query
};