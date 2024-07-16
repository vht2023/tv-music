import {features} from '@/utils'
import React from 'react'
import {twMerge} from 'tailwind-merge'

interface Props {
  actived: {
    id: string
    name: string
  }
  setActived: React.Dispatch<
    React.SetStateAction<{
      id: string
      name: string
    }>
  >
}

const ListFeatures = ({actived, setActived}: Props) => {
  return (
    <div className='mt-4 flex flex-col gap-1 text-base-grey'>
      {features.map((item) => (
        <div
          key={item.id}
          onClick={() => setActived(item)}
          className={twMerge([
            'flex cursor-pointer items-center rounded-xl px-2 py-2 hover:bg-base',
            actived && actived.id === item.id ? 'bg-base font-medium text-white' : 'text-base-grey',
          ])}
        >
          <div className='flex h-8 w-8 items-center'>{item.icon}</div>
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  )
}

export default ListFeatures
