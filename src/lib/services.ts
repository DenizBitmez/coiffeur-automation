export type Service = {
  name: string;
  description: string;
  price: string;
  duration: string;
};

export const services: Service[] = [
  {
    name: 'Saç Kesimi',
    description: 'Size en uygun, modern ve yüz hatlarınızı öne çıkaran profesyonel saç kesimi.',
    price: '350 TL',
    duration: '45 dk',
  },
  {
    name: 'Saç Boyama',
    description: 'Kaliteli ürünlerle, istediğiniz renkte parlak ve canlı saçlara kavuşun.',
    price: '800 TL\'den başlayan fiyatlarla',
    duration: '120 dk',
  },
  {
    name: 'Manikür & Pedikür',
    description: 'El ve ayaklarınız için komple bakım, oje ve tırnak sanatı hizmetleri.',
    price: '400 TL',
    duration: '60 dk',
  },
  {
    name: 'Cilt Bakımı',
    description: 'Cildinizin ihtiyacına yönelik derinlemesine temizlik ve canlandırma kürleri.',
    price: '600 TL',
    duration: '75 dk',
  },
  {
    name: 'Profesyonel Makyaj',
    description: 'Özel günleriniz için kalıcı ve yüz hatlarınıza uygun profesyonel makyaj uygulaması.',
    price: '700 TL',
    duration: '60 dk',
  },
  {
    name: 'Kaş & Kirpik Laminasyonu',
    description: 'Daha dolgun ve belirgin kaşlar, kıvrık ve etkileyici kirpikler için bakım.',
    price: '550 TL',
    duration: '60 dk',
  },
];
