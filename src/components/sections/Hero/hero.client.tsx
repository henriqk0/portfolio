"use client";

import { useLanguage } from "@/context/language.context";
import { useTranslation } from "@/hooks/use.translation";
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from "next/link";

export default function HeroAnimation() {
  const { t } = useTranslation()

  const {language, } = useLanguage();

  const fileHref = language === 'pt' ? '/files/cv-pt.pdf' : '/files/cv-en.pdf';


  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Image src="/fixed.png"
      width={60}
      height={60}
       alt="PixelPFP"
       unoptimized className="bg-white rounded-full mb-6 border-2 border-[var(--solid-border)]"></Image>
      <p className={`text-xl font-secondary`}>{t('common.welcome')} <strong>Henrique de Souza Lima</strong></p>
      <h1 className={`text-7xl font-bold font-primary mt-4`}>{t('common.occupation')}</h1>

      <div className="flex space-x-5 mt-8">
        <a 
          href={fileHref} 
          target="_blank"
          rel="noopener noreferrer"
          className="font-secondary bg-[var(--solid-bg)] border-2 p-2 border-[var(--solid-border)] cursor-pointer">{t('common.download')}</a>
        <Link className="font-secondary bg-[var(--solid-bg)] border-2 p-2 border-[var(--solid-border)] cursor-pointer" href="#contact">{t('common.contactLabel')}</Link>
      </div>

    </motion.div>
  );
}
