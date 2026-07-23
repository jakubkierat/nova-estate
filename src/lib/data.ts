export type InvestmentStatus = "planowana" | "w-budowie" | "gotowe";

export type Investment = {
  slug: string;
  name: string;
  city: string;
  address: string;
  image: string;
  gallery: string[];
  status: InvestmentStatus;
  type: "Apartamenty" | "Domy jednorodzinne" | "Loft";
  priceFrom: number;
  units: number;
  completion: string;
  description: string;
  longDescription: string[];
  sizeRange: string;
  floors: string;
  parking: string;
  greenArea: string;
  technology: string;
  energyClass: string;
  amenities: string[];
};

export const investments: Investment[] = [
  {
    slug: "vista-park",
    name: "Vista Park",
    city: "Warszawa",
    address: "Wilanów, ul. Klimczaka",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1600&auto=format&fit=crop",
    ],
    status: "w-budowie",
    type: "Apartamenty",
    priceFrom: 649000,
    units: 128,
    completion: "IV kw. 2027",
    description:
      "Kameralny kompleks apartamentowców otoczony zielenią, z podziemnym parkingiem i strefą rekreacji na dachu.",
    longDescription: [
      "Vista Park to pięć czterokondygnacyjnych budynków ułożonych wokół wewnętrznego, zamkniętego dla ruchu kołowego dziedzińca z placem zabaw i strefą do wypoczynku. Całość powstaje na warszawskim Wilanowie, blisko terenów zielonych i szkoły podstawowej.",
      "Mieszkania zaprojektowano z dużymi oknami i przeszklonymi balkonami lub tarasami — część lokali na parterze ma prywatne ogródki. Na dachu jednego z budynków znajdzie się ogólnodostępna strefa rekreacyjna z leżakami i grillem dla mieszkańców.",
      "Inwestycja jest w trakcie realizacji, z planowanym zakończeniem budowy w czwartym kwartale 2027 roku. Aktualnie trwają prace przy stanie surowym pierwszych dwóch budynków.",
    ],
    sizeRange: "32–98 m²",
    floors: "4 kondygnacje + parking podziemny",
    parking: "1 miejsce postojowe w hali garażowej w cenie",
    greenArea: "1,2 ha terenów zielonych i rekreacyjnych",
    technology: "Żelbetowa konstrukcja szkieletowa, ściany murowane",
    energyClass: "A",
    amenities: [
      "Podziemny garaż z ładowarkami do aut elektrycznych",
      "Plac zabaw i strefa fitness na świeżym powietrzu",
      "Strefa rekreacyjna na dachu",
      "Monitoring i kontrola dostępu",
      "Rowerownia i wózkownia w każdej klatce",
    ],
  },
  {
    slug: "zielony-brzeg",
    name: "Zielony Brzeg",
    city: "Kraków",
    address: "Podgórze, nad Wisłą",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1600&auto=format&fit=crop",
    ],
    status: "gotowe",
    type: "Apartamenty",
    priceFrom: 589000,
    units: 96,
    completion: "Gotowe do odbioru",
    description:
      "Inwestycja z widokiem na bulwary wiślane, prywatnymi ogródkami na parterze i tarasami na wyższych kondygnacjach.",
    longDescription: [
      "Zielony Brzeg powstał na krakowskim Podgórzu, kilkaset metrów od bulwarów wiślanych. Budynek liczy sześć kondygnacji i został oddany do użytku — wszystkie mieszkania są gotowe do odbioru.",
      "Lokale na parterze mają prywatne ogródki, a mieszkania na wyższych piętrach — przeszklone tarasy z widokiem na rzekę. W budynku zastosowano wentylację mechaniczną z rekuperacją, co obniża koszty ogrzewania.",
      "W bezpośrednim sąsiedztwie znajdują się przystanki komunikacji miejskiej, szkoła oraz ścieżka rowerowa prowadząca wzdłuż Wisły do centrum miasta.",
    ],
    sizeRange: "28–110 m²",
    floors: "6 kondygnacji",
    parking: "Miejsca postojowe naziemne i w hali garażowej",
    greenArea: "Ogródki przy lokalach na parterze, zieleń wzdłuż bulwarów",
    technology: "Żelbetowa konstrukcja monolityczna, wentylacja z rekuperacją",
    energyClass: "A",
    amenities: [
      "Winda w każdej klatce schodowej",
      "Prywatne ogródki na parterze",
      "Bliskość bulwarów wiślanych i ścieżki rowerowej",
      "Rekuperacja w każdym lokalu",
      "Komórki lokatorskie",
    ],
  },
  {
    slug: "lesne-tarasy",
    name: "Leśne Tarasy",
    city: "Wrocław",
    address: "Krzyki, ul. Buforowa",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=1600&auto=format&fit=crop",
    ],
    status: "w-budowie",
    type: "Domy jednorodzinne",
    priceFrom: 1190000,
    units: 24,
    completion: "II kw. 2027",
    description:
      "Osiedle domów jednorodzinnych w otoczeniu lasu sosnowego, każdy z prywatnym ogrodem i garażem dwustanowiskowym.",
    longDescription: [
      "Leśne Tarasy to kameralne osiedle 24 domów jednorodzinnych i bliźniaków na wrocławskich Krzykach, bezpośrednio sąsiadujące z lasem sosnowym. Układ osiedla zaprojektowano tak, by każda działka miała dostęp do zieleni i naturalne oddzielenie od sąsiadów.",
      "Domy powstają w technologii energooszczędnej, z pompami ciepła i instalacją fotowoltaiczną jako opcją dodatkową. Każdy dom ma garaż dwustanowiskowy i ogród o powierzchni od 300 do 450 m².",
      "Budowa jest w toku — obecnie trwają prace przy stanie deweloperskim pierwszego etapu (12 domów), z planowanym przekazaniem kluczy w drugim kwartale 2027 roku.",
    ],
    sizeRange: "142–186 m² (dom), działki 300–450 m²",
    floors: "2 kondygnacje + poddasze użytkowe",
    parking: "Garaż dwustanowiskowy przy każdym domu",
    greenArea: "Bezpośrednie sąsiedztwo lasu sosnowego, prywatne ogrody",
    technology: "Technologia energooszczędna, pompy ciepła, opcja fotowoltaiki",
    energyClass: "A+",
    amenities: [
      "Prywatny ogród przy każdym domu",
      "Garaż dwustanowiskowy",
      "Pompa ciepła w standardzie",
      "Instalacja pod fotowoltaikę",
      "Bezpośredni dostęp do lasu",
    ],
  },
  {
    slug: "nova-station",
    name: "Nova Station",
    city: "Poznań",
    address: "Grunwald, ul. Grochowska",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    ],
    status: "planowana",
    type: "Loft",
    priceFrom: 519000,
    units: 64,
    completion: "Start sprzedaży III kw. 2026",
    description:
      "Industrialne lofty w rewitalizowanym budynku dawnej fabryki, z antresolami i wysokimi oknami.",
    longDescription: [
      "Nova Station to rewitalizacja dawnej fabryki na poznańskim Grunwaldzie — zachowamy oryginalną ceglaną elewację i stalową konstrukcję dachu, dobudowując nowoczesne wnętrza loftowe z antresolami.",
      "Wysokość pomieszczeń sięgająca 4,2 metra i duże, industrialne okna to charakterystyczne cechy tej inwestycji. Część lokali będzie miała antresolę pod sypialnię, co pozwoli efektywnie wykorzystać przestrzeń.",
      "Inwestycja jest obecnie na etapie projektowym — start sprzedaży i podpisywanie pierwszych umów rezerwacyjnych planujemy na trzeci kwartał 2026 roku.",
    ],
    sizeRange: "45–120 m²",
    floors: "4 kondygnacje w zrewitalizowanym budynku fabrycznym",
    parking: "Parking naziemny i wiata rowerowa",
    greenArea: "Skwer miejski w sąsiedztwie, rewitalizowane podwórze fabryczne",
    technology: "Rewitalizacja istniejącej konstrukcji, stal i cegła",
    energyClass: "B",
    amenities: [
      "Antresole w wybranych lokalach",
      "Zachowana industrialna elewacja i wysokie okna",
      "Wspólne podwórze fabryczne",
      "Bliskość przystanku tramwajowego",
      "Możliwość aranżacji open space",
    ],
  },
  {
    slug: "morska-panorama",
    name: "Morska Panorama",
    city: "Gdańsk",
    address: "Przymorze, blisko plaży",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
    ],
    status: "w-budowie",
    type: "Apartamenty",
    priceFrom: 720000,
    units: 84,
    completion: "I kw. 2028",
    description:
      "Apartamentowiec 500 metrów od plaży, z panoramicznymi tarasami widokowymi i strefą spa dla mieszkańców.",
    longDescription: [
      "Morska Panorama powstaje na gdańskim Przymorzu, zaledwie 500 metrów od plaży. Dwunastokondygnacyjny apartamentowiec zaprojektowano tak, by większość mieszkań miała choćby częściowy widok na morze.",
      "Na najwyższych kondygnacjach znajdą się apartamenty z panoramicznymi tarasami widokowymi, a na parterze — ogólnodostępna strefa spa i basen dla mieszkańców budynku.",
      "Budowa ruszyła w 2025 roku, obecnie trwają prace przy wyższych kondygnacjach konstrukcji. Zakończenie inwestycji planowane jest na pierwszy kwartał 2028 roku.",
    ],
    sizeRange: "38–140 m²",
    floors: "12 kondygnacji",
    parking: "Podziemna hala garażowa, część miejsc z ładowarkami EV",
    greenArea: "Bliskość plaży i nadmorskiego pasa zieleni",
    technology: "Żelbetowa konstrukcja szkieletowa, fasada wentylowana",
    energyClass: "A",
    amenities: [
      "Strefa spa i basen dla mieszkańców",
      "Panoramiczne tarasy widokowe na najwyższych piętrach",
      "500 metrów do plaży",
      "Podziemny garaż z ładowarkami EV",
      "Recepcja i całodobowa ochrona",
    ],
  },
  {
    slug: "cichy-zakatek",
    name: "Cichy Zakątek",
    city: "Łódź",
    address: "Polesie, ul. Sienkiewicza",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?q=80&w=1600&auto=format&fit=crop",
    ],
    status: "gotowe",
    type: "Domy jednorodzinne",
    priceFrom: 890000,
    units: 18,
    completion: "Gotowe do odbioru",
    description:
      "Niewielkie osiedle bliźniaków i domów w zabudowie szeregowej, zaprojektowane z myślą o rodzinach z dziećmi.",
    longDescription: [
      "Cichy Zakątek to niewielkie, zamknięte osiedle 18 domów — bliźniaków i domów w zabudowie szeregowej — na łódzkim Polesiu. Układ ulic wewnętrznych zaprojektowano z ograniczeniem ruchu samochodowego, z myślą o bezpieczeństwie dzieci.",
      "Każdy dom ma własny ogród, a na terenie osiedla powstał wspólny plac zabaw i skwer z ławkami. Wszystkie domy są już wykończone i gotowe do odbioru.",
      "Osiedle znajduje się w pobliżu szkoły podstawowej, przedszkola i przystanku autobusowego, co doceniają rodziny z dziećmi kupujące tu swój pierwszy dom.",
    ],
    sizeRange: "118–145 m², działki 200–280 m²",
    floors: "2 kondygnacje",
    parking: "Miejsce postojowe na działce, garaż w wybranych domach",
    greenArea: "Prywatne ogrody, wspólny skwer i plac zabaw",
    technology: "Murowana, ściany dwuwarstwowe, ocieplenie 20 cm",
    energyClass: "B",
    amenities: [
      "Wspólny plac zabaw dla dzieci",
      "Ulice wewnętrzne z ograniczonym ruchem",
      "Prywatny ogród przy każdym domu",
      "Bliskość szkoły i przedszkola",
      "Domy gotowe do zamieszkania",
    ],
  },
];

