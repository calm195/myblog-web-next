import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';
import Link from 'next/link';

const GitHubCard = ({ repo }: { repo: string }) => {
  const img = 'https://opengraph.githubassets.com/1/calm195' + repo;
  const link = siteMetadata.github + repo;
  return (
    <Link href={link}>
      <Image
        className="overflow-hidden rounded-xl shadow-2xl hover:scale-105 lg:w-1/2"
        src={img}
        alt={repo}
        width={1200}
        height={600}
        quality={100}
      />
    </Link>
  );
};

export default GitHubCard;
