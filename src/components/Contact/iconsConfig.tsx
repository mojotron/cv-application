import { ReactNode } from 'react';
import { MdPhone, MdPlace, MdMail, MdOutlineWeb } from 'react-icons/md';
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { ContactOption } from '../../types/contactType';

export const iconsConfig: { [key in ContactOption]: ReactNode } = {
  phone: <MdPhone size={22} className="text-cyan-600" />,
  address: <MdPlace size={22} className="text-cyan-600" />,
  email: <MdMail size={22} className="text-cyan-600" />,
  github: <FaGithub size={22} className="text-cyan-600" />,
  website: <MdOutlineWeb size={22} className="text-cyan-600" />,
  twitterX: <FaSquareXTwitter size={22} className="text-cyan-600" />,
  facebook: <FaFacebook size={22} className="text-cyan-600" />,
  linkedin: <FaLinkedin size={22} className="text-cyan-600" />,
  instagram: <FaInstagram size={22} className="text-cyan-600" />,
};
