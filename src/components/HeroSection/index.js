import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import Pic1 from '../../videos/hero-bg.jpg';

function HeroSection() {
  const [hover, sethover] = useState(false);

  const onHover = () => {
    sethover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg> */}
        <ImgBg src={Pic1} alt="hero-bg"></ImgBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for new account today and recive $250 in credit towards your
          next paymanet
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started{' '}
            {hover ? <ArrowForward></ArrowForward> : <ArrowRight></ArrowRight>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
