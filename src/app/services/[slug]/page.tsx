import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { Clock, ChevronLeft, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        <Link 
          href="/services" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Hizmetlere Dön
        </Link>
        
        {/* HERO KISMI */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              {service.name}
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              {service.longDescription}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2 text-lg">
              <div className="flex items-center gap-2 text-primary font-medium bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                <Clock className="h-5 w-5" />
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-full font-bold shadow-md">
                <span>{service.price}</span>
              </div>
            </div>

            <div className="pt-6">
              <Button asChild size="lg" className="h-14 px-8 text-lg w-full md:w-auto shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href={`/appointment?service=${service.slug}`}>
                  Hemen Randevu Al
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl aspect-square relative overflow-hidden group shadow-xl">
            <img 
              src={service.image} 
              alt={service.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white z-10 transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-white/90" />
                <span className="text-sm font-medium uppercase tracking-widest text-white/90">Premium Hizmet</span>
              </div>
              <h3 className="font-headline text-3xl md:text-4xl font-semibold text-white drop-shadow-md">{service.name}</h3>
            </div>
          </div>
        </div>

        {/* DETAYLAR & MARKALAR KISMI */}
        <div className="grid md:grid-cols-2 gap-8 pt-12 border-t">
          <div className="bg-card shadow-sm border rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-headline font-bold border-b pb-4">Neden Bizi Seçmelisiniz?</h3>
            <ul className="space-y-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 transition-transform hover:scale-110" />
                  <span className="text-lg text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card shadow-sm border rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-headline font-bold border-b pb-4">Kullanılan Profesyonel Ürünler</h3>
            <div className="flex flex-wrap gap-3 mt-4">
              {service.productsUsed.map((product, idx) => (
                <div key={idx} className="bg-accent/10 border border-accent/20 text-foreground px-4 py-2 font-medium rounded-lg text-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                  {product}
                </div>
              ))}
            </div>
            <div className="pt-8 text-muted-foreground text-sm italic">
              * İşletmemizde dünya standartlarında onaylı, güvenilir ve yüksek performanslı ürünler kullanılmaktadır. Ürün yelpazemiz randevunuz öncesinde detaylı olarak beğeninize sunulur.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
