import { Shield } from "lucide-react";
import Card from "../ui/Card";
import React from "react";

export default function ProjectMotivation() {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "var(--muted)" }}
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

          {React.cloneElement(<Shield className="w-5 h-5" />, {
            stroke: "url(#iconGradient)",
          })}
        </div>
        <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
          Project Motivation
        </h2>
      </div>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "#bcb1da" }}>
        <p>
          Generative AI tools are increasingly capable of manipulating and synthesizing images with
          unprecedented realism. While these technologies offer creative potential, they also enable
          sophisticated attacks including deepfakes, synthetic identity fraud, and non-consensual
          image manipulation at scale.
        </p>
        <p>
          There is currently no dedicated deepfake-specific offence in the Canadian Criminal Code.
          Existing laws are reactive in nature and typically apply only when harm overlaps with
          established offences such as harassment, extortion, defamation, or child exploitation.
          Victims often must prove tangible harm after malicious content has already been
          distributed—a burden that becomes increasingly difficult as AI-generated content scales
          globally and spreads anonymously across platforms.
        </p>
        <p>
          The challenge of attribution and enforcement grows exponentially when synthetic media can
          be created in seconds, distributed across jurisdictional boundaries, and reshared through
          decentralized channels. While regulation is evolving, AI misuse is scaling faster than
          legislative frameworks can adapt.
        </p>
        <p style={{ color: "#a894df" }}>
          This project explores steganography and digital watermarking as proactive technical
          safeguards. By embedding cryptographic signatures and provenance metadata directly into
          image data, we can create verifiable chains of custody that persist through
          transformations. Rather than waiting for harm to occur, these techniques enable
          authentication, tampering detection, and accountability—technical countermeasures that
          complement legal and policy responses to AI-driven threats.
        </p>
      </div>
    </Card>
  );
}
