import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import pandaIcon from "@/assets/panda-icon.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!isHomePage) {
      e.preventDefault();
      window.location.href = "/" + hash;
    }
  };

  return (
    <footer ref={ref} id="contact" className="bg-muted/50 py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={pandaIcon} alt="КЦТ" className="w-10 h-10 object-contain" />
              <span className="font-bold text-xl text-foreground">КЦТ</span>
            </Link>
            <p className="text-muted-foreground">
              Колледж Цифровых Технологий — образование будущего уже сегодня.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Навигация</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a 
                  href="#specialties" 
                  onClick={(e) => handleNavClick(e, "#specialties")}
                  className="hover:text-primary transition-colors"
                >
                  Специальности
                </a>
              </li>
              <li>
                <a 
                  href="#info" 
                  onClick={(e) => handleNavClick(e, "#info")}
                  className="hover:text-primary transition-colors"
                >
                  Информация
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="hover:text-primary transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Контакты</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+7-343-286-7859</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@kct.edu</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Екатеринбург, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          © 2024 Колледж Цифровых Технологий. Все права защищены.
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
