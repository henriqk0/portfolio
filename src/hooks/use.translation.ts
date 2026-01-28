import pt from '@/i18n/pt.json'
import en from '@/i18n/en.json'
import { useLanguage } from '@/context/language.context'

const translations = { pt,en }

export function useTranslation() {
  const { language } = useLanguage()

  function t(path: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return path.split('.').reduce((obj: any, key) => obj?.[key], translations[language])
  }

  return { t }
}