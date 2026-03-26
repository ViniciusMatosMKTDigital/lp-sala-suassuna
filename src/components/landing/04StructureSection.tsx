import AnimatedSection from "./00AnimatedSection";
import { Maximize2, Users, Monitor, Crown, Wind, Wifi, Clock, Armchair, Plug } from "lucide-react";

const features = [
  { icon: Maximize2, label: "38 m²", desc: "área privativa" },
  { icon: Users, label: "17 posições", desc: "de trabalho simultâneas" },
  { icon: Monitor, label: "15 mesas", desc: "operacionais" },
  { icon: Crown, label: "2 mesas", desc: "de gestor / liderança" },
  { icon: Wind, label: "2 Ar Condicionados", desc: "de 28.000 BTUs cada" },
  { icon: Wifi, label: "3 opções de internet", desc: "1 Algar Fibra e 2 Starlink" },
  { icon: Clock, label: "10h/mês", desc: "de sala de reunião" },
  { icon: Armchair, label: "100%", desc: "mobiliada" },
  { icon: Plug, label: "Tomadas", desc: "e cabo de rede em todas as mesas" },
];

const StructureSection = () => (
  <AnimatedSection className="py-20 md:py-28 px-6 bg-background">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-foreground">
        Estrutura da Sala
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
        Projetada para operações que precisam de capacidade, conforto e infraestrutura profissional.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-secondary border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow"
          >
            <f.icon className="h-7 w-7 mx-auto mb-3 text-foreground" strokeWidth={1.5} />
            <p className="font-bold text-lg text-foreground">{f.label}</p>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default StructureSection;
