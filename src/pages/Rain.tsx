import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useTheme } from "@/components/theme-provider";

const animate = keyframes`
  0% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(calc(100vh + 200px));
  }
`;

const Drop = styled.i`
  position: absolute;
  height: 200px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  animation: ${animate} 5s linear infinite;
`;

const RainSection = styled.section`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const BlueDrop = styled(Drop)<{ $blueColor: string }>`
  ${({ $blueColor }) =>
    $blueColor && `background: linear-gradient(transparent, ${$blueColor});`}
`;

const GreenDrop = styled(Drop)<{ $greenColor: string }>`
  ${({ $greenColor }) =>
    $greenColor && `background: linear-gradient(transparent, ${$greenColor});`}
`;

const RedDrop = styled(Drop)<{ $redColor: string }>`
  ${({ $redColor }) =>
    $redColor && `background: linear-gradient(transparent, ${$redColor});`}
`;


function generateColors(lightMode: boolean) {
  const colors = [];
  if (lightMode) {
    for (let i = 0; i < 3; i++) {
      const color =
        "#" +
        Math.floor(Math.random() * 63 + 64)
          .toString(16)
          .padStart(2, "0") +
        Math.floor(Math.random() * 63 + 64)
          .toString(16)
          .padStart(2, "0") +
        Math.floor(Math.random() * 63 + 64)
          .toString(16)
          .padStart(2, "0");
      colors.push(color);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      colors.push(color);
    }
  }
  return colors;
}

function rain(colors: string[]) {
  const amount = 200;
  const drops = [];
  for (let i = 0; i < amount; i++) {
    const size = Math.random() * 5;
    const posX = Math.floor(Math.random() * window.outerWidth);
    const type = i % 3;
    const delay = Math.random() * -20;
    const duration = Math.random() * 5;
    let drop;
    switch (type) {
      case 0:
        drop = (
          <BlueDrop
            key={i}
            $blueColor={colors[0]}
            style={{
              width: `calc(0.2px + ${size}px)`,
              left: `${posX}px`,
              animationDelay: delay + "s",
              animationDuration: 1 + duration + "s",
            }}
          />
        );
        break;
      case 1:
        drop = (
          <GreenDrop
            key={i}
            $greenColor={colors[1]}
            style={{
              width: `calc(0.2px + ${size}px)`,
              left: `${posX}px`,
              animationDelay: delay + "s",
              animationDuration: 1 + duration + "s",
            }}
          />
        );
        break;
      case 2:
        drop = (
          <RedDrop
            key={i}
            $redColor={colors[2]}
            style={{
              width: `calc(0.2px + ${size}px)`,
              left: `${posX}px`,
              animationDelay: delay + "s",
              animationDuration: 1 + duration + "s",
            }}
          />
        );
        break;
      default:
        break;
    }
    drops.push(drop);
  }
  return drops;
}

const Rain = () => {
  const { theme } = useTheme();
  const lightMode = theme === "light";
  const [colors, setColors] = useState(() => generateColors(lightMode));
  const [drops, setDrops] = useState(() => rain(colors));
  const prevTheme = useRef(theme);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  // theme이 변경되었을 때만 호출되는 useEffect.
  // lightMode가 바뀔 때마다 colors를 새로 생성하여 색상을 업데이트함.
  if (prevTheme.current !== theme) {
    setColors(generateColors(lightMode)); // lightMode에 따라 새로운 색상 생성
    prevTheme.current = theme; // prevTheme 업데이트
    }
  }, [theme, lightMode]);

  useEffect(() => {
  // lightMode가 변경되었을 때마다 호출되는 useEffect.
  // 창 크기가 변경될 때마다 새로운 색상을 생성하여 colors를 업데이트함.
  const handleResize = () => {
    if (containerRef.current) {
      const newColors = generateColors(lightMode); // 새로운 색상 생성
      setColors(newColors); // colors 업데이트
      }
    };

    window.addEventListener("resize", handleResize); // 창 크기 변경 이벤트 리스너 등록

    return () => {
      window.removeEventListener("resize", handleResize); // 컴포넌트 언마운트 시 리스너 제거
    };
  }, [lightMode]);

  useEffect(() => {
  // colors가 변경될 때마다 호출되는 useEffect.
  // colors를 기반으로 비 내리는 드롭을 업데이트함.
  if (containerRef.current) {
    const newDrops = rain(colors); // 새로운 비 드롭 생성
    setDrops(newDrops); // 비 드롭 업데이트
    }
  }, [colors]);
  return (
    <RainSection ref={containerRef}>
      {drops.map((drop, index) => (
        <React.Fragment key={index}>{drop}</React.Fragment>
      ))}
    </RainSection>
  );
};

export default Rain;
