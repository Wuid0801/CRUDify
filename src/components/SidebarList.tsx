import { useState } from "react";
import styled from "styled-components";

interface MenuItemProps {
  $selected?: string;
}

const StyledMenu = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledMenuItem = styled.div<MenuItemProps>`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: ${(props) =>
    props.$selected === "true" ? "black" : "#fff"};
  color: ${(props) => (props.$selected === "true" ? "white" : "black")};
  transition: background-color 0.3s ease;
  justify-content: flex-start;
  border: solid 1px #fff;

  &:hover {
    background-color: gray;
  }

  &:active {
    background-color: black;
  }
`;

function SidebarList() {
  const [selectedItem, setSelectedItem] = useState<string>();

  return (
    <StyledMenu>
      <StyledMenuItem
        $selected={selectedItem === "Menu Item 1" ? "true" : "false"}
        onClick={() => setSelectedItem("Menu Item 1")}
      >
        Menu Item 1
      </StyledMenuItem>
      <StyledMenuItem
        $selected={selectedItem === "Menu Item 2" ? "true" : "false"}
        onClick={() => setSelectedItem("Menu Item 2")}
      >
        Menu Item 2
      </StyledMenuItem>
      <StyledMenuItem
        $selected={selectedItem === "Menu Item 3" ? "true" : "false"}
        onClick={() => setSelectedItem("Menu Item 3")}
      >
        Menu Item 3
      </StyledMenuItem>
      <StyledMenuItem
        $selected={selectedItem === "Menu Item 4" ? "true" : "false"}
        onClick={() => setSelectedItem("Menu Item 4")}
      >
        Menu Item 4
      </StyledMenuItem>
    </StyledMenu>
  );
}

export default SidebarList;
