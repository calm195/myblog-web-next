import CPU from './cpu.svg';
import Django from './django.svg';
import Java from './java.svg';
import Mysql from './mysql.svg';
import NextJS from './nextjs.svg';
import Nginx from './nginx.svg';
import Pets from './pets.svg';
import ReactIcon from './react.svg';
import Tailwindcss from './tailwindcss.svg';
import Typescript from './typescript.svg';

const components = {
    cpu: CPU,
    django: Django,
    java: Java,
    mysql: Mysql,
    nextjs: NextJS,
    nginx: Nginx,
    pets: Pets,
    react: ReactIcon,
    tailwindcss: Tailwindcss,
    typescript: Typescript,
};

type IconKind = keyof typeof components;

const Icon = ({
  kind,
  size
}: {
  kind: IconKind;
  size?: number;
}) => {
  const IconSvg = components[kind];

  return (
    <IconSvg className={`fill-current text-gray-700 dark:text-gray-200 h-${size} w-${size}`} />
  );
};

export default Icon;
