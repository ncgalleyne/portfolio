interface StatProps {
  label: string;
  value: number | string;
}

export function Stat({ label, value }: StatProps) {
  return (
    <div className="bg-paper-dark rounded p-3">
      <div className="text-xs text-ink-soft font-mono mb-1">{label}</div>
      <div className="text-2xl font-bold text-forest">{value}</div>
    </div>
  );
}