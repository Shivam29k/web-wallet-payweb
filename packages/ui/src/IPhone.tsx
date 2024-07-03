"use client";

import { useEffect, useState } from "react";

interface IPhoneProps {
  image: string;
  navBarColor?: string;
  className?: string;
}

function IPhone({ image, navBarColor, className }: IPhoneProps) {
  const [time, setTime] = useState<string>("");

  // update the time every minute
  useEffect(()=>{
    setInterval(()=>{
      const time = new Intl.DateTimeFormat("default", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
      setTime(time);
    })
  }, [])
  
  return (
    <div className={`h-[70vh] w-72  ${className}`}>
      <div className={`border  h-full w-full rounded-xl bg-zinc-700 p-1`}
        style={{
          boxShadow: `20px 20px 5px 0px rgba(0,0,0,0.3)`
        }}
      >
        <div
          className={`w-full h-full ${navBarColor ? navBarColor : "bg-white"} rounded-xl  flex flex-col items-center justify-center overflow-hidden`}
        >
          <div className="w-full grid grid-cols-3 items-center pt-0.5">
            <div className="flex items-center gap-1 pl-1">
              <p className="text-xs font-medium pt-0.5">{time}</p>
              <MessageIcon />
            </div>

            {/*Dynamic Island  */}
            <div className="bg-zinc-700 h-4 flex items-center w-full rounded-full p-1">
              <div className="h-2.5 w-2.5 bg-gray-500 rounded-full"></div>
            </div>

            <div className="flex items-center justify-end gap-1 pr-1">
              <WifiIcon />
              <BatteryIcon />
            </div>
          </div>

          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

function BatteryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-3"
    >
      <path d="M4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75h6.75A.75.75 0 0 0 12 15v-4.5a.75.75 0 0 0-.75-.75H4.5Z" />
      <path
        fillRule="evenodd"
        d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-3"
    >
      <path
        fillRule="evenodd"
        d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-3"
    >
      <path
        fillRule="evenodd"
        d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default IPhone;
