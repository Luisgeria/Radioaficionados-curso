// Convierte tarjetas {p, r} en preguntas tipo test, usando como distractores
// otras respuestas de la misma prueba (mezcladas y recortadas para que no
// resulte obvio cuál es la correcta por longitud).

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function buildQuizFromCards(cards, count, sectionFilter = null) {
  const pool = sectionFilter ? cards.filter(c => c.section === sectionFilter) : cards
  if (pool.length < 4) return []
  const picked = shuffle(pool).slice(0, Math.min(count, pool.length))

  return picked.map(card => {
    // Distractores: primero de la MISMA sección (temas afines, opciones creíbles);
    // si esa sección no tiene suficientes, se completa con el resto de la prueba.
    const sameSection = shuffle(cards.filter(c => c.section === card.section && c.r !== card.r))
    const restPool = shuffle(cards.filter(c => c.section !== card.section && c.r !== card.r))
    const others = [...sameSection, ...restPool].slice(0, 3).map(c => c.r)
    const opts = shuffle([card.r, ...others])
    return {
      q: card.p,
      opts,
      correct: opts.indexOf(card.r),
      section: card.section,
    }
  })
}

function shuffleOfficial(item) {
  const correctText = item.opts[item.correct]
  const opts = shuffle(item.opts)
  return {
    q: item.q,
    opts,
    correct: opts.indexOf(correctText),
    section: `Pregunta oficial ${item.n}`,
  }
}

// Genera un simulacro de 30+30 preguntas (estructura real del examen), mezclando
// las preguntas oficiales del libro con preguntas generadas del temario, en un
// orden y con unas opciones distintas cada vez que se llama.
export function buildSimulacro(examOficial, cardsP1, cardsP2) {
  const officialP1 = examOficial.filter(x => x.prueba === 1).map(shuffleOfficial)
  const officialP2 = examOficial.filter(x => x.prueba === 2).map(shuffleOfficial)
  const genP1 = buildQuizFromCards(cardsP1, cardsP1.length)
  const genP2 = buildQuizFromCards(cardsP2, cardsP2.length)

  const poolP1 = shuffle([...officialP1, ...genP1]).slice(0, 30).map(q => ({ ...q, prueba: 1 }))
  const poolP2 = shuffle([...officialP2, ...genP2]).slice(0, 30).map(q => ({ ...q, prueba: 2 }))

  return [...poolP1, ...poolP2]
}
