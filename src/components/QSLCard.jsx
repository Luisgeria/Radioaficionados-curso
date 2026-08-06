import { useState } from 'react'

export default function QSLCard({ card, index, sectionName, onSeen }) {
  const [flipped, setFlipped] = useState(false)

  const reveal = () => {
    if (!flipped) onSeen?.()
    setFlipped(true)
  }

  return (
    <div className="bg-paper2 border-2 border-ink rounded-sm p-5 relative flex flex-col min-h-[190px]">
      <span className="absolute top-3 right-4 font-display font-extrabold text-[11px] text-qsl border border-qsl px-1.5 py-0.5 -rotate-3 select-none">
        QSL
      </span>
      <h3 className="font-mono text-[11px] text-qsl tracking-wide mb-2.5 uppercase">
        {sectionName} · Ítem {String(index + 1).padStart(2, '0')}
      </h3>
      <p className="font-medium leading-snug mb-3 pr-10">{card.p}</p>

      {flipped ? (
        <p className="font-mono text-[13px] leading-relaxed text-ink2 mt-auto pt-3 border-t border-dashed border-line">
          {card.r}
        </p>
      ) : (
        <button
          onClick={reveal}
          className="mt-auto font-mono text-[11px] text-qsl border border-qsl/60 rounded-sm px-3 py-1.5 self-start hover:bg-qsl hover:text-paper2 transition-colors"
        >
          Ver respuesta →
        </button>
      )}
    </div>
  )
}
