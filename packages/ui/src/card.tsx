import React from "react";

export function Card({title, children, className}: {title?: string, children: React.ReactNode, className?: string}): JSX.Element {
  return (
    <div className={`w-full bg-slate-200/70 rounded-md h-fit p-4 pt-4 ${className}`}>
      <div className="font-medium text-xl border-b border-slate-300">
        {title}
      </div>
      {children}
    </div>
  );
}