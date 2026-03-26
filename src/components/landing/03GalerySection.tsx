import { useState } from "react";
import AnimatedSection from "./00AnimatedSection";
import { X } from "lucide-react";

const photos = [
  { 
    src: "/images/sala-suassuna-01.png", 
    alt: "Layout da Sala Suassuna", 
    span: "md:col-span-2 md:row-span-2" 
  },
  { 
    src: "/images/sala-suassuna-02.png", 
    alt: "Mesas operacionais e cadeiras confortáveis", 
    span: "" 
  },
  { 
    src: "/images/sala-suassuna-03.png", 
    alt: "Estrutura ideal para sua operação", 
    span: "" 
  },
  { 
    src: "/images/sala-suassuna-04.png", 
    alt: "Sala privativa mobiliada e fino acabamento", 
    span: "md:col-span-2" 
  },
  { 
    src: "/images/sala-suassuna-05.png", 
    alt: "Vista ampla da Sala Suassuna", 
    span: "" 
  },
  { 
    src: "/images/sala-suassuna-06.png", 
    alt: "Espaço pronto para uso imediato", 
    span: "" 
  },
  { 
    img: "/images/sala-suassuna-07.png",
    alt: "Duas mesas de gestores e quadro", 
    span: "md:col-span-2" 
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState("");

  return (
    <>
      <AnimatedSection className="py-20 md:py-28 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Galeria de Fotos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça a estrutura da Sala Suassuna por diferentes ângulos e detalhes do ambiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-4">
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedImage(photo.src); // Alterado de .img para .src
                  setSelectedAlt(photo.alt);
                }}
                className={`group relative overflow-hidden rounded-2xl border border-border ${photo.span}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm font-medium">
                    {photo.alt}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={selectedImage}
            alt={selectedAlt}
            className="max-h-[90vh] max-w-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GallerySection;