function statusFor(sectionId, cardCount, progress) {
  const p = progress.sections[sectionId]
  if (!p || p.seen === 0) return { label: 'pendiente', cls: 'text-ink/40' }
  const pct = Math.round((p.seen / cardCount) * 100)
  if (pct >= 100) return { label: 'APTO', cls: 'text-stamp font-bold' }
  return { label: `${pct}%`, cls: 'text-ink/70' }
}

export default function LogTable({ title, prueba, sections, cards, progress, onOpenSection }) {
  return (
    <div className="mb-14">
      <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-0.5 before:bg-qsl">
        {title}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white/30 text-sm">
          <thead>
            <tr>
              <th className="font-mono text-[10px] uppercase tracking-wide text-ink/70 text-left border-b-2 border-ink px-3 py-2">Entrada</th>
              <th className="font-mono text-[10px] uppercase tracking-wide text-ink/70 text-left border-b-2 border-ink px-3 py-2">Tema</th>
              <th className="font-mono text-[10px] uppercase tracking-wide text-ink/70 text-left border-b-2 border-ink px-3 py-2">Frecuencia</th>
              <th className="font-mono text-[10px] uppercase tracking-wide text-ink/70 text-left border-b-2 border-ink px-3 py-2">Ítems</th>
              <th className="font-mono text-[10px] uppercase tracking-wide text-ink/70 text-left border-b-2 border-ink px-3 py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((s, i) => {
              const count = cards.filter(c => c.section === s.id).length
              const st = statusFor(s.id, count, progress)
              return (
                <tr
                  key={s.id}
                  onClick={() => onOpenSection(prueba, s.id)}
                  className="cursor-pointer hover:bg-qsl/5"
                >
                  <td className="font-mono border-b border-line px-3 py-3">{String(i + 1).padStart(2, '0')}</td>
                  <td className="border-b border-line px-3 py-3">{s.name}</td>
                  <td className="font-mono border-b border-line px-3 py-3 text-ink/70">{s.freq}</td>
                  <td className="font-mono border-b border-line px-3 py-3 text-ink/70">{count}</td>
                  <td className={`font-mono border-b border-line px-3 py-3 ${st.cls}`}>{st.label}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
