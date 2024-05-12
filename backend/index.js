import express from "express";
import { PORT, mongoDBurl } from "./config.js";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
import signupRoute from "./routes/SigUpRoute.js";
import userRoute from "./routes/UserRoutes.js";
import loginRoute from "./routes/LogInRoute.js";

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json());

// CORS middleware to handle outside requests
app.use(cors());

app.get('/', (request,response) => {
    console.log(request)
    return response.status(234).send('The server of events planner web application is up and running if you are seeing this!')
})

app.use('/signup', signupRoute);
app.use('/users', userRoute);
app.use('/login', loginRoute);

mongoose.connect(mongoDBurl)
.then(()=>{
    console.log("App connected to MongoDB database")

    app.listen(PORT, () => {
        console.log("Listening on PORT: ", PORT)

    })
    
})
.catch((console.error()));

