"use client";

import Link from "next/link"
import Image from "next/image";
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isuserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);


  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    setProviders();
  }, [])

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

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isuserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">Create a post</ Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="assets/images/logo.svg"
                alt="Profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => {
              <button
                type='button'
                key="provider.name"
                onClick={() => signIn(provider.id)}
                className='black_btn'
              >
                Sign In
              </button>
            })}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {(isuserLoggedIn) ? (
          <div className="flex">
            <Image
              src="assets/images/logo.svg"
              alt="profile"
              width={30}
              height={30}
              className="object-contain cursor-pointer"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={(setToggleDropdown => (false))}
                >
                  My Profile
                </Link>

                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={(setToggleDropdown => (false))}
                >
                  Create Prompt
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => {
              <button
                type='button'
                key="provider.name"
                onClick={() => signIn(provider.id)}
                className='black_btn'
              >
                Sign In
              </button>
            })}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav