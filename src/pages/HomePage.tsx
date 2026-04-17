import { useState } from "react";
import UploadSection from "../components/home/UploadSection";
import OutputSection from "../components/home/OutputSection";
import BackendStatus from "../components/home/BackendStatus";
import FeaturesGrid from "../components/home/FeaturesGrid";
 
export default function HomePage() {
  const [outputUrl, setOutputUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
 
  const handleGenerate = async (file: File) => {
    setIsLoading(true);
    setOutputUrl(null);
    try {
      const formData = new FormData();
      formData.append("image", file);
      const res = await fetch("http://localhost:8000/embed", { method: "POST", body: formData });
      if (res.ok) {
        const blob = await res.blob();
        setOutputUrl(URL.createObjectURL(blob));
      }
    } catch {
      // Backend unreachable
    } finally {
      setIsLoading(false);
    }
  };
 
  return (
    <main className="w-full">
      <section className="px-6 pt-20 pb-12 text-center bg-transparent">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: "var(--foreground)" }}>
          Protecting Image Authenticity Against AI Manipulation
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed" style={{ color: "#bcb1da" }}>
          A proactive image protection platform that embeds imperceptible, AI-disruptive signals directly into images - preventing manipulation before it happens.
        </p>
      </section>
 
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" style={{ alignItems: "stretch" }}>
          <UploadSection onGenerate={handleGenerate} isLoading={isLoading} />
          <OutputSection outputUrl={outputUrl} />
        </div>
        <BackendStatus />
        <FeaturesGrid />
      </div>
    </main>
  );
}