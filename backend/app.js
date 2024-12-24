// app.js

const port = 8000;
import express from "express"
import cors from "cors"
import compare from './routes/compare.js';

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use(express.json());

app.use('/compare', compare);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
