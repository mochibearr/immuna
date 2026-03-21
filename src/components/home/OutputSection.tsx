import { Image as ImageIcon } from "lucide-react";
import Card from "../ui/Card";
 
interface OutputSectionProps {
  outputUrl: string | null;
}
 
export default function OutputSection({ outputUrl }: OutputSectionProps) {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--foreground)" }}>
        Generated Output
      </h2>
      <div
        className="flex-1 rounded-xl border-2 border-dashed flex flex-col items-center justify-center"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--muted)" }}
      >
        {outputUrl ? (
          <div className="flex flex-col items-center gap-3 p-4">
            <img src={outputUrl} alt="Generated output" className="max-h-56 rounded-lg object-contain" />
            <a href={outputUrl} download="watermarked.png" className="text-xs underline underline-offset-2" style={{ color: "var(--accent)" }}>
              Download Image
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 p-8 select-none">
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--secondary)" }}>
              <ImageIcon className="w-6 h-6" style={{ color: "var(--accent)" }} />
            </div>
            <p className="text-sm text-center" style={{ color: "var(--muted-foreground)" }}>
              Your generated image will appear here
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}