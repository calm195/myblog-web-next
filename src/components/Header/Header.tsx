import siteMetadata from "@/data/siteMetadata";
import Link from "next/link";
import Image from "next/image";
import headerNavLinks from "@/data/headerNavLinks";

/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-08-11 16:35:48
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-13 17:48:44
 * @Description: to be added
 */
const Header = () => {
    return (
        <header className="flex items-center justify-between py-10">
            <div>
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                    <div className="flex items-center justify-between gap-3 ">
                        <Image
                            className="rounded-md"
                            src="/static/images/logo.png"
                            alt="logo"
                            width={36}
                            height={36}
                        />
                        {typeof siteMetadata.headerTitle === "string" ? (
                            <div className="hidden px-2 text-2xl font-bold sm:block">
                                {siteMetadata.headerTitle}
                            </div>
                        ) : (
                            siteMetadata.headerTitle
                        )}
                    </div>
                </Link>
            </div>
            <div className="flex items-center text-base leading-5">
                <div className="hidden sm:block">
                    {headerNavLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="rounded-xl font-bold hover:bg-gray-100 dark:hover:bg-opacity-10 sm:p-4"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
                {/*
                    <ThemeSwitch />
                    <MobileNav />
                 */
                }
            </div>
        </header>
    );
};

export default Header;
