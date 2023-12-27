/* eslint-disable import/no-extraneous-dependencies */
import { create } from 'zustand';
import { GeneralInfoType } from './types/generalInfoType';
import { GENERAL_INFO } from './constants/generalInfoDefault';

type State = {
  // General info
  generalInfo: GeneralInfoType;
  editGeneralInfo: boolean;
};
type Actions = {
  // General info
  setGeneralInfo: (newGeneralInfo: GeneralInfoType) => void;
  setEditGeneralInfo: (newValue: boolean) => void;
};

export const useCvStore = create<State & Actions>()((set) => ({
  // General info
  generalInfo: GENERAL_INFO,
  setGeneralInfo: (newGeneralInfo: GeneralInfoType) =>
    set((state) => ({ ...state, generalInfo: newGeneralInfo })),
  editGeneralInfo: false,
  setEditGeneralInfo: (newValue: boolean) =>
    set((state) => ({ ...state, editGeneralInfo: newValue })),
}));
