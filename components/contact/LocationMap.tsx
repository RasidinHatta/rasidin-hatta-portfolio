'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink } from "lucide-react"

const LocationMap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Card className="border-0 shadow-xl overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Location
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <motion.div
            className="relative h-64 bg-gradient-to-br from-primary/10 to-primary/5 flex flex-col items-center justify-center cursor-pointer overflow-hidden group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="relative z-10 text-center space-y-4">
              <p className="text-muted-foreground text-sm">📍 Map Embed</p>
              <p className="text-foreground font-medium">Click to open in Google Maps</p>
              <Button
                asChild
                className="gap-2 transition-all duration-200 hover:scale-105"
              >
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <MapPin className="w-4 h-4" />
                  Open Map
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default LocationMap
