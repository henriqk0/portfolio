'use client'

import VscodeOriginal from "react-devicons/vscode/original";
import LaravelOriginal from "react-devicons/laravel/original";
import SymfonyOriginal from "react-devicons/symfony/original";
import NodejsOriginal from "react-devicons/nodejs/original-wordmark";
import JavascriptOriginal from "react-devicons/javascript/original";
import DockerOriginal from "react-devicons/docker/original";

import TypescriptOriginal from "react-devicons/typescript/original";
import Html5Original from "react-devicons/html5/original";
import Css3Original from "react-devicons/css3/original";
import BootstrapPlain from "react-devicons/bootstrap/plain";
import TailwindcssOriginal from "react-devicons/tailwindcss/original";
import GithubOriginal from "react-devicons/github/original";
import LinuxOriginal from "react-devicons/linux/original";

import PostgresqlOriginal from "react-devicons/postgresql/original";
import NextjsPlain from "react-devicons/nextjs/plain";
import VuejsOriginal from "react-devicons/vuejs/original";
import DjangoPlain from "react-devicons/django/plain";
import VimOriginal from "react-devicons/vim/original";

import { useState } from "react";

type IconProps = {
  className?: string;
  size?: number;
}

type IconType = React.ComponentType<IconProps>;

type Item = {
  label: string;
  Icon: IconType;
};

const itemObjectsArray: Item[] = [
  { label: "VsCode", Icon: VscodeOriginal},
  { label: "Laravel", Icon: LaravelOriginal},
  { label: "Django", Icon: DjangoPlain},
  { label: "Symfony", Icon: SymfonyOriginal},
  { label: "Node.js", Icon: NodejsOriginal},
  { label: "JavaScript", Icon: JavascriptOriginal},
  { label: "TypeScript", Icon: TypescriptOriginal},
  { label: "HTML5", Icon: Html5Original},
  { label: "CSS3", Icon: Css3Original},
  { label: "Vue.js", Icon: VuejsOriginal},
  { label: "Next.js", Icon: NextjsPlain},
  { label: "Bootstrap", Icon: BootstrapPlain},
  { label: "TailwindCSS", Icon: TailwindcssOriginal},
  { label: "GitHub", Icon: GithubOriginal},
  { label: "Docker", Icon: DockerOriginal},
  { label: "PostgreSQL", Icon: PostgresqlOriginal},
  { label: "Linux", Icon: LinuxOriginal},
  { label: "Vim", Icon: VimOriginal},
];

export default function StackGrid() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 gap-4">
      { itemObjectsArray.map((item, index) => (
        <div 
          key={item.label}
          onClick={() => setOpenId(openId === index ? null : index)}
          className="group relative w-full p-3 border-1 flex justify-center devicon-box lighty-border bg-[var(--solid-bg)] cursor-pointer">
          <span
            className={`
              stack-label
              rounded-lg
              font-textual
              absolute bottom-0 mt-2 px-1
              transition-all duration-300
              opacity-0 scale-95 translate-y-1
              group-hover:opacity-100
              group-hover:scale-100
              group-hover:translate-y-0
              ${openId === index ? "opacity-100 scale-100 translate-y-0" : ""}
            `}
          >
            {item.label}
          </span>

          <item.Icon size={44}/>
        </div>
      ))}
    </div>
  )
}