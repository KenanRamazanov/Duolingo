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
  return (
    <Button>
        {label}
    </Button>
  )
};