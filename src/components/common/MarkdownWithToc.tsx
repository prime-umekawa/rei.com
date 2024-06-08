import * as cheerio from 'cheerio';

export const renderToc = (html: string) => {
  const $ = cheerio.load(html);
  const headings = $('h1, h2, h3').toArray();

  // エラー出てるけど無視でok
  const toc = headings.map((dataKey) => ({
    // as anyでchildrenの型エラーを回避
    text: (dataKey as any).children[0].data,
    id: (dataKey as any).attribs.id,
  }));

  return toc;
};
