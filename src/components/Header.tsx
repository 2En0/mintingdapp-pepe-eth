/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

import { switchNetwork, injected } from "../connecthook/switch-network";
import { FaWallet } from "react-icons/fa";

import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const router = useRouter();
  // const [open, setOpen] = useState(false);

  const { account, chainId, activate, deactivate } = useWeb3React();
  const [menuOpen, setMenuOpen] = useState(false);

  async function connect() {
    if (chainId !== 16 || chainId === undefined) {
      switchNetwork();
    }
    try {
      console.log("clicked");
      await activate(injected);
      localStorage.setItem("isWalletConnected", "true");
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", "false");
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", "true");
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentcrollPos = window.scrollY;
      setVisible(prevScrollPos > currentcrollPos || currentcrollPos < 10);
      setPrevScrollPos(currentcrollPos);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  console.log("router", router);

  return (
    <>
      <header
        className={`w-full h-[100px] flex items-center justify-center fixed z-50 ${
          visible
            ? "top-0 bg-black bg-opacity-10 backdrop-blur-sm"
            : "-translate-y-full "
        } transition-all duration-300 gap-10`}
      >
        <div className="2xl:w-[1240px] max-w-[1440px] xl:w-[1124px] lg:w-[900px] w-full px-5 flex items-center justify-between relative">
          <Head>
            <link rel="icon" href="/img/loader.png" />
          </Head>
          <Link href={`/`} passHref>
            <div className="absolute left-0 z-50 flex items-center justify-center gap-2 rounded-lg cursor-pointer">
              <img
                src="/img/loader.png"
                className=" object-cover object-center w-[60px] h-[60px] p-1 rounded-full"
                alt="logo"
              />
              <span className="text-xl text-white uppercase newfont color--gradient-y">
                PEPEZ
              </span>
            </div>
          </Link>
          <ul className="absolute left-0 right-0 items-center justify-center hidden gap-10 xl:flex">
            <a href="/#">
              <li className="text-md font-bold text-white uppercase list-none transition-all duration-300 cursor-pointer hover:text-[#abff87]">
                Home
              </li>
            </a>
            <a href="/#about">
              <li className="text-md font-bold text-white uppercase list-none transition-all duration-300 cursor-pointer hover:text-[#abff87]">
                About
              </li>
            </a>
            <a href="/#collection">
              <li className="text-md font-bold text-white uppercase list-none transition-all duration-300 cursor-pointer hover:text-[#abff87]">
                Collection
              </li>
            </a>

            <a href="/#roadmap">
              <li className="text-md font-bold text-white uppercase list-none transition-all duration-300 cursor-pointer hover:text-[#abff87]">
                RoadMap{" "}
              </li>
            </a>

            <a href="/#team">
              <li className="text-md font-bold text-white uppercase list-none transition-all duration-300 cursor-pointer hover:text-[#abff87]">
                Team
              </li>
            </a>
          </ul>

          {account ? (
            <button
              onClick={() => disconnect()}
              className="absolute right-0 h-[58px] text-xl text-black no-underline transition-all duration-300 rounded-md 
              shadow-md newfont px-7 transform-origin-right bg-gradient-to-r from-green-100 to-green-400 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-100 hidden xl:block"
            >
              <span className="flex gap-2 font-normal text">
                <FaWallet style={{ marginTop: "3%" }} />
                {account && account.slice(0, 4) + "..." + account.slice(-4)}
              </span>
            </button>
          ) : (
            <button
              onClick={() => connect()}
              className="absolute right-0 h-[58px] text-xl text-black no-underline transition-all duration-300 rounded-md
               shadow-md newfont px-7 transform-origin-right bg-gradient-to-r from-green-100 to-green-400 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-100 hidden xl:block"
            >
              <span className="flex gap-2 font-normal text">
                {" "}
                <FaWallet style={{ marginTop: "3%" }} /> Connect wallet
              </span>
            </button>
          )}
        </div>
        <div
          className="p-1 transition-all duration-300 rounded-lg cursor-pointer xl:hidden hover:border-white"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu color="white" size={"30px"} />
        </div>
      </header>
      {menuOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-[60] items-center justify-center bg-black opacity-95 xl:hidden">
          <div className="flex items-center justify-end w-full px-3 py-4">
            <div
              className="p-1 transition-all duration-300 border-gray-300 rounded-lg cursor-pointer hover:border-white"
              onClick={() => setMenuOpen(false)}
            >
              <IoMdClose color="white" size={"32px"} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col justify-center gap-5 text-center lg:text-left lg:mx-0 lg:pl-4">
              <div className="flex flex-col items-center justify-center gap-10 newfont">
                <Link href={"/"} passHref>
                  <li
                    className={`text-lg font-normal ${
                      router.asPath === "/" ? "text-green-700" : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-green-700`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </li>
                </Link>
                <a href="/#about">
                  <li
                    className={`text-lg font-normal ${
                      router.asPath === "/#about"
                        ? "text-green-700"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-green-700`}
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </li>
                </a>
                <a href="/#collection">
                  <li
                    className={`text-lg font-normal ${
                      router.asPath === "/#collection"
                        ? "text-green-700"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-green-700`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Collection
                  </li>
                </a>
                <a href={"/#roadmap"}>
                  <li
                    className={`text-lg font-normal ${
                      router.asPath === "/#roadmap"
                        ? "text-green-700"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-green-700`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Roadmap
                  </li>
                </a>
                <a href={"/#team"}>
                  <li
                    className={`text-lg font-normal ${
                      router.asPath === "/#team"
                        ? "text-green-700"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-green-700`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Team
                  </li>
                </a>
                <Link href={"/mint"} passHref>
                  <li
                    className={`text-lg font-normal ${
                      router.pathname === "/mint"
                        ? "text-green-700"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-green-700`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Mint
                  </li>
                </Link>
              </div>

              {account ? (
                <button
                  onClick={() => disconnect()}
                  className="h-[58px] text-xl text-black no-underline transition-all duration-300 rounded-md 
              shadow-md newfont px-7 transform-origin-right bg-gradient-to-r from-green-100 to-green-400 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-100"
                >
                  <span className="flex gap-2 font-normal text">
                    <FaWallet style={{ marginTop: "3%" }} />
                    {account && account.slice(0, 4) + "..." + account.slice(-4)}
                  </span>
                </button>
              ) : (
                <button
                  onClick={() => connect()}
                  className="h-[58px] text-xl text-black no-underline transition-all duration-300 rounded-md
               shadow-md newfont px-7 transform-origin-right bg-gradient-to-r from-green-100 to-green-400 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-100"
                >
                  <span className="flex gap-2 font-normal text">
                    {" "}
                    <FaWallet style={{ marginTop: "3%" }} /> Connect wallet
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
