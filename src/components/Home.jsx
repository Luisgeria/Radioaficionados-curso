import LogTable from './LogTable.jsx'

export default function Home({ sectionsP1, cardsP1, sectionsP2, cardsP2, progress, onOpenSection, setView }) {
  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold mb-2">Cuaderno de operador — camino al HAREC</h1>
      <p className="font-mono text-sm text-ink/70 mb-10 max-w-2xl">
        Un registro, tema a tema, hasta reunir las dos pruebas del examen: Electricidad y
        Radioelectricidad, y Reglamentación. Cada entrada es un bloque de tarjetas QSL para repasar;
        cuando quieras ponerte a prueba, pasa al modo test.
      </p>

      <div className="flex gap-4 mb-14">
        <button onClick={() => setView('test')} className="font-mono text-xs border-2 border-ink px-5 py-2.5 hover:bg-ink hover:text-paper2 transition-colors">
          Ir al modo test →
        </button>
        <button onClick={() => setView('progreso')} className="font-mono text-xs border border-ink/40 px-5 py-2.5 hover:border-ink transition-colors">
          Ver mi progreso
        </button>
      </div>

      <LogTable title="Prueba 1 · Electricidad y Radioelectricidad" prueba={1} sections={sectionsP1} cards={cardsP1} progress={progress} onOpenSection={onOpenSection} />
      <LogTable title="Prueba 2 · Reglamentación" prueba={2} sections={sectionsP2} cards={cardsP2} progress={progress} onOpenSection={onOpenSection} />
    </div>
  )
}
