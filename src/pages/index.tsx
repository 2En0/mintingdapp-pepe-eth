/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useWeb3React } from "@web3-react/core";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./about";
import Collection from "./collection";
import RoadMap from "./roadmap";
import Team from "./team";
import { Bounce } from "react-awesome-reveal";
import Link from "next/link";
import { motion } from "framer-motion";
import Faq from "./faq";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 300,
  fade: true,
};

const Home: NextPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className=""
    >
      <section
        className="relative flex flex-col items-center justify-center w-full 2xl:min-h-[90vh] min-h-[100vh]
        bg-gradient-to-br from-[#062e17] via-transparent to-[#063a1b]"
        id="#home"
      >
        <img
          src="/img/background.png"
          className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full -z-10 opacity-20"
        />
        <div className="2xl:w-[1440px] xl:w-[1224px] lg:w-[900px] w-full flex flex-col gap-10 items-center justify-center relative">
          <div className="flex flex-col gap-2">
            <h1 className="uppercase newfont text--3d xl:text-[90px] text-[50px] md:text-[80px] mt-[100px] text-center">
              <span className="color--gradient-y">BUY OUR NEW</span> <br />
              <span className="text-white">PEPEZ NFTs</span>
            </h1>
            <p className="text-[#ecffe1] text-2xl text-center">
              Lorem Ipsum Generator Generate Lorem Ipsum placeholder text.
              <br />
              Select the number of characters!
            </p>
          </div>
          <ul className="flex gap-3">
            <a
              href="https://twitter.com/Flaregods"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 cursor-pointer hover:translate-y-[-4px]"
            >
              <img src="img/discord.png" alt="Discord" />
            </a>
            <a
              href="https://twitter.com/Flaregods"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 cursor-pointer hover:translate-y-[-4px]"
            >
              <img src="img/twitter.png" alt="twitter" />
            </a>
          </ul>
          <Link href="/mint" passHref>
            <button className="my-10 hover:translate-y-1 h-[58px] text-xl text-black no-underline transition-all rounded-md shadow-md newfont px-7 transform-origin-right bg-gradient-to-r from-green-100 to-green-400 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-100 duration-500">
              <span className="flex gap-2 font-normal">{"Mint now"}</span>
            </button>
          </Link>
        </div>
      </section>
      <About />
      <Collection />
      <RoadMap />
      {/* <Team />
      <Faq />  */}
    </motion.section>
  );
};

export default Home;

type NFTIMG = {
  id: number;
  imgurl: string;
};

const nftArray: NFTIMG[] = [
  {
    id: 1,
    imgurl: "/img/nft/v4-slider-img.png",
  },
  {
    id: 9,
    imgurl: "/img/nft/v4-slider-img2.png",
  },
  {
    id: 2,
    imgurl: "/img/nft/v4-slider-img3.png",
  },
  {
    id: 3,
    imgurl: "/img/nft/v4-slider-img4.png",
  },
  {
    id: 4,
    imgurl: "/img/nft/v4-slider-img5.png",
  },
  {
    id: 5,
    imgurl: "/img/nft/v4-slider-img6.png",
  },
  {
    id: 6,
    imgurl: "/img/nft/v4-slider-img7.png",
  },
  {
    id: 7,
    imgurl: "/img/nft/v4-slider-img8.png",
  },
  {
    id: 8,
    imgurl: "/img/nft/v4-slider-img9.png",
  },
  {
    id: 16,
    imgurl: "/img/nft/v4-slider-img10.png",
  },
  {
    id: 10,
    imgurl: "/img/nft/v4-slider-img11.png",
  },
  {
    id: 11,
    imgurl: "/img/nft/v4-slider-img12.png",
  },
  {
    id: 12,
    imgurl: "/img/nft/v4-slider-img13.png",
  },
  {
    id: 13,
    imgurl: "/img/nft/v4-slider-img14.png",
  },
  {
    id: 14,
    imgurl: "/img/nft/v4-slider-img15.png",
  },
  {
    id: 15,
    imgurl: "/img/nft/v4-slider-img16.png",
  },
];
