import { AppointmentForm } from '@/components/forms/appointment-form';

export default function AppointmentPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Randevunuzu Oluşturun
          </h1>
          <p className="mt-4 text-lg text-foreground/80">
            Formu doldurarak size en uygun zaman için yerinizi ayırtın.
            Ekibimiz en kısa sürede sizinle iletişime geçecektir.
          </p>
        </div>
        <AppointmentForm />
      </div>
    </div>
  );
}
