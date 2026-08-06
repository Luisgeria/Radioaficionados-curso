import { useState, useMemo } from 'react'
import { buildQuizFromCards } from '../data/quizEngine.js'
import { examOficial } from '../data/examOficial.js'

const LETTERS = ['A', 'B', 'C', 'D']

export default function TestView({ allCards, initialSection, sectionLookup, onFinish }) {
  const [mode, setMode] = useState(initialSection ? 'practica' : null)
  const [prueba, setPrueba] = useState(1)
  const [questions, setQuestions] = useState(null)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const startPractica = (sectionId) => {
    const qs = buildQuizFromCards(allCards, sectionId ? 12 : 20, sectionId)
    setQuestions(qs)
    setCurrent(0)
    setAnswers([])
    setSelected(null)
    setShowResult(false)
    setMode('practica')
  }

  const startOficial = () => {
    const qs = [...examOficial].map(x => ({
      q: x.q, opts: x.opts, correct: x.correct, section: `Pregunta oficial ${x.n}`,
    }))
    setQuestions(qs)
    setCurrent(0)
    setAnswers([])
    setSelected(null)
    setShowResult(false)
    setMode('oficial')
  }

  useMemo(() => {
    if (initialSection && !questions) startPractica(initialSection)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialSection])

  const choose = (idx) => {
    if (selected !== null) return
    setSelected(idx)
  }

  const next = () => {
    const isCorrect = selected === questions[current].correct
    const newAnswers = [...answers, isCorrect]
    setAnswers(newAnswers)
    setSelected(null)
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      setShowResult(true)
      const correctCount = newAnswers.filter(Boolean).length
      onFinish?.({
        date: new Date().toISOString(),
        mode,
        total: questions.length,
        correct: correctCount,
        apto: correctCount >= Math.ceil(questions.length * 0.5),
      })
    }
  }

  // --- selección de modo ---
  if (!mode) {
    return (
      <div className="max-w-2xl">
        <h1 className="font-display text-2xl font-extrabold mb-6">Modo test</h1>
        <div className="grid gap-5">
          <div className="bg-paper2 border-2 border-ink rounded-sm p-6">
            <h2 className="font-mono text-xs text-qsl uppercase mb-2">Práctica libre</h2>
            <p className="text-sm mb-4">20 preguntas generadas a partir de todo el temario fusionado, con distractores extraídos de otras respuestas reales.</p>
            <button onClick={() => startPractica(null)} className="font-mono text-xs border-2 border-ink px-4 py-2 hover:bg-ink hover:text-paper2 transition-colors">
              Empezar práctica →
            </button>
          </div>
          <div className="bg-paper2 border-2 border-ink rounded-sm p-6">
            <h2 className="font-mono text-xs text-qsl uppercase mb-2">Simulacro oficial (35 preguntas)</h2>
            <p className="text-sm mb-4">Las 35 preguntas de examen tal y como aparecen en el libro, con la clave de respuestas real del solucionario.</p>
            <button onClick={startOficial} className="font-mono text-xs border-2 border-ink px-4 py-2 hover:bg-ink hover:text-paper2 transition-colors">
              Empezar simulacro →
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (!questions || questions.length === 0) {
    return <p className="font-mono text-sm">No hay suficientes preguntas en este tema todavía.</p>
  }

  // --- resultado final ---
  if (showResult) {
    const correctCount = answers.filter(Boolean).length
    const apto = correctCount >= Math.ceil(questions.length * 0.5)
    return (
      <div className="max-w-xl">
        <div className="bg-paper2 border-2 border-ink rounded-sm p-8 text-center">
          <h2 className="font-display text-xl font-bold mb-3">Resultado</h2>
          <p className="font-mono text-3xl mb-2">{correctCount}/{questions.length}</p>
          <div
            className={`inline-block border-[3px] rounded-sm px-5 py-2 font-mono font-bold tracking-widest -rotate-2 mt-4 ${
              apto ? 'border-stamp text-stamp' : 'border-qsl text-qsl'
            }`}
            style={{ borderStyle: 'double' }}
          >
            {apto ? 'APTO' : 'NO APTO'}
          </div>
          <div className="mt-8">
            <button onClick={() => setMode(null)} className="font-mono text-xs border-2 border-ink px-4 py-2 hover:bg-ink hover:text-paper2 transition-colors">
              Volver a elegir modo
            </button>
          </div>
        </div>
      </div>
    )
  }

  // --- hoja de examen ---
  const q = questions[current]
  return (
    <div className="max-w-2xl">
      <div className="bg-paper2 border-2 border-ink rounded-sm p-7">
        <div className="flex justify-between font-mono text-[11px] mb-5 pb-3 border-b border-ink">
          <span>{mode === 'oficial' ? 'SIMULACRO OFICIAL' : 'PRÁCTICA'} {q.section && `· ${q.section}`}</span>
          <span>PREGUNTA {String(current + 1).padStart(2, '0')}/{questions.length}</span>
        </div>

        <p className="mb-5 leading-snug">{q.q}</p>

        <div className="flex flex-col gap-2">
          {q.opts.map((opt, i) => {
            const isSelected = selected === i
            const isCorrectOpt = i === q.correct
            let cls = 'border-line hover:border-ink'
            if (selected !== null) {
              if (isCorrectOpt) cls = 'border-stamp bg-stamp/10 text-stamp'
              else if (isSelected) cls = 'border-qsl bg-qsl/10 text-qsl'
              else cls = 'border-line opacity-60'
            }
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                className={`flex gap-3 items-start text-left text-sm px-3.5 py-2.5 border rounded-sm transition-colors ${cls}`}
              >
                <span className="font-mono font-bold shrink-0">{LETTERS[i]}</span>
                <span>{opt}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={next}
            disabled={selected === null}
            className="font-mono text-xs border-2 border-ink px-4 py-2 disabled:opacity-30 hover:bg-ink hover:text-paper2 transition-colors"
          >
            {current + 1 < questions.length ? 'Siguiente →' : 'Ver resultado →'}
          </button>
        </div>
      </div>
    </div>
  )
}
