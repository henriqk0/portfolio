"use client";

import { Linkedin, Github, Mail } from 'lucide-react';
import { useTranslation } from "@/hooks/use.translation";
import { motion } from "framer-motion";

export default function ContactAnimation() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='max-w-100% px-6 overflow-hidden'
    >
      <div className="max-w-[800px] scroll-mt-28 p-6 border-1 lighty-border">
        <span className="text-3xl font-secondary">{t('common.contactSession.contact')}</span>

        <h1 className="text-6xl font-primary font-bold">{t('common.contactSession.header')}</h1>
        <p className="text-xl mt-5 font-textual">{t('common.contactSession.opportunities')}.</p>

        <div className="flex flex-col space-y-3 mt-7">
          <a 
            href="https://github.com/henriqk0" 
            target="_blank"
            className="border-b-2 border-blue-500 p-3 cursor-pointer font-secondary flex items-center hover:border-blue-300 transition-colors duration-500"
            >
            <Github size={30} className='hover:rotate-10 transition-transform duration-500'/>
            <div className="ml-2 flex flex-col min-w-[180px] hover:rotate-2 transition-transform duration-500">
              <span className="text-xs">GitHub</span>
              <span className="text-base">@henriqk0</span>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/henriqdeslima/" 
            target="_blank"
            className="border-b-2 border-blue-500 p-3 cursor-pointer font-secondary flex items-center hover:border-blue-300 transition-colors duration-500"
            >
            <Linkedin size={30} className='hover:rotate-10 transition-transform duration-500'/>
            <div className="ml-2 flex flex-col min-w-[180px] hover:rotate-2 transition-transform duration-500">
              <span className="text-xs">LinkedIn</span>
              <span className="text-base">Henrique Lima</span>
            </div>
          </a>

          <a 
            href="mailto:henriquedeslima2811@gmail.com" 
            target="_blank"
            className="border-b-2 border-blue-500 p-3 cursor-pointer font-secondary flex items-center hover:border-blue-300 transition-colors duration-500"
            >
            <Mail size={30} className='hover:rotate-10 transition-transform duration-500'/>
            <div className="ml-2 flex flex-col min-w-[180px] hover:rotate-2 transition-transform duration-500">
              <span className="text-xs">E-mail</span>
              <span className="text-base">henriquedeslima2811@gmail.com</span>
            </div>
          </a>
        </div>

      </div>
    </motion.div>
  );
}
