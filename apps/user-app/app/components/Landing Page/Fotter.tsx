"use client"
import Link from "next/link";

export function Fotter(){
    return(
        <footer className="w-full px-[5vw]">
              <div className="grid grid-cols-1 md:grid-cols-2  text-white">
                <div className="">
                  <div className="w-full flex gap-4  items-center justify-center py-4">
                    <img
                      className="rounded-full h-32"
                      src="pfp_400x400.jpg"
                      alt=""
                    />
                    <div className="flex flex-col gap-4">
                      <p className="font-medium underline">Made By</p>
                      <div>
                      <p className="font-medium text-2xl">Shivam Kumar</p>
                      <p>Fullstack Developer</p>
                      <a className="text-sm" href="mailto:shivamkg29@gmail.com">
                        shivamkg29@gmail.com
                      </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex items-center md:items-start flex-col bord md:border-none pt-4 ">
                  <p className="md:underline font-medium pb-4">Let's Connect</p>
                  <div className="flex items-center gap-3 md:gap-8">
                  <SocialMedia href="https://github.com/Shivam29k" title="Github">
                    <img
                      className="h-[100%] w-[100%] rounded-full bg-white"
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt="github"
                    />
                  </SocialMedia>
                  <SocialMedia href="https://www.linkedin.com/in/shivamkrandom/" title="LinkedIn">
                    <img
                      className="h-[100%] w-[100%] rounded-full "
                      src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                      alt="linkedIn"
                    />
                  </SocialMedia>
                  <SocialMedia href="https://x.com/ShivamKrandom" title="X/Twitter">
                    <img
                      className="h-[100%] w-[100%] rounded-full"
                      src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719360000&semt=ais_user"
                      alt="twitter"
                    />
                  </SocialMedia>
                  <SocialMedia href="https://www.instagram.com/_shivam_k29/" title="Instagram">
                    <img
                      className="h-[100%] w-[100%] rounded-full"
                      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                      alt="instagram"
                    />
                  </SocialMedia>
                  </div>
                  <p className=" border-t py-4 md:mt-8 pl-1">Get the code of this project <a href="" className="underline text-blue-200">Here</a></p>
                </div>
              </div>
            </footer>
    )
}


function SocialMedia({
    children,
    href,
    title
  }: {
    children: React.ReactNode;
    href: string;
    title: string;
  }) {
    return (
      <Link href={href}>
        <div className="flex items-center justify-center flex-col hover:scale-110 transition-all duration-300">
        <div className="max-h-16 max-w-16 hover:shadow-xl rounded-full">
          {children}
        </div>
        <p className="text-center pt-2">{title}</p>
        </div>
      </Link>
    );
  }