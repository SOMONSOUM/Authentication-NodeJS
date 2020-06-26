import express, { Request, Response, NextFunction } from 'express';
import { routes } from './Routes/index';

const app = express();
const PORT = 3000;

// setup middleware
app.use(express.json());

// setup routes
app.use(routes);

// server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
