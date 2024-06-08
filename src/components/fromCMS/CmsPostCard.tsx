import Image from 'next/image';
import Link from 'next/link';
type Blog = {
  id: string;
  content: string;
  title: string;
  image?: {
    url?: string;
    height?: number;
    width?: number;
  };
  date: string;
  description: string;
};

interface Props {
  blog: Blog;
}

const CmsPostCard: React.FC<Props> = ({ blog }) => {
  return (
    <div key={blog.id}>
      <Link href={`/fromCMS/posts/${blog.id}`}>
        <Image
          src={blog.image?.url || ''}
          alt={'test'}
          width={blog.image?.width}
          height={blog.image?.height}
        />
      </Link>
      <li className='mt-2 font-bold'>
        <Link href={`/fromCMS/posts/${blog.id}`}>{blog.title}</Link>
      </li>
    </div>
  );
};

export default CmsPostCard;
