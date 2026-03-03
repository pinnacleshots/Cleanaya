export default function Logo({ className = '', dark = false }) {
  const cleanColor = dark ? 'text-slate-300' : 'text-[#4a5763]'
  const ayaColor = dark ? 'text-[#22bed9]' : 'text-[#22bed9]'

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        {/* Bubbles - evoke water/cleaning, positioned above AYA */}
        <span className="absolute -top-1.5 right-6 w-1.5 h-1.5 rounded-full bg-[#22bed9]" aria-hidden />
        <span className="absolute -top-0.5 right-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#22bed9]" aria-hidden />
        <span className={`font-display font-bold text-2xl tracking-tight ${cleanColor}`}>CLEAN</span>
        <span className={`font-display font-bold text-2xl tracking-tight ${ayaColor}`}>AYA</span>
      </div>
    </div>
  )
}
