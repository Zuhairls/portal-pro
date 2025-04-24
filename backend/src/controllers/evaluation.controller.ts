import express from 'express';
import { evaluateFlags } from '../utils/flagRules';
import { Candidate } from '../models/candidate.model';

export const evaluateRouter = express.Router();

evaluateRouter.post('/', (req, res) => {
  const candidate: Candidate = req.body;

  try {
    const flags = evaluateFlags(candidate);
    res.status(200).json({ flags });
  } catch (error) {
    res.status(500).json({ error: 'Failed to evaluate flags.' });
  }
});

