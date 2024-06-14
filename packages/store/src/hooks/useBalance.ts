import { useRecoilState } from "recoil"
import { balanceAtom } from "../atoms/balance/useBalance"

export const useBalance = () =>{
    const [value, _] = useRecoilState(balanceAtom);
    return value;
}