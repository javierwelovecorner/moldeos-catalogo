export default function Header() {
  return (
    <header className="bg-[var(--navy)] text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[var(--red)] rounded-sm flex items-center justify-center font-display font-bold text-lg">
            ME
          </div>
          <div className="font-display uppercase tracking-wide leading-none">
            <div className="text-base">Moldeos</div>
            <div className="text-[10px] text-[var(--steel)] tracking-widest">Especializados</div>
          </div>
        </div>
        <a
          href="https://moldeos.com"
          className="text-sm font-mono text-[var(--steel)] hover:text-white transition-colors"
        >
          ← moldeos.com
        </a>
      </div>
    </header>
  );
}
