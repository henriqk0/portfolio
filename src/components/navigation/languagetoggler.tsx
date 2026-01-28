'use client'

import { useLanguage } from "@/context/language.context";
import { useEffect, useRef, useState } from 'react'
import type { Language } from "@/context/language.context";

export default function LanguageToggler() {
  const {language, setLanguage} = useLanguage();

  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  // close when mouse down
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (lang: Language) => {
    setLanguage(lang)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative font-secondary">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-2 px-3 py-1 w-19 rounded border-1 transition"
      >
        <span className="font-medium">
          {language.toUpperCase()}
        </span>

        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      <div
        className={`absolute left-0 mt-2 w-full overflow-hidden rounded bg-black shadow-md transition-all duration-300 ${
          open
            ? 'max-h-40 opacity-100 scale-100'
            : 'max-h-0 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <button
          onClick={() => handleSelect('pt')}
          className={`w-full px-3 py-2 text-left text-white hover:text-neutral-200 transition ${
            language === 'pt' 
          }`}
        >
          🇧🇷 PT
        </button>

        <button
          onClick={() => handleSelect('en')}
          className={`w-full px-3 py-2 text-left text-white hover:text-neutral-200 transition ${
            language === 'en' 
          }`}
        >
          🇬🇧 EN
        </button>
      </div>
    </div>
  )
}
