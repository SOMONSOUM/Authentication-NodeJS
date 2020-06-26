import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan'
import helmet from 'helmet'
import { routes } from './Routes/index';

const app = express();
const PORT = 3000;

// setup middleware
app.use(express.json());
app.use(helmet())
app.use(bodyParser({ extended: true }));
app.use(logger('dev'));

// setup routes
app.use(routes);

// server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
