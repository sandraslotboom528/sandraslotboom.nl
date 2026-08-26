export default function Footer() {
  return (
    <footer className="bg-primair text-wit/80 text-sm py-10 mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-6">
          <div className="space-y-1">
            <p className="font-bold text-wit mb-2">Salacia</p>
            <p>Omanstraat 58</p>
            <p>2622 GZ Delft</p>
            <p>
              <a href="tel:+31624822814" className="hover:text-wit transition-colors">06-24822814</a>
            </p>
            <p>
              <a href="mailto:salacia.acupunctuur@gmail.com" className="hover:text-wit transition-colors">
                salacia.acupunctuur@gmail.com
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-1 sm:items-end">
            <a href="/contact" className="hover:text-wit transition-colors">Contact</a>
            <a href="/documenten/algemene-voorwaarden.pdf" target="_blank" rel="noopener noreferrer"
              className="hover:text-wit transition-colors">
              Algemene voorwaarden
            </a>
            <a href="/documenten/privacy-statement.pdf" target="_blank" rel="noopener noreferrer"
              className="hover:text-wit transition-colors">
              Privacystatement
            </a>
          </div>
        </div>
        <p className="border-t border-wit/10 pt-4">© {new Date().getFullYear()} Salacia · Alle rechten voorbehouden</p>
      </div>
    </footer>
  );
}
