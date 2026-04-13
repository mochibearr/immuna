import { useCallback, useRef, useState } from "react";
import { Upload } from "lucide-react";
import React from "react";
 
interface UploadZoneProps {
  onFileSelect: (file: File) => void;
  preview: string | null;
}
 
const ACCEPTED = ["image/png", "image/jpeg", "image/gif"];
 
export default function UploadZone({ onFileSelect, preview }: UploadZoneProps) {
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
 
  const handleFile = useCallback(
    (file: File) => {
      if (ACCEPTED.includes(file.type)) onFileSelect(file);
    },
    [onFileSelect]
  );
 
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );
 
  return (
    <div
      className="relative rounded-xl border-2 border-dashed flex flex-col items-center justify-center min-h-[200px] h-full cursor-pointer transition-colors duration-200 overflow-hidden"
      style={{
        borderColor: dragOver ? "var(--accent)" : "var(--border)",
        backgroundColor: dragOver ? "rgba(159,134,192,0.06)" : "var(--muted)",
      }}
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED.join(",")}
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
 
      {preview ? (
        <img
          src={preview}
          alt="Selected preview"
          className="max-h-44 rounded-lg object-contain p-2"
        />
      ) : (
        <div className="flex flex-col items-center gap-3 p-8 text-center select-none">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "var(--secondary)" }}
          >
            <svg width="0" height="0">
              <defs>
                <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8FE3F7" />
                  <stop offset="50%" stopColor="#C6A4FF" />
                  <stop offset="100%" stopColor="#F3B6D6" />
                </linearGradient>
              </defs>
            </svg>

            {React.cloneElement(<Upload className="w-5 h-5" />, {
              stroke: "url(#iconGradient)",
            })}
          </div>
          <div>
            <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
              Drag and drop an image here, or{" "}
              <span className="bg-gradient-to-r from-[#8FE3F7] via-[#C6A4FF] to-[#F3B6D6] bg-clip-text text-transparent">
                click to select
              </span>
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--muted-foreground)" }}>
              PNG, JPG, or GIF up to 10MB
            </p>
          </div>
        </div>
      )}
    </div>
  );
}