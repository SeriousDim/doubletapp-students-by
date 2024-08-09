import {StudentCardProps} from './props.ts'
import {Typography} from '../../../../../shared/ui/typography/typography.tsx'
import {ColorBadge} from '../../../../../shared/ui/color-badge'
import {RatingBadge} from './rating-badge.tsx'

export function MiddleHeader(props: {
  name: StudentCardProps['name'],
  color: StudentCardProps['color'],
  rating: StudentCardProps['rating']
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '3px',
      marginRight: '12px',
      flex: 1,
      minWidth: 0
    }}>
      <Typography
        name={'16 / M'}
      >
        {props.name}
      </Typography>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '13px'
      }}>
        <ColorBadge
          color={props.color}
          type={'mini'}
        />
        <RatingBadge rating={props.rating}/>
      </div>
    </div>
  )
}
