/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-08-13 10:48:25
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-14 10:51:27
 * @Description: to be added
 */
import Mail from '@/static/social-icons/mail.svg';
import Github from '@/static/social-icons/github.svg';
import Facebook from '@/static/social-icons/facebook.svg';
import Youtube from '@/static/social-icons/youtube.svg';
import Linkedin from '@/static/social-icons/linkedin.svg';
import Twitter from '@/static/social-icons/twitter.svg';
import Instagram from '@/static/social-icons/instagram.svg';
import Rss from '@/static/social-icons/rss.svg';

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  rss: Rss,
};

// 定义类型别名
type SocialIconKind = keyof typeof components;

const SocialIcon = ({
  kind, 
  href, 
  size 
}: {
  kind: SocialIconKind;
  href: string;
  size?: number;
}) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-400 dark:text-gray-200 h-${size} w-${size}`}
      />
    </a>
  )
};

export default SocialIcon;
