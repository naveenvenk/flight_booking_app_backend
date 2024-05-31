import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"
const app = express();
const PORT = 5000;
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:4200'
}));
app.listen(PORT, () =>
    console.log(`Server is running on port: http://localhost:${PORT}`)
);