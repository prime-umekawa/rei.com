// pages/blog/[id].tsx
import type { Blog } from '@/types/blog';
import cheerio from 'cheerio';
import { client } from 'libs/client';

import { renderToc } from '@/components/common/MarkdownWithToc';
import hljs from 'highlight.js';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

// APIリクエストを行うパスを指定
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get({ endpoint: 'blogs' });

  const paths = data.contents.map((content: Blog) => `/fromCMS/posts/${content.id}`);
  return { paths, fallback: false };
};

// microCMSへAPIリクエスト
export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const id = context.params?.id;
  const blog = await client.get({ endpoint: 'blogs', contentId: id });
  const $ = cheerio.load(blog.content);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: {
      blog,
      highlightedBody: $.html(),
    },
  };
};

// Props（blog）の型
type Props = {
  blog: Blog;
};

const BlogId: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blog }: Props) => {
  const blogDomToRN = (cn: string = '') => {
    return <div dangerouslySetInnerHTML={{ __html: blog.content }} className={cn} />;
  };

  const blogStringDateToDate = (date: string) => {
    const originalDate = new Date(date);

    // クライエント側とサーバー側の表記を合わてからreturnする。
    return originalDate.toLocaleDateString('ja-JP');
  };

  const tocContentList = renderToc(blog.content);

  return (
    <main>
      <div className="mt-20 flex flex-wrap justify-center">
        <div className="w-2/3 md:w-1/2">
          {/* なんかglobal.css効かないのでスタイルで直接指定する */}
          <h1
            style={{
              marginBottom: '1rem !important',
              marginTop: '2rem !important',
              paddingBottom: '0.5rem !important',
              fontSize: '1.875rem !important',
              fontWeight: '700 !important',
            }}
          >
            {blog.title}
          </h1>
          <p>{blogStringDateToDate(blog.date)}</p>
          {blogDomToRN('articles')}
        </div>
        <div className="gap ml-2 h-fit w-52 rounded-md border px-3 pt-2">
          <div className="">
            <h3 className="font-underline mb-2 font-bold">目次</h3>
            <ul>
              {tocContentList.map((data) => (
                <li key={data.id} className="border-b-dashed pb-2">
                  <a href={`#${data.text}`}>{data.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogId;
