import React from 'react';
import styled from 'styled-components';

interface SidebarWrapperProps {
  $isOpen: boolean;
  width: number;
}

const SidebarWrapper = styled.div<SidebarWrapperProps>`
  background-color: #fff;

  position: fixed;
  top: 0;
  left: ${props => (props.$isOpen ? '0' : `-${props.width}px`)}; 
  bottom: 0;
  width: ${props => props.width}px;
  transition: left 0.4s ease;
  color: #202020;
  z-index: 99;
  overflow-y: auto;
`;

interface SidebarProps {
  isOpen: boolean;
  width?: number;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, width = 180, children }) => {
  return (
    <SidebarWrapper $isOpen={isOpen} width={width}>
      {children}
    </SidebarWrapper>
  );
};

export default Sidebar;
