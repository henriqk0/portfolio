'use client'

import BaseProjectCard from "./baseprojectcard"
import { useTranslation } from "@/hooks/use.translation"

const images = [
  "/projects/currency2u/welcome.png",
  "/projects/currency2u/email.png",
  "/projects/currency2u/login.png",
  "/projects/currency2u/login2.png",
  "/projects/currency2u/register.png",
]

export default function ComputerOptionsCard() {
  const { t } = useTranslation()

  return (
      <BaseProjectCard 
        images={images} 
        hrefLive="https://currency-2-u.vercel.app/"
        hrefCode="https://github.com/henriqk0/currency-2-u"
        stack="ExpressJs · NextJs · TypeScript · Shadcn/ui · JWT · Docker · BullMQ · MongoDB"
        header={t('common.projectSession.currencytwou.header')}
        description={t('common.projectSession.currencytwou.description')}
      ></BaseProjectCard>
  )
}
