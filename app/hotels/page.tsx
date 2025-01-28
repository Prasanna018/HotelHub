"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Star, Wifi, Car, Coffee, Bath, Search, School as Pool, Dumbbell, Tv, Utensils } from "lucide-react"
import Image from "next/image"
import { useState, useMemo } from "react"

const hotels = [
  {
    id: 1,
    name: "Luxury Resort & Spa",
    location: "Maldives",
    rating: 4.8,
    price: 299,
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&h=600"
  },
  {
    id: 2,
    name: "Mountain View Lodge",
    location: "Switzerland",
    rating: 4.6,
    price: 199,
    amenities: ["Parking", "Restaurant", "Bar", "Gym"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=600"
  },
  {
    id: 3,
    name: "Urban Boutique Hotel",
    location: "New York",
    rating: 4.5,
    price: 249,
    amenities: ["Free WiFi", "Bar", "Room Service", "Gym"],
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=600"
  },
  {
    id: 4,
    name: "Seaside Resort",
    location: "Bali",
    rating: 4.7,
    price: 279,
    amenities: ["Beach Access", "Pool", "Spa", "Restaurant"],
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&h=600"
  },
  {
    id: 5,
    name: "Historic Palace Hotel",
    location: "Venice",
    rating: 4.7,
    price: 389,
    amenities: ["Free WiFi", "Restaurant", "Bar", "Room Service"],
    image: "https://images.unsplash.com/photo-1549294413-26f195471c9b?q=80&w=800&h=600"
  },
  {
    id: 6,
    name: "Desert Oasis Resort",
    location: "Dubai",
    rating: 4.8,
    price: 459,
    amenities: ["Pool", "Spa", "Restaurant", "Gym"],
    image: "https://images.unsplash.com/photo-1512958789358-4dac0f880fb9?q=80&w=800&h=600"
  },
  {
    id: 7,
    name: "Sakura Garden Hotel",
    location: "Kyoto",
    rating: 4.6,
    price: 289,
    amenities: ["Free WiFi", "Garden", "Restaurant", "Spa"],
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=800&h=600"
  },
  {
    id: 8,
    name: "Nordic Fjord Resort",
    location: "Norway",
    rating: 4.7,
    price: 349,
    amenities: ["Free WiFi", "Restaurant", "Bar", "Sauna"],
    image: "https://images.unsplash.com/photo-1610530531783-56a4e92a3305?q=80&w=800&h=600"
  },
  {
    id: 9,
    name: "Santorini Sunset Hotel",
    location: "Greece",
    rating: 4.9,
    price: 419,
    amenities: ["Pool", "Restaurant", "Bar", "Room Service"],
    image: "https://images.unsplash.com/photo-1570213489059-0aac6626cade?q=80&w=800&h=600"
  },
  {
    id: 10,
    name: "Amazon Rainforest Lodge",
    location: "Brazil",
    rating: 4.5,
    price: 259,
    amenities: ["Free WiFi", "Restaurant", "Tours", "Nature Activities"],
    image: "https://images.unsplash.com/photo-1595551032081-2a1b469f1a1f?q=80&w=800&h=600"
  }
]

const amenityIcons = {
  "Free WiFi": <Wifi className="h-4 w-4" />,
  "Parking": <Car className="h-4 w-4" />,
  "Restaurant": <Utensils className="h-4 w-4" />,
  "Spa": <Bath className="h-4 w-4" />,
  "Pool": <Pool className="h-4 w-4" />,
  "Gym": <Dumbbell className="h-4 w-4" />,
  "Room Service": <Coffee className="h-4 w-4" />,
  "Bar": <Coffee className="h-4 w-4" />,
  "Beach Access": <Pool className="h-4 w-4" />,
  "Garden": <Pool className="h-4 w-4" />,
  "Sauna": <Bath className="h-4 w-4" />,
  "Tours": <MapPin className="h-4 w-4" />,
  "Nature Activities": <MapPin className="h-4 w-4" />
}

export default function Hotels() {
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)

  const filteredHotels = useMemo(() => {
    return hotels.filter(hotel => {
      const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesPrice = hotel.price >= priceRange[0] && hotel.price <= priceRange[1]
      const matchesAmenities = selectedAmenities.length === 0 || 
                              selectedAmenities.every(amenity => hotel.amenities.includes(amenity))
      const matchesRating = hotel.rating >= minRating

      return matchesSearch && matchesPrice && matchesAmenities && matchesRating
    })
  }, [searchTerm, priceRange, selectedAmenities, minRating])

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-2">Our Hotels</h1>
          <p className="text-muted-foreground mb-8">Discover your perfect stay from our curated collection</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Search Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Card className="p-4">
              <div className="space-y-6">
                {/* Search Input */}
                <div>
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Search hotels or locations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <Label>Price Range ($ per night)</Label>
                  <div className="pt-4">
                    <Slider
                      value={priceRange}
                      min={0}
                      max={500}
                      step={10}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Minimum Rating */}
                <div>
                  <Label>Minimum Rating</Label>
                  <div className="pt-4">
                    <Slider
                      value={[minRating]}
                      min={0}
                      max={5}
                      step={0.5}
                      onValueChange={([value]) => setMinRating(value)}
                    />
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>{minRating.toFixed(1)}+</span>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <Label className="mb-2 block">Amenities</Label>
                  <div className="space-y-2">
                    {Object.keys(amenityIcons).map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Checkbox
                          id={amenity}
                          checked={selectedAmenities.includes(amenity)}
                          onCheckedChange={(checked) => {
                            setSelectedAmenities(
                              checked
                                ? [...selectedAmenities, amenity]
                                : selectedAmenities.filter(a => a !== amenity)
                            )
                          }}
                        />
                        <label
                          htmlFor={amenity}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Hotel Listings */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredHotels.length > 0 ? (
                filteredHotels.map((hotel, index) => (
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
                        <div className="flex items-center gap-1 mb-4">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{hotel.rating}</span>
                        </div>
                        <div className="flex gap-2 mb-4">
                          {hotel.amenities.map((amenity) => (
                            amenityIcons[amenity as keyof typeof amenityIcons] && (
                              <div key={amenity} className="text-muted-foreground">
                                {amenityIcons[amenity as keyof typeof amenityIcons]}
                              </div>
                            )
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold">${hotel.price}</span>
                            <span className="text-muted-foreground">/night</span>
                          </div>
                          <Button>Book Now</Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-12"
                >
                  <p className="text-muted-foreground">No hotels found matching your criteria.</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}