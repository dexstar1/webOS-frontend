import React from 'react';
import Image from 'next/image';
import Twitter from '../../../public/assets/social_twitter.png';
import Discord from '../../../public/assets/social_discord.png';
import Google from '../../../public/assets/social_google.png';
import Facebook from '../../../public/assets/social_facebook.png';
import Instagram from '../../../public/assets/social_instagram.png';

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="https://twitter" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          src={Twitter}
          alt="Twitter"
          widht={20}
          height={20}
        />
      </a>
      <a href="https://facebook" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          src={Facebook}
          alt="facebook"
          widht={20}
          height={20}
        />
      </a>
      <a href="https://instagram" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          src={Instagram}
          alt="instagram"
          widht={20}
          height={20}
        />
      </a>
      <a href="https://discord" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          src={Discord}
          alt="discord"
          widht={20}
          height={20}
        />
      </a>
      <a href="https://google" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? 'brightness-0' : ''} hover:opacity-50`}
          src={Google}
          alt="google"
          widht={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
