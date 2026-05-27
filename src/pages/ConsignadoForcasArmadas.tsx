import { Shield, TrendingDown, Clock, Award, CheckCircle, Swords } from "lucide-react";
import LPHeader from "@/components/lp/LPHeader";
import LPHero from "@/components/lp/LPHero";
import LPBenefits from "@/components/lp/LPBenefits";
import LPSteps from "@/components/lp/LPSteps";
import LPTestimonials from "@/components/lp/LPTestimonials";
import LPCTA from "@/components/lp/LPCTA";
import LPFooter from "@/components/lp/LPFooter";
import WhatsAppFloat from "@/components/lp/WhatsAppFloat";
import heroImage from "@/assets/hero-militar.jpg";

const ConsignadoForcasArmadas = () => {
  return (
    <>
      <LPHeader />
      <LPHero
        badge="Militares das Forças Armadas"
        title="Consignado para Forças Armadas: Crédito com Honra e Condições Especiais"
        subtitle="Empréstimo consignado com taxas exclusivas para militares do Exército, Marinha e Aeronáutica. Ativos, reformados e pensionistas."
        ctaText="Simular Meu Consignado"
        whatsappMessage="Olá! Sou militar e gostaria de simular meu consignado."
        heroImage={heroImage}
      />
      <LPBenefits
        sectionTitle="Benefícios para Militares"
        sectionSubtitle="Condições diferenciadas que você merece"
        benefits={[
          { icon: TrendingDown, title: "Taxas Exclusivas", description: "Juros diferenciados e competitivos, exclusivos para militares das Forças Armadas." },
          { icon: Swords, title: "Exército, Marinha e Aeronáutica", description: "Atendemos todas as Forças Armadas com condições personalizadas." },
          { icon: Clock, title: "Processo Rápido", description: "Liberação ágil do crédito, com atendimento dedicado para militares." },
          { icon: Shield, title: "Total Segurança", description: "Operações regulamentadas e transparentes em cada etapa." },
          { icon: Award, title: "Prazos Estendidos", description: "Até 96 meses para pagar, com parcelas que cabem no seu saldo." },
          { icon: CheckCircle, title: "Desconto em Folha", description: "Parcelas descontadas diretamente do contracheque militar." },
        ]}
      />
      <LPSteps
        title="Passo a Passo"
        steps={[
          { number: "1", title: "Contato", description: "Fale conosco pelo WhatsApp ou ligue agora." },
          { number: "2", title: "Análise", description: "Verificamos sua margem e identificamos as melhores taxas." },
          { number: "3", title: "Proposta", description: "Receba uma proposta personalizada para seu perfil." },
          { number: "4", title: "Liberação", description: "Crédito aprovado e dinheiro na conta rapidamente." },
        ]}
      />
      <LPTestimonials
        title="O que nossos militares dizem"
        testimonials={[
          { name: "Sgt. Paulo R.", role: "Exército Brasileiro", text: "Encontrei taxas muito melhores com a MD. O processo foi rápido e totalmente transparente." },
          { name: "Cb. Marcos V.", role: "Marinha do Brasil", text: "Atendimento de primeira. Consegui o crédito que precisava com ótimas condições." },
          { name: "Cap. Luciana F.", role: "Força Aérea", text: "Profissionais competentes que entendem a realidade do militar. Recomendo!" },
        ]}
      />
      <LPCTA
        title="Militar? Seu crédito especial está aqui!"
        subtitle="Simule agora e descubra as condições exclusivas para militares das Forças Armadas."
        whatsappMessage="Olá! Sou militar e gostaria de simular meu consignado."
      />
      <LPFooter />
      <WhatsAppFloat message="Olá! Sou militar e gostaria de simular meu consignado." />
    </>
  );
};

export default ConsignadoForcasArmadas;
