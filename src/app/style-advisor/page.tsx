import { StyleAdvisorForm } from "@/components/forms/style-advisor-form";
import { Sparkles } from "lucide-react";

export default function StyleAdvisorPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <Sparkles className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                Yapay Zeka Stil Danışmanı
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                Size en uygun saç modeli, bakım ve güzellik ipuçlarını keşfedin. Tercihlerinizi belirtin, kişiselleştirilmiş stil raporunuzu anında alın.
            </p>
        </div>
        <StyleAdvisorForm />
      </div>
    </div>
  );
}
