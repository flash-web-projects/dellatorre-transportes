import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import fullBanner1 from "@/assets/FULLBANNER1.jpg";
import fullBanner2 from "@/assets/FULLBANNER2.jpg";
import fullBanner3 from "@/assets/FULLBANNER3.jpg";
import fullBanner4 from "@/assets/FULLBANNER4.jpg";

const images = [fullBanner1, fullBanner2, fullBanner3, fullBanner4];

const FullBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Imagens */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Banner ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${index === current ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Texto principal */}
      <div className="relative z-10 text-center text-white px-4">

        <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-4 text-white">
          Soluções em transporte para{" "}
          <span className="relative inline-block bg-primary/80 text-white px-2 py-2 rounded-md">
            <ReactTyped
              strings={["indústrias", "obras", "agronegócio", "eventos"]}
              typeSpeed={80}
              backSpeed={50}
              backDelay={1500}
              loop
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl font-poppins text-white/90 max-w-2xl mx-auto">
          Confiança, tecnologia e eficiência em cada quilômetro.
        </p>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${current === index
              ? "bg-[hsl(var(--dellatorre-yellow))] scale-125"
              : "bg-white/50 hover:bg-white/80"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default FullBanner;
