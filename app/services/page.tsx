import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "AC Repair",
    desc: "Fast and reliable repair services for all brands. We fix cooling issues, gas leaks, noises, and electrical faults.",
    img: "ac+repair+technician+fixing+unit",
  },
  {
    title: "AC Installation",
    desc: "Professional installation for Split and Window ACs with proper piping and electrical setup for maximum efficiency.",
    img: "professional+ac+installation+service",
  },
  {
    title: "Gas Refilling",
    desc: "Quality refrigerant refilling for all AC types. We ensure proper pressure and leak checks before filling.",
    img: "ac+gas+charging+refrigerant",
  },
  {
    title: "Annual Maintenance (AMC)",
    desc: "Hassle-free yearly maintenance packages for homes and offices to prevent sudden breakdowns.",
    img: "hvac+maintenance+checklist",
  },
  {
    title: "Commercial Cooling",
    desc: "Specialized service for large-scale VRV/VRF systems and ductable units for offices and showrooms.",
    img: "commercial+rooftop+ac+units",
  },
  {
    title: "AC Uninstallation",
    desc: "Safe and clean removal of your AC unit during relocation with proper gas pumping.",
    img: "technician+removing+ac+outdoor+unit",
  },
]

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl font-bold uppercase tracking-tight">Our Professional Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete cooling solutions delivered with expertise and care. Choose the service you need below.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card
                key={i}
                className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={`/.jpg?height=600&width=800&query=${service.img}`}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  <Button className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white border-none" asChild>
                    <a
                      href={`https://wa.me/917893002759?text=Hello,%20I%20want%20to%20book%20${service.title}%20service.`}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" /> Book on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
