import { Button } from "@/components/ui/button"
import { MapPin, Users, Waves } from "lucide-react"
import Link from "next/link"
import { EventCard } from "@/components/event-card"

const upcomingEvents = [
  {
    id: 1,
    title: "Nauka Foila za Skuterem Wodnym",
    image: "/images/foil_jetski.jpg",
    description:
      "Naucz się latać nad wodą! Poznaj tajniki hydrofoilingu z profesjonalnym instruktorem i skuterem wodnym.",
    date: "2024-02-15",
    location: "Jezioro Mazurskie",
    participants: 6,
  },
  {
    id: 2,
    title: "Joga",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    description: "Znajdź równowagę i wewnętrzny spokój podczas sesji jogi na świeżym powietrzu nad wodą.",
    date: "2024-02-22",
    location: "Zatoka Spokoju",
    participants: 15,
  },
  {
    id: 3,
    title: "Obóz flowcamp",
    image: "/images/jezioro.jpg",
    description:
      "Intensywny 5-dniowy obóz łączący wszystkie sporty wodne, jogę i rozwój osobisty w przepięknej scenerii.",
    date: "2024-03-01",
    location: "Ośrodek nad Jeziorem",
    participants: 20,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">lets_flowcamp</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-blue-300 transition-colors">
                Strona Główna
              </Link>
              <Link href="#events" className="text-white hover:text-blue-300 transition-colors">
                Wydarzenia
              </Link>
              <Link href="#about" className="text-white hover:text-blue-300 transition-colors">
                O Nas
              </Link>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black bg-transparent"
              >
                Kontakt
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-900/50" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Zanurz Się w Swojej
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
              Następnej Przygodzie
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Przeżyj emocje sportów wodnych i aktywności na świeżym powietrzu z eksperckimi przewodnikami i najlepszym
            sprzętem
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Odkryj Wydarzenia
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
            >
              Dowiedz Się Więcej
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Nasza Misja</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              W lets_flowcamp wierzymy, że najwspanialsze chwile w życiu dzieją się, gdy wyjdziesz poza swoją strefę
              komfortu. Jesteśmy pasjonatami łączenia ludzi z surowym pięknem i ekscytującą mocą wody poprzez
              niezapomniane doświadczenia na świeżym powietrzu.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Eksperckie Przewodnictwo</h3>
                <p className="text-gray-600">
                  Profesjonalni instruktorzy z wieloletnim doświadczeniem w sportach wodnych i aktywnościach na świeżym
                  powietrzu
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Skupienie na Społeczności</h3>
                <p className="text-gray-600">
                  Budowanie trwałych więzi poprzez wspólne przygody i doświadczenia na świeżym powietrzu
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Wyjątkowe Lokalizacje</h3>
                <p className="text-gray-600">
                  Starannie wybrane miejsca, które pokazują najlepsze z naturalnego placu zabaw
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nadchodzące Wydarzenia</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dołącz do nas na ekscytujące przygody, które sprawdzą twoje granice i stworzą wspomnienia na całe życie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Waves className="h-6 w-6" />
                <span className="text-xl font-bold">lets_flowcamp</span>
              </div>
              <p className="text-gray-400">
                Twoja brama do niezapomnianych sportów wodnych i przygód na świeżym powietrzu.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Szybkie Linki</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Strona Główna
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="hover:text-white transition-colors">
                    Wydarzenia
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    O Nas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Aktywności</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Hydrofoiling</li>
                <li>Joga</li>
                <li>Obozy flowcamp</li>
                <li>Sporty Wodne</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Informacje Kontaktowe</h3>
              <div className="space-y-2 text-gray-400">
                <p>ul. Przygodowa 123</p>
                <p>Nadmorskie Miasto, NM 12345</p>
                <p>Telefon: (555) 123-4567</p>
                <p>Email: info@letsflowcamp.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} lets_flowcamp. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
