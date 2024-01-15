export enum ContactOption {
  phone = 'phone',
  address = 'address',
  email = 'email',
  github = 'github',
  website = 'website',
  x = 'x',
  facebook = 'facebook',
  linkedin = 'linkedin',
  instagram = 'instagram',
}

export type ContactType = {
  // [key in ContactOption]?: string;
  name: keyof typeof ContactOption;
  value: string;
  // phone?: string;
  // address?: string;
  // email?: string;
  // github?: string;
  // website?: string;
  // x?: string;
  // facebook?: string;
  // linkedin?: string;
  // instagram?: string;
};
