import { SidebarItem, BottomBarItem } from "../components/BarItems";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SideBar } from "../components/Sidebar";
import { BottomBar } from "../components/Bottombar";

export default async function CoponentLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    const session = await getServerSession();
    if(!session?.user){
      redirect("/")
    }

    return (
        <>
          {/* <AppbarClient /> */}
          <div className="flex md:flex-none min-h-[93vh] md:h-[93vh] bg-slate-50 pb-24 md:pb-0">
            <SideBar />
            <BottomBar />
            <div className="w-full ">
              {children}
            </div>
          </div>
        </>
  );
}






