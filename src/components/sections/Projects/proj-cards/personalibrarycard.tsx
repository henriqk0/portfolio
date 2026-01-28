'use client'

import BaseProjectCard from "./baseprojectcard"
import { useTranslation } from "@/hooks/use.translation"

const images = [
  "/projects/max-read/image.png",
]

export default function PersonalLibraryCard() {
  const { t } = useTranslation()

  return (
      <BaseProjectCard 
        images={images} 
        hrefCode="https://github.com/henriqk0/personal-library-manager"
        stack="Symfony · Tailwind · JavaScript · HTML5 · CSS3 · Twig · Docker"
        header={t('common.projectSession.readMore.header')}
        description={t('common.projectSession.readMore.description')}
      ></BaseProjectCard>
  )
}
