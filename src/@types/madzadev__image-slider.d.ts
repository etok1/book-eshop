declare module "@madzadev/image-slider" {
  export interface SlideImage {
    url: string;
  }

  export interface SliderProps {
    imageList: SlideImage[];
    width?: number;
    height?: number;
    showArrowControls?: boolean;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showDotControls?: boolean;
  }

  const Slider: React.FC<SliderProps>;

  export default Slider;
}
