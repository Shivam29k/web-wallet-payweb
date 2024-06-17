"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ onClick, children, className, type = "button" }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`text-white bg-[#8969ce] hover:bg-[#6840be] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 p-2.5  ${className}`}>
      {children}
    </button>

  );
};