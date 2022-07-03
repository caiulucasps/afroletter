import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { asText } from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import { RichTextField } from '@prismicio/types';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import {
  UserOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

import { Container, Info, Content } from '../../styles/NewsStyle';
import { createClient } from '../../../prismicio';

interface NewsProps {
  post: {
    title: string;
    author: string;
    banner: {
      url: string;
      alt: string;
    };
    content: RichTextField;
    publicationDate: string;
  };
}

const News: NextPage<NewsProps> = ({ post }) => {
  const readingTime = Math.ceil(asText(post.content).split(' ').length / 260);

  console.log(readingTime);
  return (
    <main>
      <Head>
        <title>AfroLetter | {post.title}</title>
      </Head>
      <Image
        src={post.banner.url}
        layout="responsive"
        objectFit="cover"
        height="16rem"
        width="100vw"
        alt={post.banner.alt}
      />

      <Container>
        <Info>
          <h1>{post.title}</h1>

          <div>
            <p>
              <UserOutlined />
              {post.author}
            </p>
            <time>
              <CalendarOutlined />
              {post.publicationDate}
            </time>
            <time>
              <ClockCircleOutlined />
              {readingTime} min
            </time>
          </div>
        </Info>

        <Content>
          <PrismicRichText field={post.content} />
        </Content>
      </Container>
    </main>
  );
};

export default News;

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient();

  const post = await client.getAllByType('news');

  const paths = post.map((singleNew) => {
    return { params: { uid: String(singleNew.uid) } };
  });

  return { fallback: true, paths };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = createClient();

  const { uid } = params as { uid: string };

  const post = await client.getByUID('news', uid);

  const publicationDate = format(
    new Date(post.last_publication_date),
    "dd 'de' MMMM 'de' Y",
    { locale: ptBR }
  );

  const formattedPost = {
    title: post.data.title,
    author: post.data.author,
    banner: {
      url: post.data.banner.url,
      alt: post.data.banner.alt,
    },
    content: post.data.content,
    publicationDate,
  };

  return {
    props: {
      post: formattedPost,
    },
  };
};
