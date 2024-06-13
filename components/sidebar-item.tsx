"use client";
import React from 'react'
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';


type Props = {
    label: string;
    iconSrc: string;
    href: string;
};


export const SidebarItem = ({
    label,
    iconSrc,
    href
}:Props) => {

    const pathname = usePathname();
    const active = pathname === href;
  return (
    <Button
    variant={active ?  "sidebarOutline" : "sidebar" }
    >
        {label}
    </Button>
  )
};