// @flow
import * as React from 'react';
import Link from "next/link";

type Props = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  href: string;
};
export const SidebarItem = ({label, icon, href, active = false}: Props) => {
  return (
    <Link href={href} className={`sidebar-item ${active && 'sidebar-item-active'}`}>
      {icon}
      <p>{label}</p>
    </Link>
  );
};