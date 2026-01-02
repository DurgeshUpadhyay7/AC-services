import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import Image from "next/image"

const images = [
  "ac+servicing+indoor+unit",
  "outdoor+unit+cleaning+power+wash",
  "technician+checking+gas+pressure",
  "split+ac+installation+on+wall",
  "large+commercial+hvac+system",
  "technician+tools+multimeter+ac",
  "cleaning+ac+filters",
  "new+ac+unboxing+installation",
  "technician+climbing+ladder+outdoor+unit",
]

export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold uppercase tracking-tight">Service Gallery</h1>
            <p className="text-muted-foreground mt-4">Real images from our service calls across Secunderabad.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer">
                <Image
                  src={`/.jpg?height=800&width=800&query=${img}`}
                  alt="Work gallery"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium border border-white/40 px-4 py-2 rounded-full">
                    View Details
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
