import { useState, useRef, useEffect } from "react";

const fileSystem: Record<string, string[]> = {
  "/": ["home", "var", "etc"],
  "/home": ["user", "admin"],
  "/home/user": ["documents", "downloads"],
  "/var": ["log", "www"],
  "/etc": ["nginx", "ssh"],
};

const SysadminInteractive = () => {
  const [history, setHistory] = useState<string[]>([
    "Добро пожаловать в терминал КЦТ!",
    "Введите 'help' для списка команд.",
    "",
  ]);
  const [input, setInput] = useState("");
  const [currentDir, setCurrentDir] = useState("/");
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const parts = cmd.trim().split(" ");
    const command = parts[0].toLowerCase();
    const arg = parts[1];

    let output: string[] = [];

    switch (command) {
      case "help":
        output = [
          "Доступные команды:",
          "  ls      - показать файлы",
          "  cd DIR  - перейти в папку",
          "  pwd     - текущий путь",
          "  clear   - очистить экран",
        ];
        break;
      case "ls":
        const files = fileSystem[currentDir];
        output = files ? [files.join("  ")] : ["Папка пуста"];
        break;
      case "pwd":
        output = [currentDir];
        break;
      case "cd":
        if (!arg || arg === "/") {
          setCurrentDir("/");
          output = [];
        } else if (arg === "..") {
          const parent = currentDir.split("/").slice(0, -1).join("/") || "/";
          setCurrentDir(parent);
          output = [];
        } else {
          const newPath = currentDir === "/" ? `/${arg}` : `${currentDir}/${arg}`;
          if (fileSystem[newPath]) {
            setCurrentDir(newPath);
            output = [];
          } else {
            output = [`cd: нет такой папки: ${arg}`];
          }
        }
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = [`Команда не найдена: ${command}`];
    }

    setHistory((h) => [...h, `${currentDir} $ ${cmd}`, ...output, ""]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput("");
    }
  };

  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground mb-4">
        Попробуйте работать в терминале — основной инструмент сисадмина!
      </p>

      <div 
        ref={terminalRef}
        className="bg-foreground/95 dark:bg-background rounded-lg p-3 font-mono text-xs h-40 overflow-auto"
      >
        {history.map((line, i) => (
          <div key={i} className="text-green-400 whitespace-pre-wrap">
            {line}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center text-green-400">
          <span>{currentDir} $&nbsp;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-green-400"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default SysadminInteractive;
