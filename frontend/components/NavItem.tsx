// @flow
import * as React from 'react';
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  icon: React.ReactNode;
  selected?: boolean;
};

export function NavItem({href, label, icon, selected = false}: Props) {
  return (
    <Link className={`nav-item ${selected && 'selected'}`} href={href}>
      {icon} {label}
    </Link>
  );
}