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
    const others = shuffle(pool.filter(c => c.r !== card.r)).slice(0, 3).map(c => c.r)
    const opts = shuffle([card.r, ...others])
    return {
      q: card.p,
      opts,
      correct: opts.indexOf(card.r),
      section: card.section,
    }
  })
}
