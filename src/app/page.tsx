import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Sparkles } from 'lucide-react';
import { services } from '@/lib/services';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-salon');
  const galleryImage = PlaceHolderImages.find(
    (img) => img.id === 'gallery-interior'
  );

  return (
    <div className="space-y-16 md:space-y-24 lg:space-y-32">
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-center"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Güzelliğinize Sanatsal Dokunuş
              </h1>
              <p className="text-lg md:text-xl text-foreground/80">
                Stil Randevu'da kendinizi yeniden keşfedin. Uzman ekibimizle
                hayalinizdeki görünüme kavuşun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/appointment">Hemen Randevu Al</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">Hizmetleri Keşfet</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Öne Çıkan Hizmetlerimiz
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Size özel sunduğumuz popüler hizmetlerimize göz atın.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <Card key={service.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="link">
            <Link href="/services">
              Tüm Hizmetler <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Salonumuzun Sıcak Atmosferi
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Modern ve şık bir ortamda, konforlu bir güzellik deneyimi sizi
              bekliyor. Galerimizi ziyaret ederek salonumuzun ambiyansını ve
              yaptığımız işleri yakından inceleyin.
            </p>
            <Button asChild className="mt-8" variant="outline">
              <Link href="/gallery">Galeriye Göz At</Link>
            </Button>
          </div>
          <div className="relative aspect-video w-full h-full rounded-lg overflow-hidden shadow-lg">
            {galleryImage && (
              <Image
                src={galleryImage.imageUrl}
                alt={galleryImage.description}
                fill
                className="object-cover"
                data-ai-hint={galleryImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <Sparkles className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Yapay Zeka Destekli Stil Danışmanı
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Size en uygun stilin hangisi olduğundan emin değil misiniz? Saç
            tipinize ve tarzınıza göre kişiselleştirilmiş öneriler almak için
            yapay zeka danışmanımızı deneyin.
          </p>
          <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/style-advisor">Şimdi Dene</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
