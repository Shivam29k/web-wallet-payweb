import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import HomePage from "./components/HomePage";

export default async function Page() {

  const session  = await getServerSession();
  if(session?.user){
    redirect("/dashboard")
  }
  return (
   <div>
    <HomePage/>
   </div>
  );
}
