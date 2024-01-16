/* eslint-disable import/no-extraneous-dependencies */
import { create } from 'zustand';
import type { GeneralInfoType } from './types/generalInfoType';
import { GENERAL_INFO } from './constants/generalInfoDefault';
import type { ContactType } from './types/contactType';
import { CONTACT } from './constants/contactDefaults';
import type { TimelineItemType } from './types/timelineItemType';
import { EDUCATION } from './constants/educationDefaults';
import type { EditTarget } from './types/editTargetType';
import { EXPERIENCE } from './constants/experienceDefaults';
import type { SkillType } from './types/skillType';
import { SKILLS } from './constants/skillDefaults';
import { localStorageHelpers } from './utils/localStorage';

type State = {
  // edit
  currentEdit: EditTarget | null;
  // General info
  generalInfo: GeneralInfoType;
  // Profile image
  profileImage: string;
  // Contact
  contact: ContactType[];
  // Education
  education: TimelineItemType[];
  // Experience
  experience: TimelineItemType[];
  // Skills
  skills: SkillType[];
  selectedSkill: SkillType | null;
};
type Actions = {
  // edit
  setCurrentEdit: (newValue: EditTarget | null) => void;
  // General info
  setGeneralInfo: (newGeneralInfo: GeneralInfoType) => void;
  // Profile image
  setProfileImage: (imageUrl: string) => void;
  // Contact
  setContact: (newContact: ContactType[]) => void;
  // Education
  setEducation: (newEducation: TimelineItemType[]) => void;
  // Experience
  setExperience: (newEducation: TimelineItemType[]) => void;
  // Skills
  setSkills: (newSkills: SkillType[]) => void;
  setSelectedSkill: (skill: SkillType | null) => void;
};

const localStore = localStorageHelpers<State>('cv-builder');
const localState = localStore.read();

const saveAndReturnState = (state: State) => {
  localStore.write(state);
  return state;
};

export const useCvStore = create<State & Actions>()((set) => ({
  // edit
  currentEdit: localState ? localState.currentEdit : null,
  setCurrentEdit: (newValue: EditTarget | null) =>
    set((state) => saveAndReturnState({ ...state, currentEdit: newValue })),
  // General info
  generalInfo: localState ? localState.generalInfo : GENERAL_INFO,
  setGeneralInfo: (newGeneralInfo: GeneralInfoType) =>
    set((state) =>
      saveAndReturnState({ ...state, generalInfo: newGeneralInfo }),
    ),
  // Profile image
  profileImage: localState
    ? localState.profileImage
    : 'https://i.pravatar.cc/150?img=12',
  setProfileImage: (imageUrl: string) =>
    set((state) => saveAndReturnState({ ...state, profileImage: imageUrl })),
  // Contact
  contact: localState ? localState.contact : CONTACT,
  setContact: (newContact: ContactType[]) =>
    set((state) => saveAndReturnState({ ...state, contact: newContact })),
  // Education
  education: localState ? localState.education : EDUCATION,
  setEducation: (newEducation: TimelineItemType[]) =>
    set((state) => saveAndReturnState({ ...state, education: newEducation })),
  // Experience
  experience: localState ? localState.experience : EXPERIENCE,
  setExperience: (newEducation: TimelineItemType[]) =>
    set((state) => saveAndReturnState({ ...state, experience: newEducation })),
  // Skills
  skills: localState ? localState.skills : SKILLS,
  selectedSkill: localState ? localState.selectedSkill : null,
  setSkills: (newSkills: SkillType[]) =>
    set((state) => saveAndReturnState({ ...state, skills: newSkills })),
  setSelectedSkill: (skill: SkillType | null) =>
    set((state) => saveAndReturnState({ ...state, selectedSkill: skill })),
}));
