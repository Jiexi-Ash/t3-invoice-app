import React from "react";
import Logo from "../../../public/assets/logo.svg";
import ThemeIcon from "../../../public/assets/icon-moon.svg";
import Avatar from "../../../public/assets/image-avatar.jpg";
import Image from "next/image";

function Navbar() {
  return (
    <header className="block bg-[#373B53] lg:hidden">
      <div className="flex justify-between">
        <div className="flex w-full items-center justify-between  border-r-2 border-r-[#494E6E]  pr-6">
          <div className="rounded-r-xl bg-primaryPurple py-6 px-6">
            <Logo className="h-7 w-7" />
          </div>
          <ThemeIcon className="h-6 w-6 text-white" />
        </div>

        <div className="flex items-center justify-center px-6">
          <Image
            src={Avatar}
            alt="avatar"
            className="rounded-full "
            width={32}
            height={32}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
