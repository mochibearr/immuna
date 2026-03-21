import { Shield, Star, Zap } from "lucide-react";
import FeatureCard from "../ui/FeatureCard";

const FEATURES = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Secure Embedding",
    description:
      "Advanced LSB steganography ensures your data remains hidden within the image structure.",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Lossless Quality",
    description:
      "Maintain visual fidelity while embedding your secret message in the image data.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Fast Processing",
    description:
      "Our optimized backend processes images quickly without compromising security.",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {FEATURES.map((f) => (
        <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
      ))}
    </div>
  );
}
