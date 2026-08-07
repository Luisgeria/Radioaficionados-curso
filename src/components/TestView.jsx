import { useState, useMemo } from 'react'
import { buildQuizFromCards, buildSimulacro } from '../data/quizEngine.js'
import { examOficial } from '../data/examOficial.js'
import { cardsP1 } from '../data/temarioP1.js'
import { cardsP2 } from '../data/temarioP2.js'

const LETTERS = ['A', 'B', 'C', 'D']

export default function TestView({ allCards, initialSection, onFinish }) {
  const [mode, setMode] = useState(initialSection ? 'practica' : null)
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

  const startSimulacro = () => {
    const qs = buildSimulacro(examOficial, cardsP1, cardsP2)
    setQuestions(qs)
    setCurrent(0)
    setAnswers([])
    setSelected(null)
    setShowResult(false)
    setMode('simulacro')
  }

  useMemo(() => {
    if (initialSection && !questions) startPractica(initialSection)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialSection])

  const choose = (idx) => {
    if (selected !== null) return
    setSelected(idx)
  }

  const finishRun = (newAnswers) => {
    setShowResult(true)
    const correctCount = newAnswers.filter(Boolean).length

    if (mode === 'simulacro') {
      const p1Correct = newAnswers.slice(0, 30).filter(Boolean).length
      const p2Correct = newAnswers.slice(30, 60).filter(Boolean).length
      const aptoP1 = p1Correct >= 15
      const aptoP2 = p2Correct >= 15
      onFinish?.({
        date: new Date().toISOString(),
        mode,
        total: questions.length,
        correct: correctCount,
        apto: aptoP1 && aptoP2,
      })
    } else {
      onFinish?.({
        date: new Date().toISOString(),
        mode,
        total: questions.length,
        correct: correctCount,
        apto: correctCount >= Math.ceil(questions.length * 0.5),
      })
    }
  }

  const next = () => {
    const isCorrect = selected === questions[current].correct
    const newAnswers = [...answers, isCorrect]
    setAnswers(newAnswers)
    setSelected(null)
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      finishRun(newAnswers)
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
            <p className="text-sm mb-4">20 preguntas generadas a partir de todo el temario, con distractores extraídos de otras respuestas reales. Distintas cada vez.</p>
            <button onClick={() => startPractica(null)} className="font-mono text-xs border-2 border-ink px-4 py-2 hover:bg-ink hover:text-paper2 transition-colors">
              Empezar práctica →
            </button>
          </div>
          <div className="bg-paper2 border-2 border-ink rounded-sm p-6">
            <h2 className="font-mono text-xs text-qsl uppercase mb-2">Simulacro de examen (30 + 30)</h2>
            <p className="text-sm mb-4">
              Mezcla las 35 preguntas oficiales del libro con preguntas generadas del temario, en la
              estructura real del examen: 30 de Electricidad y 30 de Reglamentación, apto con ≥15
              aciertos en cada una. El orden, las preguntas elegidas y las opciones cambian en cada intento.
            </p>
            <button onClick={startSimulacro} className="font-mono text-xs border-2 border-ink px-4 py-2 hover:bg-ink hover:text-paper2 transition-colors">
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

    if (mode === 'simulacro') {
      const p1Correct = answers.slice(0, 30).filter(Boolean).length
      const p2Correct = answers.slice(30, 60).filter(Boolean).length
      const aptoP1 = p1Correct >= 15
      const aptoP2 = p2Correct >= 15
      const apto = aptoP1 && aptoP2
      return (
        <div className="max-w-xl">
          <div className="bg-paper2 border-2 border-ink rounded-sm p-8">
            <h2 className="font-display text-xl font-bold mb-5 text-center">Resultado del simulacro</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border border-line rounded-sm p-4 text-center">
                <div className="font-mono text-[11px] text-ink/60 mb-1">Prueba 1 · Electricidad</div>
                <div className="font-mono text-2xl mb-1">{p1Correct}/30</div>
                <div className={`font-mono text-xs font-bold ${aptoP1 ? 'text-stamp' : 'text-qsl'}`}>{aptoP1 ? 'APTO' : 'NO APTO'}</div>
              </div>
              <div className="border border-line rounded-sm p-4 text-center">
                <div className="font-mono text-[11px] text-ink/60 mb-1">Prueba 2 · Reglamentación</div>
                <div className="font-mono text-2xl mb-1">{p2Correct}/30</div>
                <div className={`font-mono text-xs font-bold ${aptoP2 ? 'text-stamp' : 'text-qsl'}`}>{aptoP2 ? 'APTO' : 'NO APTO'}</div>
              </div>
            </div>
            <div className="text-center">
              <div
                className={`inline-block border-[3px] rounded-sm px-5 py-2 font-mono font-bold tracking-widest -rotate-2 ${
                  apto ? 'border-stamp text-stamp' : 'border-qsl text-qsl'
                }`}
                style={{ borderStyle: 'double' }}
              >
                {apto ? 'CERTIFICADO HAREC · APTO' : 'NO APTO'}
              </div>
            </div>
            <div className="mt-8 text-center">
              <button onClick={() => setMode(null)} className="font-mono text-xs border-2 border-ink px-4 py-2 hover:bg-ink hover:text-paper2 transition-colors">
                Volver a elegir modo
              </button>
            </div>
          </div>
        </div>
      )
    }

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
  const label = mode === 'simulacro'
    ? `SIMULACRO · ${q.prueba === 1 ? 'PRUEBA 1' : 'PRUEBA 2'}`
    : `PRÁCTICA${q.section ? ` · ${q.section}` : ''}`

  return (
    <div className="max-w-2xl">
      <div className="bg-paper2 border-2 border-ink rounded-sm p-7">
        <div className="flex justify-between font-mono text-[11px] mb-5 pb-3 border-b border-ink">
          <span>{label}</span>
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
