
import { ReactNode } from "react";


interface WrapperProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "full";
}

export default function Wrapper({
  children,
  className = "",
  size = "default",
}: WrapperProps) {
  const sizes = {
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
    full: "max-w-full",
  };

  return (
    <div className={`${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