export const stats = [
  { label: "Lat na rynku", value: 16, suffix: "" },
  { label: "Zrealizowanych inwestycji", value: 48, suffix: "" },
  { label: "m² wybudowanej powierzchni", value: 320, suffix: " tys." },
  { label: "Zadowolonych klientów", value: 2400, suffix: "+" },
];

export const processSteps = [
  {
    title: "Wybór lokalu",
    description:
      "Przeglądasz dostępne inwestycje, rzuty mieszkań i metraże, a nasz doradca pomaga dopasować ofertę do Twoich potrzeb.",
  },
  {
    title: "Rezerwacja i umowa",
    description:
      "Podpisujemy umowę rezerwacyjną, a następnie deweloperską w formie aktu notarialnego, zgodnie z ustawą deweloperską.",
  },
  {
    title: "Finansowanie",
    description:
      "Wspieramy Cię w kontakcie z bankami i doradcami kredytowymi, aby proces finansowania przebiegł sprawnie.",
  },
  {
    title: "Budowa i odbiory",
    description:
      "Na bieżąco informujemy o postępach budowy i zapraszamy na odbiór techniczny lokalu przed przekazaniem kluczy.",
  },
  {
    title: "Wprowadzenie się",
    description:
      "Odbierasz klucze, podpisujemy akt przenoszący własność i zaczynasz nowy rozdział we własnym mieszkaniu.",
  },
];

