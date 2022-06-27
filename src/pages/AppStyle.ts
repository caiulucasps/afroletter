import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY_800};

  div {
    max-width: 73rem;
    margin: 0 auto;
    padding: 1rem;

    h1 {
      font-size: 2rem;
      font-family: ${({ theme }) => theme.fonts.PRIMARY};
      font-weight: 500;

      span {
        color: ${({ theme }) => theme.colors.BLUE_500};
      }
    }
  }
`;
