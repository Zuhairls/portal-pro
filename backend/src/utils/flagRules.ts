import { Candidate } from '../models/candidate.model';

export interface Flag {
  field: string;
  message: string;
  severity: 'high' | 'medium' | 'low';
}

export function evaluateFlags(candidate: Candidate): Flag[] {
  const flags: Flag[] = [];

  if (!candidate.nacScore || candidate.nacScore < 75) {
    flags.push({
      field: 'nacScore',
      message: 'NAC score is missing or below passing threshold (75).',
      severity: 'high',
    });
  }

  if (!candidate.mccqe1Score || candidate.mccqe1Score < 70) {
    flags.push({
      field: 'mccqe1Score',
      message: 'MCCQE1 score is missing or below passing threshold (70).',
      severity: 'high',
    });
  }

  if (!candidate.hasCanadianExperience) {
    flags.push({
      field: 'hasCanadianExperience',
      message: 'No Canadian experience reported.',
      severity: 'medium',
    });
  }

  if (candidate.practiceGapInYears && candidate.practiceGapInYears > 2) {
    flags.push({
      field: 'practiceGapInYears',
      message: 'Gap in practice exceeds 2 years.',
      severity: 'medium',
    });
  }

  return flags;
}
