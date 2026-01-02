import Link from "next/link"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">Cooling Service System</h3>
          <p className="text-sm leading-relaxed">
            Your local experts for reliable AC repair, installation, and maintenance in Secunderabad. Professional
            service you can trust.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-primary transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>HM Complex, 3-9-14, West Marredpally, Secunderabad – 500026</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>+91 7893002759</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>mdwaheedm6@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-white mb-4">Emergency Service</h4>
          <p className="text-sm italic">Need urgent repair? Contact us now for fast response times.</p>
          <a
            href="https://wa.me/917893002759"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
        © 2026 Cooling Service System. All Rights Reserved. Owner: Waheed.
      </div>
    </footer>
  )
}
