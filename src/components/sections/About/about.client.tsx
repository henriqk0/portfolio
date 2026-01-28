"use client";

import { useTranslation } from "@/hooks/use.translation";
import { motion } from "framer-motion";
import StackGrid from "./stackgrid";

export default function AboutAnimation() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className=" w-full grid grid-cols-1 px-6 gap-3 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-[550px] expanded-column align-center justify-self-center lg:justify-self-end">
          <span className="text-3xl font-secondary">{t('common.aboutSession.about')}</span>

          <h1 className="text-6xl font-primary font-bold">{t('common.aboutSession.header')}</h1>

          <p className="font-textual text-lg mt-5">{t('common.aboutSession.apresentation')} <strong>{t('common.occupation')}</strong> {t('common.aboutSession.conjunction1')} <strong>{t('common.aboutSession.experience')}</strong>. {t('common.aboutSession.starting')} <strong>{t('common.aboutSession.focus5')}</strong> {t('common.aboutSession.conjunction3')} <strong>{t('common.aboutSession.focus2')}</strong>, {t('common.aboutSession.using')} <strong>{t('common.aboutSession.focus3')}</strong>, {t('common.aboutSession.conjunction2')} <strong>{t('common.aboutSession.focus4')}</strong>, {t('common.aboutSession.database')} <strong>{t('common.aboutSession.focus6')}</strong>.</p>

          <p className="font-textual text-lg mt-5">{t('common.aboutSession.can')} <strong>{t('common.aboutSession.focus1')}</strong>. {t('common.aboutSession.complement')} <strong>{t('common.aboutSession.usecases')}</strong> {t('common.aboutSession.necessity')}</p>

          <p className="font-textual text-lg mt-5">{t('common.aboutSession.testing1')} <strong>{t('common.aboutSession.focus9')}</strong>; {t('common.aboutSession.example')}: <strong>{t('common.aboutSession.focus7')}</strong> {t('common.aboutSession.conjunction2')} <strong>{t('common.aboutSession.focus8')}</strong>. {t('common.aboutSession.testing2')}.
          </p>
        </div>
        <div className="max-w-[550px] expanded-column w-full mb-25 lg:mb-0 justify-self-center lg:justify-self-start self-center bg-[var(--solid-bg)] lighty-border border-1 p-7">
          <h6 className="mb-6 text-lg font-secondary">
            {t('common.aboutSession.techs')}
          </h6>


          <div className="min-h-[500px]">
            <StackGrid></StackGrid>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