export const advantages = [
  {
    title: "16 lat doświadczenia",
    description:
      "Od 2010 roku zrealizowaliśmy kilkadziesiąt inwestycji mieszkaniowych w sześciu miastach Polski.",
  },
  {
    title: "Transparentne zasady",
    description:
      "Jasny harmonogram płatności, pełna dokumentacja i stały dostęp do statusu budowy online.",
  },
  {
    title: "Jakość wykończenia",
    description:
      "Sprawdzeni podwykonawcy i materiały klasy premium — każdy odbiór poprzedzają wewnętrzne kontrole jakości.",
  },
  {
    title: "Wsparcie po zakupie",
    description:
      "5 lat gwarancji na lokal oraz serwis posprzedażowy dostępny dla wszystkich naszych klientów.",
  },
];

export const testimonials = [
  {
    name: "Katarzyna Wójcik",
    role: "Właścicielka lokalu, Zielony Brzeg",
    quote:
      "Cały proces od rezerwacji po odbiór kluczy przebiegł dokładnie tak, jak zapowiadał doradca. Żadnych niespodzianek, pełna transparentność.",
  },
  {
    name: "Marek Sobczak",
    role: "Właściciel domu, Cichy Zakątek",
    quote:
      "Doceniam jakość wykończenia części wspólnych i to, że terminy budowy zostały dotrzymane co do miesiąca.",
  },
  {
    name: "Aleksandra Nowicka",
    role: "Właścicielka lokalu, Vista Park",
    quote:
      "Panel klienta z bieżącym podglądem postępu budowy naprawdę ułatwił nam planowanie przeprowadzki.",
  },
  {
    name: "Piotr Zieliński",
    role: "Właściciel lokalu, Morska Panorama",
    quote:
      "Świetna lokalizacja i profesjonalna obsługa na każdym etapie — od pierwszej wizyty w biurze sprzedaży po odbiór techniczny.",
  },
];

export function getInvestmentBySlug(slug: string) {
  return investments.find((item) => item.slug === slug);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    maximumFractionDigits: 0,
  }).format(value);
}
