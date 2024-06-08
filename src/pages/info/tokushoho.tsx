import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/common/Layout';
import Container from '@/components/common/parts/Container';
import { Routes } from '@/lib/data/routes';

const TokushohoPage: NextPage = () => {
  return (
    <Layout path={Routes.TOKUSHOHO.url} title={Routes.TOKUSHOHO.title}>
      <div className="bg-[url('/util/graph_paper.png')] py-20">
        <Container maxWidth="max-w-3xl">
          <h1 className="mb-20 text-center text-2xl font-bold sm:text-3xl">
            {Routes.TOKUSHOHO.title}
          </h1>

          <StyledTokushohoRow title="アプリ名">
            <p className="text-base">プライム</p>
          </StyledTokushohoRow>
          <StyledTokushohoRow title="販売事業者名（会社名）">
            <p className="text-base">株式会社リテリア</p>
          </StyledTokushohoRow>
          <StyledTokushohoRow title="代表者名">
            <p className="text-base">代表取締役 西川信行</p>
          </StyledTokushohoRow>
          <StyledTokushohoRow title="所在地">
            <p className="text-base">
              〒154－0024
              <br />
              東京都世田谷区三軒茶屋2-2-13
            </p>
          </StyledTokushohoRow>
          <StyledTokushohoRow title="お問い合わせ">
            <div>
              <p className="text-base">
                <Link href={Routes.CONTACT.url} className="text-base text-primary underline">
                  こちら
                </Link>
                からお問い合わせください。
              </p>
              <p className="mt-2 text-sm">
                ※弊社電話番号はお客様からのご要望に基づき遅滞なく電子メールにて通知いたします。弊社電話番号が必要なお客様は上記フォームよりお申し出ください。
              </p>
            </div>
          </StyledTokushohoRow>
          <StyledTokushohoRow title="販売価格">
            <p className="text-base">
              プラン選択の際に画面に表示されます。
              <br />
              消費税は税込みとして表示しております。
            </p>
          </StyledTokushohoRow>
          <StyledTokushohoRow title="販売価格以外でお客様に発生する金銭">
            <p className="text-base">
              当サイトのページの閲覧、素材のダウンロード等に必要となるインターネット接続料金、通信料金は、お客様のご負担となります。
            </p>
          </StyledTokushohoRow>
          <StyledTokushohoRow title="お支払方法">
            <div>
              <p className="text-base">以下のお支払方法をご利用いただけます。</p>
              <ul className="mt-2 list-disc text-base [&>li]:ml-8">
                <li>各種クレジットカード</li>
              </ul>
            </div>
          </StyledTokushohoRow>
          <StyledTokushohoRow title="申込方法">
            <p className="text-base">
              プランを選択、お支払い方法を設定しアカウント作成を完了した時点でお申し込み完了となります。
            </p>
          </StyledTokushohoRow>
          <StyledTokushohoRow title="利用が可能となる時期">
            <p className="text-base">
              特別な定めを置いている場合を除き、お支払い手続き完了後直ちにご利用いただけます。
            </p>
          </StyledTokushohoRow>
          <StyledTokushohoRow title="動作環境">
            <p className="text-base">対応ブラウザ一覧</p>
            <h4 className="mt-4 text-base">Windows</h4>
            <ul className="mt-2 list-disc text-base [&>li]:ml-8">
              <li>Google Chrome（最新版）</li>
            </ul>
            <h4 className="mt-4 text-base">Mac</h4>
            <ul className="mt-2 list-disc text-base [&>li]:ml-8">
              <li>Google Chrome（最新版）</li>
              <li>Safari（最新版）</li>
            </ul>
            <h4 className="mt-4 text-base">Android</h4>
            <ul className="mt-2 list-disc text-base [&>li]:ml-8">
              <li>Google Chrome（最新版）</li>
            </ul>
            <h4 className="mt-4 text-base">iOS</h4>
            <ul className="mt-2 list-disc text-base [&>li]:ml-8">
              <li>Google Chrome（最新版）</li>
              <li>Safari（最新版）</li>
            </ul>
          </StyledTokushohoRow>
          <StyledTokushohoRow title="返品・キャンセル">
            <p className="text-base">1. お客様のご都合による返品・キャンセル</p>
            <p className="mt-2 text-base">
              商品の性質上、ご購入後の返金・返品はできかねます。あらかじめ月額コース対象コンテンツ、利用環境・対応機種および各アプリケーションの利用環境・対応機種をよくお確かめの上、お申込み、もしくはご購入願います。
            </p>
            <p className="mt-4 text-base">2. アプリケーションの瑕疵に基づく返品（キャンセル）</p>
            <p className="mt-2 text-base">
              アプリケーションに瑕疵が発見されたときは、瑕疵を修補したアプリケーションをアプリケーションのバージョンアップ又はその他適切な方法で提供いたします。
            </p>
          </StyledTokushohoRow>
          <StyledTokushohoRow title="特別条件">
            <h4 className="text-base">1. クーリングオフについて</h4>
            <p className="mt-2 text-base">
              特定商取引法に規定されているクーリングオフが適用されるサービスではありません。
            </p>
            <h4 className="mt-4 text-base">2. 定期課金方式の注意事項</h4>
            <p className="mt-2 text-base">
              申し込み月とその翌月は無料でお使いいただけます(最大60日)。申し込み翌々月1日にクレジットカードにて当月分の金額が決済されます。
            </p>
            <p className="mt-2 text-sm">
              例）2月7日に利用開始の場合、3月31日まで無料。4月1日に4月分が決済されます。
            </p>
            <p className="mt-2 text-base">
              月の途中で解約をお申し込みの場合もその月の月末までの料金が発生し、日割精算等による返金を含めた一切の返金は行われません。この場合、サービスも契約満了日まで提供されます。
            </p>
            <h4 className="mt-4 text-base">3. プランのアップグレード、ダウングレードについて</h4>
            <h5 className="mt-4 text-base">a. アップグレード</h5>
            <p className="mt-2 text-base">
              プランのアップグレードは、いつでも行なうことができ、即時で反映が可能です。ご利用料金が日割りで請求されます。
            </p>
            <p className="mt-2 text-sm">
              例：4月15日にアップグレードした場合、4月1日-15日の料金がアップグレード前の料金で計算され、残りの4月16日から4月30日の料金がアップグレード後の料金で計算されます。アップグレード時には、既に支払った金額と計算された金額の差額が請求されます。
            </p>
            <h5 className="mt-4 text-base">b. ダウングレード</h5>
            <p className="mt-2 text-base">
              ダウングレードはいつでも行うことができ、即時に反映されます。
            </p>
          </StyledTokushohoRow>
        </Container>
      </div>
    </Layout>
  );
};

export default TokushohoPage;

type StyledTokushohoRowProps = {
  title: string;
  children: React.ReactNode;
};

const StyledTokushohoRow = (props: StyledTokushohoRowProps) => {
  const { title, children } = props;

  return (
    <div className="flex flex-col gap-y-4 border-b border-gray-300 py-8 sm:flex-row sm:gap-x-8 sm:gap-y-0">
      <h3 className="w-full shrink-0 text-base font-bold sm:w-48">{title}</h3>
      <div>{children}</div>
    </div>
  );
};
