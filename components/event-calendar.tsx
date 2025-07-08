"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"

interface AvailableDate {
  date: string
  times: string[]
}

interface EventCalendarProps {
  availableDates: AvailableDate[]
}

export function EventCalendar({ availableDates }: EventCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }

  const isDateAvailable = (day: number) => {
    const dateString = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().split("T")[0]
    return availableDates.some((d) => d.date === dateString)
  }

  const getAvailableTimes = (day: number) => {
    const dateString = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().split("T")[0]
    const dateData = availableDates.find((d) => d.date === dateString)
    return dateData?.times || []
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleDateSelect = (day: number) => {
    const dateString = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().split("T")[0]
    setSelectedDate(dateString)
    setSelectedTime(null)
  }

  const days = getDaysInMonth(currentMonth)
  const monthNames = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ]
  const dayNames = ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "Sb"]

  return (
    <div className="space-y-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={prevMonth}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h3 className="font-semibold">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <Button variant="ghost" size="sm" onClick={nextMonth}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {dayNames.map((day) => (
          <div key={day} className="p-2 text-xs font-medium text-gray-500">
            {day}
          </div>
        ))}

        {days.map((day, index) => (
          <div key={index} className="aspect-square">
            {day && (
              <Button
                variant={
                  selectedDate ===
                  new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().split("T")[0]
                    ? "default"
                    : "ghost"
                }
                size="sm"
                className={`w-full h-full text-xs ${
                  isDateAvailable(day) ? "hover:bg-blue-100 hover:text-blue-600" : "opacity-30 cursor-not-allowed"
                }`}
                onClick={() => isDateAvailable(day) && handleDateSelect(day)}
                disabled={!isDateAvailable(day)}
              >
                {day}
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* Available Times */}
      {selectedDate && (
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium">Dostępne Godziny</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {getAvailableTimes(new Date(selectedDate).getDate()).map((time) => (
              <Badge
                key={time}
                variant={selectedTime === time ? "default" : "secondary"}
                className="cursor-pointer hover:bg-blue-100 hover:text-blue-600"
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Badge>
            ))}
          </div>

          {selectedTime && (
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                Wybrano: {new Date(selectedDate).toLocaleDateString("pl-PL")} o {selectedTime}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
