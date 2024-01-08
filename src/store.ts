/* eslint-disable import/no-extraneous-dependencies */
import { create } from 'zustand';
import { GeneralInfoType } from './types/generalInfoType';
import { GENERAL_INFO } from './constants/generalInfoDefault';
import { ContactType } from './types/contactType';
import { CONTACT } from './constants/contactDefaults';
import { TimelineItemType } from './types/timelineItemType';
import { EDUCATION } from './constants/educationDefaults';

import type { EditTarget } from './types/editTargetType';
import { EXPERIENCE } from './constants/experienceDefaults';

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
};

export const useCvStore = create<State & Actions>()((set) => ({
  // edit
  currentEdit: null,
  setCurrentEdit: (newValue: EditTarget | null) =>
    set((state) => ({ ...state, currentEdit: newValue })),
  // General info
  generalInfo: GENERAL_INFO,
  setGeneralInfo: (newGeneralInfo: GeneralInfoType) =>
    set((state) => ({ ...state, generalInfo: newGeneralInfo })),
  // Profile image
  profileImage: 'https://i.pravatar.cc/150?img=12',
  setProfileImage: (imageUrl: string) =>
    set((state) => ({ ...state, profileImage: imageUrl })),
  // Contact
  contact: CONTACT,
  setContact: (newContact: ContactType[]) =>
    set((state) => ({ ...state, contact: newContact })),
  // Education
  education: EDUCATION,
  setEducation: (newEducation: TimelineItemType[]) =>
    set((state) => ({ ...state, education: newEducation })),
  // Experience
  experience: EXPERIENCE,
  setExperience: (newEducation: TimelineItemType[]) =>
    set((state) => ({ ...state, experience: newEducation })),
}));
