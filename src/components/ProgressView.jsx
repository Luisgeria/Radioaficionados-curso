export default function ProgressView({ progress, sectionsAll, cardsAll, onReset }) {
  const totalSeen = Object.values(progress.sections).reduce((a, s) => a + s.seen, 0)
  const totalCards = cardsAll.length

  return (
    <div className="max-w-3xl">
      <h1 className="font-display text-2xl font-extrabold mb-6">Mi progreso</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-paper2 border-2 border-ink rounded-sm p-5">
          <div className="font-mono text-[11px] text-ink/60 mb-1">Tarjetas repasadas</div>
          <div className="font-display text-2xl font-bold">{totalSeen}/{totalCards}</div>
        </div>
        <div className="bg-paper2 border-2 border-ink rounded-sm p-5">
          <div className="font-mono text-[11px] text-ink/60 mb-1">Simulacros hechos</div>
          <div className="font-display text-2xl font-bold">{progress.exams.length}</div>
        </div>
        <div className="bg-paper2 border-2 border-ink rounded-sm p-5">
          <div className="font-mono text-[11px] text-ink/60 mb-1">Último resultado</div>
          <div className="font-display text-2xl font-bold">
            {progress.exams[0] ? `${progress.exams[0].correct}/${progress.exams[0].total}` : '—'}
          </div>
        </div>
      </div>

      <h2 className="font-display text-lg font-bold mb-3">Historial de tests</h2>
      {progress.exams.length === 0 ? (
        <p className="font-mono text-sm text-ink/60 mb-10">Todavía no has hecho ningún test.</p>
      ) : (
        <table className="w-full border-collapse bg-white/30 text-sm mb-10">
          <thead>
            <tr>
              <th className="font-mono text-[10px] uppercase text-ink/70 text-left border-b-2 border-ink px-3 py-2">Fecha</th>
              <th className="font-mono text-[10px] uppercase text-ink/70 text-left border-b-2 border-ink px-3 py-2">Modo</th>
              <th className="font-mono text-[10px] uppercase text-ink/70 text-left border-b-2 border-ink px-3 py-2">Resultado</th>
              <th className="font-mono text-[10px] uppercase text-ink/70 text-left border-b-2 border-ink px-3 py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {progress.exams.map((e, i) => (
              <tr key={i}>
                <td className="font-mono border-b border-line px-3 py-2.5">{new Date(e.date).toLocaleDateString('es-ES')}</td>
                <td className="font-mono border-b border-line px-3 py-2.5 capitalize">{e.mode}</td>
                <td className="font-mono border-b border-line px-3 py-2.5">{e.correct}/{e.total}</td>
                <td className={`font-mono border-b border-line px-3 py-2.5 font-bold ${e.apto ? 'text-stamp' : 'text-qsl'}`}>
                  {e.apto ? 'APTO' : 'NO APTO'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        onClick={() => { if (confirm('¿Borrar todo el progreso guardado en este navegador?')) onReset() }}
        className="font-mono text-xs text-qsl border border-qsl px-4 py-2 hover:bg-qsl hover:text-paper2 transition-colors"
      >
        Reiniciar progreso
      </button>
    </div>
  )
}
