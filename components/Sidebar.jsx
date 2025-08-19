import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Sidebar = ({ expland, setExpland }) => {
  return (
    <div
      className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen ${
        expland ? "p-4 w-64" : "md:w-20 w-0 max-md:overflow-hidden"
      }`}
    >
      <div>
        <div
          className={`flex ${
            expland ? "flex-row gap-10" : "flex-col items-center gap-8"
          }`}
        >
          {expland ? (
            <Image className="w-36" alt="logo-text" src={assets.logoText} />
          ) : (
            <Image className="w-10" alt="logo-icon" src={assets.logo} />
          )}

          {/* Sidebar Logo  */}
          <div
            onClick={() => (expland ? setExpland(false) : setExpland(true))}
            className="group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 aspect-square rounded-lg cursor-pointer"
          >
            <Image
              className="md:hidden"
              alt="menu-icon"
              src={assets.menu_icon}
            />
            <Image
              className="hidden md:block w-12"
              alt="menu-ternary"
              src={expland ? assets.sidebar_close_icon : assets.sidebar_icon}
            />

            {/* hover dialog  */}
            <div
              className={`absolute w-max ${
                expland ? "left-1/2 -translate-x-1/2 top-12" : "-top-12 left-0"
              }
                opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none`}
            >
              {expland ? "Close sidebar" : "Open sidebar"}
              <div
                className={`w-3 h-3 absolute bg-black rotate-45 ${
                  expland
                    ? "left-1/2 -top-1.5 -translate-x-1/2"
                    : "left-4 -bottom-1.5"
                }`}
              ></div>
            </div>
          </div>
        </div>

        {/* New CHar Button  */}
        <button
          className={`font-mono text-xl mt-8 flex items-center justify-center cursor-pointer ${
            expland
              ? "bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-max"
              : "mx-auto group relative h-9 w-9 hover:bg-gray-500/30 rounded-lg"
          }`}
        >
          <Image
            className={expland ? `w-10` : "w-10"}
            src={expland ? assets.chat_icon : assets.chat_icon_dull}
            alt="chat-icon"
          />
          <div className="absolute w-max -top-12 -right-12 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none">
            New Chat
            <div className="w-3 h-3 absolute bg-black rotate-45 left-4 -bottom-1.5"></div>
          </div>
          {expland && <p className="text-white text font-medium">New Chat</p>}
        </button>

        <div
          className={`mt-8 text-white/30 text-sm ${
            expland ? "block" : "hidden"
          }`}
        >
          <p className="my-1">Recents</p>
          {/* chatLabel  */}
        </div>
      </div>

      {/* Profile section  */}
      <div>
        <div
          className={`flex items-center cursor-pointer group relative ${
            expland
              ? "gap-1 text-white/80 text-sm p-2.5 border border-primary rounded-lg hover:bg-white/20 cursor-pointer"
              : "h-10 w-10 mx-auto hover:bg-gray-500/30 rounded-lg"
          }`}
        >
          <Image
            src={expland ? assets.phone_icon : assets.phone_icon_dull}
            alt="phone"
            className={expland ? "w-5" : "w-6.5 mx-auto"}
          />
          <div
            className={`absolute -top-60 pb-8 ${
              !expland && "-right-40"
            } opacity-0 group-hover:opacity-100 hidden group-hover:block transition`}
          >
            <div className="relative w-max bg-black text-white text-sm p-3 rounded shadow-lg">
              <Image src={assets.qrcode} alt="qr" className="w-44" />
              <p>Scan to get Source Code</p>
              <div
                className={`w-3 h-3 absolute bg-black rotate-45 ${
                  expland ? "right-1/2" : "left-4"
                } -bottom-1.5`}
              ></div>
            </div>
          </div>
          {expland && (
            <>
              <a href="https://www.linkedin.com/in/sagnik-bera/">
                <span className="flex items-center">
                  Sagnik
                  <svg
                    className="text-primary fill-primary"
                    width="24px"
                    height="24px"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                  >
                    <path
                      d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M7 17V13.5V10"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M7 7.01L7.01 6.99889"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
              </a>
              <Image src={assets.new_icon} alt="new" />
            </>
          )}
        </div>
        {/* User icon  */}
        <div className={`flex items-center ${expland ? 'hover:bg-white/10 rounded-lg' : 'justify-center w-full'} gap-3 text-white/60 text-sm p-2 mt-2 cursor-pointer`}>
          <Image src={assets.profile_icon} alt="profile-icon" className="w-7"/>
          {
            expland && <span>My Profile</span>
          }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
