import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center w-full py-12"
    >
      <Fade>
        <div className="2xl:w-[1440px] xl:w-[1224px] lg:w-[900px] w-full flex items-center justify-center relative flex-col px-5">
          <div className="section-header__content">
            <h1 className="color--gradient-y xl:text-[60px] text-[50px] uppercase newfont">
              About us
            </h1>
          </div>
          <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-3">
            <div className="flex flex-col gap-10">
              <div
                className="bg-gradient-to-r from-white/10 to-white/10 border-[2px] border-[#0d142f]
              p-[40px] border-tl- rounded-tl-md border-tr rounded-tr-2xl border-b-8 border-r-8"
              >
                <span className="text-xl leading-10 text-gray-50">
                  Pepe is tired of watching everyone play hot potato with the
                  endless derivative ShibaCumGMElonKishuTurbo AssFlokiMoon lnu
                  coins.
                </span>
              </div>
              <div
                className="bg-gradient-to-r from-white/10 to-white/10 border-[2px] border-[#0d142f]
              p-[40px] border-tl- rounded-tl-md border-tr rounded-tr-2xl border-b-8 border-r-8"
              >
                <span className="text-xl leading-10 text-gray-50">
                  Pepe is tired of watching everyone play hot potato with the
                  endless derivative ShibaCumGMElonKishuTurbo AssFlokiMoon lnu
                  coins.
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center w-full about-media">
              <img src="img/about.png" alt="" />
            </div>
            <div className="flex flex-col gap-10">
              <div
                className="bg-gradient-to-r from-white/10 to-white/10 border-[2px] border-[#0d142f]
              p-[40px] border-tl- rounded-tl-md border-tr rounded-tr-2xl border-b-8 border-r-8"
              >
                <span className="text-xl leading-10 text-gray-50">
                  Pepe is tired of watching everyone play hot potato with the
                  endless derivative ShibaCumGMElonKishuTurbo AssFlokiMoon lnu
                  coins.
                </span>
              </div>{" "}
              <div
                className="bg-gradient-to-r from-white/10 to-white/10 border-[2px] border-[#0d142f]
              p-[40px] border-tl- rounded-tl-md border-tr rounded-tr-2xl border-b-8 border-r-8"
              >
                <span className="text-xl leading-10 text-gray-50">
                  Pepe is tired of watching everyone play hot potato with the
                  endless derivative ShibaCumGMElonKishuTurbo AssFlokiMoon lnu
                  coins.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
