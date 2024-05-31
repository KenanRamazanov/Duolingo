import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full bg-red-500">
        <div className="pt-8 pl-4 flex items-center gap-x-3 ">
         <Image src="/mascot.svg" width={40} height={40} alt="Mascot"/>
        </div>
      </div>
    </header>
  );
};
export default Header;
