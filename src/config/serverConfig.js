import dotenv from 'dotenv'
dotenv.config(); // Load environvent variables from .env file

export const PORT = process.envPORT || 3000; //Define a post variable
