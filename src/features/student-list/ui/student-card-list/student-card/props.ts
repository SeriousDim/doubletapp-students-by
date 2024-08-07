import {AvatarProps} from '../../../../../shared/ui/avatar'
import {ColorBadgeProps} from '../../../../../shared/ui/color-badge'

export type StudentCardProps = {
  avatar: AvatarProps['src'],
  name: string,
  rating: number,
  birthday: Date,
  speciality: string,
  group: string,
  onDelete?: () => void,
  color: ColorBadgeProps['color']
}
