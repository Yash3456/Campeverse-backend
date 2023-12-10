import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from "cors";
import Connection from './Database/db.js';
import router from './Routes/routes.js';
import cookieParser from 'cookie-parser';


const app = express();
dotenv.config();
app.use(cookieParser());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/',router);

 const Username = process.env.DB_USERNAME;
 const password = process.env.DB_PASSWORD;

Connection(Username,password);

app.listen(8000,()=> console.log(`Server is running Sucessfully on port 8000`));