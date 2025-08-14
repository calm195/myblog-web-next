/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-08-13 14:07:59
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-14 10:22:48
 * @Description: to be added
 */
import Dog from './dog.svg';
import ChinaFlag from './china-flag.svg';
import Congrats from './congrats.svg';
import PartyingFace from './partying-face.svg';

const components = {
  dog: Dog,
  chinaFlag: ChinaFlag,
  congrats: Congrats,
  partyingFace: PartyingFace,
};

type EmojiKind = keyof typeof components;

const Emoji = ({ 
  kind
}: {
  kind: EmojiKind
}) => {
  const EmojiSvg = components[kind];

  return (
    <i className={`inline-block`}>
      <EmojiSvg className={`h-4 w-4`} />
    </i>
  );
};

export default Emoji;
