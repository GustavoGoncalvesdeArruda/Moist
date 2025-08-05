import { useState, useEffect } from 'react';

const Carrossel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <div
        className="
          w-[1200px] h-[500px]
          rounded-md
          shadow-md
          relative
          bg-center bg-cover bg-no-repeat
          transition-all duration-700 ease-in-out
        "
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        {/* Botões de navegação opcionais */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded hover:bg-opacity-60 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded hover:bg-opacity-60 transition"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Carrossel;
