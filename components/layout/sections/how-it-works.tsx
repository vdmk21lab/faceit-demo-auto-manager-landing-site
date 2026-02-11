import { Card, CardContent } from "@/components/ui/card";
import { Download, Settings, Terminal } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Download Demo",
    description: "Download demo from your FACEIT match history",
  },
  {
    icon: Settings,
    title: "Auto-Process",
    description: "Extension decompresses and moves file to CS2 folder",
  },
  {
    icon: Terminal,
    title: "Copy & Play",
    description: "Copy command, paste in CS2 console (~), watch instantly",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How It{" "}
          <span className="text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text">
            Works
          </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Start reviewing matches in seconds with our streamlined workflow
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Card key={index} className="relative border-2 hover:border-orange-600/50 transition-colors">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg">
                {index + 1}
              </div>
              <CardContent className="pt-12 pb-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                    <Icon className="h-8 w-8 text-orange-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
