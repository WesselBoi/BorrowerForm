const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const userRouter = require('./routes/user');
const borrowFormRouter = require('./routes/borrower');
const cors = require('cors');


const connectToMongoDb = require('./connection');
const cookieParser = require('cookie-parser');

connectToMongoDb();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

const port = process.env.PORT || 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get("/" , (_,res) => {
    res.send("Hello World!");
})

app.use("/api/user" , userRouter);
app.use("/api/submitForm" , borrowFormRouter)

app.listen(port , ()=> console.log(`Server is running on port ${port}`));
