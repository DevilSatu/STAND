import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

const GamedevInteractive = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });

  const moveTarget = useCallback(() => {
    setTargetPosition({
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
    });
  }, []);

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setIsPlaying(true);
    moveTarget();
  };

  const hitTarget = () => {
    if (!isPlaying) return;
    setScore((s) => s + 1);
    moveTarget();
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setIsPlaying(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground mb-4">
        Кликайте по цели как можно быстрее — это базовая механика многих игр!
      </p>

      {/* Game Stats */}
      <div className="flex justify-between items-center text-sm font-medium">
        <span className="text-foreground">Очки: <span className="text-primary">{score}</span></span>
        <span className="text-foreground">Время: <span className={timeLeft <= 3 ? "text-destructive" : "text-primary"}>{timeLeft}с</span></span>
      </div>

      {/* Game Area */}
      <div 
        className="relative bg-muted/50 rounded-xl overflow-hidden"
        style={{ height: "180px" }}
      >
        {!isPlaying && timeLeft === 10 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button onClick={startGame} variant="gradient">
              Начать игру
            </Button>
          </div>
        )}

        {!isPlaying && timeLeft === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <p className="text-lg font-bold text-foreground">Игра окончена!</p>
            <p className="text-2xl font-bold gradient-text">{score} очков</p>
            <Button onClick={startGame} variant="outline" size="sm">
              <RotateCcw className="w-4 h-4 mr-2" />
              Ещё раз
            </Button>
          </div>
        )}

        {isPlaying && (
          <button
            onClick={hitTarget}
            className="absolute w-12 h-12 bg-gradient-to-br from-pink to-purple rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform shadow-lg cursor-pointer border-2 border-primary-foreground"
            style={{
              left: `${targetPosition.x}%`,
              top: `${targetPosition.y}%`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default GamedevInteractive;
