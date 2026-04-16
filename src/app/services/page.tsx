import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/services';
import { Clock } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Hizmetlerimiz ve Fiyat Listesi
        </h1>
        <p className="mt-4 text-lg text-foreground/80">
          Güzelliğinize değer katacak profesyonel hizmetlerimizi ve güncel
          fiyatlarımızı inceleyin.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="group">
            <Card className="flex flex-col h-full border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 cursor-pointer">
              <CardHeader>
                <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{service.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center text-sm font-medium mt-4">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="h-4 w-4" />
                  <span>{service.duration}</span>
                </div>
                <span className="font-bold text-lg">{service.price}</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
