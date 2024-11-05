import styled from "styled-components";

const A4Width = "14.8cm";
const A4Height = "21cm";

export const PageContainer = styled.div`
  width: ${A4Width};
  height: ${A4Height};
`;

export const WhiteSquare = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border: 2px solid black;
  position: relative;
`;

export const CircleContaniner = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px solid black;
`;

export const WhiteSquareHeader = styled.header`
  height: 20%;
  background-color: red;
`;

export const WhiteSquareBody = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

export const WhiteSquareFooter = styled.footer`
  height: 30%;
  background-color: black;
`;
