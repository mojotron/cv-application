import { SkillType } from '../types/skillType';

export const MIN_SKILL = 0;
export const MAX_SKILL = 10;
export const STEP_SKILL = 1;

export const SKILLS: SkillType[] = [
  { id: crypto.randomUUID(), name: 'React', level: 6 },
  { id: crypto.randomUUID(), name: 'Typescript', level: 5 },
  { id: crypto.randomUUID(), name: 'Tailwind', level: 4 },
];
