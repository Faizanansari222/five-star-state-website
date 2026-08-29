import useReveal from '../../hooks/useReveal';

/**
 * Reusable section header with decorative label, title, and subtitle.
 */
export default function SectionHeader({ label, title, subtitle }) {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal text-center mb-16">
      <span className="inline-flex items-center gap-3 text-gold text-xs font-semibold tracking-[3px] uppercase mb-4">
        <span className="w-7 h-px bg-gold" />
        {label}
        <span className="w-7 h-px bg-gold" />
      </span>
      <h2 className="font-heading text-[40px] font-bold text-navy mb-5 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-gray-500 max-w-[620px] mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
