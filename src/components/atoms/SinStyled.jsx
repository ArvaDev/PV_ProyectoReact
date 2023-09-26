import styled, { keyframes } from "styled-components";

const waveAnimation = keyframes`
  0% {
    background-position: 0;
  }
  100% {
    background-position: 40px 0;
  }
`;

const SinWave = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  background-color: #f0f0f000;
  border-radius: 50%;
  overflow: hidden;
  margin: 20px;
  color: #81939C;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, transparent 55%, #81939C 55%);
    background-size: 40px 100%;
    top: 0; 
    left: 0;
    animation: ${waveAnimation} 1s linear infinite;
  }
`;

function WaveComponent() {
  return <SinWave><h2>Sin Audio</h2></SinWave>;
}

export default WaveComponent;