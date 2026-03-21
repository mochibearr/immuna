import { Lock, CheckCircle2 } from "lucide-react";
import Card from "../ui/Card";

const GUARANTEES = [
  {
    title: "In-Memory Processing",
    desc: "All uploaded images are processed entirely in-memory. No data touches persistent storage at any point in the pipeline.",
  },
  {
    title: "Zero Persistence",
    desc: "Images are immediately discarded after processing. We maintain no logs, no databases, and no long-term storage of any kind.",
  },
  {
    title: "No Third-Party Sharing",
    desc: "Your images never leave our secure processing environment. We don't use third-party analytics, CDNs, or external services.",
  },
  {
    title: "Containerized Isolation",
    desc: "Backend processes run in isolated Docker containers with strict resource limits and network policies.",
  },
  {
    title: "Input Validation",
    desc: "Strict file type checking, size limits (10MB max), and format validation prevent malicious uploads.",
  },
  {
    title: "Secure Transport",
    desc: "All communications are encrypted in transit using TLS 1.3 with modern cipher suites.",
  },
];

export default function SecurityGuarantees() {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "var(--secondary)" }}
        >
          <Lock className="w-5 h-5" style={{ color: "var(--accent)" }} />
        </div>
        <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
          Security &amp; Privacy Guarantees
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
        {GUARANTEES.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <CheckCircle2
              className="w-5 h-5 flex-shrink-0 mt-0.5"
              style={{ color: "var(--accent)" }}
            />
            <div>
              <h3
                className="text-base font-semibold mb-1"
                style={{ color: "var(--foreground)" }}
              >
                {item.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
