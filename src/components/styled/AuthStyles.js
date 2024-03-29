import styled from "styled-components";

export const AuthEl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const AuthBox = styled.div`
  position: relative;
  padding: 35px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 15px 5px #6d7daf;
  border: 1px solid rgba(147, 184, 189, 0.8);
  width: 40%;
`;
export const Title = styled.h1`
  font-family: "FranchiseRegular", "Arial Narrow", Arial, sans-serif;
  color: rgb(6, 106, 117);
  padding-bottom: 20px;
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    margin-top: 20px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0%, rgba(147, 184, 189, 0)),
      color-stop(20%, rgba(147, 184, 189, 0.8)),
      color-stop(53%, rgba(147, 184, 189, 1)),
      color-stop(79%, rgba(147, 184, 189, 0.8)),
      color-stop(100%, rgba(147, 184, 189, 0))
    );
  }
`;
export const FlexEl = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 80px;
`;
export const Current = styled.div`
  font-size: 30px;
  cursor: pointer;
  color: rgb(175 198 201);
  margin-bottom: 20px;
  font-weight: 600;
`;
export const InputEl = styled.div`
  color: rgb(6, 106, 117);
  font-style: italic;
  margin-bottom: 15px;
`;

export const UserIcon = styled.img`
  position: relative;
  top: 40px;
  left: 10px;
  text-align: center;
  height: 20px;
  width: 20px;
`;
