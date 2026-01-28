'use client'

import BaseProjectCard from "./baseprojectcard"
import { useTranslation } from "@/hooks/use.translation"

const images = [
  "/projects/mitehunter/sendPhotoPC.png",
  "/projects/mitehunter/sendphoto.png",
  "/projects/mitehunter/processed.png",
  "/projects/mitehunter/login.png",
]

export default function MiteHunterCard() {
  const { t } = useTranslation()

  return (
      <BaseProjectCard 
        images={images} 
        hrefLive="https://mitehunter.ifes.edu.br"
        stack="Python · Django · Bootstrap · Docker · Nginx · Node"
        header={t('common.projectSession.mitehunter.header')}
        description={t('common.projectSession.mitehunter.description')}
      ></BaseProjectCard>
  )
}
