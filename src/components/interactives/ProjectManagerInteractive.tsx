import { useState } from "react";
import { GripVertical, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialTasks = [
  { id: 1, text: "Созвон с командой", priority: 0 },
  { id: 2, text: "Ревью дизайна", priority: 0 },
  { id: 3, text: "Обновить документацию", priority: 0 },
  { id: 4, text: "Фикс критического бага", priority: 0 },
];

const correctOrder = [4, 1, 2, 3]; // Correct priority order

const ProjectManagerInteractive = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleDragStart = (id: number) => {
    setDraggedId(id);
  };

  const handleDragOver = (e: React.DragEvent, targetId: number) => {
    e.preventDefault();
    if (draggedId === null || draggedId === targetId) return;

    const newTasks = [...tasks];
    const draggedIndex = newTasks.findIndex((t) => t.id === draggedId);
    const targetIndex = newTasks.findIndex((t) => t.id === targetId);
    
    const [draggedTask] = newTasks.splice(draggedIndex, 1);
    newTasks.splice(targetIndex, 0, draggedTask);
    
    setTasks(newTasks);
  };

  const checkOrder = () => {
    const currentOrder = tasks.map((t) => t.id);
    const correct = JSON.stringify(currentOrder) === JSON.stringify(correctOrder);
    setIsCorrect(correct);
    setShowResult(true);
  };

  const reset = () => {
    setTasks(initialTasks.sort(() => Math.random() - 0.5));
    setShowResult(false);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground mb-4">
        Расставьте задачи по приоритету (сверху — важнее) — ключевой навык PM!
      </p>

      <div className="space-y-2">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            draggable
            onDragStart={() => handleDragStart(task.id)}
            onDragOver={(e) => handleDragOver(e, task.id)}
            onDragEnd={() => setDraggedId(null)}
            className={`
              flex items-center gap-3 p-3 rounded-lg border cursor-grab active:cursor-grabbing
              transition-all duration-200
              ${draggedId === task.id ? "opacity-50 scale-95" : ""}
              ${showResult && correctOrder[index] === task.id 
                ? "border-green-500 bg-green-500/10" 
                : showResult 
                  ? "border-destructive bg-destructive/10"
                  : "border-border bg-card hover:border-primary/50"
              }
            `}
          >
            <GripVertical className="w-4 h-4 text-muted-foreground" />
            <span className="flex-1 text-sm font-medium text-foreground">{task.text}</span>
            <span className="text-xs text-muted-foreground">#{index + 1}</span>
          </div>
        ))}
      </div>

      {showResult && (
        <div className={`text-center p-3 rounded-lg ${isCorrect ? "bg-green-500/20 text-green-600 dark:text-green-400" : "bg-destructive/20 text-destructive"}`}>
          {isCorrect ? (
            <span className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4" /> Отлично! Правильный порядок!
            </span>
          ) : (
            "Подсказка: критические баги — в первую очередь!"
          )}
        </div>
      )}

      <div className="flex gap-2">
        <Button onClick={checkOrder} variant="gradient" className="flex-1" disabled={showResult && isCorrect}>
          Проверить
        </Button>
        <Button onClick={reset} variant="outline">
          Сбросить
        </Button>
      </div>
    </div>
  );
};

export default ProjectManagerInteractive;
