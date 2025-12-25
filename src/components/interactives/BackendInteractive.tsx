import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const BackendInteractive = () => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);

  const sendRequest = () => {
    if (!name.trim()) return;
    
    setLoading(true);
    setResponse(null);
    
    // Simulate API delay
    setTimeout(() => {
      setResponse({
        status: 200,
        message: "Успешно!",
        data: {
          id: Math.floor(Math.random() * 10000),
          name: name,
          createdAt: new Date().toISOString(),
          role: "user"
        }
      });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground mb-4">
        Отправьте запрос к "API" и получите ответ — это основа BackEnd разработки!
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Введите ваше имя..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendRequest()}
          className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button onClick={sendRequest} disabled={loading || !name.trim()} size="sm">
          <Send className="w-4 h-4" />
        </Button>
      </div>

      {/* Response */}
      <div className="bg-muted/50 rounded-xl p-4 font-mono text-xs overflow-auto max-h-40">
        {loading && (
          <div className="text-muted-foreground animate-pulse">
            Загрузка...
          </div>
        )}
        {!loading && !response && (
          <div className="text-muted-foreground">
            // Ответ сервера появится здесь
          </div>
        )}
        {!loading && response && (
          <pre className="text-foreground whitespace-pre-wrap">
            {JSON.stringify(response, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

export default BackendInteractive;
