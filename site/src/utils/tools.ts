import data from '../../../data.json';

export type ToolFlag = 'website' | 'account-required' | 'extension' | 'paid' | 'community';

export interface Tool {
  id: string;
  name: string;
  url: string;
  category: string;
  description: string;
  flags: ToolFlag[];
}

export interface Category {
  id: string;
  label: string;
}

export interface FlagDef {
  icon: string;
  label: string;
}

export const tools = data.tools as Tool[];
export const categories = data.categories as Category[];
export const flagDefs = data.flags as Record<ToolFlag, FlagDef>;
