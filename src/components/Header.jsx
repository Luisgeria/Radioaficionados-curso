export default function Header({ view, setView }) {
  const tabs = [
    { id: 'inicio', label: 'Bitácora' },
    { id: 'icao', label: 'Código ICAO' },
    { id: 'test', label: 'Test' },
    { id: 'progreso', label: 'Mi progreso' },
  ]
  return (
    <header className="flex justify-between items-baseline mb-8 border-b-2 border-ink pb-3">
      <button onClick={() => setView('inicio')} className="font-display font-extrabold text-xl md:text-2xl">
        Bitácora<span className="font-mono text-qsl ml-1 text-base md:text-lg">/HAREC</span>
      </button>
      <nav className="flex gap-1 md:gap-6">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setView(t.id)}
            className={`font-mono text-[11px] md:text-sm px-1.5 md:px-0 pb-1 tracking-wide ${
              view === t.id ? 'border-b-2 border-qsl text-ink' : 'text-ink/60 hover:text-ink'
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
