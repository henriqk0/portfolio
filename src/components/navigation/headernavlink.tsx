'use client'

import Link from "next/link";

export default function HeaderNavLink({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
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
        font-primary
        relative
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-full
        after:scale-x-0 after:origin-left
        after:bg-blue-500
        after:transition-transform
        ${isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'}
      `}

    >
      {children}
    </Link>
  );
}
