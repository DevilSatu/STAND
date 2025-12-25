import Header from "@/components/Header";
import Footer from "@/components/Footer";
import phonesImage from "@/assets/my-kct-phones.png";
import { Smartphone, Calendar, Bell, Moon, Users, Filter } from "lucide-react";

const features = [
  { icon: Calendar, text: "Полное расписание занятий с учётом группы и подгруппы" },
  { icon: Bell, text: "Автоматическое отображение общих предметов" },
  { icon: Users, text: "Удобный интерфейс и запоминание последнего выбора группы" },
  { icon: Filter, text: "Умный фильтр: исключает лишние дисциплины и подгруппы" },
  { icon: Moon, text: "Поддержка светлой и тёмной темы оформления" },
];

const MyKCT = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Smartphone className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                Приложение «<span className="gradient-text">Мой КЦТ</span>»
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Расписание, оценки и посещаемость — всегда под рукой
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Phone Mockups */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-pink/30 to-purple/30 blur-3xl opacity-60 rounded-full scale-75" />
              <img 
                src={phonesImage} 
                alt="Мой КЦТ приложение" 
                className="relative z-10 w-full max-w-2xl mx-auto drop-shadow-2xl"
                loading="eager"
              />
            </div>

            {/* Features */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Основные возможности:
              </h2>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground/90 leading-relaxed">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Developers & Download Section */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* iOS */}
              <div className="p-6 rounded-2xl bg-card border border-border/50 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Иван Коломацкий</h3>
                <p className="text-muted-foreground text-sm mb-4">(iOS)</p>
                <a 
                  href="https://apps.apple.com/ru/app/мой-кцт/id6670169228" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </a>
              </div>

              {/* Android */}
              <div className="p-6 rounded-2xl bg-card border border-border/50 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Артём Джапаридзе</h3>
                <p className="text-muted-foreground text-sm mb-4">(Android)</p>
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.akamex.mykct" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Google Play
                  </a>
                  <a 
                    href="https://apps.rustore.ru/app/com.akamex.mykct" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    RuStore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyKCT;
