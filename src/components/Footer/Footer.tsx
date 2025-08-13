import SocialIcon from "@/components/social-icons";
import Link from "next/link";
import siteMetadata from "@/data/siteMetadata";

/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-08-11 15:45:24
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-13 15:33:27
 * @Description: Footer component for the blog
 */
const Footer = () => {
    
    const iconSize = 8;

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer>
            <div className="mt-16 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    <SocialIcon kind="instagram" href={siteMetadata.instagram} size={iconSize} />
                    <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={iconSize} />
                    <SocialIcon kind="github" href={siteMetadata.github} size={iconSize} />
                    <SocialIcon kind="rss" href="/feed.xml" size={iconSize} />
                </div>
                <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>{`Copyright © ${getCurrentYear()}`}</div>
                    <div>{` • `}</div>
                    <Link href="/">{siteMetadata.title}</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;