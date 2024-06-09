import Header from '@/components/common/Header';
import CmsPostCard from '@/components/fromCMS/CmsPostCard';
import type { Blog } from '@/types/blog'; // srcから見た絶対パスで指定
import { client } from 'libs/client'; // srcから見た絶対パスで指定
import type { InferGetStaticPropsType, NextPage } from 'next';

// microCMSへAPIリクエスト
export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: 'blogs' });
  return {
    props: {
      blogs: blog.contents,
    },
  };
};

// Props（blogs）の型
type Props = {
  blogs: Blog[];
};

const fromCMS: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blogs }: Props) => {
  return (
    <>
      <Header loginFlag={true} />
      <div className="flex justify-center px-12">
        <div className="mt-14 max-w-4xl">
          <div className="my-8">
            <h1 className='mt-8 text-center flex justify-center font-bold text-4xl border rounded-md py-3'>看護師ブログ</h1>
            <div className="mt-4 grid list-none grid-cols-3 gap-x-4">
              {blogs.map((blog) => (
                <CmsPostCard blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default fromCMS;
