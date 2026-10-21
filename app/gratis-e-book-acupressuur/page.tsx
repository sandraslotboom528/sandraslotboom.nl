import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Gratis e-book: acupressuur voor nek, schouders en onderrug',
  description: 'Ontdek drie acupressuurpunten op afstand voor je nek, schouders en onderrug. Download gratis het e-book "Pijn hier? Probeer een drukpunt daar."',
};

const AANMELD_URL = 'https://laposta.nl/f/sstzsvbsbxgr';

function AanmeldKnop() {
  return (
    <a href={AANMELD_URL} target="_blank" rel="noopener noreferrer"
      className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
      Ja, stuur mij het gratis e-book →
    </a>
  );
}

function Toestemming() {
  return (
    <p className="text-sm text-tekst/60 leading-relaxed mt-4 reveal">
      Door het e-book aan te vragen geef je toestemming om op mijn mailinglijst te komen. Je ontvangt dan af en
      toe een mail van mij met inspiratie, tips en aanbod. Afmelden kan altijd, met één klik onderaan elke mail.
      Lees ook mijn{' '}
      <a href="/documenten/privacy-statement.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-primair">
        privacyverklaring
      </a>.
    </p>
  );
}

export default function GratisEbookPage() {
  return (
    <>
      {/* Hero — zonder foto, valt terug op groen vlak (--color-primair) */}
      <div className="hero-section">
        <div className="hero-overlay" style={{ background: 'none' }}>
          <h1 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            Pijn hier? Probeer een drukpunt daar.
          </h1>
          <p className="text-lg text-white/90 max-w-xl mt-4">
            Gratis e-book: acupressuur op afstand voor je nek, schouders en onderrug
          </p>
        </div>
      </div>

      <div className="hero-cover">
        {/* Intro */}
        <section className="max-w-3xl mx-auto px-6 pt-16 pb-16">
          <p className="text-lg font-bold text-primair/90 leading-relaxed mb-8 reveal">
            Wat als je niet hoeft te drukken op de plek waar het zeer doet?
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Je kent het vast. Je nek zit vast als je over je schouder wilt kijken. Je schouders zitten aan het eind
            van de dag ergens bij je oren. Of je onderrug protesteert als je opstaat na een tijd zitten. Je handen
            gaan dan als vanzelf naar die pijnlijke plek om te kneden en te wrijven.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            In de Traditionele Chinese Geneeskunde kijken we ook op een andere manier naar je lichaam: als één
            samenhangend geheel. Daarom kiezen we vaak punten die juist ver van de klacht liggen. Een punt op je
            hand bij een stijve nek. Een punt bij je enkel voor je onderrug.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-8 reveal">
            In dit gratis e-book laat ik je drie van zulke punten zien. Je kunt er meteen zelf mee aan de slag, thuis,
            op je werk of even tussendoor.
          </p>
          <AanmeldKnop />
          <Toestemming />
        </section>

        {/* Wat je ontdekt */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat je in het e-book ontdekt</h2>
            <ul id="ontdekken-lijst" className="space-y-2 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
              <li>Hoe acupressuur op afstand werkt volgens de Chinese geneeskunde.</li>
              <li>Een punt op je hand dat traditioneel wordt gebruikt bij nekklachten.</li>
              <li>Een punt bij je knie dat traditioneel wordt gekozen bij stijve schouders.</li>
              <li>Een punt bij je enkel dat traditioneel wordt gebruikt bij klachten in je onderrug.</li>
              <li>Stap voor stap hoe je elk punt vindt en hoe je het zacht masseert.</li>
              <li>Hoe je veilig oefent en wanneer je beter even advies vraagt.</li>
            </ul>
          </div>
        </section>

        {/* Voor wie */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Dit e-book is voor jou als...</h2>
          <ul id="voorwie-lijst" className="space-y-2 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li>je regelmatig last hebt van een stijve nek, gespannen schouders of een stramme onderrug;</li>
            <li>je zelf iets wilt doen om beter voor je lichaam te zorgen;</li>
            <li>je nieuwsgierig bent naar acupressuur en de Chinese geneeskunde;</li>
            <li>je op een rustige, zachte manier wilt ontdekken wat jouw lichaam nodig heeft.</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed mt-8 reveal">
            Je hebt geen voorkennis nodig. Alleen je eigen handen en een paar minuten aandacht voor jezelf.
          </p>
        </section>

        {/* Aanmelden */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16 text-center">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">
              Vraag het gratis e-book aan
            </h2>
            <p className="text-tekst/80 leading-relaxed mb-8 reveal">
              Klik op de knop, vul je naam en e-mailadres in en je ontvangt de downloadlink direct in je mailbox.
            </p>
            <AanmeldKnop />
            <Toestemming />
          </div>
        </section>

        {/* Disclaimer */}
        <section className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-sm text-tekst/60 leading-relaxed reveal">
            Acupressuur is aanvullende zelfzorg en vervangt geen onderzoek of behandeling door een arts. Heb je
            nieuwe, toenemende of aanhoudende pijn? Laat dit dan altijd beoordelen.
          </p>
        </section>
      </div>

      <ScrollReveal singles={['.reveal']} grids={['#ontdekken-lijst', '#voorwie-lijst']} />
    </>
  );
}
