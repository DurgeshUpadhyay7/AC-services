import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Zap, Clock, Snowflake, PenTool as Tool, Settings, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <Image
            src="/professional-ac-technician-servicing-indoor-unit-i.jpg"
            alt="AC Technician at work"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div className="container relative mx-auto px-4 text-white">
            <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                Reliable AC & Cooling Services in <span className="text-primary">Secunderabad</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200">
                AC Repair • Installation • Maintenance • Cooling Solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="h-14 px-8 text-lg font-bold" asChild>
                  <a href="tel:+917893002759">Call Now</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg font-bold bg-white/10 backdrop-blur hover:bg-white/20 border-white/30"
                  asChild
                >
                  <a href="https://wa.me/917893002759">WhatsApp Us</a>
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/20">
                {[
                  { icon: Tool, text: "Exp. Technicians" },
                  { icon: ShieldCheck, text: "Affordable Pricing" },
                  { icon: Zap, text: "Fast Service" },
                  { icon: Briefcase, text: "Residential & Comm." },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium">
                    <item.icon className="h-5 w-5 text-primary" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">Our Expert Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide complete cooling solutions for your home and office with guaranteed satisfaction.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "AC Repair",
                  desc: "Expert diagnosis and repair for all AC models.",
                  icon: Settings,
                  img: "technician+repairing+ac+components",
                },
                {
                  title: "Installation",
                  desc: "Professional split and window AC installation services.",
                  icon: Snowflake,
                  img: "ac+installation+service",
                },
                {
                  title: "Maintenance",
                  desc: "Regular AMC services to keep your AC running efficiently.",
                  icon: Clock,
                  img: "periodic+ac+maintenance",
                },
              ].map((service, i) => (
                <Card
                  key={i}
                  className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`/.jpg?height=400&width=600&query=${service.img}`}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <service.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                    <Link href="/services" className="text-primary font-semibold text-sm hover:underline">
                      View Details →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Emergency Repair Needed?</h2>
              <p className="text-primary-foreground/90">We offer priority service for urgent cooling failures.</p>
            </div>
            <Button size="lg" variant="secondary" className="font-bold h-14 px-10 shadow-lg" asChild>
              <a href="tel:+917893002759">Call Now: +91 7893002759</a>
            </Button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 uppercase">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Rahul S.",
                  text: "Waheed and his team are highly professional. They fixed my AC in no time and the pricing was very fair.",
                },
                {
                  name: "Suresh Kumar",
                  text: "Best AC service in Secunderabad. Very punctual and they actually clean up after the work is done.",
                },
                {
                  name: "Priya M.",
                  text: "The installation was handled very cleanly. They explained everything clearly. Highly recommended!",
                },
              ].map((t, i) => (
                <Card key={i} className="bg-slate-50 border-none">
                  <CardContent className="pt-8 p-6 space-y-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Snowflake key={star} className="h-4 w-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="italic text-slate-700">"{t.text}"</p>
                    <p className="font-bold text-slate-900">— {t.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
