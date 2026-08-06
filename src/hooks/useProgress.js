import { useState, useEffect, useCallback } from 'react'

const KEY = 'harec-bitacora-progress-v1'

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : { sections: {}, exams: [] }
  } catch {
    return { sections: {}, exams: [] }
  }
}

export function useProgress() {
  const [data, setData] = useState(load)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(data))
  }, [data])

  const markSectionRead = useCallback((sectionId, total) => {
    setData(prev => {
      const current = prev.sections[sectionId] || { seen: 0, total }
      return {
        ...prev,
        sections: {
          ...prev.sections,
          [sectionId]: { seen: Math.min(total, current.seen + 1), total },
        },
      }
    })
  }, [])

  const recordExam = useCallback((result) => {
    setData(prev => ({ ...prev, exams: [result, ...prev.exams].slice(0, 20) }))
  }, [])

  const resetAll = useCallback(() => {
    setData({ sections: {}, exams: [] })
  }, [])

  return { data, markSectionRead, recordExam, resetAll }
}
