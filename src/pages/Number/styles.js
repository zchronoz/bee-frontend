import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;

  span {
    font-size: 1.4em;
  }

  a {
    text-decoration: none;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
