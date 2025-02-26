export interface Article {
  id: number;
  title: string;
  slug: string;
  date: Date;
}

export function useArticles(): Article[] {
  return [
    {
        id: 1,
        title: 'Thoughts about games on the web',
        slug: 'thoughts-about-games-on-the-web',
        date: new Date('2024-09-04'),
    },
  ];
}