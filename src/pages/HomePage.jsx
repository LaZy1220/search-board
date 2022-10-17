import HomePageImg from "../images/HomepageImg.svg";
import LogoRef from "../images/Logo.png";
import { useNavigate } from "react-router-dom";
import {
  HomePageEl,
  Logo,
  LogoImg,
  LogoText,
  Title,
  HomePageImage,
  Descriptions,
  DescriptionText,
  Circle,
  Color,
  Wrapper,
  Button,
  FlexEl,
} from "../components/styled/HomePage";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <HomePageEl>
      <Logo>
        <LogoImg src={LogoRef} />
        <LogoText>Lazy play</LogoText>
      </Logo>
      <Wrapper>
        <Title>
          LAZY PLAY - бесплатный сервис, где собраны актуальные вакансии для
          самых ленивых
        </Title>
        <Descriptions>
          <DescriptionText>
            <Circle color={"#fc8d1d"} />В нашу базу{" "}
            <Color color={"#fc8d1d"}>ежедневно</Color> поступают наиболее
            актуальные предложения.
          </DescriptionText>
          <DescriptionText>
            <Circle color={"#0028ff"} />
            Здесь найдется работа для{" "}
            <Color color={"#0028ff"}>опытных мастеров</Color> своего дела и{" "}
            <Color color={"#0028ff"}>начинающих </Color>
            специалистов без опыта.
          </DescriptionText>
          <DescriptionText>
            <Circle color={"#c05704"} />
            Здесь вы найдете <Color color={"#c05704"}>кандидатов</Color> на
            вакантную должность с необходимым стажем и набором навыков.
          </DescriptionText>
          <DescriptionText>
            <Circle color={"#ff0000"} />
            Соискатели смогут подбирать{" "}
            <Color color={"#ff0000"}> интересные</Color> для себя вакансии. Наш
            сайт
            <Color color={"#ff0000"}>сэкономит</Color> ваше время!
          </DescriptionText>
        </Descriptions>
        <FlexEl>
          <Button onClick={() => navigate(`/search-board/register`)}>
            Регистрация
          </Button>
          <Button onClick={() => navigate(`/search-board/login`)}>Вход</Button>
        </FlexEl>
      </Wrapper>
      <HomePageImage src={HomePageImg} />
    </HomePageEl>
  );
};
