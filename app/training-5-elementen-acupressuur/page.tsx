import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Training 5 elementen acupressuur',
  description:
    'Leer de signalen van je lichaam herkennen vanuit de 5 elementen en stel een eigen acupressuurroutine samen van maximaal 10–15 minuten per dag.',
};

const TRAINING_URL = 'https://salacia.kennis.shop/pay/training-5-elementenacupressuur';

const onderdelen = [
  {
    titel: 'De basis begrijpen',
    tekst:
      'Je maakt kennis met Qi, Yin en Yang, de Organen en meridianen vanuit de traditionele Chinese geneeskunde. Daarmee krijg je een basis om de uitleg over de 5 elementen en acupressuur te volgen.',
  },
  {
    titel: 'De samenhang tussen de 5 elementen zien',
    tekst:
      'Je leert hoe de elementen elkaar voeden en in evenwicht houden. Ook ontdek je hoe balans, relatief te weinig, te veel en stagnatie binnen dit model worden beschreven.',
  },
  {
    titel: 'Herkennen welk element aandacht vraagt',
    tekst:
      'Met een zelfscan en praktische observaties onderzoek je de signalen die je bij jezelf opmerkt. Zo leer je bewuster kiezen waar je aandacht aan wilt geven.',
  },
  {
    titel: 'Acupressuurpunten kiezen en toepassen',
    tekst:
      'Je leert passende punten vinden en gebruiken, met aandacht voor de toepassing en de grenzen van zelfacupressuur.',
  },
  {
    titel: 'Een eigen routine samenstellen',
    tekst:
      'Je brengt de theorie en praktijk samen in een acupressuurroutine van maximaal 10–15 minuten per dag. Een routine die je kunt aanpassen wanneer je merkt dat andere signalen aandacht vragen.',
  },
];

const vragen = [
  {
    vraag: 'Heb ik voorkennis nodig?',
    antwoord: 'Nee. Je begint bij de basis en bouwt van daaruit verder.',
  },
  {
    vraag: 'Hoeveel tijd kost de training?',
    antwoord:
      'Je doorloopt de modules in je eigen tempo. Hoe lang je daarvoor nodig hebt, hangt af van hoeveel tijd je wilt nemen om te leren en te oefenen. Je uiteindelijke acupressuurroutine duurt maximaal 10–15 minuten per dag.',
  },
  {
    vraag: 'Kan ik de training volgen als ik geen duidelijke klachten heb?',
    antwoord:
      'Ja. De training is ook bedoeld voor mensen die bewust aandacht willen geven aan hun gezondheid en hun lichaam beter willen leren kennen.',
  },
  {
    vraag: 'Werk ik steeds met dezelfde punten?',
    antwoord:
      'Je leert een routine kiezen die past bij het element dat aandacht vraagt. Veranderen de signalen die je bij jezelf opmerkt, dan kun je met de kennis uit de training je keuzes opnieuw bekijken.',
  },
  {
    vraag: 'Kan ik hiermee klachten voorkomen of oplossen?',
    antwoord:
      'De training geeft je kennis en vaardigheden om zelfacupressuur toe te passen en bewuster met signalen om te gaan. Ze geeft geen garantie dat klachten worden voorkomen of verdwijnen. Zelfacupressuur is een aanvulling op je zorg voor jezelf; bij aanhoudende, onverklaarde of toenemende klachten blijft passende medische beoordeling belangrijk.',
  },
];

