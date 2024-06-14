export function Page({
    children, title, className
  }: {
    title: string;
    children: React.ReactNode;
    className?: string;
  }) {
  return (
    <div className={`px-4 w-full ${className}`}>
        <div className="text-3xl font-bold text-[#8969ce] py-6">{title}</div>
            {children}
    </div>
  )
}
