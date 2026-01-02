import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold uppercase tracking-tight text-slate-900">Get In Touch</h1>
                <p className="text-muted-foreground text-lg">
                  Have a question or need to book a service? Contact us using the details below or send us a message.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-14 w-14 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                    <MapPin className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Visit Us</h3>
                    <p className="text-slate-600">HM Complex, 3-9-14, West Marredpally, Secunderabad – 500026</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-14 w-14 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                    <Phone className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Call Anytime</h3>
                    <p className="text-slate-600">+91 7893002759</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-14 w-14 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <p className="text-slate-600">mdwaheedm6@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2757134375056!2d78.4975765!3d17.4464165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a244b7407a1%3A0xe54e2098d5750244!2sWest%20Marredpally%2C%20Secunderabad%2C%20Telangana%20500026!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <Input placeholder="Your name" className="bg-slate-50 border-slate-200 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <Input placeholder="+91 00000 00000" className="bg-slate-50 border-slate-200 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Service Type</label>
                  <Input placeholder="e.g. AC Repair" className="bg-slate-50 border-slate-200 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Your Message</label>
                  <Textarea placeholder="How can we help you?" className="bg-slate-50 border-slate-200 min-h-[120px]" />
                </div>
                <Button className="w-full h-14 text-lg font-bold shadow-lg">Send Message</Button>
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-100"></span>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-slate-400">Or</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full h-14 text-lg font-bold border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors bg-transparent"
                  asChild
                >
                  <a href="https://wa.me/917893002759">
                    <MessageSquare className="mr-2 h-5 w-5" /> Chat on WhatsApp
                  </a>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
