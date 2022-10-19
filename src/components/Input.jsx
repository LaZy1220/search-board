import styled from "styled-components";

export const InputEl = styled.input`
  width: 92%;
  height: 20px;
  margin-top: 6px;
  padding: 10px 5px 10px 40px;
  font-size: 20px;
  border: 1px solid rgb(178, 178, 178);
  box-sizing: content-box;
  border-radius: 8px;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  transition: all 0.2s linear;
  &:focus,
  &:active {
    border: 1px solid rgba(91, 90, 90, 0.7);
    background: rgba(207, 203, 211, 0.2);
    box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.9) inset;
  }
`;

export const Input = (props) => {
  return <InputEl type={props.type} placeholder={props.placeholder} />;
};
