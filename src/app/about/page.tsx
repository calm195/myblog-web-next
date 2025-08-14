/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-08-14 09:24:44
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-14 10:34:40
 * @Description: to be added
 */
import Link from 'next/link';
import GitHubCard from '@/components/card/GitHubCard';
import Icon from '@/components/icons';

export default function About() {
  return (
    <>
      <div className="prose max-w-none dark:prose-dark lg:prose-lg">
        <p>
        Hi, my name is <b>Wen Jingxiu</b>. I&apos;m a staff now.
        </p>

        <h2>Travel Journey</h2>
        <p>
          I love traveling.
          <br />
          You can find my photo travelogues, as well as VLOGs, under my
          {` `}
          <Link href="/tags/游记">Travel Tag.</Link>
          <br />
          <b>But not now, it&apos;s still a work in progress.</b>
        </p>

        <h2>My Shelf</h2>
        <b>Books & Movies</b>
        <p>
          I watch and read all kinds of stuff.
          <br />
          You can see what I&apos;m watching or reading recently at{` `}
          <Link href="/library">Library Page.</Link>
          <br />
          <b>But not now, it&apos;s still a work in progress.</b>
        </p>
        <b>Music</b>
        <p>
          I listen to music all the time.
          <br />
          You can see what I&apos;m listening recently at{` `}
          <Link href="/music">Music Page.</Link>
          <br />
          <b>But not now, it&apos;s still a work in progress.</b>
        </p>

        <h2>About This Site</h2>
        <div>
          <GitHubCard repo="/myblog-web-next" />
          <div>
            It&apos;s hosted on <a href="https://www.aliyun.com/">aliyun</a> and built with{' '}
            <a href="https://nextjs.org">
              <i className="inline-block">
                <Icon kind="nextjs" size={6} />
              </i>
            </a>{' '}
            and{' '}
            <a href="https://tailwindcss.com">
              <i className="inline-block">
                <Icon kind="tailwindcss" size={6} />
              </i>
            </a>
            <br />I started it with 
            <a href="https://github.com/acsoto/soto-blog-nextjs"> soto-blog-nextjs</a> and{' '}
            <a href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
              Tailwind Nextjs Starter Blog
            </a>
            .
            <br />
          </div>
        </div>
      </div>
    </>
  )
};
