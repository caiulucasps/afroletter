import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Container, NewsCard } from '../styles/IndexStyle';
import { createClient } from '../../prismicio';

interface NewsProps {
  news: {
    uid: string;
    title: string;
    author: string;
    publicationDate: string;
    firstParagraph: string;
  }[];
}

const Home: NextPage<NewsProps> = ({ news }) => {
  return (
    <Container>
      <Head>
        <title>AfroLetter | A sua newsletter de confiança</title>
      </Head>

      <ul>
        {news.map((singleNews) => (
          <NewsCard key={singleNews.uid}>
            <Link href={`news/${singleNews.uid}`}>
              <h2>{singleNews.title}</h2>
            </Link>
            <p>{singleNews.firstParagraph}</p>

            <div>
              <p>
                <UserOutlined />
                {singleNews.author}
              </p>
              <time>
                <CalendarOutlined />
                {singleNews.publicationDate}
              </time>
            </div>
          </NewsCard>
        ))}
      </ul>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient();

  const news = await client.getAllByType('news');

  const formattedNews = news.map((singleNews) => {
    const publicationDate = format(
      new Date(singleNews.last_publication_date),
      "dd 'de' MMMM 'de' Y",
      { locale: ptBR }
    );

    const firstParagraph = singleNews.data.content.find(
      (line: { type: string }) => line.type === 'paragraph'
    );

    return {
      uid: singleNews.uid,
      title: singleNews.data.title,
      author: singleNews.data.author,
      publicationDate,
      firstParagraph: firstParagraph.text,
    };
  });

  return {
    props: {
      prismicNews: news,
      news: formattedNews,
    },
    revalidate: 60 * 60 * 24, // 24h
  };
};

export default Home;
