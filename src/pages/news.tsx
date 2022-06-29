import { NextPage } from 'next';
import Image from 'next/image';

import {
  UserOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

import { Container, Info, Content } from '../styles/NewsStyle';

const News: NextPage = () => {
  return (
    <main>
      <Image
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        layout="responsive"
        objectFit="cover"
        height="16rem"
        width="100vw"
        alt="banner"
      />

      <Container>
        <Info>
          <h1>Learning Next.js with Typescript and eslint</h1>

          <div>
            <p>
              <UserOutlined />
              Caio Lucas
            </p>
            <time>
              <CalendarOutlined />
              01 de agosto de 2022
            </time>
            <time>
              <ClockCircleOutlined />
              10 min
            </time>
          </div>
        </Info>

        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          commodo odio aenean sed adipiscing diam. At ultrices mi tempus
          imperdiet nulla. Purus semper eget duis at tellus. Eu volutpat odio
          facilisis mauris sit. Nec dui nunc mattis enim ut tellus. At erat
          pellentesque adipiscing commodo elit at imperdiet. Velit dignissim
          sodales ut eu sem integer vitae. Tellus rutrum tellus pellentesque eu
          tincidunt tortor aliquam nulla. Eu scelerisque felis imperdiet proin.
          Imperdiet proin fermentum leo vel orci porta non pulvinar. Nullam eget
          felis eget nunc lobortis mattis aliquam. Neque viverra justo nec
          ultrices dui sapien eget mi proin. Cursus risus at ultrices mi tempus
          imperdiet. Gravida in fermentum et sollicitudin ac. Faucibus
          scelerisque eleifend donec pretium vulputate sapien nec sagittis.
          Turpis nunc eget lorem dolor sed viverra ipsum nunc. Euismod lacinia
          at quis risus sed vulputate odio ut. Mauris pharetra et ultrices neque
          ornare aenean euismod elementum nisi. Diam quis enim lobortis
          scelerisque fermentum dui faucibus in. Vulputate eu scelerisque felis
          imperdiet proin fermentum. Morbi blandit cursus risus at ultrices mi
          tempus. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit
          duis. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Id
          diam maecenas ultricies mi eget mauris pharetra. Commodo viverra
          maecenas accumsan lacus vel facilisis volutpat est velit. Tincidunt
          lobortis feugiat vivamus at augue eget arcu dictum. Lobortis mattis
          aliquam faucibus purus in massa.
        </Content>
      </Container>
    </main>
  );
};

export default News;
