import React from 'react'
import skillData from '../../data/skillData'

const SkillPanel = () => {
  return (
    <div className='flex flex-wrap gap-3 pt-5 text-md text-white w-full'>
        {
            skillData.map((items, index) =>(
      <div 
      key={index}
      className="px-5 py-2 bg-zinc-700 border-[1px] border-zinc-400 rounded-full">
        <span>#{items}</span>
      </div>
            ))
        }
    </div>
  )
}

export default SkillPanel
