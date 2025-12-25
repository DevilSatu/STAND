import { useState } from "react";
import { Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";

const generatePalette = () => {
  const hue = Math.floor(Math.random() * 360);
  return [
    `hsl(${hue}, 85%, 60%)`,
    `hsl(${(hue + 30) % 360}, 75%, 50%)`,
    `hsl(${(hue + 60) % 360}, 70%, 45%)`,
    `hsl(${(hue + 180) % 360}, 65%, 55%)`,
    `hsl(${(hue + 210) % 360}, 80%, 40%)`,
  ];
};

const DesignInteractive = () => {
  const [palette, setPalette] = useState(generatePalette);
  const [copied, setCopied] = useState<number | null>(null);

  const copyColor = (index: number, color: string) => {
    navigator.clipboard.writeText(color);
    setCopied(index);
    setTimeout(() => setCopied(null), 1000);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground mb-4">
        Создайте цветовую палитру — ключевой навык дизайнера!
      </p>

      {/* Palette Preview */}
      <div className="flex rounded-xl overflow-hidden h-24">
        {palette.map((color, index) => (
          <button
            key={index}
            onClick={() => copyColor(index, color)}
            className="flex-1 transition-transform hover:scale-105 relative group cursor-pointer"
            style={{ backgroundColor: color }}
          >
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-medium bg-black/30">
              {copied === index ? "Скопировано!" : "Копировать"}
            </span>
          </button>
        ))}
      </div>

      {/* Color Codes */}
      <div className="grid grid-cols-5 gap-1 text-center">
        {palette.map((color, index) => (
          <div key={index} className="text-xs text-muted-foreground truncate">
            {color.split(",")[0]}...)
          </div>
        ))}
      </div>

      {/* Generate Button */}
      <Button 
        onClick={() => setPalette(generatePalette())} 
        variant="outline" 
        className="w-full"
      >
        <Shuffle className="w-4 h-4 mr-2" />
        Новая палитра
      </Button>
    </div>
  );
};

export default DesignInteractive;
