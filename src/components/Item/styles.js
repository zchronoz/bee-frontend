import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  gap: 4px;
  text-align: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 4px;
  background-color: #444;

  border: solid 1px black;

  a {
    text-decoration: none;
    font-size: 1.2em;
    color: white;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    color: #a0a0a0;

    &:last-child {
      color: #e2f0f0;
      font-weight: bold;
    }
  }
`;
