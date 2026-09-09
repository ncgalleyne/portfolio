interface MetadataProps {
  label: string;
  value: string;
}

export function Metadata({ label, value }: MetadataProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-ink-soft font-mono">{label}:</span>
      <span className="text-xs text-ink font-mono">{value}</span>
    </div>
  );
}