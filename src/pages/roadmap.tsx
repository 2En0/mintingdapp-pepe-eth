import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import { AiFillStar } from "react-icons/ai";
export default function RoadMap() {
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full py-[100px]"
      id="roadmap"
    >
      <img
        src="/img/background.png"
        className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full opacity-5 -z-10"
      />
      <div className="2xl:w-[1440px] xl:w-[1224px] lg:w-[900px] w-full flex items-center justify-center relative flex-col px-5">
        <div className="flex flex-col items-center gap-3 my-5 section-header__content">
          <h1 className="color--gradient-y text-[60px] uppercase newfont">
            Roadmap
          </h1>
          <p className="text-[#ecffe1] text-2xl text-center">
            Lorem Ipsum Generator Generate Lorem Ipsum placeholder text.
            <br />
            Select the number of characters!
          </p>
        </div>
        <div className="grid w-full gap-10 lg:grid-cols-3">
          <div className="p-10 rounded-lg bg-gradient-to-r from-green-100 to-green-400">
            <h1 className="text-[30px] text-black newfont">Phase 1</h1>
            <p className="font-bold text-gray-800">- Launch</p>
            <p className="font-bold text-gray-800">
              - CoinGecko/Coinmarketcap Listings
            </p>
            <p className="font-bold text-gray-800">- 1,000+ Holders</p>
            <p className="font-bold text-gray-800">
              - Get $PEPE Trending on twitter with our memetic power
            </p>
          </div>
          <div className="p-10 rounded-lg bg-gradient-to-r from-green-100 to-green-400">
            <h1 className="text-[30px] text-black newfont">Phase 2</h1>
            <p className="font-bold text-gray-800">
              - Community Partnerships Pepe Times digital newsletter
            </p>
            <p className="font-bold text-gray-800">
              - Firmation of token gated discord group, Pepe Palace, for
              holders, more details tba
            </p>
            <p className="font-bold text-gray-800">
              - Get $PEPE Trending on twitter with our memetic power
            </p>
          </div>
          <div className="p-10 rounded-lg bg-gradient-to-r from-green-100 to-green-400">
            <h1 className="text-[30px] text-black newfont">Phase 3</h1>
            <p className="font-bold text-gray-800">- Pepe merch</p>
            <p className="font-bold text-gray-800">- Pepe Academy</p>
            <p className="font-bold text-gray-800">- Pepe Tools</p>
            <p className="font-bold text-gray-800">
              - T1 Exchange Listings 100,000+ holders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
