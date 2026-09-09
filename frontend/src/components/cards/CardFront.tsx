import { ReactNode } from 'react';

export function CardFront({ children }: { children: ReactNode }) {
  return <div className="card-face paper-texture vintage-card-border p-3.5">{children}</div>;
}