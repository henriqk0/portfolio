"use client";

import { useTranslation } from "@/hooks/use.translation";
import { motion } from "framer-motion";
import MiteHunterCard from "./proj-cards/mitehuntercard";
import ComputerOptionsCard from "./proj-cards/computeroptionscard";
import PersonalLibraryCard from "./proj-cards/personalibrarycard";

export default function ProjectsAnimation() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between mb-5 flex-col space-y-3 md:flex-row">
        <h1 className="text-4xl font-bold font-secondary">{t('common.projectSession.projects')}</h1>

        <a 
          href="https://github.com/henriqk0" 
          target="_blank"
        >
          <span className="py-1 px-2 font-secondary border-2 rounded-lgmd:mt-0">
            {t('common.projectSession.seeMore')}
          </span>
        </a>
      </div>


      <div 
        className="grid gap-6
        grid-cols-1
        mb-24
        md:grid-cols-2 
        xl:grid-cols-3 mb-0
      ">
        
        <MiteHunterCard></MiteHunterCard>
        <ComputerOptionsCard></ComputerOptionsCard>
        <PersonalLibraryCard></PersonalLibraryCard>

      </div>
    </motion.div>
  );
}
