import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith('gallery-')
  );

  return (
    <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Galerimiz
        </h1>
        <p className="mt-4 text-lg text-foreground/80">
          Salonumuzun atmosferini, ekibimizi ve yaptığımız işlerden bazılarını
          keşfedin.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-square w-full h-full overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={image.imageUrl}
              alt={image.description}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              data-ai-hint={image.imageHint}
            />
            <div className="absolute inset-0 bg-black/20 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
