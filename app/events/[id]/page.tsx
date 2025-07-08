import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, Waves, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { EventGallery } from "@/components/event-gallery"
import { EventCalendar } from "@/components/event-calendar"

const eventsData = {
  1: {
    id: 1,
    title: "Nauka Foila za Skuterem Wodnym",
    description:
      "Naucz się latać nad wodą! Poznaj tajniki hydrofoilingu z profesjonalnym instruktorem i skuterem wodnym. To niezapomniane doświadczenie, które pozwoli Ci poczuć się jak ptak nad taflą wody.",
    fullDescription: `Hydrofoiling to najnowszy trend w sportach wodnych, który pozwala dosłownie latać nad powierzchnią wody. Podczas naszych zajęć nauczysz się podstaw tej fascynującej dyscypliny pod okiem doświadczonych instruktorów.

Nasze zajęcia rozpoczynamy od teorii - poznasz budowę foila, zasady fizyki rządzące tym sportem oraz podstawowe techniki bezpieczeństwa. Następnie przejdziemy do praktyki na wodzie, gdzie krok po kroku nauczysz się utrzymywać równowagę i kontrolować foil.

Co jest wliczone:
• Profesjonalny sprzęt hydrofoilowy
• Skuter wodny z instruktorem
• Pełny instruktaż bezpieczeństwa
• Kombinezony neoprenowe
• Kaski i kamizelki ratunkowe
• Sesja zdjęciowa

Wymagania:
• Podstawowa umiejętność pływania
• Minimalny wiek: 14 lat
• Dobra kondycja fizyczna
• Brak przeciwwskazań zdrowotnych

Po zakończeniu kursu otrzymasz certyfikat ukończenia oraz dostęp do naszej społeczności hydrofoilerów!`,
    location: "Jezioro Mazurskie",
    duration: "4 godziny",
    difficulty: "Średniozaawansowany",
    maxParticipants: 6,
    price: "299 zł",
    images: [
      "/images/foil_jetski.jpg",
    ],
    availableDates: [
      { date: "2024-02-15", times: ["09:00", "14:00"] },
      { date: "2024-02-16", times: ["09:00", "14:00"] },
      { date: "2024-02-17", times: ["09:00"] },
      { date: "2024-02-22", times: ["09:00", "14:00"] },
      { date: "2024-02-23", times: ["09:00", "14:00"] },
    ],
  },
  2: {
    id: 2,
    title: "Joga",
    description: "Znajdź równowagę i wewnętrzny spokój podczas sesji jogi na świeżym powietrzu nad wodą.",
    fullDescription: `Nasza sesja jogi to wyjątkowe połączenie tradycyjnych praktyk z pięknem natury. Ćwiczymy w malowniczym miejscu nad wodą, gdzie dźwięki natury tworzą naturalną ścieżkę dźwiękową do naszej praktyki.

Sesje są dostosowane do wszystkich poziomów zaawansowania - od początkujących po zaawansowanych jogów. Nasz certyfikowany instruktor poprowadzi Cię przez sekwencję assan, które wzmocnią Twoje ciało i uspokoją umysł.

Co jest wliczone:
• Mata do jogi
• Instrukcja z certyfikowanym nauczycielem
• Sesja medytacji
• Herbatka ziołowa po zajęciach
• Miejsce w cieniu lub na słońcu (do wyboru)
• Materiały do praktyki domowej

Korzyści z regularnej praktyki:
• Zwiększona elastyczność i siła
• Lepsze zarządzanie stresem
• Poprawa koncentracji
• Głębszy sen
• Większa świadomość ciała
• Wewnętrzny spokój i równowaga

Zajęcia odbywają się w małych grupach, co pozwala na indywidualne podejście do każdego uczestnika.`,
    location: "Zatoka Spokoju",
    duration: "1.5 godziny",
    difficulty: "Wszystkie poziomy",
    maxParticipants: 15,
    price: "45 zł",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    ],
    availableDates: [
      { date: "2024-02-22", times: ["07:00", "18:00", "19:30"] },
      { date: "2024-02-23", times: ["07:00", "18:00"] },
      { date: "2024-02-24", times: ["07:00", "19:30"] },
      { date: "2024-02-25", times: ["07:00", "18:00", "19:30"] },
    ],
  },
  3: {
    id: 3,
    title: "Obóz flowcamp",
    description:
      "Intensywny 5-dniowy obóz łączący wszystkie sporty wodne, jogę i rozwój osobisty w przepięknej scenerii.",
    fullDescription: `Obóz flowcamp to kompletne doświadczenie transformacyjne, które łączy sporty wodne, praktyki mindfulness i rozwój osobisty. Przez 5 dni będziesz mieszkać w pięknym ośrodku nad jeziorem, uczestnicząc w różnorodnych aktywnościach i warsztatach.

Program obozu obejmuje:

DZIEŃ 1 - Przywitanie i podstawy
• Powitanie i integracja grupy
• Wprowadzenie do filozofii flowcamp
• Pierwsza sesja jogi o wschodzie słońca
• Podstawy bezpieczeństwa na wodzie

DZIEŃ 2-4 - Intensywne treningi
• Codzienne sesje jogi (rano i wieczorem)
• Nauka różnych sportów wodnych
• Warsztaty rozwoju osobistego
• Sesje medytacji nad wodą
• Ogniska i rozmowy przy gwiazdach

DZIEŃ 5 - Integracja i pożegnanie
• Podsumowanie doświadczeń
• Planowanie dalszego rozwoju
• Ceremonia zakończenia
• Wymiana kontaktów

Co jest wliczone:
• 4 noclegi w komfortowych pokojach
• Wszystkie posiłki (śniadania, obiady, kolacje)
• Pełny program sportowy i rozwojowy
• Sprzęt do wszystkich aktywności
• Materiały szkoleniowe
• Certyfikat ukończenia obozu
• Dostęp do społeczności flowcamp

Ten obóz to nie tylko nauka sportów wodnych, ale przede wszystkim podróż do siebie i odkrycie swojego potencjału.`,
    location: "Ośrodek nad Jeziorem",
    duration: "5 dni / 4 noce",
    difficulty: "Wszystkie poziomy",
    maxParticipants: 20,
    price: "1299 zł",
    images: [
      "/images/jezioro.jpg",
    ],
    availableDates: [
      { date: "2024-03-01", times: ["14:00"] },
      { date: "2024-03-15", times: ["14:00"] },
      { date: "2024-04-01", times: ["14:00"] },
      { date: "2024-04-15", times: ["14:00"] },
    ],
  },
}

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params
  const event = eventsData[Number.parseInt(id) as keyof typeof eventsData]

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">lets_flowcamp</span>
            </Link>
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ChevronLeft className="h-4 w-4" />
              <span>Powrót do Wydarzeń</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Header */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <Badge variant="secondary" className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span>{event.location}</span>
                </Badge>
                <Badge variant="secondary" className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{event.duration}</span>
                </Badge>
                <Badge variant="secondary" className="flex items-center space-x-1">
                  <Users className="h-3 w-3" />
                  <span>Maks {event.maxParticipants} osób</span>
                </Badge>
                <Badge
                  variant={
                    event.difficulty === "Początkujący"
                      ? "default"
                      : event.difficulty === "Zaawansowany"
                        ? "destructive"
                        : "secondary"
                  }
                >
                  {event.difficulty}
                </Badge>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">{event.description}</p>
            </div>

            {/* Photo Gallery */}
            <EventGallery images={event.images} title={event.title} />

            {/* Detailed Description */}
            <Card>
              <CardHeader>
                <CardTitle>Szczegóły Wydarzenia</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {event.fullDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">{event.price}</CardTitle>
                <CardDescription className="text-center">za osobę</CardDescription>
              </CardHeader>
            </Card>

            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle>Dostępne Daty i Godziny</CardTitle>
              </CardHeader>
              <CardContent>
                <EventCalendar availableDates={event.availableDates} />
              </CardContent>
            </Card>

            {/* Registration Form */}
            <Card>
              <CardHeader>
                <CardTitle>Zarejestruj Swoje Zainteresowanie</CardTitle>
                <CardDescription>
                  Wypełnij ten formularz, aby wyrazić zainteresowanie lub zarejestrować się na to wydarzenie
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Imię</Label>
                    <Input id="firstName" placeholder="Jan" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nazwisko</Label>
                    <Input id="lastName" placeholder="Kowalski" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="jan@example.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Numer Telefonu</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                <div>
                  <Label htmlFor="participants">Liczba Uczestników</Label>
                  <Input id="participants" type="number" min="1" max={event.maxParticipants} defaultValue="1" />
                </div>

                <div>
                  <Label htmlFor="preferredDate">Preferowana Data</Label>
                  <Input id="preferredDate" type="date" />
                </div>

                <div>
                  <Label htmlFor="experience">Poprzednie Doświadczenie</Label>
                  <Textarea
                    id="experience"
                    placeholder="Opowiedz nam o swoim doświadczeniu z tą aktywnością..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="questions">Pytania lub Specjalne Życzenia</Label>
                  <Textarea id="questions" placeholder="Jakieś pytania lub specjalne wymagania?" rows={3} />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Wyślij Rejestrację</Button>

                <p className="text-xs text-gray-500 text-center">
                  Wysyłając ten formularz, zgadzasz się na nasze warunki i zasady. Skontaktujemy się z Tobą w ciągu 24
                  godzin, aby potwierdzić Twoją rejestrację.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
