'use client'

import { useTranslation } from "@/hooks/use.translation"
import Link from "next/link"

export default function FooterClient() {
  const { t } = useTranslation()

  return (
    <footer className="w-full px-10 flex justify-center mb-18 md:mb-0">

      <div className="flex justify-between max-w-4xl w-full py-10 flex-col items-center md:flex-row ">

        <p className="text-xs flex gap-1 my-3">{t('common.developed')}
          <Link href="#home" className="text-blue-500">Henriq</Link>
        </p>

        <p className="text-xs my-3">
          © 2026 Henrique de Souza Lima
        </p>
      </div>

    </footer>
  )
}