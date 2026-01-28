'use client'

import Link from "next/link";

export default function ButtonNavLink({
  href,
  isActive,
  children,
  iconCode,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  iconCode: string;
}) {
  
  // prevents cannot go to section if their link its in current url
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const id = href.replace('#', '');
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', href); // keep URL in sync
    }
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick} 
      className={`
        w-[49px]
        relative flex flex-col items-center gap-2
        font-primary font-thin

        after:absolute after:left-0 after:top-0
        after:h-[2px] after:w-full
        after:origin-left after:scale-x-0
        after:bg-blue-500 after:transition-transform

        ${isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'}
      `}
      >

      <svg className="w-6 h-6 mt-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d={iconCode}/>
      </svg>

      {children}
    </Link>
  );
}