export type Route = {
  key: string;
  url: string;
  title: string;
  description?: string;
};

export const Routes = {
  INDEX: {
    key: 'INDEX',
    url: '/',
    title: 'プライム｜福岡市のプログラミングスクール',
    description:
      '「プライム」は福岡市で展開する、オンライン・オフライン混合型のプログラミングスクールです。',
  },
  COMPLETE: {
    key: 'COMPLETE',
    url: '/complete',
    title: '送信完了',
    description:
      '「プライム」は福岡市で展開する、オンライン・オフライン混合型のプログラミングスクールです。',
  },
  TERMS: {
    key: 'TERMS',
    url: '/info/terms',
    title: '利用規約',
    description: '「プライム」の利用規約です。',
  },
  PRIVACY_POLICY: {
    key: 'PRIVACY_POLICY',
    url: '/info/privacy-policy',
    title: 'プライバシーポリシー',
    description: '『プライム』のプライバシーポリシーです。',
  },
  TOKUSHOHO: {
    key: 'TOKUSHOHO',
    url: '/info/tokushoho',
    title: '特定商取引法に基づく表記',
    description: '『プライム』の特定商取引法に基づく表記です。',
  },
  CONTACT: {
    key: 'CONTACT',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfKZ9ugX_cKK_r0YxqPLycCl7FGP4lDXZKblqsnpcdFiTgdPA/viewform',
    title: 'お問い合わせ',
    description: '『プライム』に関するお問い合わせフォームです。',
  },
  // 遷移先
  OfficialLINE: {
    key: 'OfficialLINE',
    url: 'https://lin.ee/fZCzqZK',
    title: 'OfficialLINE',
  },
  GoogleForm: {
    key: 'GoogleForm',
    url: 'https://forms.gle/EwRh9ZUFj4dBppXdA',
    title: 'Google Form',
  },
  BlogPage: {
    key: 'BlogPage',
    url: '/fromCMS',
    title: '看護師ブログ',
  },
} as const;

export type Routes = keyof typeof Routes;
