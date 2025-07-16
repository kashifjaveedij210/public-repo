"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

interface ContainerProps {
    size: number;
}

const pulse = keyframes`
  0%,
  80%,
  100% {
    transform: scaleY(0.75);
    opacity: 0;
  }
  20% {
    transform: scaleY(1);
    opacity: 1;
  }
`;

const Container = styled.div<ContainerProps>`
    --uib-size: ${({ size }) => size}px;
    --uib-color: #fff;
    --uib-speed: 1s;
    --uib-stroke: 3px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: var(--uib-size);
    width: var(--uib-size);
`;

const Line = styled.div<{ index: number }>`
    position: absolute;
    top: 0;
    left: calc(50% - var(--uib-stroke) / 2);
    display: flex;
    align-items: flex-start;
    height: 100%;
    width: var(--uib-stroke);
    transform: rotate(${(props) => `calc(360deg / -12 * ${props.index + 1})`});

    &::before {
        content: "";
        height: 22%;
        width: 100%;
        border-radius: calc(var(--uib-stroke) / 2);
        background-color: var(--uib-color);
        animation: ${pulse} var(--uib-speed) ease-in-out infinite;
        transition: background-color 0.3s ease;
        transform-origin: center bottom;
        animation-delay: ${(props) =>
            `calc(var(--uib-speed) / -12 * ${props.index + 1})`};
    }
`;
const CustomLoader: React.FC<{ size?: number }> = ({ size = 12 }) => {
    const lines = Array.from({ length: 12 }).map((_, index) => (
        <Line key={index} index={index} />
    ));

    return <Container size={size}>{lines}</Container>;
};

export default CustomLoader;
