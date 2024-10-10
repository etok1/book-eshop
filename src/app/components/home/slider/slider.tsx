"use client";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

const slideImages = [
  {
    url: "/images/banner1.png",
  },
  {
    url: "/images/banner2.png",
  },
  {
    url: "/images/banner3.png",
  },
];

export const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slider
        imageList={slideImages}
        width={1200}
        height={700}
        showArrowControls={true}
        autoPlay={true}
        autoPlayInterval={3000}
        showDotControls={true}
      />
    </div>
  );
};
