interface StatProps {
  label: string;
  value: number | string;
  accent?: 'default' | 'gold' | 'red';
}

export function Stat({ label, value, accent = 'default' }: StatProps) {
  const valueColor =
    accent === 'gold'
      ? 'text-vintage-gold'
      : accent === 'red'
        ? 'text-vintage-red'
        : 'text-pitch';

  return (
    <div className="bg-parchment-dark/70 rounded p-1.5 border border-pitch/20 text-center">
      <span className="text-[9px] block text-pitch-light font-mono font-bold uppercase tracking-wide">
        {label}
      </span>
      <span className={`font-header text-xl leading-none ${valueColor}`}>{value}</span>
    </div>
  );
}