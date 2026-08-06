import QSLCard from './QSLCard.jsx'

export default function SectionView({ section, cards, progress, onSeen, onBack, onPracticeSection }) {
  const sectionCards = cards.filter(c => c.section === section.id)
  return (
    <div>
      <button onClick={onBack} className="font-mono text-xs text-ink/60 hover:text-ink mb-6">
        ← Volver a la bitácora
      </button>

      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <div className="font-mono text-xs text-qsl mb-1">{section.freq}</div>
          <h1 className="font-display text-2xl font-extrabold">{section.name}</h1>
        </div>
        <button
          onClick={() => onPracticeSection(section.id)}
          className="font-mono text-xs border-2 border-ink px-4 py-2 hover:bg-ink hover:text-paper2 transition-colors"
        >
          Practicar este tema en modo test →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {sectionCards.map((c, i) => (
          <QSLCard
            key={i}
            card={c}
            index={i}
            sectionName={section.name}
            onSeen={() => onSeen(section.id, sectionCards.length)}
          />
        ))}
      </div>
    </div>
  )
}
