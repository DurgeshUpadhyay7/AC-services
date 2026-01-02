import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary tracking-tight uppercase">Cooling Service System</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/services" className="transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/gallery" className="transition-colors hover:text-primary">
            Gallery
          </Link>
          <Link href="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden lg:flex bg-transparent" asChild>
            <a href="tel:+917893002759">
              <Phone className="mr-2 h-4 w-4" /> +91 7893002759
            </a>
          </Button>
          <Button size="sm" className="bg-[#25D366] hover:bg-[#20ba5a] text-white border-none" asChild>
            <a
              href="https://wa.me/917893002759?text=Hello%20Cooling%20Service%20System,%20I%20need%20AC%20service."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
