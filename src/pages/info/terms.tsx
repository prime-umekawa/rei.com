import fs from 'fs';
import path from 'path';

import { GetStaticProps, NextPage } from 'next';

import Layout from '@/components/common/Layout';
import Container from '@/components/common/parts/Container';
import { Routes } from '@/lib/data/routes';
import processor from '@/lib/util/processor';
import styles from '@/styles/terms.module.scss';

type TermsPageProps = {
  fileContents: string;
};

const TermsPage: NextPage<TermsPageProps> = (props) => {
  const { fileContents } = props;
  return (
    <Layout
      path={Routes.TERMS.url}
      title={Routes.TERMS.title}
      description={Routes.TERMS.description}
    >
      <div className="bg-[url('/util/graph_paper.png')] py-20">
        <Container maxWidth="max-w-3xl">
          {/* タイトル */}
          <h1 className="mb-20 text-center text-2xl font-bold sm:text-3xl">{Routes.TERMS.title}</h1>

          {/* 本文 */}
          <div className={styles.terms}>{processor.processSync(fileContents).result}</div>
        </Container>
      </div>
    </Layout>
  );
};

// マークダウンファイルを読み込んだものを返す
export const getStaticProps: GetStaticProps<TermsPageProps> = () => {
  // マークダウンファイルのパスの取得
  const termsDirectory = path.join(process.cwd(), 'src/lib/data/policy/terms.md');
  // マークダウンファイルの読み込み
  const fileContents = fs.readFileSync(termsDirectory, 'utf8');
  return {
    props: { fileContents },
  };
};

export default TermsPage;
