/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-08-14 11:31:56
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-14 11:32:36
 * @Description: to be added
 */
/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';

const CustomLink = ({ href, ...rest }: { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <Link href={href} {...rest}></Link>
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;
