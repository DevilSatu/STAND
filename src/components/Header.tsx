import pandaIcon from "@/assets/panda-icon.png";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Gamepad2, Send, Smartphone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!isHomePage) {
      e.preventDefault();
      window.location.href = "/" + hash;
    }
  };

  const handleComingSoon = (feature: string) => {
    toast.info(`${feature} — скоро будет доступно!`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={pandaIcon} alt="КЦТ" className="w-10 h-10 object-contain" />
          <span className="font-bold text-xl text-foreground">КЦТ</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#specialties" 
            onClick={(e) => handleNavClick(e, "#specialties")}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Специальности
          </a>
          <a 
            href="#info" 
            onClick={(e) => handleNavClick(e, "#info")}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Информация
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, "#contact")}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <Link to="/my-kct">
              <Smartphone className="w-4 h-4 mr-2" />
              МОЙ КЦТ
            </Link>
          </Button>
          <Button 
            variant="gradient" 
            size="sm" 
            className="hidden sm:flex"
            onClick={() => handleComingSoon("Мини-игры")}
          >
            <Gamepad2 className="w-4 h-4 mr-2" />
            МИНИ-ИГРЫ
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => handleComingSoon("Подача заявки")}
          >
            <Send className="w-4 h-4 mr-2" />
            ЗАЯВКА
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
