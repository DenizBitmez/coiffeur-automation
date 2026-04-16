export type Service = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  productsUsed: string[];
  price: string;
  duration: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: 'sac-kesimi',
    name: 'Saç Kesimi',
    description: 'Size en uygun, modern ve yüz hatlarınızı öne çıkaran profesyonel saç kesimi.',
    longDescription: 'Yüz hatlarınızı ön plana çıkaracak, modern ve size özel tasarlanmış profesyonel saç kesimi deneyimi. Yeni tarzınıza karar verirken uzman ekibimiz en ince ayrıntısına kadar yanınızda. Klasik kesimlerden, asimetrik modern dokunuşlara kadar hayalinizdeki görünüme kavuşun.',
    features: ['Kişiye Özel Tasarım', '3D Kesim Teknikleri', 'Ücretsiz Saç Analizi', 'Şekillendirme Tavsiyeleri'],
    productsUsed: ['Kérastase', 'L\'Oréal Professionnel', 'Dyson Airwrap'],
    price: '350 TL',
    duration: '45 dk',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'sac-boyama',
    name: 'Saç Boyama',
    description: 'Kaliteli ürünlerle, istediğiniz renkte parlak ve canlı saçlara kavuşun.',
    longDescription: 'Hayalinizdeki renge zarar görmeden ve maksimum parlaklıkla ulaşın! Amonyaksız ve organik özlü boyalarla saçınızın doğal yapısını koruyarak canlı sonuçlar alıyoruz. İster dipler için taze bir dokunuş, ister yepyeni parlak bir imaj, uzman colorist\'lerimizle güvendesiniz.',
    features: ['Amonyaksız Formulasyonlar', 'Uzun Süre Kalıcı Parlaklık', 'Kişiye Özel Renk Analizi', 'Yıpranma Karşıtı Koruma'],
    productsUsed: ['Wella Professionals', 'Olaplex', 'Schwarzkopf Igora'],
    price: '800 TL\'den başlayan fiyatlarla',
    duration: '120 dk',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'manikur-pedikur',
    name: 'Manikür & Pedikür',
    description: 'El ve ayaklarınız için komple bakım, oje ve tırnak sanatı hizmetleri.',
    longDescription: 'Günlük koşturmaca içerisinde ellerinizin ve ayaklarınızın hak ettiği lüks SPA bakımı. Sterilize edilmiş profesyonel aletlerle yapılan estetik dokunuşlar, peeling ve besleyici kremler ile cildinizi şımartıyoruz. Trend oje renkleri veya şık tırnak sanatı tasarımları ile tarzınızı tamamlayın.',
    features: ['%100 Tıbbi Sterilizasyon', 'SPA Kalitesinde Peeling', 'Vegan Oje Seçenekleri', 'Kalıcı Oje Uyumluluğu'],
    productsUsed: ['OPI', 'Essie', 'CND Shellac', 'Kalyon Tırnak Besleyiciler'],
    price: '400 TL',
    duration: '60 dk',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'cilt-bakimi',
    name: 'Cilt Bakımı',
    description: 'Cildinizin ihtiyacına yönelik derinlemesine temizlik ve canlandırma kürleri.',
    longDescription: 'Şehrin stresi ve kirinden yorulmuş cildiniz için derinlemesine bir arınma ritüeli! Cilt tipinize uygun dermokozmetik ürünlerle uygulanan maskeler, gözenek temizliği, led terapi ve nemlendirme aşamalarıyla cildinizin gençliğini geri kazanmasını ve sağlıkla parlamasını sağlıyoruz.',
    features: ['Derinlemesine Cilt Analizi', 'Buhar ve Komedon Temizliği', 'Led Terapi Maskesi', 'Yoğun Hyaluronik Asit Yüklemesi'],
    productsUsed: ['Dermalogica', 'La Roche-Posay', 'Skinceuticals'],
    price: '600 TL',
    duration: '75 dk',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'profesyonel-makyaj',
    name: 'Profesyonel Makyaj',
    description: 'Özel günleriniz için kalıcı ve yüz hatlarınıza uygun profesyonel makyaj uygulaması.',
    longDescription: 'Gecenin veya özel gününüzün en dikkat çeken ismi siz olun! Kamera ışıklarına uygun kontürleme, porselen görünüm ve saatlerce akmayan kalıcı ürünlerle yüz hatlarınızı en doğal şekilde vurguluyoruz. Gelin makyajından gece makyajına kadar her stile hakimiz.',
    features: ['Porselen Cilt Görünümü', 'Sudan ve Terden Etkilenmeyen Altyapı', 'Mink/İpek Kirpik Takviyesi', 'Ten Rengine Tam Uyum'],
    productsUsed: ['MAC Cosmetics', 'NARS', 'Dior Beauty', 'Charlotte Tilbury'],
    price: '700 TL',
    duration: '60 dk',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
  },
  {
    slug: 'kas-kirpik-laminasyonu',
    name: 'Kaş & Kirpik Laminasyonu',
    description: 'Daha dolgun ve belirgin kaşlar, kıvrık ve etkileyici kirpikler için bakım.',
    longDescription: 'Doğal ama etkileyici bakışlara kavuşmak için makyaja ihtiyacınız yok. Kaş laminasyonu ile dağınık kaşlarınızı disipline sokup kalınlaştırıyor, kirpik lifting ile ise aylarca sürecek doğal ve maskarasız bir kıvrım elde ediyoruz. Üstelik keratin yüklemesi ile kıllarınız besleniyor.',
    features: ['Makyajsız Doğal Güzellik', 'Keratin ve Vitamin Beslemesi', '2 Ay Kalıcılık Garantisi', 'Ağrısız Hızlı İşlem'],
    productsUsed: ['Yumi Lashes', 'Thuya Professional', 'RefectoCil'],
    price: '550 TL',
    duration: '60 dk',
    image: 'https://images.unsplash.com/photo-1512496015851-a1cbf2826626?auto=format&fit=crop&q=80&w=800',
  },
];
