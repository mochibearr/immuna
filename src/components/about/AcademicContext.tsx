import Card from "../ui/Card";

const META = [
  { label: "Institution", value: "Southern Alberta Institute of Technology (SAIT)" },
  { label: "Program",     value: "Information Systems Security" },
  { label: "Year",        value: "2026" },
];

export default function AcademicContext() {
  return (
    <Card>
      <h2 className="text-lg font-semibold mb-5" style={{ color: "var(--foreground)" }}>
        Academic Context
      </h2>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "#bcb1da" }}>
        <p>
          Immuna is a cybersecurity research project developed at
          the Southern Alberta Institute of Technology (SAIT). This work explores steganography and
          digital watermarking as proactive defenses against generative AI–driven image
          manipulation. As synthetic media technologies continue to evolve, the need for technical
          safeguards that protect image integrity, authenticity, and privacy becomes increasingly
          critical.
        </p>
        <p>
          Our objective is to investigate privacy-preserving system design and secure image
          processing architectures that minimize data retention while maintaining strong security
          guarantees.
        </p>
        <p>
          This project reflects our commitment to responsible cybersecurity innovation in an era of
          rapidly advancing artificial intelligence.
        </p>
      </div>

      <div
        className="mt-6 pt-5 border-t space-y-1"
        style={{ borderColor: "var(--border)" }}
      >
        {META.map(({ label, value }) => (
          <p key={label} className="text-base" style={{ color: "#bcb1da" }}>
            <span className="font-semibold" style={{ color: "var(--foreground)" }}>
              {label}:
            </span>{" "}
            {value}
          </p>
        ))}
      </div>
    </Card>
  );
}
