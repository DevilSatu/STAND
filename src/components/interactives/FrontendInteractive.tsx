import { useState } from "react";

const FrontendInteractive = () => {
  const [direction, setDirection] = useState<"row" | "column">("row");
  const [justify, setJustify] = useState("center");
  const [align, setAlign] = useState("center");
  const [gap, setGap] = useState(8);

  const justifyOptions = ["flex-start", "center", "flex-end", "space-between", "space-around"];
  const alignOptions = ["flex-start", "center", "flex-end", "stretch"];

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground mb-4">
        Настройте Flexbox контейнер — основной инструмент верстки современных сайтов!
      </p>
      
      {/* Preview */}
      <div 
        className="h-40 bg-muted/50 rounded-xl border border-border p-4"
        style={{
          display: "flex",
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          gap: `${gap}px`,
        }}
      >
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="w-10 h-10 rounded-lg bg-primary/80 text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md"
          >
            {n}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-foreground block mb-1">Direction</label>
          <div className="flex gap-1">
            <button
              onClick={() => setDirection("row")}
              className={`flex-1 px-2 py-1.5 text-xs rounded-md transition-colors ${
                direction === "row" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted hover:bg-muted/80 text-foreground"
              }`}
            >
              Row
            </button>
            <button
              onClick={() => setDirection("column")}
              className={`flex-1 px-2 py-1.5 text-xs rounded-md transition-colors ${
                direction === "column" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted hover:bg-muted/80 text-foreground"
              }`}
            >
              Column
            </button>
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-foreground block mb-1">Gap: {gap}px</label>
          <input
            type="range"
            min="0"
            max="24"
            value={gap}
            onChange={(e) => setGap(Number(e.target.value))}
            className="w-full accent-primary h-2"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-foreground block mb-1">Justify Content</label>
          <select
            value={justify}
            onChange={(e) => setJustify(e.target.value)}
            className="w-full h-8 px-2 text-xs rounded-md border border-border text-foreground appearance-none cursor-pointer"
            style={{ backgroundColor: 'hsl(var(--background))' }}
          >
            {justifyOptions.map((opt) => (
              <option key={opt} value={opt} style={{ backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-foreground block mb-1">Align Items</label>
          <select
            value={align}
            onChange={(e) => setAlign(e.target.value)}
            className="w-full h-8 px-2 text-xs rounded-md border border-border text-foreground appearance-none cursor-pointer"
            style={{ backgroundColor: 'hsl(var(--background))' }}
          >
            {alignOptions.map((opt) => (
              <option key={opt} value={opt} style={{ backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Code Preview */}
      <div className="bg-muted/30 rounded-lg p-3 border border-border">
        <p className="text-xs text-muted-foreground mb-1">CSS код:</p>
        <code className="text-xs text-primary font-mono">
          display: flex;<br />
          flex-direction: {direction};<br />
          justify-content: {justify};<br />
          align-items: {align};<br />
          gap: {gap}px;
        </code>
      </div>
    </div>
  );
};

export default FrontendInteractive;
