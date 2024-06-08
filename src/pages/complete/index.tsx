import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/common/Layout';
import Container from '@/components/common/parts/Container';
import { Routes } from '@/lib/data/routes';

const CompletePage: NextPage = () => {
  return (
    <Layout path={Routes.COMPLETE.url} title={Routes.COMPLETE.title} noindex>
      <Container maxWidth="max-w-xl" className="my-20 md:my-32">
        <div className="flex flex-col items-center">

          <div className="mt-20">
            <h1 className="text-center text-2xl font-bold sm:text-3xl">
              お問い合わせ
              <br className="block md:hidden" />
              ありがとうございます
            </h1>
            <p className="mt-10">
              メールの送信が完了しました。メールにてご返信させていただきますので、今しばらくお待ちください。
            </p>

            <div className="mt-20 flex justify-center">
              <Link href={Routes.INDEX.url} className="text-primary duration-300 hover:opacity-70">
                ← TOPにもどる
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default CompletePage;
