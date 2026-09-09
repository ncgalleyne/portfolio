import { ReactNode } from 'react';

export function CardBack({ children }: { children: ReactNode }) {
  return <div className="card-face card-back">{children}</div>;
}