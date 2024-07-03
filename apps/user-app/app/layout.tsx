import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Provider } from "./provider";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-poppins',
})


export const metadata: Metadata = {
  title: "PayTW",
  description: "Pay through web wallet",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session  = await getServerSession();
  // if(!session?.user){
  //   redirect("/home")
  // }
  return (
    <html lang="en">
      <Provider>
        <body className={poppins_init.className}>
        <link rel="icon" href="/walleticon.svg" sizes="any" />
          <div className="">
          {children}
          </div>
        </body>
      </Provider>
    </html>
  );
}
