import express from "express";
import "./database/connection.js"
import "dotenv/config";
import animalRouter from "./routes/animal.route.js";

const app = express();

const port = process.env.PORT || 5000;

//routes

app.use(express.json());
app.use("/api/animals/v1", animalRouter);


app.listen(port, () => console.log('Server listening on port', port));