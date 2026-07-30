export default function Hero() {
  return (
    <section className="bg-[var(--navy)] text-white pb-16 pt-4">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs text-[var(--red)] tracking-widest uppercase mb-3">
          Catálogo técnico · Diciembre 2019
        </p>
        <h1 className="font-display uppercase text-4xl md:text-6xl leading-[0.95] tracking-tight max-w-3xl">
          Cada pieza, <span className="text-[var(--red)]">a tolerancia.</span>
        </h1>
        <p className="mt-6 max-w-xl text-[var(--steel)] text-lg">
          Moldes y plásticos de precisión para alimentos, cosméticos, farmacéutica
          y construcción. Material, pigmento y peso, especificados en cada pieza.
        </p>
      </div>
    </section>
  );
}
