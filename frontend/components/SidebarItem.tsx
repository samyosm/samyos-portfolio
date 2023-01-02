// @flow
import * as React from 'react';
import Link from 'next/link';

type Props = {
  label: string;
  icon: React.ReactNode;
  activeLabel: string;
  href: string;
};

export default function SidebarItem({
  label,
  icon,
  href,
  activeLabel,
}: Props) {
  return (
    <Link href={href} className={`sidebar-item ${(activeLabel === label) && 'sidebar-item-active'}`}>
      {icon}
      <p>{label}</p>
    </Link>
  );
}
