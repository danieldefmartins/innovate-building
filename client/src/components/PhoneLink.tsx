import type { ReactNode } from "react";

interface PhoneLinkProps {
  tel: string;
  children: ReactNode;
  className?: string;
}

export function PhoneLink({ tel, children, className }: PhoneLinkProps) {
  return (
    <a href={`tel:${tel}`} className={className}>
      {children}
    </a>
  );
}
