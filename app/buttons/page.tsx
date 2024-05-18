import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='p-4 space-y-4 flex flex-col max-w-[200px]'>
        <Button>Default</Button>

        <Button variant="primary">Primary</Button>


        <Button>Primary Outline</Button>

    </div>
  )
}

export default page