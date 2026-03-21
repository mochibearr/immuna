export default function HeroSection() {
  return (
    <section className="px-6 pt-16 pb-2 text-center" style={{ backgroundColor: "var(--background)" }}>
      <h1
        className="text-5xl font-semibold mb-6"
        style={{ color: "var(--foreground)" }}
      >
        Why We Built Stegamorphs
      </h1>
      <p
        className="max-w-3xl mx-auto text-base leading-relaxed"
        style={{ color: "var(--muted-foreground)" }}
      >
        Stegamorphs is a cybersecurity capstone project focused on privacy-preserving
        steganography. We believe that in an era of increasing digital surveillance, individuals
        should have access to tools that enable secure, private communication through
        inconspicuous channels.
      </p>
    </section>
  );
}
 
