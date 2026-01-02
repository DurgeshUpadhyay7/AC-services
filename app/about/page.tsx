"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { ShieldCheck, Award, ThumbsUp } from "lucide-react"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative h-[45vh] flex items-center overflow-hidden">
          <Image
            src="/3.jpg"
            alt="About Cooling Service System"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative container mx-auto px-4 text-white">
            <div className="max-w-3xl space-y-4 animate-in fade-in slide-in-from-left-8 duration-1000">
              <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
                About Us
              </h1>
              <p className="text-lg md:text-xl text-slate-200">
                Trusted cooling experts delivering reliable AC solutions
                across Secunderabad.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT CONTENT */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-in fade-in duration-1000">
                <Image
                  src="/professional-technician-team-working-on-hvac-unit.jpg"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                    Dedicated Cooling Experts in Secunderabad
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Cooling Service System, led by Waheed, has been the trusted
                    name for air conditioning solutions for years. We pride
                    ourselves on delivering high-quality, reliable, and
                    affordable services to our local community.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Who We Are</h3>
                      <p className="text-muted-foreground">
                        A team of certified technicians dedicated to keeping
                        your home and business cool all year round.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Our Experience</h3>
                      <p className="text-muted-foreground">
                        Years of hands-on experience handling everything from
                        routine servicing to large commercial installations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <ThumbsUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Why Choose Us</h3>
                      <p className="text-muted-foreground">
                        Transparent pricing, quick response, and quality
                        workmanship make us the preferred choice.
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
