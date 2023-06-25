import Link from "next/link";
import { useEffect, useState } from "react";

import * as Gricon from "react-icons/gr";

export default function Footer() {
  const [clickScrollTopBtnState, setClickScrollTopBtnState] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    setClickScrollTopBtnState(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setClickScrollTopBtnState(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer
      className="w-full h-[100px] flex items-center justify-center backdrop-blur-lg z-50 border-t-[2px] border-gray-800
    border-opacity-30"
    >
      <div className="2xl:w-[1440px] max-w-[1440px] xl:w-[1224px] lg:w-[900px] w-full px-5 flex items-center justify-center">
        <div className="text-center text-gray-50">
          copyright @2023 Join our{" "}
          <a
            className="font-bold text-green-300 duration-300 cursor-pointer hover:text-green-500 hover:underline"
            href="https://twitter.com/Flaregods"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>{" "}
          &{" "}
          <a
            className="font-bold text-green-300 duration-300 cursor-pointer hover:text-green-500 hover:underline"
            href="https://discord.gg/auUGNVSpKb"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>{" "}
          to know more about us
        </div>
        {isVisible && (
          <div
            className="fixed p-3 bg-green-500 rounded-full cursor-pointer bottom-10 right-10 rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl animate-bounce"
            onClick={() => scrollToTop()}
          >
            <Gricon.GrLinkTop color="white" />
          </div>
        )}
      </div>
    </footer>
  );
}
