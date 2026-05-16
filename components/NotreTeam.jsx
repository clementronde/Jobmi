import React from 'react'
import Image from 'next/image'

export const NotreTeam = () => {
  return (
    <div className='mx-7'>
      <div className='flex flex-col items-start justify-center'>
        <h2 className="sm:text-3xl text-4xl font-bold mb-4">Notre team</h2>
        <Image src='/media/soulignage-team-prez.svg' alt='' width={150} height={10} className='h-auto' />
      </div>

      <Image src="/media/team-prez-img.svg" alt="L'équipe Jobmi" width={1200} height={600} className='bg-[#FCFCFC] rounded-lg w-full h-auto' />
    </div>
  )
}

