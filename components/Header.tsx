'use client';
import { useState } from 'react';
import Link from 'next/link';

// ← Vul hier jouw Kennis Shop URL in (bijv. 'https://jouwbedrijf.kennis.shop')
// Laat leeg ('') als je nog geen Kennis Shop hebt of geen link wilt tonen.
const KENNIS_SHOP_URL = 'https://salacia.kennis.shop/';

const navLinks = [
  { href: '/',              label: 'Home'         },
  { href: '/over-mij',      label: 'Over mij'     },
  {
    href: '/aanbod', label: 'Aanbod',
    children: [
      { href: '/acupunctuur',                  label: 'Acupunctuurbehandeling'        },
      { href: '/neuro-emotionele-integratie',  label: 'Neuro Emotionele Integratie'   },
      { href: '/inner-essence-journey',        label: 'Inner essence journey'         },
      { href: 'https://salacia.kennis.shop/',  label: 'Online acupressuur', external: true },
    ],
  },
  { href: '/stiltemiddag',  label: 'Stiltemiddag' },
  { href: '/gratis',        label: 'Gratis'       },
  { href: '/blog',          label: 'Blog'         },
  { href: '/contact',       label: 'Contact'      },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-wit border-b border-primair/10 relative">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / naam */}
        <Link href="/" className="font-bold text-primair text-lg" onClick={() => setOpen(false)}>
          Salacia
        </Link>

        {/* Navigatie — desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(link => (
            link.children ? (
              <div key={link.href} className="relative group">
                <Link href={link.href}
                  className="text-tekst hover:text-primair transition-colors flex items-center gap-1">
                  {link.label}
                  <span className="text-xs">▾</span>
                </Link>
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                  <div className="bg-wit rounded-xl shadow-lg border border-primair/10 py-2 min-w-64">
                    {link.children.map(child =>
                      child.external ? (
                        <a key={child.href} href={child.href} target="_blank" rel="noopener noreferrer"
                          className="block px-4 py-2 text-tekst hover:text-primair hover:bg-achtergrond transition-colors">
                          {child.label}
                        </a>
                      ) : (
                        <Link key={child.href} href={child.href}
                          className="block px-4 py-2 text-tekst hover:text-primair hover:bg-achtergrond transition-colors">
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href}
                className="text-tekst hover:text-primair transition-colors">
                {link.label}
              </Link>
            )
          ))}
          {KENNIS_SHOP_URL && (
            <a href={KENNIS_SHOP_URL} target="_blank" rel="noopener noreferrer"
              className="bg-primair text-wit px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
              Kennis Shop
            </a>
          )}
        </nav>

        {/* Hamburger — mobiel */}
        <button className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}>
          <span className={`block w-6 h-0.5 bg-primair transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primair transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primair transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Navigatie — mobiel dropdown */}
      {open && (
        <nav className="md:hidden border-t border-primair/10 bg-wit px-6 py-5 flex flex-col gap-5 text-sm font-medium">
          {navLinks.map(link => (
            <div key={link.href}>
              <Link href={link.href}
                className="text-tekst hover:text-primair transition-colors"
                onClick={() => setOpen(false)}>
                {link.label}
              </Link>
              {link.children && (
                <div className="flex flex-col gap-4 mt-4 pl-4 border-l-2 border-primair/10">
                  {link.children.map(child =>
                    child.external ? (
                      <a key={child.href} href={child.href} target="_blank" rel="noopener noreferrer"
                        className="text-tekst/70 hover:text-primair transition-colors"
                        onClick={() => setOpen(false)}>
                        {child.label}
                      </a>
                    ) : (
                      <Link key={child.href} href={child.href}
                        className="text-tekst/70 hover:text-primair transition-colors"
                        onClick={() => setOpen(false)}>
                        {child.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
          {KENNIS_SHOP_URL && (
            <a href={KENNIS_SHOP_URL} target="_blank" rel="noopener noreferrer"
              className="bg-primair text-wit px-4 py-3 rounded-full hover:opacity-90 transition-opacity text-center"
              onClick={() => setOpen(false)}>
              Kennis Shop
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
