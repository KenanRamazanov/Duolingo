import StickyWrapper from '@/components/sticky-wrapper'
import React from 'react'

const LearnPage = () => {
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
        <StickyWrapper>
          My sticky sidebar
        </StickyWrapper>
    </div>
  )
}

export default LearnPage