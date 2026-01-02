import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import Image from "next/image"
import { ShieldCheck, Award, ThumbsUp } from "lucide-react"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-in fade-in duration-1000">
                <Image src="/professional-technician-team-working-on-hvac-unit.jpg" alt="Our Team" fill className="object-cover" />
              </div>
              <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                    Dedicated Cooling Experts in Secunderabad
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Cooling Service System, led by Waheed, has been the trusted name for air conditioning solutions for
                    years. We pride ourselves on delivering high-quality, reliable, and affordable services to our local
                    community.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Who We Are</h3>
                      <p className="text-muted-foreground">
                        A team of certified technicians dedicated to keeping your home and business cool and comfortable
                        all year round.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Our Experience</h3>
                      <p className="text-muted-foreground">
                        With years of hands-on experience in the industry, we handle everything from basic servicing to
                        complex multi-unit commercial installations.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <ThumbsUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Why Choose Us</h3>
                      <p className="text-muted-foreground">
                        Transparent pricing, fast response times, and a commitment to quality parts and workmanship set
                        us apart from the rest.
                      </p>
                    </div>
                  </div>
                </div>
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
