# Bitácora — Curso de preparación al examen HAREC (Radioaficionado)

Proyecto React + Vite + Tailwind. Temario fusionado a partir de las dos fuentes
del usuario (libro del Radio Club Utiel + temario simplificado de URE), con modo
test (práctica generada + simulacro con las 35 preguntas oficiales del libro) y
progreso guardado en localStorage.

## Desarrollo local
```
npm install
npm run dev
```

## Compilar para producción
```
npm run build
```
Genera la carpeta `dist/` lista para subir a Vercel, GitHub Pages, Netlify, etc.

## Estructura
- `src/data/temarioP1.js` / `temarioP2.js` — tarjetas QSL de contenido por bloque
- `src/data/examOficial.js` — las 35 preguntas oficiales del libro con su solucionario
- `src/data/quizEngine.js` — genera preguntas tipo test a partir de las tarjetas
- `src/hooks/useProgress.js` — progreso y resultados en localStorage
- `src/components/` — Header, Home (bitácora), SectionView (QSL), TestView (hoja de examen), ProgressView
