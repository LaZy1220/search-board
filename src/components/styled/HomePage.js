import styled from "styled-components";

export const HomePageEl = styled.div`
  padding: 60px 10% 0;
  color: #454545;
  font-family: var(--family-alkalami);
`;
export const Logo = styled.div`
  display: flex;
  gap: 10px;
`;
export const LogoText = styled.p`
  font-size: 50px;
  text-transform: uppercase;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
export const LogoImg = styled.img`
  width: 120px;
  height: 120px;
`;
export const Title = styled.h1`
  position: relative;
  margin: 40px 0;
  font-size: 26px;
  z-index: 10;
  font-weight: bold;
`;
export const HomePageImage = styled.img`
  position: absolute;
  right: 10%;
  top: 10%;
  width: 600px;
  height: 600px;
  z-index: 0;
`;
export const Descriptions = styled.ul`
  padding: 0;
`;
export const DescriptionText = styled.li`
  list-style: none;
  font-size: 19px;
  padding-bottom: 15px;
  font-weight: 600;
`;
export const Circle = styled.span`
  display: inline-block;
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  box-shadow: 0px 0px 5px 2px black;
`;
export const Color = styled.span`
  color: ${(props) => props.color};
`;
export const Wrapper = styled.div`
  width: 50%;
`;
export const Button = styled.button`
  width: 220px;
  height: 50px;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0px 0px 10px 3px #0028ff;
  color: #0028ff;
  background-color: hsl(180deg 46% 65%);
  &:hover {
    color: #ff0000;
    box-shadow: 0px 0px 10px 3px #ff0000;
  }
`;
export const FlexEl = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15%;
`;
