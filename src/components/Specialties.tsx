import { Code2, Server, Gamepad2, Palette, Users, Shield } from "lucide-react";

const specialties = [
  {
    icon: Code2,
    title: "FrontEnd",
    description: "Создание интерфейсов",
    color: "from-pink to-primary",
  },
  {
    icon: Server,
    title: "BackEnd",
    description: "Серверная логика",
    color: "from-primary to-purple",
  },
  {
    icon: Gamepad2,
    title: "GameDev",
    description: "Разработка игр",
    color: "from-purple to-violet",
  },
  {
    icon: Palette,
    title: "UX/UI",
    description: "Дизайн интерфейсов",
    color: "from-pink to-accent",
  },
  {
    icon: Users,
    title: "Project Manager",
    description: "Управление проектами",
    color: "from-primary to-pink",
  },
  {
    icon: Shield,
    title: "SysAdmin",
    description: "Администрирование",
    color: "from-purple to-primary",
  },
];

const Specialties = () => {
  return (
    <section id="specialties" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block gradient-border rounded-full px-8 py-4 mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
              Выберите свою специальность
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Освойте востребованные профессии в сфере IT под руководством экспертов отрасли
          </p>
        </div>

        {/* Specialty Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.title}
              className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-soft-lg card-hover cursor-pointer border border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${specialty.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <specialty.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground">
                {specialty.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Подробнее</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
