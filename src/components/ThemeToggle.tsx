import { forwardRef } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = forwardRef<HTMLButtonElement>((_, ref) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden"
      aria-label="Переключить тему"
    >
      <Sun className={`h-5 w-5 transition-all duration-300 ${theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <Moon className={`absolute h-5 w-5 transition-all duration-300 ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
    </Button>
  );
});

ThemeToggle.displayName = "ThemeToggle";

export default ThemeToggle;
