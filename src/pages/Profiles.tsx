import { useState, useEffect, lazy, Suspense } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code2, Server, Gamepad2, Palette, Users, Shield } from "lucide-react";

// Lazy load interactives
const FrontendInteractive = lazy(() => import("@/components/interactives/FrontendInteractive"));
const BackendInteractive = lazy(() => import("@/components/interactives/BackendInteractive"));
const GamedevInteractive = lazy(() => import("@/components/interactives/GamedevInteractive"));
const DesignInteractive = lazy(() => import("@/components/interactives/DesignInteractive"));
const SysadminInteractive = lazy(() => import("@/components/interactives/SysadminInteractive"));
const ProjectManagerInteractive = lazy(() => import("@/components/interactives/ProjectManagerInteractive"));

const interactives: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  frontend: FrontendInteractive,
  backend: BackendInteractive,
  gamedev: GamedevInteractive,
  design: DesignInteractive,
  sysadmin: SysadminInteractive,
  projectmanager: ProjectManagerInteractive,
};

const profiles = {
  frontend: {
    title: "FrontEnd",
    icon: Code2,
    text: "FrontEnd разработчик - специалист, отвечающий за пользовательский интерфейс приложения. Он создаёт и делает удобной его видимую часть, например, выпадающее меню, всплывающие окна, навигацию, анимацию, корзины в маркетплейсах или лайки в соцсетях.",
    color: "from-pink to-primary",
  },
  backend: {
    title: "BackEnd",
    icon: Server,
    text: "BackEnd разработчик - специалист, который отвечает за серверную часть приложения. Он создаёт и поддерживает логику работы сайта, обеспечивает работу баз данных, API и серверных процессов.",
    color: "from-primary to-purple",
  },
  gamedev: {
    title: "GameDev",
    icon: Gamepad2,
    text: "GameDev разработчик - специалист по созданию компьютерных игр. Он разрабатывает игровую механику, программирует игровые движки, создаёт графику и анимацию.",
    color: "from-purple to-violet",
  },
  design: {
    title: "Design",
    icon: Palette,
    text: "Дизайнер - специалист, который создаёт визуальную концепцию продукта, разрабатывает пользовательский интерфейс и пользовательский опыт.",
    color: "from-pink to-accent",
  },
  sysadmin: {
    title: "SysAdmin",
    icon: Shield,
    text: "Системный администратор - специалист, который обеспечивает стабильную работу IT-инфраструктуры компании. Он настраивает и поддерживает серверы, сети, операционные системы.",
    color: "from-purple to-primary",
  },
  projectmanager: {
    title: "Project Manager",
    icon: Users,
    text: "Проектный менеджер - специалист, который управляет IT-проектами от начала до завершения. Он планирует задачи, распределяет ресурсы, контролирует сроки и бюджет.",
    color: "from-primary to-pink",
  },
};

type ProfileKey = keyof typeof profiles;

const Profiles = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeProfile, setActiveProfile] = useState<ProfileKey | null>(null);

  useEffect(() => {
    const hash = location.hash.substring(1) as ProfileKey;
    if (profiles[hash]) {
      setActiveProfile(hash);
      document.title = `${profiles[hash].title} - Колледж Цифровых Технологий`;
    } else {
      setActiveProfile(null);
      document.title = "Профили подготовки - Колледж Цифровых Технологий";
    }
  }, [location.hash]);

  const selectProfile = (profileKey: ProfileKey) => {
    setActiveProfile(profileKey);
    navigate(`#${profileKey}`, { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Background decorations */}
        <div className="fixed top-20 left-10 w-96 h-96 bg-pink/10 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-20 right-10 w-80 h-80 bg-purple/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6">
          {/* Page Title */}
          <div className="text-center mb-12">
            <Link to="/" className="inline-block text-muted-foreground hover:text-foreground transition-colors mb-4">
              ← Назад на главную
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Профили подготовки
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Выберите направление для изучения
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Profiles Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1 max-w-3xl">
              {(Object.keys(profiles) as ProfileKey[]).map((key) => {
                const profile = profiles[key];
                const isActive = activeProfile === key;
                const IconComponent = profile.icon;
                
                return (
                  <button
                    key={key}
                    onClick={() => selectProfile(key)}
                    className={`
                      relative p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                      flex flex-col items-center justify-center gap-4 min-h-[140px] md:min-h-[180px]
                      hover:-translate-y-1 hover:shadow-soft-lg
                      ${isActive 
                        ? "border-primary bg-gradient-to-br from-pink/10 via-primary/10 to-purple/10 shadow-glow" 
                        : "border-border bg-card hover:border-primary/50"
                      }
                    `}
                  >
                    {/* Animated border for active state */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl border-2 border-primary animate-pulse opacity-60" />
                    )}
                    
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${profile.color} flex items-center justify-center transition-transform duration-300 ${isActive ? "scale-110" : ""}`}>
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
                    </div>
                    
                    <span className={`font-bold text-sm md:text-base transition-colors ${isActive ? "gradient-text" : "text-foreground"}`}>
                      {profile.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Description Panel */}
            <div 
              className={`
                flex-1 max-w-xl w-full p-8 rounded-3xl border-2 transition-all duration-300
                ${activeProfile 
                  ? "border-primary bg-gradient-to-br from-pink/5 via-primary/5 to-purple/5 shadow-glow" 
                  : "border-border bg-card"
                }
              `}
            >
              {activeProfile && (
                <div className="animate-fade-in">
                  {/* Active profile icon */}
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${profiles[activeProfile].color} flex items-center justify-center mb-4`}>
                    {(() => {
                      const IconComponent = profiles[activeProfile].icon;
                      return <IconComponent className="w-8 h-8 text-primary-foreground" />;
                    })()}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-center gradient-text mb-3">
                    {profiles[activeProfile].title}
                  </h2>
                  
                  <p className="text-muted-foreground text-center leading-relaxed text-sm mb-6">
                    {profiles[activeProfile].text}
                  </p>

                  {/* Interactive Component */}
                  <div className="border-t border-border pt-6">
                    <h3 className="text-sm font-semibold text-foreground mb-4 text-center">
                      🎮 Попробуй себя!
                    </h3>
                    <Suspense fallback={<div className="text-center text-muted-foreground text-sm">Загрузка...</div>}>
                      {(() => {
                        const InteractiveComponent = interactives[activeProfile];
                        return <InteractiveComponent />;
                      })()}
                    </Suspense>
                  </div>
                </div>
              )}
              
              {!activeProfile && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-muted flex items-center justify-center mb-6">
                    <Code2 className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Выберите профиль
                  </h2>
                  <p className="text-muted-foreground">
                    Нажмите на карточку профиля, чтобы узнать больше
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profiles;
