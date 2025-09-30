import { useEffect, useRef } from "react";
import ComponentsImagemCard from "../Card/CardImagem";

interface CardCarouselProps {
  cards: { imagem: string; filtromarca?: string; destino?: string }[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // se o usuário rolar o mouse, desliza horizontalmente
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900 px-4 py-6"
      style={{ scrollBehavior: "smooth" }}
    >
      {cards.map((card, idx) => (
        <ComponentsImagemCard
          key={idx}
          imagem={card.imagem}
          filtromarca={card.filtromarca}
          destino={card.destino}
        />
      ))}
    </div>
  );
};

export default CardCarousel;
