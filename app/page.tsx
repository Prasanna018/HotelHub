"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Calendar, MapPin, Search, Star, Users } from "lucide-react"
import Image from "next/image"

const featuredHotels = [
  {
    id: 1,
    name: "Luxury Resort & Spa",
    location: "Maldives",
    rating: 4.8,
    price: 299,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&h=600"
  },
  {
    id: 2,
    name: "Mountain View Lodge",
    location: "Switzerland",
    rating: 4.6,
    price: 199,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=600"
  },
  {
    id: 3,
    name: "Urban Boutique Hotel",
    location: "New York",
    rating: 4.5,
    price: 249,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=600"
  },
  {
    id: 4,
    name: "Beachfront Paradise Resort",
    location: "Bali",
    rating: 4.9,
    price: 329,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&h=600"
  },
  {
    id: 5,
    name: "Historic Palace Hotel",
    location: "Venice",
    rating: 4.7,
    price: 389,
    image: "https://images.unsplash.com/photo-1549294413-26f195471c9b?q=80&w=800&h=600"
  },
  {
    id: 6,
    name: "Desert Oasis Resort",
    location: "Dubai",
    rating: 4.8,
    price: 459,
    image: "https://images.unsplash.com/photo-1512958789358-4dac0f880fb9?q=80&w=800&h=600"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&h=1080"
          alt="Hero background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-4">Find Your Perfect Stay</h1>
            <p className="text-xl mb-8">Discover amazing hotels at the best prices</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="location" className="text-white">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-white" />
                  <Input id="location" className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/70" placeholder="Where are you going?" />
                </div>
              </div>
              <div>
                <Label htmlFor="check-in" className="text-white">Check-in</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-white" />
                  <Input id="check-in" type="date" className="pl-9 bg-white/10 border-white/20 text-white" />
                </div>
              </div>
              <div>
                <Label htmlFor="guests" className="text-white">Guests</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-white" />
                  <Input id="guests" type="number" min="1" className="pl-9 bg-white/10 border-white/20 text-white" placeholder="Number of guests" />
                </div>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Search className="mr-2 h-4 w-4" /> Search Hotels
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="container py-16  w-full">
        <h2 className="text-3xl font-bold mb-8">Featured Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-screen mx-auto p-4">
          {featuredHotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    {hotel.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{hotel.rating}</span>
                    </div>
                    <div>
                      <span className="text-2xl font-bold">${hotel.price}</span>
                      <span className="text-muted-foreground">/night</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}