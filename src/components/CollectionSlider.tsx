import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CollectionSlider = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="my-10 slider">
        <div className="px-3">
          <div className="w-full p-2 border-7 border-[#3a963d] bg-white bg-opacity-10 backdrop-blur-md rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]">
            <img
              src={`/img/nft/v4-slider-img.jpg`}
              className="w-90 rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-7 border-[#3a963d] bg-white bg-opacity-10 backdrop-blur-md rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]">
            <img
              src={`/img/nft/v4-slider-img2.jpg`}
              className="w-90 rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-7 border-[#3a963d] bg-white bg-opacity-10 backdrop-blur-md rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]">
            <img
              src={`/img/nft/v4-slider-img3.jpg`}
              className="w-90 rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-7 border-[#3a963d] bg-white bg-opacity-10 backdrop-blur-md rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]">
            <img
              src={`/img/nft/v4-slider-img4.jpg`}
              className="w-90 rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-7 border-[#3a963d] bg-white bg-opacity-10 backdrop-blur-md rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]">
            <img
              src={`/img/nft/v4-slider-img5.jpg`}
              className="w-90 rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-7 border-[#3a963d] bg-white bg-opacity-10 backdrop-blur-md rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]">
            <img
              src={`/img/nft/v4-slider-img6.jpg`}
              className="w-90 rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-7 border-[#3a963d] bg-white bg-opacity-10 backdrop-blur-md rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]">
            <img
              src={`/img/nft/v4-slider-img7.jpg`}
              className="w-90 rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="w-full p-2 border-7 border-[#3a963d] bg-white bg-opacity-10 backdrop-blur-md rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]">
            <img
              src={`/img/nft/v4-slider-img8.jpg`}
              className="w-90 rounded-3xl rounded-tl-[15px] rounded-br-[30px] rounded-tr-[30px] rounded-bl-[30px]"
              alt="nftCollectionSlider"
            />
          </div>
        </div>
      </Slider>
    </>
  );
};

export default CollectionSlider;
