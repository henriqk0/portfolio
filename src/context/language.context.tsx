'use client'

import { createContext, useContext, useEffect, useState } from "react"

export type Language = 'pt' | 'en'

interface LanguageContextData {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext({} as LanguageContextData)

export function LanguageProvider({ children }: { children: React.ReactNode}) {
  const [language, setLanguage] = useState<Language>('pt')

  useEffect(() => {
    const stored = localStorage.getItem('lang')
    if (stored === 'pt' || stored === 'en') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(stored)
    }
  }, [])

  function changeLanguage(lang: Language) {
    setLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      { children }
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
