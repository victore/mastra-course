import { Mastra } from '@mastra/core';
import { financialAgent } from "./agents";

export const mastra: Mastra = new Mastra({
  agents: {
    financialAgent,
  },
});
        