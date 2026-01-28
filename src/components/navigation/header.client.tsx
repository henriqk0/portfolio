'use client'

import { useTranslation } from "@/hooks/use.translation"
import Link from "next/link"
import { ThemeToggle } from "./themetoggler"
import LanguageToggler from "./languagetoggler"
import { useEffect, useState } from 'react';
import HeaderNavLink from "./headernavlink"



const name = '<Henriq/>'
const sections = ['home', 'projects', 'about', 'contact'];

export default function HeaderClient() {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState<string>('home');


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6, // section is considered active when 60% visible
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-between p-6">
      <Link href="/" className="font-textual">{name}</Link>
      <div className="flex items-center justify-center">
        <div className="hidden md:flex items-center gap-4">
          <HeaderNavLink href="#home" isActive={activeSection === 'home'}>
            {t('common.home')}
          </HeaderNavLink>
          <HeaderNavLink href="#projects" isActive={activeSection === 'projects'}>
            {t('common.projects')}
          </HeaderNavLink>
          <HeaderNavLink href="#about" isActive={activeSection === 'about'}>
            {t('common.about')}
          </HeaderNavLink>
          <HeaderNavLink href="#contact" isActive={activeSection === 'contact'}>
            {t('common.contact')}
          </HeaderNavLink>
        </div>
      </div>

      <div className="flex space-x-4">
        <ThemeToggle />

        <LanguageToggler />
      </div>
    </div>
  )
}