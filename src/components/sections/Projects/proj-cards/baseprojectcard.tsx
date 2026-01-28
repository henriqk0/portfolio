'use client'

import { useTranslation } from "@/hooks/use.translation";
import Image from "next/image"
import { useState, useEffect } from "react"

type ProjectCardProps = {
  hrefLive?: string;
  hrefCode?: string;
  images: string[];
  stack: string;
  header: string;
  description: string;
}

export default function BaseProjectCard(
{
  hrefLive,
  hrefCode,
  images,
  stack,
  header,
  description,
}: ProjectCardProps
) {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <>
      <div className="border border-neutral-500 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">

        <div 
          className="relative h-52 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Image
            src={images[current]}
            alt="Projeto MiteHunter"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            unoptimized
          />
        </div>

        <div className="px-4 py-2 border-t border-b border-neutral-500 text-sm font-secondary text-color-soft">
          {stack}
        </div>

        <div className="p-4 space-y-3">
          <h3 className="font-primary text-xl">
            {header}
          </h3>

          <p className="font-textual text-sm leading-relaxed text-color-softier">
            {description}.
          </p>

          <div className="flex justify-between">
            { 
              hrefLive && 
              <a
                href={hrefLive}
                target="_blank"
                className="flex items-center mt-2 text-sm font-secondary border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-black transition-colors"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.25" stroke="currentColor" className="size-[1em] mr-1" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>

                {t('common.projectSession.published')}

              </a>
            }

            { 
              !hrefLive && 
              <button
                className="disable max-w-[150px] inline-block mt-2 text-sm font-secondary border border-neutral-500 text-neutral-500 px-4 py-2 rounded-md lg:max-w-fit"
              >
                {t('common.projectSession.notPublished')}
              </button>
            }

            { 
              hrefCode && 
              <a
                href={hrefCode}
                target="_blank"
                className="flex items-center mt-2 text-sm font-secondary border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-black transition-colors"
              >
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.25" stroke="currentColor" className="size-[1em] mr-1" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>

                {t('common.projectSession.public')}
              </a>
            }

            { 
              !hrefCode && 
              <button
                className="disable inline-block mt-2 text-sm font-secondary border border-neutral-500 text-neutral-500 px-4 py-2 rounded-md"
              >
                {t('common.projectSession.private')}
              </button>
            }
          </div>

        </div>
      </div>

      {open && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-[90%] max-w-4xl aspect-video">
            <Image
              src={images[current]}
              alt="Imagem expandida"
              fill
              className="object-contain animate-scaleIn"
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  )
}
