"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Percent } from "lucide-react"
import Image from "next/image"

const deals = [
  {
    id: 1,
    title: "Weekend Getaway Special",
    discount: 25,
    hotel: "Luxury Resort & Spa",
    location: "Maldives",
    validUntil: "2024-04-30",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&h=600"
  },
  {
    id: 2,
    title: "Early Bird Summer Booking",
    discount: 30,
    hotel: "Mountain View Lodge",
    location: "Switzerland",
    validUntil: "2024-05-31",
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=800&h=600"
  },
  {
    id: 3,
    title: "Business Travel Package",
    discount: 20,
    hotel: "Urban Boutique Hotel",
    location: "New York",
    validUntil: "2024-04-15",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&h=600"
  }
]

export default function Deals() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-2">Hot Deals</h1>
          <p className="text-muted-foreground mb-8">Exclusive offers on premium stays</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-red-500 hover:bg-red-600">
                      <Percent className="h-3 w-3 mr-1" />
                      {deal.discount}% OFF
                    </Badge>
                  </div>
                  <div className="relative h-48">
                    <Image
                      src={deal.image}
                      alt={deal.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{deal.title}</h3>
                  <p className="text-muted-foreground mb-2">{deal.hotel} - {deal.location}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    Valid until {new Date(deal.validUntil).toLocaleDateString()}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}