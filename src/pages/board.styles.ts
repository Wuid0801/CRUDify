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

export const CircleContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px solid black;
`;

export const WhiteSquareHeader = styled.header`
  height: 10%;
  background-color: rgba(255, 0, 0, 0.1);
`;

export const WhiteSquareBody = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

export const WhiteSquareFooter = styled.footer`
  height: 30%;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const InformationFooterContainer = styled.p`
  padding: 10px;
  white-space: pre-line; 
  line-height: 1.5;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px; 
  padding: 20px; 
  border-bottom: 2px solid #ddd; 
  margin-left: 40px;
`;

export const InformationHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;