import React from "react";
import {
  FeaturesContainer,
  FeaturesH1,
  FeaturesWrapper,
  FeaturesCard,
  FeaturesIcon,
  FeaturesH2,
  FeaturesP,
} from "./FeaturesElements";

const FeaturesSection = () => {
  return (
    <>
      <FeaturesContainer id="features">
        <FeaturesH1>Our Values</FeaturesH1>
        <FeaturesWrapper>
          <FeaturesCard>
            <FeaturesIcon src="/assets/images/Community.svg" />
            <FeaturesH2>Community</FeaturesH2>
            <FeaturesP>
              Harnessing the power of technology to uplift and empower the world
              a byte, youth, and community at a time.
            </FeaturesP>
          </FeaturesCard>
          <FeaturesCard>
            <FeaturesIcon src="/assets/images/Education.svg" />
            <FeaturesH2>Education</FeaturesH2>
            <FeaturesP>
              Uniting together with other civic outreach programs to deliver
              technical training and life skills.
            </FeaturesP>
          </FeaturesCard>
          <FeaturesCard>
            <FeaturesIcon src="/assets/images/Growth.svg" />
            <FeaturesH2>Growth</FeaturesH2>
            <FeaturesP>
              Creating bonds while fostering an atmosphere of learning, mutual
              understanding, cooperation, and respect.
            </FeaturesP>
          </FeaturesCard>
        </FeaturesWrapper>
      </FeaturesContainer>
    </>
  );
};

export default FeaturesSection;
