import {Icons} from '../components/Icons'

export const mergeClassNames = (arr: any) => {
  return [...arr].filter(Boolean).join(' ')
}

export const features = [
  {
    id: 'recently',
    name: 'Recently',
    icon: <Icons name='Clock' width={18} height={18} />,
  },
  {
    id: 'artists',
    name: 'Artists',
    icon: <Icons name='Micro' width={18} height={18} />,
  },
  {
    id: 'albums',
    name: 'Albums',
    icon: <Icons name='Album' width={18} height={18} />,
  },
  {
    id: 'songs',
    name: 'Songs',
    icon: <Icons name='Music' width={18} height={18} />,
  },
]
