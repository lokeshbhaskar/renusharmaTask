import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`p-6 rounded-2xl shadow-lg backdrop-blur-lg bg-white/30 border border-white/20 ${className}`}>
      {children}
    </div>
  );
};
export function CardContent({ children, className = "" }) {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
}

export default Card;
