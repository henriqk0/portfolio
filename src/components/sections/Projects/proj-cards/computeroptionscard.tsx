'use client'

import BaseProjectCard from "./baseprojectcard"
import { useTranslation } from "@/hooks/use.translation"

const images = [
  "/projects/computer-options/homepage.png",
  "/projects/computer-options/detail-component.png",
  "/projects/computer-options/creating-review.png",
  "/projects/computer-options/my-reviews.png",
]

export default function ComputerOptionsCard() {
  const { t } = useTranslation()

  return (
      <BaseProjectCard 
        images={images} 
        hrefCode="https://github.com/henriqk0/computer-options"
        stack="Laravel · Vue · TypeScript · Tailwind · JWT · Docker"
        header={t('common.projectSession.techOptions.header')}
        description={t('common.projectSession.techOptions.description')}
      ></BaseProjectCard>
  )
}
