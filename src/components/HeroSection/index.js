import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  PictureBg,
} from "./HeroElements";
import { useDeviceDetect } from "../../utils/utilities";

import { Button } from "../ButtonElement";
import Video from "../../assets/videos/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const { isMobile } = useDeviceDetect();

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        {!isMobile && (
          <VideoBg
            playsinline
            autoPlay
            loop
            muted
            src={Video}
            type="/video/mp4"
          />
        )}
        {isMobile && (
          <PictureBg src="/assets/images/showcase.jpg" alt="Cyber World" />
        )}
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Cyber Streets <span>&trade;</span>
        </HeroH1>
        <HeroP>Connecting the community through technology.</HeroP>
        <HeroBtnWrapper>
          <Button
            to="features"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={false}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Learn More {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
