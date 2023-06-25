import { min } from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Countdown from "../components/Countdown";
import { motion } from "framer-motion";
import { ScaleLoader } from "react-spinners";
import { ethers } from "ethers";

import MINTCONTRACT_ABI from "../../public/abis/MINTCONTACT_ABI.json";
import GFLRTOKENCONTRACT_ABI from "../../public/abis/GFLRTOKENCONTRACT_ABI.json";
import {
  MINTCONTRACT_ADDR,
  PUBLICMINTPRICE,
  TOKENCONTRACT_ADDR,
  WHITELISTMINTPRICE,
} from "../config";
import { useWeb3React } from "@web3-react/core";
import { errorAlert, successAlert } from "../components/toastGroup";
import { WindowWithEthereum } from "../types";

export default function Mint() {
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

  const { account } = useWeb3React();
  const [mintCount, setMintCount] = useState<number>(1);
  const [totalSupply, setTotalSupply] = useState<number>(0);
  const [whiteListCounts, setWhiteListCounts] = useState<number>(0);
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [whtieListMintState, setWhiteListMintState] = useState<boolean>(false);
  const [endWhiteListState, setEndWhiteListState] = useState<boolean>(false);
  const [maxMintCount, setMaxMintCount] = useState(5);

  const provider =
    typeof window !== "undefined" && (window as WindowWithEthereum).ethereum
      ? new ethers.providers.Web3Provider(
          (window as WindowWithEthereum).ethereum
        )
      : null;
  const Signer = provider?.getSigner();

  const MINTCONTRACT = new ethers.Contract(
    MINTCONTRACT_ADDR,
    MINTCONTRACT_ABI,
    Signer
  );

  const handleMintFunc = async () => {
    if (account) {
      if (whtieListMintState && !endWhiteListState) {
        setLoadingState(true);
        await MINTCONTRACT.mintWhiteList(mintCount, {
          value: ethers.utils.parseEther(
            (WHITELISTMINTPRICE * mintCount).toString()
          ),
          gasLimit: 3000000 * mintCount,
        })
          .then((tx: any) => {
            tx.wait()
              .then(() => {
                successAlert("Mint Successful!");
                getMintData();
                setLoadingState(false);
              })
              .catch(() => {
                setLoadingState(false);
                getMintData();
              });
          })
          .catch(() => {
            setLoadingState(false);
            getMintData();
          });
      } else {
        setLoadingState(true);
        await MINTCONTRACT.mint(mintCount, {
          value: ethers.utils.parseEther(
            (PUBLICMINTPRICE * mintCount).toString()
          ),
          gasLimit: 3000000 * mintCount,
        })
          .then((tx: any) => {
            tx.wait()
              .then(() => {
                successAlert("Mint Successful!");
                getMintData();
                setLoadingState(false);
              })
              .catch(() => {
                setLoadingState(false);
                getMintData();
              });
          })
          .catch(() => {
            setLoadingState(false);
            getMintData();
          });
      }
    } else {
      errorAlert("Please connect wallet!");
    }
  };

  const getMintData = async () => {
    setLoadingState(true);
    const counts = await MINTCONTRACT.totalSupply();
    setTotalSupply(Number(counts));
    const state = await MINTCONTRACT.isWhiteListActive();
    setWhiteListMintState(state);
    console.log("setWhiteListMintState", state);
    const count = await MINTCONTRACT.whiteList(account);
    setWhiteListCounts(Number(count));
    setLoadingState(false);
  };

  useEffect(() => {
    if (account) {
      getMintData();
      const interval = setInterval(() => {
        getMintData();
      }, 60000); // 1 minute
      return () => clearInterval(interval);
    }
  }, [account]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
    >
      <section className="relative flex flex-col w-full bg-gradient-to-br from-[#062e17] via-transparent to-[#063a1b] 2xl:min-h-[90vh] min-h-[100vh]">
        <img
          src="/img/background.png"
          className="fixed top-0 bottom-0 object-cover w-full h-full -z-10 opacity-10"
        />
        <div className="2xl:px-[300px] xl:px-[200px] lg:px-[100px] md:px-[100px] px-5 mt-[100px] lg:mt-[100px] w-full gap-5 pb-10">
          <Link href={"/"} passHref>
            <div className="w-full my-5 text-right transition-all duration-300 hover:translate-x-2">
              <h1 className="font-bold text-right text-white cursor-pointer">{`<- Back to Home`}</h1>
            </div>
          </Link>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="xl:w-[500px] lg:w-[400px] w-[350px] md:w-[500px] p-2">
              <div className="w-full p-2 border-7 border-[#3a963d] bg-white bg-opacity-10 backdrop-blur-md rounded-3xl rounded-tl-[80px] rounded-br-[80px] rounded-tr-[30px] rounded-bl-[30px]">
                <Slider
                  {...settings}
                  className="mx-3 my-2"
                  cssEase="ease-in-out"
                >
                  {nftArray.map((data, index) => (
                    <img
                      src={data.imgurl}
                      key={index}
                      className="object-cover w-full rounded-3xl rounded-tl-[80px] rounded-br-[80px] rounded-tr-[30px] rounded-bl-[30px]"
                    />
                  ))}
                </Slider>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center w-full">
                <Countdown
                  endDateTime={168431040000} // 1684310400000 is the timestamp of start public mint
                  onCanBreed={() => {
                    setEndWhiteListState(true);
                    setMaxMintCount(7);
                  }}
                  whiteListCounts={whiteListCounts}
                />
              </div>
              <div className="flex items-center justify-center w-full mt-10">
                <h1 className="text-xl font-extrabold text-center text-white uppercase">
                  The PEPEZ NFTs
                  <br />
                  FlareGod Minting Cost = 999 FLR
                </h1>
              </div>
              <div className="flex items-center justify-between w-full mt-5">
                <button
                  className={`flex items-center justify-center cursor-pointer my-10 h-[58px] text-xl text-black no-underline transition-all rounded-md shadow-md newfont px-7 transform-origin-right bg-gradient-to-r from-green-100 to-green-400 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-100 duration-500`}
                  disabled={mintCount <= 1}
                  onClick={() =>
                    mintCount <= 1
                      ? setMintCount(1)
                      : setMintCount(mintCount - 1)
                  }
                >
                  {`-`}
                </button>{" "}
                <h1 className="text-xl font-bold text-white">{mintCount}</h1>
                <button
                  className={`flex items-center justify-center cursor-pointer my-10 h-[58px] text-xl text-black no-underline transition-all rounded-md shadow-md newfont px-7 transform-origin-right bg-gradient-to-r from-green-100 to-green-400 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-100 duration-500`}
                  disabled={mintCount >= maxMintCount}
                  onClick={() =>
                    mintCount >= maxMintCount
                      ? setMintCount(maxMintCount)
                      : setMintCount(mintCount + 1)
                  }
                >
                  {`+`}
                </button>
              </div>
              <div className="flex items-center justify-center w-full mt-5">
                <h1 className="text-2xl font-bold text-center text-white">
                  {totalSupply} / 5000
                </h1>
              </div>
              {totalSupply !== 5000 ? (
                <>
                  <div className="relative">
                    <div
                      className="flex items-center justify-center cursor-pointer my-10 hover:translate-y-1 h-[58px] text-xl text-black no-underline transition-all rounded-md shadow-md newfont px-7 transform-origin-right bg-gradient-to-r from-green-100 to-green-400 hover:bg-gradient-to-r hover:from-green-400 hover:to-green-100 duration-500"
                      onClick={() => handleMintFunc()}
                    >
                      Mint Now
                    </div>
                    {/* {whtieListMintState === true && whiteListCounts >= 50 && (
                      <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-gray-500 rounded-md cursor-not-allowed bg-opacity-80"></div>
                    )}{" "} */}
                  </div>
                  <div className="flex items-center justify-center w-full mt-2">
                    <h1 className="text-sm font-bold text-center text-white">
                      {maxMintCount} Mint per TX allowed
                    </h1>
                  </div>
                  <div className="flex items-center justify-center w-full mt-2">
                    <h1 className="text-sm font-bold text-center text-white">
                      1500 NFTs during Whitelist
                    </h1>
                  </div>
                </>
              ) : (
                <h1 className="text-3xl font-bold text-center text-red-500">
                  Sold Out!
                </h1>
              )}
            </div>
          </div>
        </div>
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
        {loadingState && (
          <div className="fixed top-0 bottom-0 left-0 right-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80 flex-col text-white">
            <ScaleLoader color="white" />
          </div>
        )}
      </section>
    </motion.section>
  );
}

type NFTIMG = {
  id: number;
  imgurl: string;
};

const nftArray: NFTIMG[] = [
  {
    id: 1,
    imgurl: "/img/nft/v4-slider-img.jpg",
  },
  {
    id: 9,
    imgurl: "/img/nft/v4-slider-img2.jpg",
  },
  {
    id: 2,
    imgurl: "/img/nft/v4-slider-img3.jpg",
  },
  {
    id: 3,
    imgurl: "/img/nft/v4-slider-img4.jpg",
  },
  {
    id: 4,
    imgurl: "/img/nft/v4-slider-img5.jpg",
  },
  {
    id: 5,
    imgurl: "/img/nft/v4-slider-img6.jpg",
  },
  {
    id: 6,
    imgurl: "/img/nft/v4-slider-img7.jpg",
  },
  {
    id: 7,
    imgurl: "/img/nft/v4-slider-img8.jpg",
  },
];
