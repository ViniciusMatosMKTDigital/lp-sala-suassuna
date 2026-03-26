import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/553121158984/?text=Olá!+Vi+no+site+sua+promoção+da+sala+privativa+Suassuna.+A+sala+ainda+está+disponível?";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center bg-primary text-primary-foreground px-6 py-20 overflow-hidden">
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    }} />

    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 text-center max-w-4xl mx-auto"
    >
      {/* Logo / Brand */}
      <p className="text-sm tracking-[0.3em] uppercase mb-12 opacity-70 font-light">
        Café Coabita Coworking
      </p>

      {/* Promo Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <Badge variant="outline" className="border-primary-foreground/40 text-primary-foreground px-4 py-2 text-sm font-medium tracking-wide">
          🎉 Mês do Consumidor: 50% OFF na entrada!
        </Badge>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight"
      >
        Sala Suassuna
        <span className="block text-2xl md:text-3xl lg:text-4xl font-light mt-3 opacity-80">
          Sua operação começa aqui
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-lg md:text-xl font-light opacity-70 mb-6 max-w-2xl mx-auto"
      >
        Sala comercial mobiliada para equipes de até 17 pessoas · 38m²           
      </motion.p>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-white/70 font-light mt-3 mb-20 max-w-xl mx-auto"
      >
        Sua equipe merece uma sala pronta, mobiliada e profissional
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window.gtagSendEvent === 'function') {
              window.gtagSendEvent(WHATSAPP_LINK);
            }
          }}
        >
          <Button
            size="lg"
            variant="secondary"
            className="text-base px-8 py-6 font-semibold group"
          >
            Agende uma visita
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </a>
      </motion.div>
    </motion.div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="w-5 h-8 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-1.5"
      >
        <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
