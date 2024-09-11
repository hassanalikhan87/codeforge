import React from "react";
import styled from "styled-components";
// Assets
import WebdevIcon from "../../assets/svg/Services/WebdevIcon";
import SoftwareIcon from "../../assets/svg/Services/SoftwareIcon";
import MobileIcon from "../../assets/svg/Services/MobileIcon";
import CloudIcon from "../../assets/svg/Services/CloudIcon";
import UxIcon from "../../assets/svg/Services/UxIcon";
import AiMlIcon from "../../assets/svg/Services/AiMlIcon";
import BlockchainIcon from "../../assets/svg/Services/BlockchainIcon";
import StrategyIcon from "../../assets/svg/Services/StrategyIcon";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "web":
      getIcon = <WebdevIcon />;
      break;
    case "software":
      getIcon = <SoftwareIcon />;
      break;
    case "mobile":
      getIcon = <MobileIcon />;
      break;
    case "cloud":
      getIcon = <CloudIcon />;
      break;
    case "uiux":
      getIcon = <UxIcon />;
      break;
    case "aiml":
      getIcon = <AiMlIcon />;
      break;
    case "blockchain":
      getIcon = <BlockchainIcon />;
      break;
    case "strategy":
      getIcon = <StrategyIcon />;
      break;
    default:
      getIcon = <WebdevIcon />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <div>
        <IconStyle>{getIcon}</IconStyle>
        <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      </div>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const IconStyle = styled.div`
  margin: 0 auto 40px;
  @media (max-width: 860px) {
    margin: 0 auto 20px;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 0;
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 40px auto 0;
  @media (max-width: 860px) {
    margin: 20px auto 0;
  }
`;
