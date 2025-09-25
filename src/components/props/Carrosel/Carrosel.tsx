import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlideItem {
  imagem: string;
  botao: string;
  link?: string;
}

interface CarouselProps {
  slides: SlideItem[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800, // Increased for smoother transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Reduced time between slides
    arrows: true,
    fade: false, // Changed to false to enable slide effect
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)", // Smooth easing
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full outline-none">
            <div className="">
              <img
                src={slide.imagem}
                className="w-full h-full object-cover transform transition-transform duration-500"
                alt={`slide-${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
