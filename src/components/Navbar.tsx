import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <div className="container flex gap-2">
          <Avatar>
            <AvatarImage src="/avatar.webp" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ModeToggle />
        </div>
        <div className="text-black">
          <Link to="/">Login</Link>
          &nbsp;/&nbsp;
          <Link to="/signup">SignUp</Link>
        </div>
        <button onClick={onToggleSidebar}>Toggle Sidebar</button>
      </div>
    </div>
  );
};
