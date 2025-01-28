"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Building2, Users2, Clock, Award } from "lucide-react"

const stats = [
  {
    icon: <Building2 className="h-6 w-6" />,
    value: "1000+",
    label: "Hotels Worldwide"
  },
  {
    icon: <Users2 className="h-6 w-6" />,
    value: "500K+",
    label: "Happy Customers"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    value: "24/7",
    label: "Customer Support"
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: "4.8/5",
    label: "Average Rating"
  }
]

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">About HotelHub</h1>
          <p className="text-muted-foreground text-lg">
            HotelHub is your trusted partner in finding the perfect accommodation worldwide. 
            We work with thousands of hotels to bring you the best deals and experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose dark:prose-invert max-w-none"
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground text-lg mb-8">
            We're committed to making travel accommodation accessible, comfortable, and enjoyable for everyone. 
            Our platform connects travelers with the best hotels, ensuring quality stays at competitive prices.
          </p>

          <h2 className="text-3xl font-bold mb-4">Why Choose HotelHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
              <p className="text-muted-foreground">
                We offer competitive rates and match any lower price you find elsewhere.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Verified Reviews</h3>
              <p className="text-muted-foreground">
                Real reviews from real guests to help you make informed decisions.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our customer service team is always available to assist you.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
              <p className="text-muted-foreground">
                Your payments and personal information are always protected.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </main>
  )
}