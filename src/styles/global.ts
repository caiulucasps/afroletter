import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.GRAY_900};
    font-family: ${({ theme }) => theme.fonts.SECONDARY};
    color: ${({ theme }) => theme.colors.GRAY_100};
  }
`;
