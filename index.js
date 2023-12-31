import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import animalRouter from "./routes/animal.route.js";

const app = express();

const port = process.env.PORT || 5000;

//routes

app.use("/api/animals/v1", animalRouter);

// app.get("/", (req, res) => {
//     res.send('The beggining...');
// })

//mongo connection
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("Connected...")})

app.listen(port, () => console.log('Server listening on port', port));