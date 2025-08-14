import CPU from '@/static/icons/CPU.svg';
import Django from '@/static/icons/django.svg';
import Java from '@/static/icons/java.svg';
import Mysql from '@/static/icons/mysql.svg';
import NextJS from '@/static/icons/nextjs.svg';
import Nginx from '@/static/icons/nginx.svg';
import Pets from '@/static/icons/pets.svg';
import ReactIcon from '@/static/icons/react.svg';
import Tailwindcss from '@/static/icons/tailwindcss.svg';
import Typescript from '@/static/icons/typescript.svg';

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
