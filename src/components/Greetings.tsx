/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-08-14 09:11:22
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-14 10:39:58
 * @Description: to be added
 */
'use client';
import React from 'react';
import Typed from 'typed.js';
import Emoji from '@/components/icons/twemoji';

const Greetings = () => {
  const el = React.useRef(null);
  const typed = React.useRef<Typed | null>(null);

  React.useEffect(() => {
    const options = {
      strings: [
        '我出生于2002年',
        '我是一个纯正的广东人',
        '我喜欢跑步🏃.',
        '我喜欢塞尔达',
        '我喜欢斯普拉遁',
        '我喜欢看书',
        '我喜欢看电影',
        '我喜欢交朋友',
        '等等等等',
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
  }, []);

  return (
    <div className="lg:mb-10 lg:mt-10">
      <h1 className="bg-gradient-to-r from-lime-500 to-yellow-500 bg-clip-text text-5xl font-extrabold text-transparent dark:to-blue-500">
        你好，朋友
      </h1>
      <div className="prose dark:prose-dark lg:prose-lg">
        <br />
        <p>
          欢迎来到这里， <b>苦若</b>的博客. <Emoji kind="partyingFace" />
        </p>

        <p>
          这里是我工作闲暇之余做的一个纯分享的博客。<br />
            我期待给大家分享我在工作学习中遇到的困难，以及如何解决了这样那样的困难； 给大家分享我的读书心得呀，观影感悟啊等等。<br/>
          我是一个ENFJ，我希望我的分享能够给予大家收获与感动，这样的话我也会感到十分幸福快乐。
        </p>

        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
          <br />
          <p>
            希望我会给大家带来知识和快乐
          </p>
        </div>
      </div>
    </div>
  );
};

export default Greetings;