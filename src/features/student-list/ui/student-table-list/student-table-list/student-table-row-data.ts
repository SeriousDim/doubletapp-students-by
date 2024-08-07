import {AvatarProps} from '../../../../../shared/ui/avatar'
import {ColorBadgeProps} from '../../../../../shared/ui/color-badge'

export type StudentTableRowData = {
  avatar: AvatarProps['src'],
  name: string,
  speciality: string,
  group: string,
  birthday: Date,
  rating: number,
  color: ColorBadgeProps['color'],
  onDelete?: () => void
}
