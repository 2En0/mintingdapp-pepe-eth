import { Fade } from "react-awesome-reveal";
import CollectionSlider from "../components/CollectionSlider";

export default function Collection() {
  return (
    <section
      id="collection"
      className="relative flex flex-col items-center justify-center w-full py-12"
    >
      <div className="2xl:w-[1440px] xl:w-[1224px] lg:w-[900px] w-full flex items-center justify-center relative flex-col px-5">
        <Fade>
          <div className="flex flex-col items-center gap-3 my-5 section-header__content">
            <h1 className="color--gradient-y xl:text-[60px] text-[50px] uppercase newfont">
              Collection
            </h1>
            <p className="text-[#ecffe1] text-2xl text-center">
              Lorem Ipsum Generator Generate Lorem Ipsum placeholder text.
              <br />
              Select the number of characters!
            </p>
          </div>
        </Fade>
        <div className="w-full">
          <CollectionSlider />
        </div>
        <Fade>
          <div className="flex flex-col items-center justify-center w-full gap-2">
            <h1 className="md:text-[100px] text-[50px] font-extrabold text-center text-[#ecffe1] newfont">
              5000
            </h1>
            <h1 className="text-xl text-center text-[#ecffe1] uppercase">
              Total Items in collection
            </h1>
          </div>
        </Fade>
      </div>
    </section>
  );
}
