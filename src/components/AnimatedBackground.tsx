import styled, { keyframes } from 'styled-components';
import React from 'react';

const moveSpan = keyframes`
100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }`;

const Animation = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  background: #1c5f90;
  overflow: hidden;

  & span.anim {
    width: 5vmin;
    height: 5vmin;
    border-radius: 5vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: ${moveSpan};
    animation-duration: 26;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  & span.anim:nth-child(0) {
    color: #ffacac;
    top: 11%;
    left: 1%;
    animation-duration: 231s;
    animation-delay: -5s;
    transform-origin: 23vw -9vh;
    box-shadow: 10vmin 0 2.1758560304530024vmin currentColor;
  }
  & span.anim:nth-child(1) {
    color: #583c87;
    top: 84%;
    left: 27%;
    animation-duration: 124s;
    animation-delay: -106s;
    transform-origin: 19vw 25vh;
    box-shadow: -10vmin 0 1.5168842489647707vmin currentColor;
  }
  & span.anim:nth-child(2) {
    color: #ffacac;
    top: 88%;
    left: 8%;
    animation-duration: 139s;
    animation-delay: -238s;
    transform-origin: -21vw -13vh;
    box-shadow: -10vmin 0 1.3891184405975754vmin currentColor;
  }
  & span.anim:nth-child(3) {
    color: #583c87;
    top: 9%;
    left: 76%;
    animation-duration: 23s;
    animation-delay: -67s;
    transform-origin: 7vw -13vh;
    box-shadow: -10vmin 0 1.598004312607857vmin currentColor;
  }
  & span.anim:nth-child(4) {
    color: #583c87;
    top: 74%;
    left: 19%;
    animation-duration: 43s;
    animation-delay: -162s;
    transform-origin: 10vw 18vh;
    box-shadow: -10vmin 0 1.7487634464821638vmin currentColor;
  }
  & span.anim:nth-child(5) {
    color: #ffacac;
    top: 21%;
    left: 20%;
    animation-duration: 197s;
    animation-delay: -122s;
    transform-origin: 15vw 1vh;
    box-shadow: 10vmin 0 1.8658684294892756vmin currentColor;
  }
  & span.anim:nth-child(6) {
    color: #1ca482;
    top: 8%;
    left: 68%;
    animation-duration: 221s;
    animation-delay: -164s;
    transform-origin: 11vw 22vh;
    box-shadow: 10vmin 0 1.8071378281466863vmin currentColor;
  }
  & span.anim:nth-child(7) {
    color: #e45a84;
    top: 25%;
    left: 59%;
    animation-duration: 84s;
    animation-delay: -76s;
    transform-origin: 23vw -9vh;
    box-shadow: 10vmin 0 1.8252047496798607vmin currentColor;
  }
  & span.anim:nth-child(8) {
    color: #1ca482;
    top: 49%;
    left: 63%;
    animation-duration: 209s;
    animation-delay: -145s;
    transform-origin: -3vw 2vh;
    box-shadow: 10vmin 0 1.779692589631899vmin currentColor;
  }
  & span.anim:nth-child(9) {
    color: #e45a84;
    top: 62%;
    left: 56%;
    animation-duration: 118s;
    animation-delay: -221s;
    transform-origin: 23vw 0vh;
    box-shadow: 10vmin 0 2.0476909011456117vmin currentColor;
  }
  & span.anim:nth-child(10) {
    color: #ffacac;
    top: 83%;
    left: 78%;
    animation-duration: 133s;
    animation-delay: -222s;
    transform-origin: -4vw 0vh;
    box-shadow: -10vmin 0 1.6241523372593574vmin currentColor;
  }
  & span.anim:nth-child(11) {
    color: #1ca482;
    top: 57%;
    left: 28%;
    animation-duration: 108s;
    animation-delay: -23s;
    transform-origin: 16vw 18vh;
    box-shadow: -10vmin 0 1.50593904126147vmin currentColor;
  }
  & span.anim:nth-child(12) {
    color: #e45a84;
    top: 44%;
    left: 60%;
    animation-duration: 141s;
    animation-delay: -28s;
    transform-origin: -14vw 21vh;
    box-shadow: -10vmin 0 1.7650381773463009vmin currentColor;
  }
  & span.anim:nth-child(13) {
    color: #e45a84;
    top: 55%;
    left: 68%;
    animation-duration: 224s;
    animation-delay: -62s;
    transform-origin: 19vw 9vh;
    box-shadow: -10vmin 0 1.6533732504140242vmin currentColor;
  }
  & span.anim:nth-child(14) {
    color: #ffacac;
    top: 27%;
    left: 58%;
    animation-duration: 135s;
    animation-delay: -64s;
    transform-origin: 3vw -5vh;
    box-shadow: 10vmin 0 2.1493282379314445vmin currentColor;
  }
  & span.anim:nth-child(15) {
    color: #1ca482;
    top: 43%;
    left: 58%;
    animation-duration: 165s;
    animation-delay: -64s;
    transform-origin: 5vw 11vh;
    box-shadow: 10vmin 0 2.241593344996685vmin currentColor;
  }
  & span.anim:nth-child(16) {
    color: #ffacac;
    top: 37%;
    left: 39%;
    animation-duration: 195s;
    animation-delay: -120s;
    transform-origin: -21vw 14vh;
    box-shadow: -10vmin 0 1.9122156478538948vmin currentColor;
  }
  & span.anim:nth-child(17) {
    color: #1ca482;
    top: 32%;
    left: 5%;
    animation-duration: 224s;
    animation-delay: -136s;
    transform-origin: 21vw -22vh;
    box-shadow: 10vmin 0 1.6641616267430188vmin currentColor;
  }
  & span.anim:nth-child(18) {
    color: #e45a84;
    top: 38%;
    left: 71%;
    animation-duration: 233s;
    animation-delay: -185s;
    transform-origin: 24vw 14vh;
    box-shadow: 10vmin 0 1.5304390766596396vmin currentColor;
  }
  & span.anim:nth-child(19) {
    color: #ffacac;
    top: 30%;
    left: 37%;
    animation-duration: 208s;
    animation-delay: -23s;
    transform-origin: -16vw 20vh;
    box-shadow: 10vmin 0 2.0901320121540916vmin currentColor;
  }
  & span.anim:nth-child(20) {
    color: #1ca482;
    top: 24%;
    left: 82%;
    animation-duration: 119s;
    animation-delay: -123s;
    transform-origin: -18vw 17vh;
    box-shadow: -10vmin 0 1.7602024605046456vmin currentColor;
  }
  & span.anim:nth-child(21) {
    color: #e45a84;
    top: 19%;
    left: 77%;
    animation-duration: 146s;
    animation-delay: -88s;
    transform-origin: 2vw 18vh;
    box-shadow: 10vmin 0 2.0006048222411676vmin currentColor;
  }
  & span.anim:nth-child(22) {
    color: #e45a84;
    top: 20%;
    left: 25%;
    animation-duration: 54s;
    animation-delay: -62s;
    transform-origin: -20vw 11vh;
    box-shadow: 10vmin 0 1.9452303756329197vmin currentColor;
  }
  & span.anim:nth-child(23) {
    color: #e45a84;
    top: 85%;
    left: 23%;
    animation-duration: 74s;
    animation-delay: -22s;
    transform-origin: 25vw 12vh;
    box-shadow: -10vmin 0 1.8447408500537923vmin currentColor;
  }
  & span.anim:nth-child(24) {
    color: #583c87;
    top: 71%;
    left: 53%;
    animation-duration: 32s;
    animation-delay: -151s;
    transform-origin: 22vw -22vh;
    box-shadow: 10vmin 0 1.322508805359351vmin currentColor;
  }
  & span.anim:nth-child(25) {
    color: #1ca482;
    top: 97%;
    left: 77%;
    animation-duration: 35s;
    animation-delay: -122s;
    transform-origin: 3vw 10vh;
    box-shadow: 10vmin 0 1.2533650693882155vmin currentColor;
  }
  & span.anim:nth-child(26) {
    color: #e45a84;
    top: 2%;
    left: 72%;
    animation-duration: 10s;
    animation-delay: -117s;
    transform-origin: 3vw -8vh;
    box-shadow: 10vmin 0 1.6865778811132823vmin currentColor;
  }
  & span.anim:nth-child(27) {
    color: #e45a84;
    top: 71%;
    left: 71%;
    animation-duration: 108s;
    animation-delay: -53s;
    transform-origin: -12vw -14vh;
    box-shadow: -10vmin 0 1.9114625292161025vmin currentColor;
  }
  & span.anim:nth-child(28) {
    color: #1ca482;
    top: 6%;
    left: 98%;
    animation-duration: 56s;
    animation-delay: -191s;
    transform-origin: 16vw 15vh;
    box-shadow: 10vmin 0 1.7829142274621734vmin currentColor;
  }
  & span.anim:nth-child(29) {
    color: #e45a84;
    top: 60%;
    left: 85%;
    animation-duration: 127s;
    animation-delay: -215s;
    transform-origin: -22vw 23vh;
    box-shadow: 10vmin 0 1.6501757641425043vmin currentColor;
  }
`;

const AnimatedBackground: React.FC = () => {
  return (
    <Animation>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
      <span className="anim"></span>
    </Animation>
  );
};

export default AnimatedBackground;
