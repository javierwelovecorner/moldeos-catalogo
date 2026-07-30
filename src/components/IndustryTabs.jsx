export default function IndustryTabs({ industrias, activeId, onSelect }) {
  return (
    <div className="sticky top-0 z-10 bg-[var(--paper)]/95 backdrop-blur border-b border-[var(--steel)]/20">
      <div className="max-w-6xl mx-auto px-6 flex gap-1 overflow-x-auto no-scrollbar">
        {industrias.map((ind) => {
          const isActive = ind.id === activeId;
          return (
            <button
              key={ind.id}
              onClick={() => onSelect(ind.id)}
              className={`shrink-0 px-4 py-4 font-display uppercase text-sm tracking-wide border-b-2 transition-colors ${
                isActive
                  ? 'border-[var(--red)] text-[var(--navy)]'
                  : 'border-transparent text-[var(--steel)] hover:text-[var(--navy)]'
              }`}
            >
              {ind.nombre.replace('Industria ', '').replace('de la ', '')}
              <span className="font-mono text-xs ml-2 text-[var(--steel)]">
                {String(ind.productos.length).padStart(2, '0')}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
