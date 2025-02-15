import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.1rem;
  border: 2px solid;
  background: transparent;
  width: 150px;
  color: var(--lightblue);
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightblue);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
