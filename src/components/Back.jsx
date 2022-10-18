import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BackArr from "../images/form/back.png";

const BackArrow = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
`;

export const Back = () => {
  const navigate = useNavigate();

  return <BackArrow onClick={() => navigate(-1)} src={BackArr} />;
};
