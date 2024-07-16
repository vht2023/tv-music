import {ReactComponent as Album} from '@assets/icons/album.svg'
import {ReactComponent as Clock} from '@assets/icons/clock.svg'
import {ReactComponent as Down} from '@assets/icons/down.svg'
import {ReactComponent as Micro} from '@assets/icons/micro.svg'
import {ReactComponent as Music} from '@assets/icons/music.svg'
import {ReactComponent as Playlists} from '@assets/icons/playlists.svg'
import {ReactComponent as Plus} from '@assets/icons/plus.svg'
import {ReactComponent as Right} from '@assets/icons/right.svg'
import {ReactComponent as Search} from '@assets/icons/search.svg'
import {ReactComponent as MusicLoginLogo} from '@assets/icons/music-login-logo.svg'
import {ReactComponent as GoogleLogo} from '@assets/icons/google-logo.svg'

const AllIcons = {
  Clock,
  Micro,
  Album,
  Music,
  Down,
  Playlists,
  Plus,
  Search,
  Right,
  MusicLoginLogo,
  GoogleLogo,
}

interface Props {
  width: number
  height: number
  name: keyof typeof AllIcons
  id?: string
  className?: string
  onClick?: (event?: any) => void
  style?: any
  alt?: string
}

export const Icons = ({width, height, onClick, name, style, className}: Props) => {
  const IconComponent = AllIcons[name]
  return <IconComponent width={width} height={height} onClick={onClick} style={style} className={className} />
}
