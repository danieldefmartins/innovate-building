export interface ProposalData {
  id: string;
  clientName: string;
  projectAddress: string;
  date: string;
  validUntil: string;
  projectType: string;
  estimatedTimeline: string;
  lineItems: { title: string; description: string }[];
  totalPrice: string;
  notes?: string[];
}

import { clement81 } from "./81-clement-ct";

export const proposals: Record<string, ProposalData> = {
  "81-clement-ct": clement81,
};

export function getProposalById(id: string): ProposalData | undefined {
  return proposals[id];
}
