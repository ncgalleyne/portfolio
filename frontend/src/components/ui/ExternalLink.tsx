import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function ExternalLink({ href, children, className = '' }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      {children}
      <ExternalLinkIcon size={14} />
    </a>
  );
}