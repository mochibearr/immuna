import { Monitor, Server, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import Card from "../ui/Card";
 
const STEPS = [
  {
    icon: <Monitor className="w-5 h-5" />,
    label: "Frontend",
    sub: "React + TypeScript",
    active: false,
    borderColor: "#F8BBD9",
    iconBg: "#FDE8F1",
  },
  {
    icon: <Server className="w-5 h-5" />,
    label: "Backend API",
    sub: "FastAPI/Flask",
    active: false,
    borderColor: "#CDB4DB",
    iconBg: "#EDE0F5",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    label: "Processing",
    sub: "Docker Container",
    active: true,
    borderColor: "#9F86C0",
    iconBg: "#CDB4DB",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    label: "Result",
    sub: "Transformed Image",
    active: false,
    borderColor: "#F8BBD9",
    iconBg: "#FDE8F1",
  },
];
 
export default function TechnicalArchitecture() {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "var(--secondary)" }}
        >
          <Server className="w-5 h-5" style={{ color: "var(--accent)" }} />
        </div>
        <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
          Technical Architecture
        </h2>
      </div>
 
      <div
        className="rounded-xl p-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0 my-2"
        style={{ backgroundColor: "rgba(240, 238, 245, 0.5)" }}
      >
        {STEPS.map((step, i) => (
          <div key={step.label} className="flex items-center">
            <div
              className="flex flex-col items-center gap-3 p-5 rounded-2xl w-48"
              style={{
                border: `2px solid ${step.borderColor}`,
                backgroundColor: "var(--card)",
                boxShadow: step.active ? "0 2px 12px rgba(159,134,192,0.15)" : "none",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: step.iconBg, color: "var(--accent)" }}
              >
                {step.icon}
              </div>
              <div className="text-center">
                <p className="text-base font-semibold" style={{ color: "var(--foreground)" }}>
                  {step.label}
                </p>
                <p className="text-base mt-0.5" style={{ color: "var(--accent)" }}>
                  {step.sub}
                </p>
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <ArrowRight
                className="w-5 h-5 mx-3 hidden sm:block flex-shrink-0"
                style={{ color: "var(--accent)" }}
              />
            )}
          </div>
        ))}
      </div>
 
      <p className="text-base leading-relaxed mt-4" style={{ color: "var(--muted-foreground)" }}>
        Our architecture ensures complete data isolation at every stage. The frontend communicates
        with a stateless REST API that spawns ephemeral processing containers. Each request is
        handled independently with no shared state, and all resources are released immediately
        after the response is sent.
      </p>
    </Card>
  );
}
 