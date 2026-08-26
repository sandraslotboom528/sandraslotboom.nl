import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = { title: 'Stiltemiddag' };

export default function StiltemiddagPage() {
  return (
    <>
      {/* Hero — herosectie-stiltemiddag.jpg als achtergrond (nog toe te voegen) */}
      <div className="hero-section hero-section-stiltemiddag" style={{ backgroundImage: "url('/fotos/herosectie-stiltemiddag.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            Stiltemiddag 15 november
          </h1>
        </div>
      </div>

      <div className="hero-cover">
        {/* Intro */}
        <section className="max-w-3xl mx-auto px-6 pt-16 pb-16">
          <p className="text-lg font-bold text-primair/90 leading-relaxed mb-8 reveal">
            Een middag van stilte, vertraging en de kracht van acupressuur.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-2 reveal">
            Een middag waarin je niets hoeft te bereiken en nergens naartoe hoeft.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Alleen maar vertragen, voelen en luisteren naar wat er vanbinnen leeft.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-8 reveal">
            Tijdens deze Stiltemiddag combineer ik meditatie, yin yoga en de Inner Essence Journey met
            acupressuur. Acupressuur loopt als een zachte rode draad door de hele middag en helpt je om nog dieper
            te zakken in je lichaam en uit je hoofd te komen.
          </p>
          <p className="font-bold text-primair mb-8 reveal">
            De kosten voor de stiltemiddag zijn €68,-.
          </p>
          <a href="#aanmelden"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
            Meld je aan voor de stiltemiddag →
          </a>
          <p className="text-tekst/60 text-sm mt-4 reveal">
            Als je op de button klikt, kom je in een scherm waar je je naam en mailadres kunt invullen. Daarna
            ontvang je een mail (dat kan even duren, maar kan ook in je spam terecht komen) met daarin de
            betaalgegevens.
          </p>
        </section>

        {/* Van doen naar zijn */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Van doen naar zijn</h2>
            <p className="text-tekst/80 leading-relaxed mb-2 reveal">In ons dagelijks leven zijn we vaak gericht op actie.</p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">We regelen, plannen, zorgen, werken en denken.</p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">
              Maar wanneer heb je voor het laatst echt een paar uur genomen om helemaal niets te hoeven?
            </p>
            <p className="text-tekst/80 leading-relaxed mb-2 reveal">De Stiltemiddag is een uitnodiging om uit die doe-stand te stappen.</p>
            <p className="text-tekst/80 leading-relaxed mb-2 reveal">Om je aandacht naar binnen te brengen.</p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">Om opnieuw te voelen.</p>
            <p className="text-tekst/80 leading-relaxed reveal">
              En om te ervaren wat er ontstaat wanneer je jezelf de ruimte geeft om te vertragen.
            </p>
          </div>
        </section>

        {/* Het programma */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Een middag waarin stilte voelbaar wordt</h2>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            We beginnen met een meditatie waarin we werken met acupressuurpunten. Door de combinatie van stilte,
            ademhaling en aanraking kun je gemakkelijker landen in je lichaam en je aandacht naar binnen brengen.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Daarna gaan we de diepte in met yin yoga en acupressuur. In de rustige houdingen krijgt je lichaam alle
            tijd om te ontspannen. De acupressuurpunten die we gebruiken ondersteunen dit proces en nodigen je uit
            om nog dieper te voelen en los te laten.
          </p>
          <p className="text-tekst/80 leading-relaxed reveal">
            We sluiten af met de{' '}
            <Link href="/inner-essence-journey" className="font-bold text-accent hover:underline">
              Inner Essence Journey
            </Link>
            : een begeleide innerlijke reis waarin je via acupressuur en bewustzijn steeds meer contact maakt met
            je eigen innerlijke essentie.
          </p>
        </section>

        {/* Punten mee naar huis */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">En het mooiste is: je neemt de punten mee naar huis</h2>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">De Stiltemiddag stopt niet wanneer je naar huis gaat.</p>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Na afloop krijg je toegang tot mijn online Academy waarin de acupressuurpunten die we tijdens de
              middag hebben gebruikt nogmaals worden uitgelegd. Zo kun je thuis verder oefenen.
            </p>
            <p className="text-tekst/80 leading-relaxed reveal">
              Je hoeft dus niet te onthouden welk punt waar zat of wat het ook alweer deed. Je hebt de uitleg
              gewoon bij de hand en kunt de acupressuur opnieuw inzetten wanneer je daar behoefte aan hebt. De
              middag wordt daarmee niet alleen een moment van rust, maar ook iets waar je zelf thuis mee verder
              kunt.
            </p>
          </div>
        </section>

        {/* Voor wie */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Deze Stiltemiddag is voor jou als…</h2>
          <ul id="voorwie-lijst" className="space-y-2 mb-8 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
            <li>je verlangt naar rust in je hoofd</li>
            <li>je veel &apos;aan&apos; staat en moeilijk kunt vertragen</li>
            <li>je behoefte hebt aan tijd en aandacht voor jezelf</li>
            <li>je meer verbinding wilt voelen met je lichaam</li>
            <li>je nieuwsgierig bent naar de werking van acupressuur</li>
            <li>je houdt van meditatie en yin yoga</li>
            <li>je wilt leren hoe je acupressuur zelf kunt gebruiken</li>
            <li>je voelt dat je behoefte hebt aan een moment van niets hoeven</li>
          </ul>
          <p className="text-tekst/80 leading-relaxed mb-2 reveal">
            Je hebt geen ervaring met meditatie, yin yoga of acupressuur nodig.
          </p>
          <p className="font-bold text-primair reveal">Je hoeft alleen maar te komen zoals je bent.</p>
        </section>

        {/* Praktische informatie */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Praktische informatie</h2>
            <div className="bg-achtergrond rounded-2xl p-8 space-y-2 text-tekst/80 leading-relaxed mb-8 reveal">
              <p><strong className="text-primair">Stiltemiddag:</strong> zondag 15 november</p>
              <p><strong className="text-primair">Tijd:</strong> 13.45 – 17.15 uur</p>
              <p>
                <strong className="text-primair">Locatie:</strong>{' '}
                <a href="https://oker015.nl/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Oker
                </a>{' '}
                in Schipluiden
              </p>
              <p><strong className="text-primair">Investering:</strong> €68,-</p>
            </div>
            <p className="text-tekst/80 leading-relaxed mb-2 reveal">Inclusief:</p>
            <ul id="inclusief-lijst" className="space-y-2 mb-8 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
              <li>meditatie met acupressuur</li>
              <li>yin yoga met acupressuur</li>
              <li>Inner Essence Journey met acupressuur</li>
              <li>een middag volledig voor jezelf</li>
              <li>toegang tot de online Academy met uitleg van de gebruikte acupressuurpunten</li>
            </ul>
            <a href="#aanmelden"
              className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
              Jaaaa, ik meld me aan →
            </a>
          </div>
        </section>

        {/* Aanmeldformulier */}
        <section id="aanmelden" className="max-w-2xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 text-center reveal">Meld je aan</h2>
          <Script async src="https://embed.email-provider.eu/e/7ktkt4hazy-8wbmxwsq74.js" />
        </section>

        {/* Afsluiting */}
        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Gun jezelf een middag waarin niets hoeft</h2>
          <p className="text-tekst/80 leading-relaxed mb-2 reveal">Misschien is dit precies wat je nodig hebt.</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">Geen nieuwe to-do&apos;s.</p>
          <p className="text-tekst/80 leading-relaxed mb-1 reveal">Geen volle agenda.</p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">Geen prikkels.</p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Maar een paar uur om te ademen, te voelen, te verzachten en weer thuis te komen bij jezelf.
          </p>
          <p className="font-bold text-primair mb-1 reveal">Van buiten naar binnen.</p>
          <p className="font-bold text-primair mb-1 reveal">Van doen naar zijn.</p>
          <p className="font-bold text-primair reveal">Van hoofd naar lichaam.</p>
        </section>
      </div>

      <ScrollReveal singles={['.reveal']} grids={['#voorwie-lijst', '#inclusief-lijst']} />
    </>
  );
}
