import { useState, useMemo } from 'react';
import data from './data/productos.json';
import ProductCard from './components/ProductCard';
import IndustryTabs from './components/IndustryTabs';
import Header from './components/Header';
import Hero from './components/Hero';

const FORM_URL = 'https://moldeos-form.vercel.app';

const INDUSTRY_TO_FORM_VALUE = {
  alimenticia: 'food',
  cosmetica: 'cosmetics',
  farmaceutica: 'pharma',
  construccion: 'construction',
};

function App() {
  const industrias = data.industrias;
  const [activeId, setActiveId] = useState(industrias[0].id);

  const active = useMemo(
    () => industrias.find((i) => i.id === activeId),
    [activeId, industrias]
  );

  const quoteUrl = `${FORM_URL}?industria_interes=${INDUSTRY_TO_FORM_VALUE[active.id] || active.id}`;

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      <IndustryTabs
        industrias={industrias}
        activeId={activeId}
        onSelect={setActiveId}
      />

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8 mt-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-[var(--navy)]">
              {active.nombre}
            </h2>
            {active.nota && (
              <p className="text-sm text-[var(--steel)] mt-2 max-w-xl font-mono">
                {active.nota}
              </p>
            )}
          </div>
          <a
            href={quoteUrl}
            className="shrink-0 inline-flex items-center gap-2 bg-[var(--red)] hover:bg-[var(--red-dark)] text-white font-display uppercase tracking-wide text-sm px-6 py-3 rounded-sm transition-colors"
          >
            Cotiza tu proyecto →
          </a>
        </div>

        <div
          key={active.id}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-in"
        >
          {active.productos.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>

      <footer className="border-t border-[var(--steel)]/20 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--steel)] font-mono">
          <span>© {new Date().getFullYear()} Moldeos Especializados</span>
          <div className="flex gap-6">
            <a href="tel:3312011588" className="hover:text-[var(--navy)]">33 1201 1588</a>
            <a href="mailto:contacto@moldeos.com" className="hover:text-[var(--navy)]">contacto@moldeos.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
