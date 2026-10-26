'use client';
import { useEffect, useState } from 'react';

const KALENDER_URL = 'https://salacia.kennis.shop/pay/digitale-adventskalender-2026';

// Prijsfases: elke prijs geldt tot en met de genoemde dag (Nederlandse tijd).
// Na de laatste fase sluit de aanmelding en verdwijnt de koopknop.
const FASES = [
  { prijs: '€27,50', tot: 't/m 5 november', einde: new Date('2026-11-05T23:59:59+01:00') },
  { prijs: '€36,50', tot: 't/m 15 november', einde: new Date('2026-11-15T23:59:59+01:00') },
  { prijs: '€50,-', tot: 't/m 28 november', einde: new Date('2026-11-28T23:59:59+01:00') },
];

// Index van de fase die nu geldt, FASES.length als de aanmelding gesloten is,
// of null zolang de pagina nog niet in de browser draait.
function useHuidigeFase() {
  const [fase, setFase] = useState<number | null>(null);
  useEffect(() => {
    const nu = new Date();
    const i = FASES.findIndex(f => nu <= f.einde);
    setFase(i === -1 ? FASES.length : i);
  }, []);
  return fase;
}

export function KoopKnop() {
  const fase = useHuidigeFase();

  // De wrapper blijft altijd staan, zodat ScrollReveal hem kan laten infaden.
  return (
    <div className="reveal">
      {fase === FASES.length ? (
        <p className="text-lg font-bold text-primair/90">
          De aanmelding voor de adventskalender van 2026 is gesloten.
        </p>
      ) : (
        <>
          <a href={KALENDER_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Ja, ik gun mezelf deze adventskalender{fase !== null && ` voor ${FASES[fase].prijs}`} →
          </a>
          {fase !== null && fase < FASES.length - 1 && (
            <p className="text-sm text-tekst/60 mt-3">
              Deze prijs geldt {FASES[fase].tot}. Daarna wordt het {FASES[fase + 1].prijs}.
            </p>
          )}
          {fase === FASES.length - 1 && (
            <p className="text-sm text-tekst/60 mt-3">
              Aanmelden kan {FASES[fase].tot}. Daarna sluit de aanmelding.
            </p>
          )}
        </>
      )}
    </div>
  );
}

export function PrijsOverzicht() {
  const fase = useHuidigeFase();

  return (
    <ul id="prijs-lijst" className="space-y-2 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
      {FASES.map((f, i) => (
        <li key={f.tot} className={i === fase ? 'font-bold text-primair' : i < (fase ?? 0) ? 'line-through text-tekst/40' : ''}>
          {f.prijs} {f.tot}{i === fase && ' (nu)'}
        </li>
      ))}
      <li>Na 28 november sluit de aanmelding.</li>
    </ul>
  );
}
