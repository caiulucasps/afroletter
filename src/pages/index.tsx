import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Container, NewsCard } from '../styles/IndexStyle';
import { createClient } from '../../prismicio';

interface HomeProps {
  posts: {
    uid: string;
    title: string;
    author: string;
    publicationDate: string;
    firstParagraph: string;
  }[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>AfroLetter | A sua newsletter de confiança</title>
      </Head>

      <ul>
        {posts.map((post) => (
          <NewsCard key={post.uid}>
            <Link href={`news/${post.uid}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.firstParagraph}</p>

            <div>
              <p>
                <UserOutlined />
                {post.author}
              </p>
              <time>
                <CalendarOutlined />
                {post.publicationDate}
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

  const posts = await client.getAllByType('news');

  const formattedPosts = posts.map((post) => {
    const publicationDate = format(
      new Date(post.last_publication_date),
      "dd 'de' MMMM 'de' Y",
      { locale: ptBR }
    );

    const firstParagraph = post.data.content.find(
      (line: { type: string }) => line.type === 'paragraph'
    );

    return {
      uid: post.uid,
      title: post.data.title,
      author: post.data.author,
      publicationDate,
      firstParagraph: firstParagraph.text,
    };
  });

  return {
    props: {
      posts: formattedPosts,
    },
    revalidate: 60 * 60 * 24, // 24h
  };
};

export default Home;
