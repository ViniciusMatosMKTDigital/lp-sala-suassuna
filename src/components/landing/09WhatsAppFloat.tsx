import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/553121158984/?text=Olá!+Vi+no+site+sua+promoção+da+sala+privativa+Suassuna.+A+sala+ainda+está+disponível?";

const WhatsAppFloat = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }} // Aparece após 2 segundos
    >
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (typeof window.gtagSendEvent === 'function') {
            window.gtagSendEvent(WHATSAPP_LINK);
          }
        }}
        // Animação de "Pulo" (Bounce/Pulse)
        animate={{
          y: [0, -10, 0], // Move 10px para cima e volta
          scale: [1, 1.1, 1], // Aumenta levemente e volta
        }}
        transition={{
          duration: 2, // Tempo de cada ciclo
          repeat: Infinity, // Repete para sempre
          ease: "easeInOut",
        }}
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] transition-colors group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-9 h-9 group-hover:scale-110 transition-transform" />
        
        {/* Ping de atenção (opcional: um círculo que expande atrás do botão) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping"></span>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppFloat;