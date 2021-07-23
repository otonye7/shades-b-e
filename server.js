import express from 'express';
import { readdirSync } from 'fs';
import cors from 'cors';
import mongoose from 'mongoose';
require('dotenv').config()
const morgan = require("morgan");

const app = express();



mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .catch(err => console.log(err));


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))

app.listen(process.env.PORT || 8000, () => {
  console.log(`server is running on port 8000`)
})