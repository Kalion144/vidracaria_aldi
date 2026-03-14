import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-xl">
                A
              </div>
              <span className="text-xl font-bold tracking-wide">
                Aldi <span className="text-primary">Vidros</span>
              </span>
            </div>
            <p className="text-sm text-footer-foreground/60 leading-relaxed">
              Soluções completas em vidros temperados, espelhos e esquadrias em Brasília - DF.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <nav className="space-y-2 text-sm">
              <a href="#servicos" className="block text-footer-foreground/60 hover:text-primary transition-colors">Serviços</a>
              <a href="#diferenciais" className="block text-footer-foreground/60 hover:text-primary transition-colors">Sobre Nós</a>
              <a href="#contato" className="block text-footer-foreground/60 hover:text-primary transition-colors">Contato</a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5561996517827"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-footer-foreground/60 hover:text-primary transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(152_60%_36%/0.6)] transition-all duration-300" />
                (61) 9 9651-7827
              </a>
              <a
                href="mailto:aldividros@hotmail.com"
                className="flex items-center gap-3 text-sm text-footer-foreground/60 hover:text-primary transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(152_60%_36%/0.6)] transition-all duration-300" />
                aldividros@hotmail.com
              </a>
              <a
                href="https://instagram.com/aldividros"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-footer-foreground/60 hover:text-primary transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(152_60%_36%/0.6)] transition-all duration-300" />
                @aldividros
              </a>
              <a
                href="https://facebook.com/aldividros"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-footer-foreground/60 hover:text-primary transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(152_60%_36%/0.6)] transition-all duration-300" />
                Aldi Vidros
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-footer-foreground/10 text-center text-xs text-footer-foreground/40">
          © {new Date().getFullYear()} Aldi Vidros. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
