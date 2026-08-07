import { icaoLetters, icaoNumbers } from '../data/icaoAlphabet.js'

function Tile({ l, w }) {
  return (
    <div className="bg-paper2 border-2 border-ink rounded-sm px-3 py-2.5 flex items-center justify-between">
      <span className="font-display text-lg font-extrabold">{l}</span>
      <span className="font-mono text-xs text-ink/70 tracking-wide uppercase">{w}</span>
    </div>
  )
}

export default function IcaoView() {
  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold mb-2">Alfabeto fonético ICAO</h1>
      <p className="font-mono text-sm text-ink/70 mb-10 max-w-2xl">
        Referencia rápida para deletrear indicativos y palabras sin ambigüedad, sea cual
        sea el idioma del corresponsal. Es una de las preguntas casi seguras del examen.
      </p>

      <h2 className="font-mono text-[11px] uppercase tracking-widest text-ink/60 mb-3 border-b border-line pb-1">
        Letras
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 mb-10">
        {icaoLetters.map(item => <Tile key={item.l} {...item} />)}
      </div>

      <h2 className="font-mono text-[11px] uppercase tracking-widest text-ink/60 mb-3 border-b border-line pb-1">
        Números
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {icaoNumbers.map(item => <Tile key={item.l} {...item} />)}
      </div>
    </div>
  )
}
