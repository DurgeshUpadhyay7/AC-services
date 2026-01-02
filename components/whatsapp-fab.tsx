import { MessageSquare } from "lucide-react"

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/917893002759?text=Hello%20Cooling%20Service%20System,%20I%20need%20AC%20service."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center gap-2"
      aria-label="Contact on WhatsApp"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-medium">
        Chat with us
      </span>
      <MessageSquare className="h-6 w-6" />
    </a>
  )
}
