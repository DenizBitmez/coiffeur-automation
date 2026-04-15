import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Mail, Phone } from 'lucide-react';

const TwitterIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
  >
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3" />
        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
    </svg>
);

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t mt-16 md:mt-24">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <Logo />
            <p className="text-sm text-foreground/70">
              Güzellik ve stilin buluşma noktası.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-headline font-semibold">Hızlı Erişim</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/services" className="hover:text-primary">Hizmetler</Link></li>
              <li><Link href="/gallery" className="hover:text-primary">Galeri</Link></li>
              <li><Link href="/appointment" className="hover:text-primary">Randevu Al</Link></li>
              <li><Link href="/style-advisor" className="hover:text-primary">Stil Danışmanı</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-headline font-semibold">İletişim</h4>
            <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary"/>
                    <span>(555) 123 45 67</span>
                </li>
                 <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary"/>
                    <span>iletisim@stilrandevu.com</span>
                </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-headline font-semibold">Bizi Takip Edin</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground/70 hover:text-primary"><InstagramIcon /></Link>
              <Link href="#" className="text-foreground/70 hover:text-primary"><TwitterIcon /></Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Stil Randevu. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
