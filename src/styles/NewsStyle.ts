import styled from 'styled-components';

export const Container = styled.div`
  max-width: 49rem;
  margin: 4rem auto;
  padding: 0 1rem;
`;

export const Info = styled.div`
  > div {
    margin-top: 1rem;
    display: flex;
    gap: 1.5rem;

    p,
    time {
      color: ${({ theme }) => theme.colors.GRAY_200};
      font-size: 0.75rem;
      display: flex;
      gap: 0.5rem;

      svg {
        color: ${({ theme }) => theme.colors.BLUE_500};
        font-size: 1.25rem;
      }
    }
  }
`;

export const Content = styled.div`
  margin-top: 2rem;
  font-family: ${({ theme }) => theme.fonts.SECONDARY};
  line-height: 160%;
  text-align: justify;

  p {
    margin-bottom: 1.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.PRIMARY};
  }

  ul {
    list-style-position: inside;
    margin-bottom: 1.5rem;
  }

  pre {
    background-color: ${({ theme }) => theme.colors.GRAY_800};
    border-radius: 1rem;
    padding: 1rem 1.25rem;
    font-family: ${({ theme }) => theme.fonts.CODE};
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.BLUE_500};

    &:hover {
      filter: brightness(140%);
    }
  }
`;
