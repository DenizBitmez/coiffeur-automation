import { AppointmentForm } from '@/components/forms/appointment-form';
import { services } from '@/lib/services';

export default async function AppointmentPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  
  // URL'deki ?service= parametresini alıyoruz
  const serviceSlug = typeof resolvedParams.service === 'string' ? resolvedParams.service : undefined;
  
  // Slug ile veri tabanındaki eşleşen hizmeti buluyoruz
  const foundService = services.find(s => s.slug === serviceSlug);
  
  // Eğer bulursak formun defaultService'ine göndermek için asıl adını okuyoruz (Örn. "Saç Kesimi")
  const defaultServiceName = foundService ? foundService.name : undefined;

  return (
    <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-sm border p-6 md:p-10">
        <div className="text-center mb-10">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Randevunuzu Oluşturun
          </h1>
          <p className="mt-4 text-lg text-foreground/80">
            {defaultServiceName 
              ? `"${defaultServiceName}" hizmetimiz için en uygun tarih ve saati aşağıdan seçebilirsiniz.` 
              : "Formu doldurarak size en uygun zaman için yerinizi ayırtın. Ekibimiz en kısa sürede sizinle iletişime geçecektir."}
          </p>
        </div>
        
        <AppointmentForm defaultService={defaultServiceName} />
      </div>
    </div>
  );
}
