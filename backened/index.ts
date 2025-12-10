import 'dotenv/config';
import express from 'express';
import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",  // your Vite frontend
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.options("*", cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port`, PORT)
});