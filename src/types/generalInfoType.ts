export type GeneralInfoType = {
  firstName: string;
  lastName: string;
  position: string;
  bio: string;
  imageUrl: string;
};

export enum GeneralInfoEnum {
  firstName = 'firstName',
  lastName = 'lastName',
  position = 'position',
  bio = 'bio',
  imageUrl = 'imageUrl',
}

export enum GeneralInfoLengths {
  name = 25,
  position = 50,
  bio = 500,
}
