import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-[#D8D8D8] text-white z-[100] top-0 w-full">
      <ul>
        <li>
          <div className={"nav_link py-2 px-2 font-semibold xl:text-xl lg:text-base text-center py-4" + `${router.pathname == "/" ? " logo-bloc text-black" : ""}`}>
            <Link href="/" className="basis-1/4">
              <a className="link" onClick={() => setIsOpen(false)}>
                <Image
                  width="50"
                  height="50"
                  src="/account_icon.png"
                  alt="profile"
                  className="" />
              </a>
            </Link>
          </div>
          <hr className="w-[3rem] m-0 m-auto" />
        </li>
        <li>
          <div className="nav_link py-2 px-2 font-semibold xl:text-xl lg:text-base text-center  py-4 border-r-2 border-[#FAE489]">
            <Link href="/" className="basis-1/4">
              <a>
                <Image
                  width="50"
                  height="50"
                  src="/home_icon.png"
                  alt="profile"
                  className="" />
              </a>
            </Link>
          </div>
          <hr className="w-[3rem] m-0 m-auto" />
        </li>
        <li>
          <div className="nav_link py-2 px-2 font-semibold xl:text-xl lg:text-base text-center py-4">
            <Link href="http://localhost:3002" className="basis-1/4">
              <a>
                <Image
                  width="50"
                  height="50"
                  src="/list_icon.png"
                  alt="profile"
                  className="" />
              </a>
            </Link>
          </div>
          <hr className="w-[3rem] m-0 m-auto" />
        </li>
        <li>
          <div className="nav_link py-2 px-2 font-semibold xl:text-xl lg:text-base text-center py-4">
            <Link href="http://localhost:3000" className="basis-1/4">
              <a>
                <Image
                  width="50"
                  height="50"
                  src="/add_icon.png"
                  alt="profile"
                  className="" />
              </a>
            </Link>
          </div>
          <hr className="w-[3rem] m-0 m-auto" />
        </li>
        <li>
          <div className={"nav_link py-2 px-2 font-semibold xl:text-xl text-center py-4" + `${router.pathname == "/contact" ? " logo-bloc text-black" : ""}`}>
            <Link href="/apps" className="basis-1/4">
              <a
                className={router.pathname == "/contact" ? "link active" : "link"}
              >
                <Image
                  width="50"
                  height="50"
                  src="/apps_icon.png"
                  alt="profile"
                  className="" />
              </a>
            </Link>
          </div>
          <hr className="w-[3rem] m-0 m-auto" />
        </li>
        <li>
          <div className={"nav_link py-2 px-2 font-semibold xl:text-xl text-center py-4" + `${router.pathname == "/contact" ? " logo-bloc text-black" : ""}`}>
            <Link href="/contact" className="basis-1/4">
              <a
                className={router.pathname == "/contact" ? "link active" : "link"}
              >
                <Image
                  width="50"
                  height="50"
                  src="/group_icon.png"
                  alt="profile"
                  className="" />
              </a>
            </Link>
          </div>
          <hr className="w-[3rem] m-0 m-auto" />
        </li>
        <li>
          <div className={"nav_link py-2 px-2 font-semibold xl:text-xl text-center py-4" + `${router.pathname == "/contact" ? " logo-bloc text-black" : ""}`}>
            <Link href="/contact" className="basis-1/4">
              <a
                className={router.pathname == "/contact" ? "link active" : "link"}
              >
                <Image
                  width="50"
                  height="50"
                  src="/mail_icon.png"
                  alt="profile"
                  className="" />
              </a>
            </Link>
          </div>
          <hr className="w-[3rem] m-0 m-auto" />
        </li>
        <li>
          <div className={"nav_link py-2 px-2 font-semibold xl:text-xl text-center py-4" + `${router.pathname == "/contact" ? " logo-bloc text-black" : ""}`}>
            <Link href="/contact" className="basis-1/4">
              <a
                className={router.pathname == "/contact" ? "link active" : "link"}
              >
                <Image
                  width="50"
                  height="50"
                  src="/support_icon.png"
                  alt="profile"
                  className="" />
              </a>
            </Link>
          </div>
          <hr className="w-[3rem] m-0 m-auto" />
        </li>
        <li>
          <div className={"nav_link py-2 px-2 font-semibold xl:text-xl text-center py-4" + `${router.pathname == "/contact" ? " logo-bloc text-black" : ""}`}>
            <Link href="/contact" className="basis-1/4">
              <a
                className={router.pathname == "/contact" ? "link active" : "link"}
              >
                <Image
                  width="50"
                  height="50"
                  src="/settings_icon.png"
                  alt="profile"
                  className="" />
              </a>
            </Link>
          </div>
          <hr className="w-[3rem] m-0 m-auto" />
        </li>
        <li>
          <div className={"nav_link py-2 px-2 font-semibold xl:text-xl text-center py-4" + `${router.pathname == "/contact" ? " logo-bloc text-black" : ""}`}>
            <Link href="/contact" className="basis-1/4">
              <a
                className={router.pathname == "/contact" ? "link active" : "link"}
              >
                <Image
                  width="50"
                  height="50"
                  src="/logout_icon.png"
                  alt="profile"
                  className="" />
              </a>
            </Link>
          </div>
          <hr className="w-[3rem] m-0 m-auto" />
        </li>
        <li>
          <div className="nav_link py-2 px-2 font-semibold xl:text-xl text-center">
            <Link href="#/" className="basis-1/4">
              <a onClick={() => setIsOpen(false)} className="link">FR | EN</a>
            </Link>
          </div>
          <hr />
        </li>
        {/* <li>
          <div className={"nav_link py-2 px-2 font-semibold xl:text-xl text-center py-4 bg-white" + `${router.pathname == "/contact" ? " logo-bloc text-black" : ""}`}>
            <Link href="/contact" className="basis-1/4">
              <a
                className={router.pathname == "/contact" ? "link active" : "link"}
              >
                <Image
                  width="50"
                  height="10"
                  src="/logo-enterprise.png"
                  alt="profile"
                  className="w-full" />
              </a>
            </Link>
          </div>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
