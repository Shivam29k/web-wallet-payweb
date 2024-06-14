import React from "react"

export const Center = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={`flex justify-center flex-col h-full ${className}`}>
        <div className="flex justify-center">
            {children}
        </div>
    </div>
}