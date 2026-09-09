import { ReactNode } from 'react';

export function CardFront({ children }: { children: ReactNode }) {
  return <div className="card-face card-front">{children}</div>;
}