export default function TrainingPage() {
  return (
    <>
      {/* Hero — de titel staat al in de foto; zie .hero-section-training in globals.css */}
      <div className="hero-section hero-section-training" style={{ backgroundImage: "url('/fotos/herosectie-training.jpg')" }}>
        <div className="hero-overlay">
          <h1 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            Training 5 elementen acupressuur
          </h1>
        </div>
      </div>

      <div className="hero-cover">
        {/* Intro */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <p className="text-2xl font-bold text-primair leading-snug mb-6 reveal">
            Van zoeken naar losse gezondheidstips naar weten wat jij dagelijks voor je lichaam kunt doen.
          </p>
          <p className="text-lg font-bold text-primair/90 leading-relaxed mb-8 reveal">
            Leer met de training 5 elementen acupressuur de signalen van je lichaam herkennen en stel een passende
            acupressuurroutine samen van maximaal 10–15 minuten per dag.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Je wilt goed voor je gezondheid zorgen. Aandacht geven aan kleine klachten en gezond ouder worden. Maar
            met alle tips, oefeningen en adviezen die je tegenkomt, is het soms lastig om te bepalen: wat past bij
            mij?
          </p>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            In deze training leer je vanuit de 5 elementen kijken naar de samenhang tussen signalen van je lichaam.
            Je ontdekt welk element op dit moment aandacht vraagt en leert hoe je daar zelf passende
            acupressuurpunten bij kiest.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-8 reveal">
            Zo krijg je een duidelijk vertrekpunt én praktische handvatten om aan de slag te gaan.
          </p>
          <a href={TRAINING_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
            Ja, ik wil weten wat ik zelf kan doen →
          </a>
          <p className="text-tekst/60 text-sm mt-4 reveal">
            Online training · in je eigen tempo · nu instappen voor €95,-
          </p>
        </section>

        {/* Je wilt nu al aandacht geven aan je gezondheid */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">
              Je wilt nu al aandacht geven aan je gezondheid
            </h2>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Misschien merk je dat je schouders vaker gespannen zijn. Dat je energie wisselt, je veel piekert of
              moeilijk tot rust komt.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">
              Je kunt er nog prima mee doorgaan. Toch wil je die signalen serieus nemen. Je wilt begrijpen wat je
              opmerkt en weten hoe je dagelijks aandacht kunt geven aan je lichaam.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-6 reveal">
              Dus zoek je een oefening, sla je een tip op of probeer je een drukpunt dat je online tegenkomt.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-4 reveal">Maar ondertussen blijven er vragen:</p>
            <ul id="vragen-lijst" className="space-y-2 mb-6 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
              <li>Welke tip past bij mijn situatie?</li>
              <li>Hoe hangen de verschillende signalen met elkaar samen?</li>
              <li>Welke acupressuurpunten kan ik kiezen?</li>
              <li>Hoe maak ik daar een routine van die ik ook volhoud?</li>
            </ul>
            <p className="font-bold text-primair reveal">
              De training 5 elementen acupressuur helpt je om die keuzes bewuster te maken.
            </p>
          </div>
        </section>

        {/* Van losse tips naar een aanpak die bij jou past */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">
            Van losse tips naar een aanpak die bij jou past
          </h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Met de training 5 elementen acupressuur leer je signalen van je lichaam herkennen en vanuit de 5
            elementen begrijpen welk element het meeste aandacht vraagt. Je leert de verbanden zien en stelt zelf
            een passende acupressuurroutine samen van maximaal 10–15 minuten per dag.
          </p>
          <p className="text-tekst/80 leading-relaxed reveal">
            Zo besteed je minder tijd aan zoeken en geef je eerder aandacht aan kleine signalen en klachten. Je
            krijgt de kennis, praktische vaardigheden en het vertrouwen om actief aan je gezondheid te werken — met
            gezond ouder worden als doel.
          </p>
        </section>

        {/* De 5 elementen geven je een kader */}
        <section className="bg-wit">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="two-col">
              <div className="col-text">
                <h2 className="text-2xl font-bold text-primair mb-6 reveal">De 5 elementen geven je een kader</h2>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  Hout, Vuur, Aarde, Metaal en Water vormen binnen de traditionele Chinese geneeskunde een manier om
                  naar samenhang te kijken.
                </p>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">
                  In de training ontdek je hoe lichamelijke signalen, emoties, activiteit en rust binnen dit kader
                  met elkaar verbonden zijn. Je leert observeren welke patronen je bij jezelf herkent en welk
                  element op dat moment aandacht vraagt.
                </p>
                <p className="text-tekst/80 leading-relaxed reveal">
                  Daarbij leg ik de theorie helder uit en maak ik de verbanden zichtbaar. Je hoeft geen voorkennis
                  te hebben. Stap voor stap vertaal je wat je leert naar iets wat je zelf kunt toepassen.
                </p>
              </div>
              <div className="col-image">
                <img src="/fotos/website-nei-1.jpg" alt="De 5 elementen: Hout, Vuur, Aarde, Metaal en Water en hoe ze elkaar voeden en in evenwicht houden" />
              </div>
            </div>
          </div>
        </section>

        {/* Dit leer je in de training */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-8 reveal">Dit leer je in de training</h2>
          <ul id="onderdelen-lijst" className="space-y-6">
            {onderdelen.map((o) => (
              <li key={o.titel} className="border-l-2 border-primair/20 pl-5">
                <p className="font-bold text-primair mb-1">{o.titel}</p>
                <p className="text-tekst/80 leading-relaxed">{o.tekst}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Wat kun je na afloop */}
        <section className="bg-wit">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="two-col flip">
              <div className="col-text">
                <h2 className="text-2xl font-bold text-primair mb-6 reveal">Wat kun je na afloop?</h2>
                <p className="text-tekst/80 leading-relaxed mb-4 reveal">Na het doorlopen van de training kun je:</p>
                <ul id="afloop-lijst" className="space-y-2 mb-6 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
                  <li>Signalen van je lichaam bewuster opmerken.</li>
                  <li>Vanuit de 5 elementen onderzoeken welk element het meeste aandacht vraagt.</li>
                  <li>Uitleggen waarom je bepaalde acupressuurpunten kiest.</li>
                  <li>Zelf een passende routine samenstellen.</li>
                  <li>Je routine aanpassen aan wat je op dat moment waarneemt.</li>
                </ul>
                <p className="text-tekst/80 leading-relaxed reveal">
                  Daardoor heb je iets om op terug te vallen wanneer je aandacht wilt geven aan je gezondheid. Je
                  kunt gerichter kiezen en zelf aan de slag.
                </p>
              </div>
              <div className="col-image">
                <img src="/fotos/website-nier1.jpg" alt="Een acupressuurpunt op de voetzool wordt gestimuleerd met een drukpen" />
              </div>
            </div>
          </div>
        </section>

        {/* Leren op jouw tempo */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">
            Leren op jouw tempo, toepassen in jouw dagelijks leven
          </h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            De training bestaat uit verschillende online modules die je in je eigen tijd doorloopt.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Je kunt rustig de theorie bestuderen, oefenen met de punten en terugkijken wanneer je iets wilt
            herhalen. Je hoeft de hele training niet in één keer af te ronden.
          </p>
          <p className="font-bold text-primair reveal">
            Wanneer je jouw routine hebt samengesteld, vraagt de dagelijkse toepassing maximaal 10–15 minuten. Zo
            geef je zelfacupressuur een haalbare plek in je dag.
          </p>
        </section>

        {/* Voor wie */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-6 reveal">Deze training past bij je als…</h2>
            <ul id="voorwie-lijst" className="space-y-2 mb-8 text-tekst/80 leading-relaxed border-l-2 border-primair/20 pl-5">
              <li>Je zelf actief aan je gezondheid wilt werken.</li>
              <li>Je aandacht wilt geven aan de signalen die je lichaam laat zien.</li>
              <li>Je verder wilt kijken dan losse gezondheidstips.</li>
              <li>Je nieuwsgierig bent naar de 5 elementen en acupressuur.</li>
              <li>Je graag begrijpt waarom je een bepaald punt of een bepaalde oefening kiest.</li>
              <li>Je bereid bent dagelijks 10–15 minuten voor jezelf vrij te maken.</li>
            </ul>
            <p className="font-bold text-primair mb-8 reveal">
              Je hoeft geen ervaring met acupressuur of de Chinese geneeskunde te hebben.
            </p>
            <a href={TRAINING_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
              Ja, ik wil weten wat ik zelf kan doen →
            </a>
          </div>
        </section>

        {/* Mijn manier van lesgeven */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">Mijn manier van lesgeven</h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            In mijn werk als acupuncturist vind ik het belangrijk dat je begrijpt wat je zelf kunt doen voor je
            gezondheid.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Daarom maak ik in deze training de verbanden zichtbaar en leg ik de theorie in begrijpelijke taal uit.
            Je leert hoe je de kennis gebruikt om bewuste keuzes te maken voor jouw dagelijkse routine.
          </p>
          <p className="font-bold text-primair reveal">Praktisch, helder en stap voor stap.</p>
        </section>

        {/* Veelgestelde vragen */}
        <section className="bg-wit">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-primair mb-8 reveal">Veelgestelde vragen</h2>
            <ul id="faq-lijst" className="space-y-6">
              {vragen.map((v) => (
                <li key={v.vraag}>
                  <p className="font-bold text-primair mb-1">{v.vraag}</p>
                  <p className="text-tekst/80 leading-relaxed">{v.antwoord}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Afsluiting */}
        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-primair mb-6 reveal">
            Geef je gezondheid een vaste plek in je dag
          </h2>
          <p className="text-tekst/80 leading-relaxed mb-4 reveal">
            Je hoeft niet steeds opnieuw te zoeken naar een volgende tip.
          </p>
          <p className="text-tekst/80 leading-relaxed mb-6 reveal">
            Leer je lichaam bewuster observeren, ontdek de samenhang vanuit de 5 elementen en stel een routine
            samen waarmee je dagelijks aan de slag kunt.
          </p>
          <p className="font-bold text-primair mb-8 reveal">
            Van zoeken naar losse gezondheidstips naar weten wat jij dagelijks voor je lichaam kunt doen.
          </p>
          <div className="bg-wit rounded-2xl p-8 mb-8 text-left reveal">
            <h3 className="text-xl font-bold text-primair mb-4">Stap nu in voor €95,-</h3>
            <p className="text-tekst/80 leading-relaxed mb-4">
              De eerste 2 modules staan voor je klaar, dus je kunt meteen beginnen en ze in je eigen tempo
              doorlopen.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-4">
              De training groeit de komende tijd verder. Bij elke nieuwe module gaat de instapprijs een stapje
              omhoog. Als je nu instapt voor €95,-, krijg je alle volgende modules erbij zonder extra te betalen.
              Je betaalt dus één keer en groeit mee met de volledige training. De eerstvolgende module is de module
              met de acupressuurpunten.
            </p>
            <p className="text-tekst/80 leading-relaxed mb-4">
              Ook zijn er 2 Q&amp;A’s inbegrepen waarin je jouw vragen kunt stellen over de theorie, de
              acupressuurpunten en het samenstellen van je eigen routine. Deze plan ik in zodra de volgende module
              met alle acupressuurpunten klaarstaat. Je ontvangt dan de data.
            </p>
            <p className="text-tekst/80 leading-relaxed">
              Zo kun je nu al de basis leggen en straks verder bouwen aan een acupressuurroutine die bij jou past.
            </p>
          </div>
          <a href={TRAINING_URL} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity reveal">
            Ja, ik stap in voor €95,- →
          </a>
        </section>
      </div>

      <ScrollReveal
        singles={['.reveal']}
        grids={['#vragen-lijst', '#onderdelen-lijst', '#afloop-lijst', '#voorwie-lijst', '#faq-lijst']}
      />
    </>
  );
}
