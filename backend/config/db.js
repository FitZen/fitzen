import pg from 'pg';
const { Pool } = pg;


// create connection string
// no need to import .env file
// since default env variable names are used in .env file for postgres connection
const pool = new Pool();


// create connection
const connectDB = async () => {
    try {
        const conn = await pool.connect()
        console.log(`Server is connected to DB: ${conn.connectionParameters.database}`)
    } catch (error) {
        console.error(`Error connecting DB: ${error.message}`)
        process.exit(1)
    }
};


// create query
const query = async (text, params) => {
    try {
        return await pool.query(text, params)
    } catch (error) {
        console.error(`Error executing query: ${error.message}`)
        throw error
    }
}


export {
    connectDB,
    query
};