import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, Waves } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const upcomingEvents = [
  {
    id: 1,
    title: "Sunset Kayaking Adventure",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center",
    description: "Experience the magic of paddling through calm waters as the sun sets over the horizon.",
    date: "2024-02-15",
    location: "Crystal Lake",
    participants: 12,
  },
  {
    id: 2,
    title: "White Water Rafting Expedition",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop&crop=center",
    description: "Challenge yourself with thrilling rapids and breathtaking mountain scenery.",
    date: "2024-02-22",
    location: "Rapids River",
    participants: 8,
  },
  {
    id: 3,
    title: "Stand-Up Paddleboard Yoga",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    description: "Find your balance and inner peace with yoga on the water.",
    date: "2024-02-28",
    location: "Serenity Bay",
    participants: 15,
  },
  {
    id: 4,
    title: "Surfing Bootcamp Weekend",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&h=300&fit=crop&crop=center",
    description: "Learn to ride the waves with our expert instructors in this intensive weekend course.",
    date: "2024-03-05",
    location: "Ocean Beach",
    participants: 10,
  },
  {
    id: 5,
    title: "Mountain Lake Canoeing",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
    description: "Explore pristine mountain lakes surrounded by stunning alpine scenery.",
    date: "2024-03-12",
    location: "Alpine Lake",
    participants: 6,
  },
  {
    id: 6,
    title: "Windsurfing Masterclass",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=300&fit=crop&crop=center",
    description: "Master the art of windsurfing with advanced techniques and equipment.",
    date: "2024-03-18",
    location: "Windy Point",
    participants: 8,
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
              <span className="text-2xl font-bold text-white">AquaVenture</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-blue-300 transition-colors">
                Home
              </Link>
              <Link href="#events" className="text-white hover:text-blue-300 transition-colors">
                Events
              </Link>
              <Link href="#about" className="text-white hover:text-blue-300 transition-colors">
                About
              </Link>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black bg-transparent"
              >
                Contact Us
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
            Dive Into Your Next
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
              Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Experience the thrill of watersports and outdoor activities with expert guides and premium equipment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Explore Events
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              At AquaVenture, we believe that life's greatest moments happen when you step outside your comfort zone.
              We're passionate about connecting people with the raw beauty and exhilarating power of water through
              unforgettable outdoor experiences.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">
                  Professional instructors with years of experience in watersports and outdoor activities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focus</h3>
                <p className="text-gray-600">
                  Building lasting connections through shared adventures and outdoor experiences
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Locations</h3>
                <p className="text-gray-600">Carefully selected venues that showcase the best of nature's playground</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us for thrilling adventures that will challenge your limits and create memories to last a lifetime
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Link key={event.id} href={`/events/${event.id}`}>
                <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center"
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-medium text-gray-900">{event.participants} spots</span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{event.title}</CardTitle>
                    <CardDescription className="text-gray-600">{event.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
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
                <span className="text-xl font-bold">AquaVenture</span>
              </div>
              <p className="text-gray-400">Your gateway to unforgettable watersports and outdoor adventures.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Activities</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Kayaking</li>
                <li>Surfing</li>
                <li>Paddleboarding</li>
                <li>White Water Rafting</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>123 Adventure Lane</p>
                <p>Coastal City, CC 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@aquaventure.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AquaVenture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
