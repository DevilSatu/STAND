import { Link } from "react-router-dom";
import pandaImage from "@/assets/panda.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-pink/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="gradient-bg text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Образование будущего
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-foreground">Колледж</span>
              <br />
              <span className="gradient-text">Цифровых</span>
              <br />
              <span className="text-foreground">Технологий</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Подготовка ИТ-специалистов, соответствующих новым вызовам и конкурентных 
              среди технологических платформ будущего
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="gradient" size="lg" className="group" asChild>
                <Link to="/profiles">
                  Профили Подготовки
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
                Узнать больше
              </Button>
            </div>

          </div>

          {/* Panda Image */}
          <div className="relative flex justify-center lg:justify-end" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Glow effect behind panda */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink/30 via-primary/30 to-purple/30 rounded-full blur-3xl scale-75" />
              
              <img 
                src={pandaImage} 
                alt="Панда в VR очках" 
                className="relative z-10 w-full max-w-lg float-animation drop-shadow-2xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 gradient-bg rounded-2xl rotate-12 opacity-80 pulse-glow" />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
