import { useState } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import IcaoView from './components/IcaoView.jsx'
import SectionView from './components/SectionView.jsx'
import TestView from './components/TestView.jsx'
import ProgressView from './components/ProgressView.jsx'
import { sectionsP1, cardsP1 } from './data/temarioP1.js'
import { sectionsP2, cardsP2 } from './data/temarioP2.js'
import { useProgress } from './hooks/useProgress.js'

const allCards = [...cardsP1, ...cardsP2]
const allSections = [...sectionsP1, ...sectionsP2]

export default function App() {
  const [view, setView] = useState('inicio')
  const [openSection, setOpenSection] = useState(null) // { prueba, id }
  const [practiceSection, setPracticeSection] = useState(null)
  const { data: progress, markSectionRead, recordExam, resetAll } = useProgress()

  const handleOpenSection = (prueba, id) => {
    setOpenSection({ prueba, id })
    setView('seccion')
  }

  const currentSection = openSection ? allSections.find(s => s.id === openSection.id) : null
  const currentCards = openSection?.prueba === 2 ? cardsP2 : cardsP1

  return (
    <div className="max-w-5xl mx-auto px-5 md:px-7 py-8 md:py-10 min-h-screen">
      <Header view={view} setView={(v) => { setView(v); if (v !== 'test') setPracticeSection(null) }} />

      {view === 'inicio' && (
        <Home
          sectionsP1={sectionsP1} cardsP1={cardsP1}
          sectionsP2={sectionsP2} cardsP2={cardsP2}
          progress={progress}
          onOpenSection={handleOpenSection}
          setView={setView}
        />
      )}

      {view === 'icao' && <IcaoView />}

      {view === 'seccion' && currentSection && (
        <SectionView
          section={currentSection}
          cards={currentCards}
          progress={progress}
          onSeen={markSectionRead}
          onBack={() => setView('inicio')}
          onPracticeSection={(id) => { setPracticeSection(id); setView('test') }}
        />
      )}

      {view === 'test' && (
        <TestView
          allCards={allCards}
          initialSection={practiceSection}
          onFinish={recordExam}
        />
      )}

      {view === 'progreso' && (
        <ProgressView
          progress={progress}
          sectionsAll={allSections}
          cardsAll={allCards}
          onReset={resetAll}
        />
      )}

      <footer className="mt-20 pt-6 border-t border-line font-mono text-[11px] text-ink/50">
        Contenido de estudio elaborado a partir de material propio del usuario para preparar el examen
        HAREC (radioaficionado). No sustituye la normativa oficial ni los libros de examen originales.
      </footer>
    </div>
  )
}
