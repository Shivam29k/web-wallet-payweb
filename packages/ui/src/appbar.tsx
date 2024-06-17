
import { Button } from "./button";
import { LoginIcon, LogoutIcon, WalletIcon } from "./icons";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    onSignin: any;
    onSignout: any;
}

export const Appbar = ({user, onSignin, onSignout}: AppbarProps) =>{
    return <div className="flex justify-between border-b min-h-[7vh] px-4 w-full bg-slate-100 ">
    <div className="text-lg font-bold flex items-center justify-center gap-2 cursor-pointer text-[#6840BE]">
        <WalletIcon />
        PayTW
    </div>
    <div className="flex items-center">
        <Button onClick={user ? onSignout : onSignin} className="py-2 group transition-all hover:bg-red-500" >
            <div className="flex items-center gap-2">
            {user ? "Logout" : "Login"} <LogoutIcon className={"size-5 hidden group-hover:block transition-all duration-300"} /> 
            </div>
        </Button>
    </div>
</div>
}

