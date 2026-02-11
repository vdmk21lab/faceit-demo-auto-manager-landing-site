import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Copy, FolderOpen, Trash2 } from "lucide-react";

interface FeaturesProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: Zap,
    title: "Automatic Detection",
    description:
      "Monitors FACEIT demo downloads and processes them automatically without manual intervention.",
  },
  {
    icon: Copy,
    title: "One-Click Copy",
    description:
      "Generates playdemo commands instantly, ready to paste in CS2 console.",
  },
  {
    icon: FolderOpen,
    title: "Demo History",
    description:
      "Browse all your demos with map names, dates, and metadata in one organized view.",
  },
  {
    icon: Trash2,
    title: "Smart Cleanup",
    description:
      "Delete demos directly from the extension to free up disk space effortlessly.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Powerful{" "}
          <span className="text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text">
            Features
          </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Built for players, coaches, and content creators who need quick access to their gameplay footage
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureList.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="h-full border-2 hover:border-orange-600/50 hover:shadow-lg transition-all">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
