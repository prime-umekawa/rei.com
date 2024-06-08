import { NextPage } from 'next';

import Layout from '@/components/common/Layout';
import ActionButtons from '@/components/lp/ActionButtons';
import LPForm from '@/components/lp/LPForm';
import ResponsiveLPImage from '@/components/lp/ResponsiveLPImage';
import TrialButton from '@/components/lp/TrialButton';
import { Routes } from '@/lib/data/routes';

const LP: NextPage = () => {
  return (
    <Layout path={Routes.INDEX.url} title={Routes.INDEX.title} noTitleTemplate isTopPage>
      <div className="relative">
        <ResponsiveLPImage
          pcImageSrc="/lp/PC01_2740x1400.png"
          spImageSrc="/lp/SP01_750x1300.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/PC02_2738x2792.png"
          spImageSrc="/lp/SP02_750x867.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/PC03_2740x3000.png"
          spImageSrc="/lp/SP03_750x2430.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/PC04_2740x1732.png"
          spImageSrc="/lp/SP04_750x830.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/PC05_2740x2170.png"
          spImageSrc="/lp/SP05_750x600.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/PC06_2740x3094.png"
          spImageSrc="/lp/SP06_750x3090.png"
          id="id06"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/PC07_2740x2090.png"
          spImageSrc="/lp/SP07_750x1654.png"
        />
        <ResponsiveLPImage
          pcImageSrc="/lp/PC08_2740x598.png"
          spImageSrc="/lp/SP08_750x470.png"
        />

        {/* 画面下に固定するボタン */}
        <ActionButtons />
      </div>

      {/* フォーム */}
      <div id="form">

      <ResponsiveLPImage
          pcImageSrc="/lp/PC09_2740x618.png"
          spImageSrc="/lp/SP09_750x316.png"
        />
        <LPForm />
      </div>

      <TrialButton />
    </Layout>
  );
};

export default LP;
