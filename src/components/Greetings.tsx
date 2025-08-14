/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-08-14 09:11:22
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-14 10:03:43
 * @Description: to be added
 */
'use client';
import React from 'react'
import Typed from 'typed.js'
import Emoji from '@/components/twemoji'
import Link from 'next/link'

const Greetings = () => {
  const el = React.useRef(null)
  const typed = React.useRef<Typed | null>(null)

  React.useEffect(() => {
    const options = {
      strings: [
        'I was born in 2002.',
        'I was raised in China.',
        'I like 🏃.',
        'I like Zelda.',
        'I like Minecraft.',
        'I like Splatoon.',
        '...',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      typed.current?.destroy()
    }
  }, [])

  return (
    <div className="lg:mb-10 lg:mt-10">
      <h1 className="bg-gradient-to-r from-lime-500 to-yellow-500 bg-clip-text text-5xl font-extrabold text-transparent dark:to-blue-500">
        Hello, Friend.
      </h1>
      <div className="prose dark:prose-dark lg:prose-lg">
        <br />
        <p>
          Welcome! I&apos;m <b>Wen Jingxiu</b>. <Emoji kind="partyingFace" />
        </p>

        <p>
          &quot;kurous&quot; is the abbreviation I use on social media. I currently live in China{` `}
          <Emoji kind={'chinaFlag'} /> and have just graduated from the South China University of Technology with a
          bachelor&apos;s degree in Software Engineering.
        </p>

        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
          <br />
          <p>
            This website is used to introduce myself, publish some regular blogs, document my travel
            diaries, as well as record books, movies, and music I&apos;ve experienced. Feel free to{' '}
            <Link href="/about"> get to know me better.</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Greetings;