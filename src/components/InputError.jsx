import styled from "styled-components";

const ErrorEl = styled.label`
  color: red;
`;

export const InputError = ({ children }) => {
  return <ErrorEl>{children}</ErrorEl>;
};
