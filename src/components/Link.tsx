import { ReactNode } from "react";
import NextLink from "next/link";

interface LinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function Link({ href, className, children }: LinkProps) {
  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
}
