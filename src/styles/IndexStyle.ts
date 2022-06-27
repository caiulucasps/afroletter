import styled from 'styled-components';

export const Container = styled.main`
  max-width: 49rem;
  margin: 0 auto;
  padding: 0 1rem;

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 4.5rem;
  }
`;

export const NewsCard = styled.li`
  background-color: ${({ theme }) => theme.colors.GRAY_800};
  padding: 1.5rem;
  border-radius: 16px;

  h2 {
    font-size: 1.5rem;
  }

  > p {
    font-family: ${({ theme }) => theme.fonts.SECONDARY};
    color: ${({ theme }) => theme.colors.GRAY_200};
    line-height: 140%;
    margin: 1rem 0;
  }

  div {
    display: flex;
    gap: 3rem;

    p,
    time {
      display: flex;
      font-size: 0.75rem;
      gap: 0.5rem;

      svg {
        color: ${({ theme }) => theme.colors.BLUE_500};
        font-size: 1.25rem;
      }
    }
  }
`;
