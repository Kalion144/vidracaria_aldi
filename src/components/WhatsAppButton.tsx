import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5561996517827"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25935F] flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_0_25px_hsl(152_60%_36%_/_0.4),0_0_50px_hsl(152_60%_36%_/_0.15)]"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;
