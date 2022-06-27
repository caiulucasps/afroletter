import type { NextPage } from 'next';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';

import { Container, NewsCard } from '../styles/IndexStyle';

const Home: NextPage = () => {
  return (
    <Container>
      <ul>
        <NewsCard>
          <h2>Learning Next.js with Typescript and eslint</h2>
          <p>
            This is a simple description example for a newsletter prototype
            project in figma. The only functionality of this text is pass a
            simple view of how things are going to be in the application.
          </p>

          <div>
            <p>
              <UserOutlined /> Caio Lucas
            </p>
            <time>
              <CalendarOutlined /> 01 de agosto de 2022
            </time>
          </div>
        </NewsCard>
        <NewsCard>
          <h2>Learning Next.js with Typescript and eslint</h2>
          <p>
            This is a simple description example for a newsletter prototype
            project in figma. The only functionality of this text is pass a
            simple view of how things are going to be in the application.
          </p>

          <div>
            <p>
              <UserOutlined /> Caio Lucas
            </p>
            <time>
              <CalendarOutlined /> 01 de agosto de 2022
            </time>
          </div>
        </NewsCard>
        <NewsCard>
          <h2>Learning Next.js with Typescript and eslint</h2>
          <p>
            This is a simple description example for a newsletter prototype
            project in figma. The only functionality of this text is pass a
            simple view of how things are going to be in the application.
          </p>

          <div>
            <p>
              <UserOutlined /> Caio Lucas
            </p>
            <time>
              <CalendarOutlined /> 01 de agosto de 2022
            </time>
          </div>
        </NewsCard>
      </ul>
    </Container>
  );
};

export default Home;
