'Use CLient';

import Link from "next/link"
import Image from "next/image";
import { UseState, UseEffect } from 'react';
import {SignIn, SignOut, UseSession, getproviders} from 'next-auth/react';

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href='/' className="flex flex-center gap-2">
        <Image
          src="assets/images/logo.svg"
          alt="PromptGen Logo"
          width={30}
          height={30}
          className="object-contain cursor-pointer" 
        />

        <p className="logo_text">PromptGen</p>
      </Link>

      {/* MObile Navigation */}
    </nav>
  )
}

export default Nav