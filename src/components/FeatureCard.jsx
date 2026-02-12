import React from 'react'

const FeatureCard = ({title,icon}) => {
  return (
    <div className='flex items-center gap-4'>
     <div className='bg-gray-300 w-[50px] text-green-900 text-[24px] grid place-items-center rounded-full'>
        {icon}

     </div>
     <div>
        <h3 className='text-green-500 font-medium text-x1'>{title}</h3>
        <p className='text-gray-500 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rem excepturi officiis nostrum nemo. Reiciendis veritatis voluptates saepe at nostrum nam! Nemo rerum facilis cumque totam consequuntur corporis, laborum officiis.</p>
     </div>
    </div>
  )
}

export default FeatureCard