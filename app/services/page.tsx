import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Shield, Clock, Users, CheckCircle, Wrench, Calendar, Phone, Star } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "AC Repair",
    desc: "Fast and reliable repair services for all brands. We fix cooling issues, gas leaks, noises, and electrical faults.",
    img: "/1.jpg",
  },
  {
    title: "AC Installation",
    desc: "Professional installation for Split and Window ACs with proper piping and electrical setup for maximum efficiency.",
    img: "/2.jpg",
  },
  {
    title: "Gas Refilling",
    desc: "Quality refrigerant refilling for all AC types. We ensure proper pressure and leak checks before filling.",
    img: "/3.jpg",
  },
  {
    title: "Annual Maintenance (AMC)",
    desc: "Hassle-free yearly maintenance packages for homes and offices to prevent sudden breakdowns.",
    img: "/4.jpg",
  },
  {
    title: "Commercial Cooling",
    desc: "Specialized service for large-scale VRV/VRF systems and ductable units for offices and showrooms.",
    img: "/5.jpg",
  },
  {
    title: "AC Uninstallation",
    desc: "Safe and clean removal of your AC unit during relocation with proper gas pumping.",
    img: "/6.jpg",
  },
]

const features = [
  {
    icon: Shield,
    title: "Guaranteed Service",
    desc: "90-day warranty on all repairs and installations",
  },
  {
    icon: Clock,
    title: "Quick Response",
    desc: "Same-day service available in most areas",
  },
  {
    icon: Users,
    title: "Expert Technicians",
    desc: "Certified professionals with 5+ years experience",
  },
  {
    icon: CheckCircle,
    title: "Genuine Parts",
    desc: "Only original/OEM parts used for repairs",
  },
]

const processSteps = [
  {
    icon: Phone,
    title: "Book Service",
    desc: "Call or WhatsApp to schedule appointment",
  },
  {
    icon: Calendar,
    title: "Slot Confirmation",
    desc: "Choose convenient time slot",
  },
  {
    icon: Wrench,
    title: "Expert Service",
    desc: "Trained technician performs service",
  },
  {
    icon: CheckCircle,
    title: "Quality Check",
    desc: "Thorough testing before delivery",
  },
]

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
<section className="relative py-20 overflow-hidden">
  {/* Background Image */}
  <Image
    src="/1.jpg"
    alt="AC Services Background"
    fill
    priority
    className="object-cover"
  />

  {/* Dark / light overlay for readability */}
  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

  {/* Content */}
  <div className="relative container mx-auto px-4">
    <div className="text-center mb-16 space-y-4">
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-gray-900">
        Our Professional Services
      </h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Complete cooling solutions delivered with expertise and care.
        Choose from our comprehensive range of AC services.
      </p>
    </div>
  </div>
</section>


        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                        {service.title}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                    <Button 
                      className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white border-none shadow-md hover:shadow-lg transition-shadow" 
                      asChild
                    >
                      <a
                        href={`https://wa.me/917893002759?text=${encodeURIComponent(
                          `Hello, I want to book ${service.title} service.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageSquare className="mr-2 h-4 w-4" /> Book Now on WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose CoolCare?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're committed to providing the best cooling solutions with unmatched quality
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Service Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Simple, transparent, and efficient process from booking to completion
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="text-center p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <step.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="mb-2">
                      <span className="inline-block w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 right-0 w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent">
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                        <div className="w-4 h-4 border-t-2 border-r-2 border-blue-400 transform rotate-45"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Experience Cool Comfort?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Get in touch with our expert team for a free consultation and quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
                  asChild
                >
                  <a
                    href="https://wa.me/917893002759"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 font-semibold px-8"
                  asChild
                >
                  <a href="tel:+917893002759">
                    <Phone className="mr-2 h-5 w-5" /> Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}