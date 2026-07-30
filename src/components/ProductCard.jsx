export default function ProductCard({ product }) {
  const imgSrc = `/products/${product.id}.jpg`;

  return (
    <article className="group bg-white border border-[var(--steel)]/20 rounded-sm overflow-hidden hover:border-[var(--navy)]/40 transition-colors flex flex-col">
      <div className="aspect-[4/3] bg-[#0d0f1a] overflow-hidden">
        <img
          src={imgSrc}
          alt={product.nombre}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-display uppercase text-sm tracking-wide text-[var(--navy)] leading-tight">
          {product.nombre}
        </h3>

        <p className="text-xs text-[var(--steel)]">
          {product.material || 'Material no especificado'}
        </p>

        <div className="mt-auto pt-2 flex flex-wrap gap-1.5">
          {product.pigmento && (
            <span className="spec-tag">PIGM · {product.pigmento}</span>
          )}
          {product.peso && (
            <span className="spec-tag">PESO · {product.peso}</span>
          )}
        </div>
      </div>
    </article>
  );
}
