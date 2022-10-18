import React from "react";
import Logo from "../../../public/assets/logo.svg";
import ThemeIcon from "../../../public/assets/icon-moon.svg";
import Avatar from "../../../public/assets/image-avatar.jpg";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="fixed inset-y-0 -translate-x-32 transform rounded-r-xl bg-darkishNavy duration-200 ease-in-out lg:translate-x-0">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="flex-1 border-b-2 border-b-[#494E6E]">
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-r-xl bg-primaryPurple p-8">
              <Logo className="h-7 w-7" />
            </div>

            <div className="absolute bottom-32">
              <ThemeIcon className="h-6 w-6 cursor-pointer text-white" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-6">
          <Image
            src={Avatar}
            alt="avatar"
            className="rounded-full "
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
