import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    @media screen and (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media screen and (max-width: 768px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.GRAY_900};
    font-family: ${({ theme }) => theme.fonts.SECONDARY};
    color: ${({ theme }) => theme.colors.GRAY_100};
  }
`;
