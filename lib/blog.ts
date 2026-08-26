// ════════════════════════════════════════════════════════════
//  Blogposts — voeg hier nieuwe blogs toe.
//  Vraag Claude Code: "Voeg een blog toe met de titel [...] en
//  de volgende tekst: [...]" en hij zet 'm voor je in dit bestand.
//
//  Elk blok in `inhoud` is óf een subkop ({ kop: '...' })
//  óf een alinea ({ tekst: '...' }).
//  Een alinea kan een link naar een andere blog/pagina bevatten door
//  linkTekst (het stukje tekst dat moet linken) en linkHref (het pad)
//  toe te voegen, bijv. { tekst: '...', linkTekst: 'mijn vorige blog', linkHref: '/blog/xxx' }.
// ════════════════════════════════════════════════════════════

export type BlogBlock = { kop: string } | { tekst: string; linkTekst?: string; linkHref?: string };

export interface BlogPost {
  slug: string;
  titel: string;
  datum: string;        // bijv. '2026-09-01'
  samenvatting: string; // korte introzin, te zien op de blog-overzichtspagina
  foto?: string;        // pad naar de foto in public/fotos/, bijv. '/fotos/blog-mijn-post.jpg'
  inhoud: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'hout-en-vuur',
    titel: 'Van plan naar bloei: de relatie tussen Hout en Vuur',
    datum: '2026-08-26',
    samenvatting: 'Hout voedt Vuur, zoals brandhout een vlam laat groeien — over de overgang van visie naar bloei, en wat er gebeurt als deze relatie uit balans raakt.',
    foto: '/fotos/blog-hout-vuur.jpg',
    inhoud: [
      { tekst: 'In de 5 elementenleer van de Chinese geneeskunde staan de elementen nooit op zichzelf. Ze bewegen in cycli, voeden elkaar, temperen elkaar en vormen samen een dynamisch systeem dat net zo goed van toepassing is op de natuur als op het menselijk lichaam en gedrag.' },
      { tekst: 'De 5 elementen kun je eigenlijk zien als 5 fases die elkaar beïnvloeden, o.a. via de voedende, of Sheng, cyclus. Eén van de relaties binnen dit systeem is die tussen Hout en Vuur, we noemen zo’n voedende relatie ook wel de zogenaamde moeder-kind relatie. Hout voedt Vuur, zoals brandhout een vlam laat groeien. Maar achter dit simpele natuurbeeld schuilt een rijke laag symboliek over groei, ontplooiing en de manier waarop visie overgaat in daadwerkelijke bloei.' },

      { kop: 'De voedende cyclus: voeding tussen de elementen' },
      { tekst: 'De 5 elementen, Hout, Vuur, Aarde, Metaal en Water, kennen twee hoofdrelaties: de scheppende cyclus (sheng) en de controlerende cyclus (ke). In de scheppende cyclus brengt elk element het volgende voort, zoals een moeder haar kind voortbrengt en voedt. Hout voedt Vuur, Vuur voedt Aarde (in de vorm van as), Aarde voedt Metaal (mineralen ontstaan in de aarde), Metaal voedt Water (metalen oppervlakken laten condens vormen) en Water voedt Hout (planten hebben water nodig om te groeien).' },
      { tekst: 'Binnen deze cyclus is de relatie tussen Hout en Vuur bijzonder, omdat ze de overgang markeert van opbouw naar bloei. Terwijl Water-naar-Hout gaat over het ontkiemen van iets nieuws, gaat Hout-naar-Vuur over de voltooiing van die groei: het moment waarop een plant niet langer alleen naar boven groeit, maar bloeit, vrucht draagt, zich toont aan de wereld.' },

      { kop: 'Hout als moeder: visie, richting en opbouw' },
      { tekst: 'In de 5 elemententheorie wordt Hout geassocieerd met de Lever en de Galblaas, met het seizoen lente, met groei en met de emotie woede, maar ook, misschien nog fundamenteler, met visie en planning. De Lever wordt in de klassieke teksten wel de "generaal" genoemd: degene die strategie bepaalt, die richting geeft, die de weg baant. Houtenergie is de energie van een zaadje dat zich een weg naar boven baant door de aarde: vastberaden, gericht, soms met kracht die weerstand moet overwinnen.' },
      { tekst: 'Mensen met een sterke Houtkwaliteit hebben vaak een duidelijke visie, zijn doelgericht en hebben de wilskracht om plannen daadwerkelijk uit te voeren. Deze energie is essentieel, zonder Hout geen richting, geen ambitie, geen beweging. Maar Hout alleen is niet genoeg. Een plant die alleen maar groeit zonder ooit te bloeien, vervult haar potentieel niet. Dat is waar Vuur in beeld komt.' },

      { kop: 'Vuur als kind: de voltooiing van groei' },
      { tekst: 'Als Hout de moeder is die richting en opbouw biedt, is Vuur het kind dat deze energie tot volle wasdom brengt. Waar Hout gaat over de weg naar boven, gaat Vuur over het punt waarop iets zich volledig ontvouwt, de bloei zelf. In het lichaam is dit de relatie tussen Lever en Hart: de Lever zorgt voor een soepele doorstroming van Qi en Bloed door het hele lichaam, en wanneer deze doorstroming ongehinderd is, kan het Hart zijn functie, o.a. Shen huisvesten, vreugde ervaren, verbinding maken, ten volle vervullen.' },
      { tekst: 'Dit verklaart ook waarom, klinisch gezien, een verstoorde Leverfunctie zo vaak leidt tot Hartsymptomen (let op: dit gaat over de Chinese Organen, er hoeft niks mis te zijn met je fysieke lever of hart). Wanneer de Lever-Qi stagneert, bijvoorbeeld door langdurige stress, onderdrukte woede of frustratie, ontvangt het Hart onvoldoende "brandstof" om goed te functioneren. Dit kan zich uiten als een gevoel van vastzitten, gebrek aan vreugde, of juist als een opgekropte energie die plotseling explosief naar buiten komt, vergelijkbaar met een vuur dat te lang is onderdrukt en dan des te heftiger oplaait.' },

      { kop: 'Wanneer de relatie uit balans raakt' },
      { tekst: 'De moeder-kind relatie in de 5 elemententheorie kent twee klassieke disbalansen: wanneer de moeder het kind onvoldoende voedt, en wanneer het kind de moeder uitput.' },
      { tekst: 'Onvoldoende voeding (Houtzwakte die Vuur treft) ontstaat wanneer de Leverenergie te zwak of te gestagneerd is om het Hart goed te voeden. Het resultaat is vaak een gevoel van doffe stemming, weinig levenslust, besluiteloosheid die overgaat in lusteloosheid. Er is als het ware onvoldoende "brandhout" om het innerlijke vuur brandend te houden. Mensen in dit patroon voelen zich vaak vastgelopen, ze hebben moeite om ergens enthousiasme voor te vinden, ook al willen ze dat wel graag.' },
      { tekst: 'Overvoeding of te snelle transformatie (wanneer Hout te fel oplaait in Vuur) ontstaat wanneer opgekropte Lever-Qi plotseling omslaat in Lever-Vuur, een klassiek patroon in de Chinese geneeskunde waarbij onderdrukte frustratie escaleert tot prikkelbaarheid, hoofdpijn, rode ogen en een kort lontje. Hier zien we hoe de "moeder" haar "kind" als het ware overweldigt: in plaats van gestage, gecontroleerde voeding ontstaat een plotselinge, ongecontroleerde vlam.' },
      { tekst: 'Deze twee patronen weerspiegelen een universeel menselijk thema: het verschil tussen visie die nooit tot bloei komt (vastgelopen ambitie, onderdrukte groei) en visie die te ongecontroleerd tot uiting komt (impulsiviteit, uitbarstingen die meer verwoesten dan opbouwen).' },

      { kop: 'De psychologische laag: van plan naar viering' },
      { tekst: 'Er zit een diepere laag in deze relatie die verder gaat dan pure fysiologie. Houtenergie, planning, visie, strategie, is vooral toekomstgericht. Het kijkt vooruit, stelt doelen, ziet mogelijkheden. Vuurenergie daarentegen is radicaal aanwezig: het gaat over het moment zelf, over vreugde die niet wacht op een toekomstig resultaat maar er nu is.' },
      { tekst: 'Veel mensen herkennen in zichzelf een neiging naar het een of het ander. Er zijn mensen die uitstekend zijn in plannen maken, doelen stellen en structureren (sterke Houtkwaliteit), maar die moeite hebben om werkelijk te vieren wanneer een doel bereikt is, ze zijn alweer bezig met het volgende plan voordat de vreugde van het huidige moment ten volle ervaren is. Andersom zijn er mensen die goed zijn in het vieren van het moment, in sociale verbinding en spontane vreugde (sterke Vuurkwaliteit), maar die moeite hebben om die energie te richten in een duurzaam plan of doel.' },
      { tekst: 'De Hout-Vuur relatie in de 5 elemententheorie suggereert dat beide kwaliteiten elkaar nodig hebben. Visie zonder viering wordt een eindeloze reeks doelen die nooit echt bevrediging geven. Viering zonder visie wordt vluchtige opwinding zonder richting of duurzaamheid. Pas wanneer Hout goed doorstroomt naar Vuur, wanneer plannen daadwerkelijk mogen uitmonden in bloei, erkenning en vreugde, ontstaat een gevoel van volheid.' },

      { kop: 'Praktische betekenis: hoe herken je dit patroon bij jezelf' },
      { tekst: 'In de praktijk zien we deze dynamiek vaak terug bij cliënten die worstelen met stress-gerelateerde klachten. Iemand die voortdurend plant, organiseert en vooruitdenkt, maar zelden momenten van rust en viering toelaat, ontwikkelt vaak een patroon van Lever-Qi stagnatie die op termijn het Hart beïnvloedt: slaapproblemen, hartkloppingen bij stress, een gevoel van "nooit aankomen". Acupunctuurpunten die zowel de Lever als het Hart ondersteunen worden in de klinische praktijk vaak samen ingezet om deze doorstroming van moeder naar kind te herstellen.' },
      { tekst: 'Op leefstijlniveau betekent dit dat het waardevol kan zijn om bewust ruimte te maken voor viering en verbinding, ook, juist, wanneer je van nature meer een planner bent dan een vierder. Het afronden van een project verdient een moment van erkenning voordat je doorschiet naar het volgende doel. Dit is geen luxe, maar volgens de 5 elemententheorie een noodzakelijke stap in een gezonde energiecyclus.' },

      { kop: 'Tot slot' },
      { tekst: 'De relatie tussen Hout en Vuur laat zien dat groei en bloei geen twee gescheiden fasen zijn, maar een doorlopende cyclus waarin de een de ander voedt. Visie zonder uiting blijft onvervuld; vreugde zonder richting blijft vluchtig. In het lichaam vertaalt zich dit naar de samenwerking tussen Lever en Hart, tussen de "generaal" die de weg wijst en de "keizer" die de vervulling ervaart. Wie deze cyclus begrijpt, leert niet alleen iets over de Chinese geneeskunde, maar ook over de eigen balans tussen plannen en beleven — tussen het zaadje planten en het bloeien vieren.' },
    ],
  },
  {
    slug: 'hart-en-milt',
    titel: 'De keizer en de minister: hoe Hart en Milt elkaar voeden',
    datum: '2026-08-27',
    samenvatting: 'Na Hout en Vuur volgt de volgende stap in de cyclus: Vuur dat Aarde voedt, zoals as de bodem verrijkt — over hoe uitbundigheid landt in stabiliteit en zorg.',
    foto: '/fotos/blog-vuur-aarde.jpg',
    inhoud: [
      {
        tekst: 'In mijn vorige blog heb je kunnen lezen over de relatie tussen Hout en Vuur. Na Hout dat Vuur voedt, is de volgende stap in de cyclus die van Vuur naar Aarde: het vuur dat verbrandt en as achterlaat, en die as die de aarde verrijkt. Wat op het eerste gezicht een eenvoudig natuurbeeld lijkt, draagt in de Chinese geneeskunde een diepe laag betekenis over wat er gebeurt ná de bloei, over hoe uitbundigheid overgaat in stabiliteit, en hoe vreugde uiteindelijk landt in voeding en zorg.',
        linkTekst: 'mijn vorige blog',
        linkHref: '/blog/hout-en-vuur',
      },

      { kop: 'De voedende cyclus: van as tot aarde' },
      { tekst: 'In de voedende cyclus brengt elk element het volgende voort zoals een moeder haar kind voedt. Vuur brengt Aarde voort: wanneer een vuur is uitgebrand, blijft as achter, en as verrijkt de bodem. Dit is meer dan een toevallig natuurkundig gegeven, het markeert een overgang in de cyclus van expansie naar consolidatie. Waar Hout en Vuur samen de opgaande, naar buiten gerichte beweging van groei en bloei vormen, staat Aarde voor het tegenovergestelde: verzameling, verankering, het "thuiskomen" na de uitbundigheid.' },
      { tekst: 'Deze overgang is cruciaal. Zonder Aarde zou Vuur eindeloos blijven branden zonder ooit iets op te leveren, energie die verdampt in plaats van neerslaat tot iets bruikbaars. De relatie tussen Vuur en Aarde laat zien dat pure vreugde en expressie op zichzelf niet genoeg zijn; ze hebben een landingsplaats nodig om betekenisvol te worden.' },

      { kop: 'Vuur als moeder: warmte die voedt' },
      { tekst: 'In de Organentheorie wordt Aarde geassocieerd met de Milt en de Maag, met de Organen die verantwoordelijk zijn voor spijsvertering, transformatie en het omzetten van voedsel in bruikbare Qi en Bloed. De Milt wordt wel de "minister van transport en transformatie" genoemd: ze zorgt dat wat binnenkomt, wordt omgezet in iets voedends voor het hele lichaam.' },
      { tekst: 'Vuur voedt deze functie letterlijk en figuurlijk. Fysiologisch is er in de Chinese geneeskunde een nauw verband tussen Hart-Yang (warmte) en Milt-functie: net zoals voedsel in een pan warmte nodig heeft om gekookt en verteerd te worden, heeft de Milt de warmte van het Hart-Vuur nodig om voedsel goed te kunnen transformeren. Dit verklaart een klassiek klinisch beeld: mensen met een zwak of koud spijsverteringsstelsel, een opgeblazen gevoel, vermoeidheid na het eten, een gevoel van zwaarte, hebben vaak baat bij het versterken van juist deze Vuur-Aarde relatie, bijvoorbeeld met warme, gekookte voeding in plaats van rauwkost.' },
      { tekst: 'Maar de symboliek reikt verder dan spijsvertering alleen. Net zoals de Milt voedsel omzet in bruikbare energie, "verteert" Aarde ook de ervaringen en emoties die uit Vuur voortkomen. Vreugde die geen vervolg krijgt, verdampt. Vreugde die wordt "verteerd", gereflecteerd, gedeeld, geïntegreerd, wordt tot iets voedends: herinnering, verbondenheid, dankbaarheid.' },

      { kop: 'Aarde als kind: het landingspunt van bloei' },
      { tekst: 'Als Vuur de fase van bloei en expressie is, is Aarde de fase van integratie en zorg. Waar Vuur naar buiten straalt, keert Aarde naar binnen: het is de energie van het midden, van stabiliteit, van het besef "ik ben genoeg, hier, nu". In de seizoenscyclus wordt Aarde traditioneel geassocieerd met de overgangen tussen de seizoenen, met name de late zomer, het moment vlak na het hoogtepunt van de zomerse Vuurenergie, wanneer de natuur begint aan het proces van rijping en oogst.' },
      { tekst: 'Dit late-zomer-moment is symbolisch veelzeggend. Het is niet toevallig dat Aarde volgt op het hoogtepunt van Vuur: na de climax van bloei en expansie is er een natuurlijke behoefte aan vertraging, aan het "binnenhalen van de oogst", het omzetten van wat gegroeid en gebloeid is in iets dat voedt en duurt. Mensen met een sterke Aarde-kwaliteit worden vaak beschreven als zorgzaam, betrouwbaar en gericht op het welzijn van anderen. Ze zijn de mensen die na het feest opruimen, die zorgen dat iedereen genoeg te eten heeft, die verbinding onderhouden lang nadat de opwinding is weggeëbd.' },

      { kop: 'Wanneer de relatie uit balans raakt' },
      { tekst: 'Ook deze moeder-kind relatie kent klassieke disbalansen: wanneer Vuur onvoldoende voedt, en wanneer Vuur de Aarde overweldigt.' },
      { tekst: 'Onvoldoende voeding (zwak Vuur dat Aarde niet ondersteunt) ontstaat wanneer er te weinig Hart-Yang of algehele warmte is om de Milt te ondersteunen. Het resultaat is vaak een koud, traag spijsverteringsstelsel: weinig eetlust, een gevoel van zwaarte, vermoeidheid na maaltijden, een bleek gelaat. Psychologisch kan dit zich vertalen naar een gebrek aan levendigheid in het dagelijks leven, weinig plezier in eten, in koken, in de dagelijkse rituelen van zorg voor zichzelf en anderen.' },
      { tekst: 'Overweldiging (te veel Vuur dat Aarde uitput) ontstaat wanneer overmatige hitte, vaak door stress, te veel prikkels, of een ongezonde levensstijl, de Miltfunctie juist verstoort in de andere richting: Hittesymptomen zoals een brandend gevoel in de maag, overmatige eetlust gevolgd door schuldgevoel, of een rusteloze geest die geen rust vindt in eenvoudige, aardse bezigheden. Hier zien we een patroon dat veel mensen herkennen uit het moderne leven: een overprikkeld zenuwstelsel dat de simpele, voedende activiteiten van het dagelijks leven, koken, rustig eten, rusten, niet meer als bevredigend ervaart, omdat het systeem verslaafd is geraakt aan constante stimulatie.' },
      { tekst: 'Beide patronen laten zien dat de balans tussen Vuur en Aarde essentieel is voor welzijn: te weinig vuur laat het leven kil en smakeloos aanvoelen, te veel vuur brandt de aarde uit voordat er iets kan groeien.' },

      { kop: 'De psychologische laag: van vieren naar verzorgen' },
      { tekst: 'Er schuilt een diepere laag in deze relatie die verder reikt dan fysiologie. Vuurenergie is gericht op het moment, op expressie, op verbinding die zichtbaar en voelbaar is. Aarde-energie is gericht op continuïteit, op de vraag: wat blijft er over als het feest voorbij is? Wie zorgt er voor de dagen ná de viering?' },
      { tekst: 'Veel mensen herkennen een neiging naar een van beide polen. Er zijn mensen die schitteren in het moment, sociaal, warm, de ziel van het feest, maar die moeite hebben met de rustige, herhalende zorgtaken die een leven dragen: koken, structuur bieden, er dag in dag uit voor anderen zijn zonder applaus. Andersom zijn er mensen die uitstekend zijn in zorgen en voeden, maar die zichzelf voorbijlopen in het proces, die zo gericht zijn op het welzijn van anderen dat er weinig ruimte overblijft voor hun eigen vreugde en expressie.' },
      { tekst: 'De Vuur-Aarde relatie suggereert dat beide kwaliteiten elkaar nodig hebben. Vreugde zonder zorg wordt vluchtig en uiteindelijk uitputtend, een leven van pieken zonder fundament. Zorg zonder vreugde wordt plichtmatig en leeg, voeding die zelf niet gevoed wordt. Pas wanneer Vuur goed doorstroomt naar Aarde, wanneer bloei mag landen in iets dat voedt en blijft, ontstaat een gevoel van volheid dat niet afhankelijk is van constante stimulatie.' },

      { kop: 'Praktische betekenis: hoe herken je dit patroon bij jezelf' },
      { tekst: 'In de praktijk zien we deze dynamiek regelmatig terug bij cliënten met spijsverteringsklachten die samengaan met een onrustig gemoed, een combinatie die in de Chinese geneeskunde vaak wijst op een verstoorde Hart-Milt relatie. Punten die zowel het Hart als de Milt ondersteunen worden in de praktijk vaak samen ingezet om deze doorstroming van moeder naar kind te herstellen: het kalmeren van overmatige Hitte terwijl tegelijk de voedende functie van de Milt wordt ondersteund.' },
      { tekst: 'Op leefstijlniveau betekent dit dat het waardevol kan zijn om bewust momenten van vieren te laten overgaan in momenten van verzorgen, een feestelijke avond af te sluiten met rust in plaats van door te jagen naar de volgende prikkel, of om na een periode van uitbundigheid en sociale activiteit bewust tijd vrij te maken voor eenvoudige, voedende rituelen: samen koken, rustig eten, vroeg naar bed.' },

      { kop: 'Tot slot' },
      { tekst: 'De relatie tussen Vuur en Aarde laat zien dat bloei pas werkelijk vrucht draagt wanneer ze landt in iets dat voedt en duurt. Vreugde zonder verankering verdampt; zorg zonder vreugde verstart. In het lichaam vertaalt zich dit naar de samenwerking tussen Hart en Milt, tussen de warmte die verteert en de aarde die voedt. Wie deze cyclus begrijpt, leert niet alleen iets over de Chinese geneeskunde, maar ook over de eigen balans tussen vieren en verzorgen, tussen de vlam en de oogst die zij mogelijk maakt.' },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
