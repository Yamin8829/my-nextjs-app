"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImagePaging({ api }: any) {
  const settings = {
    customPaging: function (i: any) {
      return (
        <a>
          <img
            key={i}
            src={`/public/images/fotbarSMA/2023_2024/Kls_10_A/${i + 1}.jpg`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {api.map((item: any) => (
          <div key={item.id}>
            <img src={item.url} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
