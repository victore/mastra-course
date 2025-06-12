import { Mastra } from '@mastra/core';
import { personalAssistantAgent, financialAgent } from "./agents";

export const mastra: Mastra = new Mastra({
  agents: {
    personalAssistantAgent,
    financialAgent,
  },
});
        