import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div<{ width: number }>`
  background-color: #E3ECF1;
  border-right: 4px solid #202020;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${props => props.width}px;
  transition: width 0.4s ease;
  color: #202020;
  z-index: 99;
  overflow-y: auto;
`;

interface SidebarProps {
  width?: number;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ width = 280, children }) => {
  return (
    <SidebarWrapper width={width}>
      {children}
    </SidebarWrapper>
  );
};

export default Sidebar;
