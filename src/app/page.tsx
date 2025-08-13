import Emoji from "@/components/twemoji";
import Link from "next/link";

/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-07-24 14:08:37
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-13 14:44:19
 * @Description: to be added
 */
export default function Home() {
  return (
    <div className="lg:mb-10 lg:mt-10">
      <h1 className="bg-gradient-to-r from-lime-500 to-yellow-500 bg-clip-text text-5xl font-extrabold text-transparent dark:to-blue-500">
        Welcome to My Blog
      </h1>
      <div className="prose dark:prose-dark lg:prose-lg">
        <br />
        <p>
          Welcome! I’m <b>Wen Jingxiu</b>. <Emoji kind="partyingFace" />
        </p>

        <p>
          &quot;kurous&quot; is the abbreviation I use on social media. I currently live in China{` `}
          <Emoji kind={'chinaFlag'} /> and have just graduated from the South China University of Technology with a
          bachelor&apos;s degree in Software Engineering.
        </p>

        <div className="type-wrap">
          <br />
          <p>
            This website is used to introduce myself, publish some regular blogs, document my travel
            diaries, as well as record books, movies, and music I&apos;ve experienced. Feel free to{' '}
            <Link href="/about"> get to know me better.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
