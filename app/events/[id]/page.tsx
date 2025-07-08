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
    title: "Sunset Kayaking Adventure",
    description:
      "Experience the magic of paddling through calm waters as the sun sets over the horizon. This peaceful yet invigorating adventure is perfect for all skill levels. Our expert guides will lead you through scenic waterways while sharing local wildlife knowledge and ensuring your safety throughout the journey.",
    fullDescription: `Join us for an unforgettable sunset kayaking experience that combines the tranquility of nature with the excitement of water sports. As the day winds down, we'll paddle through crystal-clear waters surrounded by stunning natural beauty.

Our experienced guides will provide all necessary equipment and safety briefings. Whether you're a beginner or experienced paddler, this adventure is designed to accommodate all skill levels. We'll explore hidden coves, observe local wildlife, and witness one of nature's most spectacular displays as the sun paints the sky in brilliant colors.

What's included:
• Professional kayak and safety equipment
• Expert guide and safety briefing
• Light refreshments and water
• Photography opportunities
• Wildlife spotting guide

What to bring:
• Comfortable clothing that can get wet
• Sun protection (hat, sunglasses, sunscreen)
• Water bottle
• Towel and change of clothes
• Waterproof camera (optional)`,
    location: "Crystal Lake",
    duration: "3 hours",
    difficulty: "Beginner",
    maxParticipants: 12,
    price: "$89",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop&crop=center",
    ],
    availableDates: [
      { date: "2024-02-15", times: ["17:00", "17:30", "18:00"] },
      { date: "2024-02-16", times: ["17:00", "17:30"] },
      { date: "2024-02-17", times: ["17:00", "18:00"] },
      { date: "2024-02-22", times: ["17:00", "17:30", "18:00"] },
      { date: "2024-02-23", times: ["17:00", "17:30"] },
    ],
  },
  2: {
    id: 2,
    title: "White Water Rafting Expedition",
    description: "Challenge yourself with thrilling rapids and breathtaking mountain scenery.",
    fullDescription: `Get ready for the ultimate adrenaline rush with our white water rafting expedition! Navigate through exciting Class III and IV rapids while surrounded by stunning mountain landscapes. This adventure is perfect for thrill-seekers looking to push their limits.

Our professional guides have years of experience and will ensure your safety while maximizing the excitement. You'll learn proper paddling techniques, safety procedures, and work as a team to conquer the rapids.

What's included:
• Professional rafting equipment and safety gear
• Experienced river guide
• Safety briefing and instruction
• Lunch and refreshments
• Transportation to/from river
• Action photos

Requirements:
• Minimum age: 16 years
• Good physical fitness required
• Must be able to swim
• Weight limit: 250 lbs`,
    location: "Rapids River",
    duration: "6 hours",
    difficulty: "Advanced",
    maxParticipants: 8,
    price: "$149",
    images: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
    ],
    availableDates: [
      { date: "2024-02-22", times: ["09:00", "13:00"] },
      { date: "2024-02-23", times: ["09:00"] },
      { date: "2024-03-01", times: ["09:00", "13:00"] },
    ],
  },
  3: {
    id: 3,
    title: "Stand-Up Paddleboard Yoga",
    description: "Find your balance and inner peace with yoga on the water.",
    fullDescription: `Combine the serenity of yoga with the gentle challenge of stand-up paddleboarding in this unique wellness experience. Practice yoga poses while floating on calm waters, surrounded by nature's beauty.

This session is suitable for all yoga levels and SUP experience. Our certified yoga instructor will guide you through a specially designed sequence that works with the natural movement of the water.

What's included:
• SUP board and paddle
• Yoga instruction
• Safety equipment
• Waterproof yoga mat
• Post-session refreshments
• Meditation session

Benefits:
• Improved balance and core strength
• Enhanced mindfulness and relaxation
• Full-body workout
• Connection with nature
• Stress relief`,
    location: "Serenity Bay",
    duration: "2 hours",
    difficulty: "Beginner",
    maxParticipants: 15,
    price: "$65",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&h=600&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&crop=center",
    ],
    availableDates: [
      { date: "2024-02-28", times: ["08:00", "10:00", "16:00"] },
      { date: "2024-03-01", times: ["08:00", "10:00"] },
      { date: "2024-03-02", times: ["08:00", "16:00"] },
    ],
  },
}

export default async function EventDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params
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
              <span className="text-2xl font-bold text-gray-900">AquaVenture</span>
            </Link>
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ChevronLeft className="h-4 w-4" />
              <span>Back to Events</span>
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
                  <span>Max {event.maxParticipants} people</span>
                </Badge>
                <Badge
                  variant={
                    event.difficulty === "Beginner"
                      ? "default"
                      : event.difficulty === "Advanced"
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
                <CardTitle>Event Details</CardTitle>
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
                <CardDescription className="text-center">per person</CardDescription>
              </CardHeader>
            </Card>

            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle>Available Dates & Times</CardTitle>
              </CardHeader>
              <CardContent>
                <EventCalendar availableDates={event.availableDates} />
              </CardContent>
            </Card>

            {/* Registration Form */}
            <Card>
              <CardHeader>
                <CardTitle>Register Your Interest</CardTitle>
                <CardDescription>
                  Fill out this form to express your interest or register for this event
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                <div>
                  <Label htmlFor="participants">Number of Participants</Label>
                  <Input id="participants" type="number" min="1" max={event.maxParticipants} defaultValue="1" />
                </div>

                <div>
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <Input id="preferredDate" type="date" />
                </div>

                <div>
                  <Label htmlFor="experience">Previous Experience</Label>
                  <Textarea
                    id="experience"
                    placeholder="Tell us about your experience with this activity..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="questions">Questions or Special Requests</Label>
                  <Textarea id="questions" placeholder="Any questions or special requirements?" rows={3} />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Submit Registration</Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our terms and conditions. We'll contact you within 24 hours to
                  confirm your registration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
