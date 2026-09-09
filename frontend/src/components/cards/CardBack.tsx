import { ReactNode } from 'react';

export function CardBack({ children }: { children: ReactNode }) {
  return <div className="card-face card-face-back paper-texture vintage-card-border p-4">{children}</div>;
}