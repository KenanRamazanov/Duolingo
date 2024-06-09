import React from 'react'
import { Sheet,SheetContent,SheetTrigger } from '@/components/ui/sheet'

import { Sidebar } from './Sidebar'
import { Menu } from 'lucide-react'


export const MobileSidebar = () => {
  return (
   <Sheet>
    <SheetTrigger>
        <Menu className='text-white'/>
    </SheetTrigger>
    <SheetContent>
        <Sidebar/>
    </SheetContent>
   </Sheet>
  )
}

