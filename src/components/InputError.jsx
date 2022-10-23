import styled from "styled-components";

const ErrorEl = styled.div`
  color: red;
`;

export const InputError = ({ children }) => {
  return <ErrorEl>{children}</ErrorEl>;
};
