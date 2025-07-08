"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface EventCardProps {
  event: {
    id: number
    title: string
    image: string
    description: string
    date: string
    location: string
    participants: number
  }
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/events/${event.id}`}>
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
            <span className="text-sm font-medium text-gray-900">{event.participants} miejsc</span>
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
              <span>{new Date(event.date).toLocaleDateString("pl-PL")}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
