import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { evaluateRouter } from './controllers/evaluation.controller';

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Mount our flagging route
app.use('/evaluate', evaluateRouter);

export default app;
